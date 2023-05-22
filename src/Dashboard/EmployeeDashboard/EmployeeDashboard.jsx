import React from 'react';
import Navbar from '../../Navbar/Navbar';

const EmployeeDashboard = () => {
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen">
            <header className="bg-orange-400 text-white pt-4">
                <h1 className="text-2xl font-bold text-center text-black pb-3">Employee DashBoard</h1>
            </header>
            <div>
            <div className="container mx-auto p-4 flex justify-between">
                <div className="flex items-center mb-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="User Avatar" className="w-20 h-20 rounded-full" />
                    <div className="ml-2">
                        <h2 className="text-lg font-bold">John Doe</h2>
                        <p className="text-gray-600">ID: 123-456-7890</p>
                        <p className="text-gray-600">Position: Ticekt colllector </p>
                    </div>
                    
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded p-4 shadow">
                        <h2 className="text-lg text-white">Total Ticekt</h2>
                        <p className='text-5xl text-white'>130</p>
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

export default EmployeeDashboard;