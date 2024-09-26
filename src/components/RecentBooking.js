import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBookingStatus } from '../lib/utils'

// Sample recent booking data
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
        driver_name: 'Singh',
        booking_no: '04326',
        customer_name: 'Aditya',
        booking_date: '2024-05-17T04:24:00',
        trip: 'Delhi To Nainital',
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

// RecentBooking Component
function RecentBooking() {
    const [searchTerm, setSearchTerm] = useState('')

    // Filtering data based on the search term
    const filteredData = recentBookingData.filter((booking) => {
        const term = searchTerm.toLowerCase()
        return (
            booking.driver_name.toLowerCase().includes(term) ||
            booking.customer_name.toLowerCase().includes(term) ||
            booking.booking_no.includes(term) ||
            booking.trip.toLowerCase().includes(term) ||
            new Date(booking.booking_date).toLocaleDateString().includes(term) ||
            booking.booking_amount.includes(term) ||
            booking.current_booking_status.toLowerCase().includes(term)
        )
    })

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        // Placeholder for fetching data if needed
        // fetch('http://192.168.1.7:8089/dash/find')
        //     .then((result) => result.json())
        //     .then((resp) => setData(resp))
    }, [])

    return (
        <div className="w-full laptopL:w-[730px] mobileM:w-[325px] mobile:w-[290px] mobile:-ml-4 mobileM:-ml-2 mobileL:ml-1 mobileL:w-[355px] border border-muted bg-gray-50 p-5 lg:p-7 rounded-lg flex flex-col relative">
        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-2">
            <h3 className="text-base text-cyan-900 font-semibold sm:text-lg">Recent Booking</h3>
            <div className="w-full sm:w-auto">
                <label className="block">
                    <span className="flex items-center w-full transition duration-200 px-3.5 py-2 text-sm h-10 rounded-md border border-muted bg-transparent focus:ring-1 ring-muted focus:ring-primary">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="h-4 w-4"
                        >
                            <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                        </svg>
                        <input
                            type="search"
                            placeholder="Search order..."
                            className="w-full bg-transparent p-0 focus:outline-none placeholder-opacity-60"
                            spellCheck="false"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </span>
                </label>
            </div>
        </div>

        <div className="table-wrapper flex-grow -mx-5 lg:-mx-7 mt-4 overflow-x-auto">
            <table className="w-full min-w-[1300px] table-auto">
                <colgroup>
                    <col style={{ width: '90px' }} />
                    <col style={{ width: '300px' }} />
                    <col style={{ width: '150px' }} />
                    <col style={{ width: '150px' }} />
                    <col style={{ width: '200px' }} />
                    <col style={{ width: '200px' }} />
                    <col style={{ width: '140px' }} />
                    <col style={{ width: '130px' }} />
                </colgroup>
                <thead className="text-left bg-gray-100 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    <tr>
                        <th className="px-3 py-3">Driver_Id</th>
                        <th className="px-3 py-3">Driver_Name</th>
                        <th className="px-3 py-3">Booking_No</th>
                        <th className="px-3 py-3">Customer_Name</th>
                        <th className="px-3 py-3">Booking_Date</th>
                        <th className="px-3 py-3">Trip</th>
                        <th className="px-3 py-3">Booking_Amount</th>
                        <th className="px-3 py-3">Current_Booking_Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((booking) => (
                        <tr key={booking.driver_id}>
                            <td>
                                <Link to={`/booking/${booking.driver_id}`}>#{booking.driver_id}</Link>
                            </td>
                            <td>{booking.driver_name}</td>
                            <td>
                                <Link to={`/booking/${booking.booking_no}`}>{booking.booking_no}</Link>
                            </td>
                            <td>{booking.customer_name}</td>
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

// Feedback Component
function Feedback() {
const [feedback, setFeedback] = useState('')

const handleChange = (event) => {
    setFeedback(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Feedback submitted:', feedback)
    // Send feedback logic here
    // sendFeedback();
}

return (
    <div className="w-full lg:w-[300px] mobile:w-[290px] mobile:-ml-4 mobileM:w-[325px] mobileM:-ml-2 mobileL:ml-1 mobileL:w-[355px] h-full rounded-lg shadow-lg border border-muted bg-gray-50 p-5 lg:p-7 flex flex-col">
        <strong className="text-cyan-900 font-extrabold text-center">Feedback</strong>
        <form onSubmit={handleSubmit}>
            <div className="mt-10">
                <textarea
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    rows="4"
                    placeholder="Enter your feedback..."
                    value={feedback}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="mt-10 text-center">
                <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-900 text-white rounded-full hover:bg-white hover:text-cyan-900 hover:border border-cyan-900"
                >
                    Submit Feedback
                </button>
            </div>
        </form>
    </div>
)
}

// Main Booking Component
export default function Booking() {
return (
    <div className="flex flex-col md:flex-row gap-4 w-full tablet:-ml-2">
        {/* Display components side by side on larger screens */}
        <RecentBooking />
        <Feedback />
    </div>
)
}