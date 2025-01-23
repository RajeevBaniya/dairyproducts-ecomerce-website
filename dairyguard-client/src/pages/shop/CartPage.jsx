import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]); // Corrected state initialization

  // Calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle increase in quantity
  const handleIncrease = (item) => {
    fetch(`http://localhost:5001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem._id === item._id) { // Corrected comparison
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        setCartItems(updatedCart);
        refetch();
      });
  };

  // Handle decrease in quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`http://localhost:5001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem._id === item._id) { // Corrected comparison
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          setCartItems(updatedCart);
          refetch();
        });
    } else {
      alert("Item quantity can't be zero.");
    }
  };

  // Calculate total price
  const calculateTotalPrice = () =>
    cart.reduce((total, item) => {
      return total + calculatePrice(item);
    }, 0);

  const orderTotal = calculateTotalPrice;

  // Handle delete
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Cart item deleted successfully!") { // Corrected condition
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="section-container">
      {/* banner */}
      <div>
        <div className="py-36 flex flex-col items-center justify-center gap-9">
          {/* texts */}
          <div className="px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items added to the <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* table data for cart */}
      <div>
        <div className="overflow-x-auto">
          <table
            className="table"
            style={{ backgroundColor: "white", color: "black" }}
          >
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Products</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-gray-500">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-14">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-500 font-medium">{item.name}</td>
                  <td className="text-gray-500">
                    <button
                      className="btn btn-xs bg-gray-100 hover:bg-gray-200 border-0 text-black"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                      className="w-10 mx-2 text-center overflow-hidden appearance-none bg-white"
                    />
                    <button
                      className="btn btn-xs bg-gray-100 border-0 text-black hover:bg-gray-200"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-gray-500">
                    Rs {calculatePrice(item).toFixed(2)}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs text-red"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium text-gray-500">Customer Details</h3>
          {user ? (
            <>
              <p className="text-gray-400">Name: {user.displayName}</p>
              <p className="text-gray-400">Email: {user.email}</p>
              <p className="text-gray-400">User_id: {user.uid}</p>
            </>
          ) : (
            <p className="text-gray-400">Please log in to see your details.</p>
          )}
        </div>
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium text-gray-500">Shopping Details</h3>
          <p className="text-gray-400">Total Items: {cart.length}</p>
          <p className="text-gray-400">
            Total Price: Rs {orderTotal().toFixed(2)}
          </p>
          <button className="btn bg-green hover:bg-green2 text-white">
            Proceed Checkout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
