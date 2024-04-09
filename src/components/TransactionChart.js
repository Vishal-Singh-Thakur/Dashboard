import React, {useState, useEffect} from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";



const data = [
    {
        name: 'Ram',
        distance: 500,
        loc: 'Shimla',
        Expense: 2500
    },
    {
        name: 'Thakur',
        distance: 900,
        loc: 'Jaipur',
        Expense: 1500
    },
    {
        name: 'Singh',
        distance: 500,
        loc: 'Nanitaal',
        Expense: 3500
    },
    {
        name: 'Ram Kumar',
        distance: 800,
        loc: 'Manali',
        Expense: 4000
    },
    {
        name: 'Shyam',
        distance: 400,
        loc: 'Rishikesh',
        Expense: 3000
    },
    {
        name: 'Peter',
        distance: 300,
        loc: 'Delhi',
        Expense: 2000
    },
    {
        name: 'Jone',
        distance: 700,
        loc: 'Lucknow',
        Expense: 1000
    }
];
function TransactionChart() {

    const [data, setData]=useState([])
    useEffect(() => {
        fetch('http://192.168.1.7:8089/chart/find').then((result)=>{
            result.json().then((resp)=>{
                // console.log("result",resp)
                setData(resp)
            })
        }) 
    },[])

    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Trips</strong>
            <div className="w-full mt-3 flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="loc" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="distance" fill="#8884d8" />
                        {/* <Bar dataKey="loc" fill="#83ca4e" /> */}
                        <Bar dataKey="expense" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}

export default TransactionChart;
