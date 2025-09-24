import React, { useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa'

export default function Wallet() {
    // State for managing deposit amount and UPI ID
    const [depositAmount, setDepositAmount] = useState('')
    const [upiId, setUpiId] = useState('')

    const handleDeposit = () => {
        console.log(`Depositing ₹${depositAmount} via UPI: ${upiId}`)
        // Here you would add the logic to handle the deposit process.
        setDepositAmount('') // Reset amount
        setUpiId('') // Reset UPI field
    }
    return (
        <div className="pt-16 lg:ml-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div className="laptopL:w-[400px] tablet:h-[250px] mobile:w-[290px] mobile:h-[200px] mobileL:w-[330px] ml-20 p-10 px-6 bg-gradient-to-t from-cyan-900 to-cyan-500 text-white rounded-lg shadow-lg mobile:-ml-[1px] mobileM:ml-7 tablet:mr-8">
                    <div className="text-lg font-semibold mb-4">Wallet Balance</div>

                    <div className="flex items-center text-4xl font-bold">
                        <FaRupeeSign className="mr-2" />
                        90.00
                    </div>
                </div>
            {/* Deposit Section */}
            <div>
                <div className="p-4 px-6 laptopL:w-[400px] laptopL:-ml-7 tablet:h-[250px] mobile:w-[290px] mobile:h-[240px] mobileL:w-[330px]  bg-gradient-to-t from-cyan-900 to-cyan-500 h-60 w-96 rounded-lg shadow-lg mobile:-ml-[1px] mobileM:ml-7 tablet:-ml-1">
                    <div className="text-lg text-white text-center font-bold">Add Balance</div>
                    <div>
                        <label className="block text-sm font-medium">UPI ID</label>
                        <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full bg-white text-black rounded-md px-4 py-2 outline-none mb-1"
                            placeholder="Enter UPI ID"
                        />

                        <label className="block text-sm font-medium">Deposit Amount</label>
                        <div className="flex items-center bg-white text-black rounded-md px-2 py-2 mb-4">
                            <FaRupeeSign className="mr-2 text-lg" />
                            <input
                                type="number"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                                className="outline-none w-full"
                                placeholder="Enter amount"
                            />
                        </div>
                        {/* Deposit Button */}
                        <button
                            className="bg-white hover:bg-cyan-900 text-cyan-900 hover:text-white text-center tablet:ml-20 laptopL:ml-28 mobile:ml-16 font-bold py-3 px-8 rounded-full mt"
                            onClick={handleDeposit}
                        >
                            Deposit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
