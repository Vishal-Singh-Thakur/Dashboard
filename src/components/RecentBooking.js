import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBookingStatus } from '../lib/utils'


const recentBookingData = [
    {
        driver_id: '0111',
        driver_name: 'Ram Kumar',
        booking_no: '04325',
        customer_name: 'Aman',
        booking_date: '2024-07-12T03:24:00',
        trip: 'Delhi To Manali',
        booking_amount: '4000',
        current_booking_status: 'CONFIRMED'
    },
    {
        driver_id: '0112',
        debuggerriver_name: 'Singh',
        booking_no: '04326',
        customer_name: 'Aditya',
        booking_date: '2024-05-17T04:24:00',
        trip: 'Delhi To Nanitaal',
        booking_amount: '3500',
        current_booking_status: 'PENDING'
    },
    {
        driver_id: '0113',
        driver_name: 'Jone',
        booking_no: '04327',
        customer_name: 'Ankit',
        booking_date: '2024-08-10T03:45:00',
        trip: 'Delhi To Lucknow',
        booking_amount: '1000',
        current_booking_status: 'WAITING'
    },
    {
        driver_id: '0114',
        driver_name: 'Ram',
        booking_no: '04328',
        customer_name: 'Sameer',
        booking_date: '2024-04-12T06:00:00',
        trip: 'Delhi To Shimla',
        booking_amount: '2500',
        current_booking_status: 'PENDING'
    },
    {
        driver_id: '0115',
        driver_name: 'Shyam',
        booking_no: '04329',
        customer_name: 'Sourav',
        booking_date: '2024-07-12T05:30:00',
        trip: 'Delhi To Rishikesh',
        booking_amount: '3000',
        current_booking_status: 'CONFIRMED'
    }
]

function RecentBooking() {
    const [data, setData]=useState([])
    useEffect(() => {
        fetch('http://192.168.1.7:8089/dash/find').then((result)=>{
            result.json().then((resp)=>{
                // console.log("result",resp)
                setData(resp)
            })
        }) 
    },[])
    console.log(data)
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-medium'>Recent Booking</strong>
            <div className='mt-3'>
                <table className='w-full text-gray-700'>
                    <thead>
                        <tr>
                            <td>driver_id</td>
                            <td>driver_name</td>
                            <td>booking_no</td>
                            <td>customer_name</td>
                            <td>booking_date</td>
                            <td>trip</td>
                            <td>booking_amount</td>
                            <td>current_booking_status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((booking) => (
                            <tr key={booking?.driver_id}>
                                <td>
                                    <Link to={`/booking/${booking.driver_id}`}>#{booking.driver_id}</Link>
                                </td>
                                <td>{booking?.driver_name}</td>
                                <td>
                                    <Link to={`/booking/${booking.booking_no}`}>{booking.booking_no}</Link>
                                </td>
                                <td>
                                    <Link to={`/booking${booking.customer_name}`}>{booking.customer_name}</Link>
                                </td>
                                <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                                <td>{booking.trip}</td>
                                <td>{booking.booking_amount}</td>
                                <td>{getBookingStatus(booking.current_booking_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentBooking