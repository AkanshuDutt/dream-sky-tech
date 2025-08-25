"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/user"); 
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

    const handleEdit = (id) => {
      console.log(id);
      router.push(`/administrator/edit/${id}`); 
    };

    const handleDelete = async (id) => {
      const res = await fetch(`/api/user/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      }
      router.push("/administrator");
    };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users Table</h1>
     <table className="min-w-full border border-gray-500 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Phone</th>
            <th className="border px-4 py-2 text-left">Subject</th>
            <th className="border px-4 py-2 text-left">Message</th>
            <th className="border px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">{user.subject}</td>
                <td className="border px-4 py-2">{user.message}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button
                onClick={() => handleEdit(user.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center py-4 text-gray-500 italic"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
