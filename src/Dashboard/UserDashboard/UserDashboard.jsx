import React from 'react';
import Navbar from '../../Navbar/Navbar';

const UserDashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen">
                <header className="bg-blue-500 text-white pt-4">
                    <h1 className="text-2xl font-bold text-center pb-3">User Dashboard</h1>
                </header>
                <div className="container mx-auto p-4">
                    <div className="flex items-center mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="User Avatar" className="w-20 h-20 rounded-full" />
                        <div className="ml-2">
                            <h2 className="text-lg font-bold">John Doe</h2>
                            <p className="text-gray-600">Phone: 123-456-7890</p>
                            <p className="text-gray-600">Email: 123-456-7890</p>
                            <p className="text-gray-600">Address: </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Add your dashboard cards or widgets here */}
                        <div className="bg-gradient-to-r from-orange-500 to-red-300 rounded p-4 shadow">
                            <h2 className="text-lg font-bold ">Total Ticket</h2>
                            <p className='text-5xl'>4</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded p-4 shadow">
                            <h2 className="text-lg text-bold ">Total Spend</h2>
                            <p className='text-5xl'>$1400</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded p-4 shadow">
                            <h2 className="text-lg text-white">MRT PASS</h2>
                            <p className='text-5xl text-white'>29 DAYS</p>
                        </div>
                    </div>
                </div>
                <table className="container mx-auto p-4 bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-blue-500 text-white text-left text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 bg-blue-500 text-white text-left text-sm font-semibold">Email</th>
                            <th className="px-6 py-3 bg-blue-500 text-white text-left text-sm font-semibold">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap">johndoe@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                            <td className="px-6 py-4 whitespace-nowrap">janesmith@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap">User</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDashboard;