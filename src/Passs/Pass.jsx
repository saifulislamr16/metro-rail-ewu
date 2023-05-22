import React, { useContext, useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProviders";

const Pass = () => {
    const dateApi = 'https://worldtimeapi.org/api/timezone/Asia/Dhaka';
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataParam = searchParams.get('data');
    const data = JSON.parse(decodeURIComponent(dataParam));
    console.log(data)
    const [dateM, setDateM] = useState("");
    const getDate = (dateString) => {
        const date = new Date(dateString);
        let monthName = date.toLocaleString('default', { month: 'long' });
        const print = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
        return print;
    }
    const [date, setDate] = useState(0);
    useEffect(() => {
        fetch(dateApi)
            .then(res => res.json())
            .then(data => {
                const dateTime = data.datetime.split('T');
                setDateM(getDate(dateTime[0]));
            })});
    useEffect(() =>{
        const date = dateM.split(', ');
        const d = parseInt(date[1]) + 10;
        setDate(d);
    }, [dateM])
    return (
        <div className="w-8/12 mx-auto my-5">

            <div className="w-full bg-gray-100  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className=' border-b-2 border-red-600 rounded-t-lg'>
                    <div className='flex justify-between items-center my-3 py-2 md:px-5 px-3'>
                        <div className="flex flex-row items-center">
                            <img src="/public/dmtcl-logo.png" className="md:h-8 h-6 md:w-12 w-8"></img>
                            <a className="md:text-2xl text-md ml-2 normal-case">Dhaka Metro</a>
                        </div>
                        <div className='border-2 border-green-800 rounded-lg py-1 md:px-4 px-1'>
                            <h1 className='text-green-700 md:text-xl text-sm uppercase'> {data ? "regular" : "MRT"}</h1>
                        </div>
                    </div>
                </div>

                <div className='px-8 py-8 md:grid grid-cols-6 gap-4 bg-yellow-100'>


                    <div className='col-span-4'>
                        <div className='mb-8'>
                            {
                                data ? '': <h1 className='md:text-3xl text-xl uppercase font-bold mb-2'>Saiful Islam Rumon</h1>
                            }
                            <h3 className='md:text-xl text-md font-semibold uppercase'>Phone: {user?.phoneNumber}</h3>
                            {
                                data ? '': <h3 className='md:text-xl text-md font-semibold uppercase'>NID: 1013463099</h3>
                            }
                            
                        </div>
                        <h2 className='md:text-3xl text-xl font-semibold uppdercase mb-4'>{data ? "Ticket info" : "MRT PASS INFO"}</h2>
                        <div className='md:flex justify-between'>
                            <div>
                                <div className='mb-4'>
                                    <h1 className='md:text-2xl text-lg uppercase text-semibold border-b-2 border-gray-500 mb-2'>MRT ID</h1>
                                    <h1 className='md:text-xl text-md'>MRT-{user?.phoneNumber}</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-2xl text-lg uppercase text-semibold border-b-2 border-gray-500 mb-2'>Balance</h1>
                                    <h1 className='md:text-xl text-md'>{data ? data.fair : "300 BDT"}</h1>
                                </div>
                            </div>
                            <div>
                                <div className='mb-4 mt-3'>
                                    <h1 className='md:text-2xl text-lg uppercase text-semibold border-b-2 border-gray-500 mb-2'>{data ? "From" : "Issued date"}</h1>
                                    <h1 className='md:text-xl text-md'>{data ? data.from : dateM}</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-2xl text-lg uppercase text-semibold border-b-2 border-gray-500 mb-2'>{data ? "To" : "Expiry date"}</h1>
                                    <h1 className='md:text-xl text-md'>{data ? data.to : dateM}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 pr-4 md:flex flex-col items-center justify-between mt-3'>
                            <QRCode value={user?.phoneNumber}></QRCode>
                        <p className='md:ml-10'><span className='md:text-lg text-md font-semibold mt-1 '>Issued By</span> <br /> <span className='md:text-lg text-md'>Dhaka Metro Authority</span></p>
                    </div>
                </div>

            </div>

        </div>
    );
};


export default Pass;