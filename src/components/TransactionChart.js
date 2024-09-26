import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
    { name: 'Ram', distance: 500, loc: 'Shimla', Expense: 2500 },
    { name: 'Thakur', distance: 900, loc: 'Jaipur', Expense: 1500 },
    { name: 'Singh', distance: 500, loc: 'Nanitaal', Expense: 3500 },
    { name: 'Ram Kumar', distance: 800, loc: 'Manali', Expense: 4000 },
    { name: 'Shyam', distance: 400, loc: 'Rishikesh', Expense: 3000 },
    { name: 'Peter', distance: 300, loc: 'Delhi', Expense: 2000 },
    { name: 'Jone', distance: 700, loc: 'Lucknow', Expense: 1000 }
]

function TransactionChart() {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="sm:w-full md:w-3/4 tablet:-ml-2">
            <div className="border border-muted bg-gray-50 p-5 mobile:w-[290px] mobile:-ml-4 mobileL:ml-1 laptopL:w-[730px] mobileM:-ml-2 mobileM:w-[325px] mobileL:w-[355px] dark:bg-gray-100 lg:p-7 rounded-lg xl:col-span-2 2xl:col-span-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-base text-cyan-900 font-semibold sm:text-lg">Trips</h3>
                        <div className="text-gray-500 mt-1.5 flex items-center">
                            <span className="inline-flex items-center justify-center font-semibold w-2 h-2 rounded-full bg-cyan-900 mr-2"></span>
                            Distance
                            <span className="inline-flex items-center justify-center font-semibold w-2 h-2 rounded-full bg-black mx-4"></span>
                            Loc
                            <span className="inline-flex items-center justify-center font-semibold w-2 h-2 rounded-full bg-[#B8C3E9] dark:bg-[#7c88b2] mx-4"></span>
                            Expense
                        </div>
                    </div>
                    <div className="ps-2">
                        <div className="flex w-full laptopL:max-w-[120px] mobile:-ml-44">
                            <div className="relative">
                                <label className="block">
                                    <div className="flex items-center w-36  border hover:border-cyan-900 bg-transparent px-1 rounded-md focus-within:ring-0">
                                        <span className="flex items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                className="w-5 h-5 text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                                            </svg>
                                        </span>
                                        <DatePicker
                                            selected={selectedDate} // Pass the selected date
                                            onChange={(date) => setSelectedDate(date)} // Update state with the selected date
                                            dateFormat="dd/MM/yyyy" // Set the desired date format
                                            customInput={
                                                <input
                                                    className="w-full bg-transparent border-0 p-0 focus:outline-none focus:ring-0 ps-2.5 pe-2.5"
                                                    style={{ fontSize: 'inherit' }} // Adjust font size
                                                    value={
                                                        selectedDate
                                                            ? selectedDate.toLocaleDateString('en-GB')
                                                            : 'None selected'
                                                    }
                                                />
                                            }
                                        />
                                        {/* <span className="flex items-center"> */}
                                            {/* <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                className="h-4 w-12 text-gray-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                                            </svg> */}
                                        {/* </span> */}
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full pt-6 sm:pt-9">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="distance" fill="#82ca9d" />
                            <Bar dataKey="loc" fill="#000000" />
                            <Bar dataKey="Expense" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

function BuyerProfileChart({ availableStorage = 300, usedStorage = 100 }) {
    const total = availableStorage + usedStorage
    const availablePercentage = (availableStorage / total) * 100
    const usedPercentage = (usedStorage / total) * 100

    const radius = 100
    const circumference = 2 * Math.PI * radius
    const availableStrokeDasharray = `${(availableStorage / total) * circumference} ${circumference}`
    const usedStrokeDasharray = `${(usedStorage / total) * circumference} ${circumference}`

    return (
        <div className="laptopL:ml-44 tablet:-ml-2 mobile:-ml-4 mobileM:-ml-2 mobileL:ml-1 border border-gray-300 bg-gray-50 p-4 lg:p-7 rounded-lg w-[200px] mobile:w-[290px] mobileM:w-[325px] mobileL:w-[355px] md:w-[300px]">
            <h3 className="text-cyan-900 text-base font-semibold sm:text-lg">Storage Usage</h3>

            <div className="h-[200px] sm:h-[250px] md:h-[240px] w-full">
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 300 300">
                        <circle cx="150" cy="150" r={radius} stroke="#BFDBFE" strokeWidth="30" fill="none" />
                        <circle
                            cx="150"
                            cy="150"
                            r={radius}
                            stroke="#164E63"
                            strokeWidth="30"
                            strokeDasharray={availableStrokeDasharray}
                            strokeDashoffset="0"
                            fill="none"
                            transform="rotate(-90 150 150)"
                        />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24">
                            {Math.round(usedPercentage)}%
                        </text>
                    </svg>
                </div>
            </div>

            <div>
                <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
                    <div className="flex items-center">
                        <span className="me-2 h-2 w-2 rounded-full bg-blue-200"></span>
                        <span className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-400">
                            Available storage
                        </span>
                    </div>
                    <span className="font-normal">{Math.round(availablePercentage)}%</span>
                </div>
                <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
                    <div className="flex items-center">
                        <span className="me-2 h-2 w-2 rounded-full bg-cyan-900"></span>
                        <span className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-400">
                            Total used storage
                        </span>
                    </div>
                    <span className="font-normal">{Math.round(usedPercentage)}%</span>
                </div>
            </div>
        </div>
    )
}

export default function Chart() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TransactionChart />
            <BuyerProfileChart availableStorage={300} usedStorage={100} />
        </div>
    )
}
