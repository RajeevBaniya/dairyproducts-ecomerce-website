import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/users`);
      return res.json();
    },
  });
  console.log(users);

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="bg-white">
        <div className="flex items-center justify-between m-4">
          <h5>All Users</h5>
          <h5>Total Users: {users.length}</h5>
        </div>

        {/* table */}
        <div className="bg-white text-black ">
          <div className="overflow-x-auto">
            <table className="table md:w-[1100px]">
              {/* head */}
              <thead className="bg-green text-white">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role == "admin" ? (
                        "Admin"
                      ) : (
                        <button className="btn btn-xs btn-circle bg-indigo-500 text-white hover:bg-indigo-700 ">
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td>
                      <button className=" text-rose-500  hover:text-rose-700  px-2 py-1 ">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
