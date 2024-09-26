import React, { useState, useEffect } from 'react'
function DashboardStatsGrid({
    totalTrips = 30000,
    maxTrips = 50000,
    totalDriver = 2000,
    maxDriver = 50000,
    totalVehicles = 2000,
    maxVehicles = 50000
}) {
    const [tripPercentage, setTripPercentage] = useState(0)
    const [driverPercentage, setDriverPercentage] = useState(0)
    const [vehiclePercentage, setVehiclePercentage] = useState(0)

    const radius = 36.5
    const circumference = 2 * Math.PI * radius

    const tripCircumference = circumference
    const driverCircumference = circumference
    const vehicleCircumference = circumference

    const tripStrokeDashoffset = tripCircumference - (tripPercentage / 100) * tripCircumference
    const driverStrokeDashoffset = driverCircumference - (driverPercentage / 100) * driverCircumference
    const vehicleStrokeDashoffset = vehicleCircumference - (vehiclePercentage / 100) * vehicleCircumference

    useEffect(() => {
        const calculatedPercentageTrips = (totalTrips / maxTrips) * 100
        setTripPercentage(calculatedPercentageTrips)
    }, [totalTrips, maxTrips])

    useEffect(() => {
        const calculatedPercentageDriver = (totalDriver / maxDriver) * 100
        setDriverPercentage(calculatedPercentageDriver)
    }, [totalDriver, maxDriver])

    useEffect(() => {
        const calculatedPercentageVehicles = (totalVehicles / maxVehicles) * 100
        setVehiclePercentage(calculatedPercentageVehicles)
    }, [totalVehicles, maxVehicles])

    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);

    //   useEffect(() => {
    //     fetch('http://192.168.1.7:8089/dash/summary')
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error('Failed to fetch data');
    //         }
    //         return response.json();
    //       })
    //       .then((responseData) => {
    //         setData(responseData);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         setError(error.message);
    //         setLoading(false);
    //       });
    //   }, []);

    //   if (loading) {
    //     return <div>Loading...</div>;
    //   }

    //   if (error) {
    //     return <div>Error: {error}</div>;
    //   }

    // console.log('data correct', data)

    return (
        <div className="flex flex-wrap gap-4 w-full mobileM:ml-1 justify-center mobile:-mx-2 tablet:-ml-2">
            <BoxWrapper>
                <div className="border border-muted bg-gray-50 p-4 lg:p-5 xl:p-6 rounded-lg w-full max-w-[355px] min-w-[292px]">
                    <div className="flex items-center justify-between">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* Text and Stats Section */}
                        <div className="flex-1 ml-2 mb-4">
                            <p className="text-cyan-900 font-normal">Total Trips</p>
                            <span className="text-lg font-semibold text-cyan-900 2xl:text-xl 3xl:text-[22px]">
                                {Number(totalTrips).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Circular Progress Chart */}
                    <div className="h-12 w-20 ml-auto -mt-16 flex justify-center">
                        <svg viewBox="0 0 80 80" className="transition-all duration-200 transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#D7E3FE"
                                className="dark:stroke-gray-300"
                            ></circle>
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#22C55E"
                                strokeDasharray={tripCircumference}
                                strokeDashoffset={tripStrokeDashoffset}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
                            ></circle>
                            <foreignObject x="0" y="0" width="80" height="80">
                                <div className="flex h-full w-full flex-col items-center justify-center transition-all duration-200 transform rotate-90">
                                    <span className="text-base font-medium text-gray-700">
                                        {Math.round(tripPercentage)}%
                                    </span>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>

                    {/* Growth Indicator */}
                    <div className="border-t border-dashed mt-5"></div>
                    <p className="mt-4 text-gray-500 mr-4">
                        <span className="inline-flex items-center font-medium text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mr-1 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                            </svg>
                            +32.40%
                        </span>
                        <span className="ml-2">last month</span>
                    </p>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="border border-muted bg-gray-50 p-4 lg:p-5 xl:p-6 rounded-lg w-full max-w-[355px] min-w-[292px]">
                    <div className="flex items-center justify-between">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6 text-2xl text-white"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* Text and Stats Section */}
                        <div className="flex-1 ml-2 mb-4">
                            <p className="text-cyan-900 font-normal">Total Drivers</p>
                            <span className="text-lg font-semibold text-cyan-900 2xl:text-xl 3xl:text-[22px]">
                                {Number(totalDriver).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Circular Progress Chart */}
                    <div className="h-12 w-20 ml-auto -mt-16 flex justify-center">
                        <svg viewBox="0 0 80 80" className="transition-all duration-200 transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#D7E3FE"
                                className="dark:stroke-gray-300"
                            ></circle>
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#0EA5E9"
                                strokeDasharray={driverCircumference}
                                strokeDashoffset={driverStrokeDashoffset}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
                            ></circle>
                            <foreignObject x="0" y="0" width="80" height="80">
                                <div className="flex h-full w-full flex-col items-center justify-center transition-all duration-200 transform rotate-90">
                                    <span className="text-base font-medium text-gray-700">
                                        {Math.round(driverPercentage)}%
                                    </span>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>

                    {/* Growth Indicator */}
                    <div className="border-t border-dashed mt-5"></div>
                    <p className="mt-4 text-gray-500 mr-4">
                        <span className="inline-flex items-center font-medium text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mr-1 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                            </svg>
                            +32.40%
                        </span>
                        <span className="ml-2">last month</span>
                    </p>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="border border-muted bg-gray-50 p-4 lg:p-5 xl:p-6 rounded-lg w-full max-w-[355px] min-w-[292px]">
                    <div className="flex items-center justify-between">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6 text-2xl text-white"
                            >
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </div>

                        {/* Text and Stats Section */}
                        <div className="flex-1 ml-2 mb-4">
                            <p className="text-cyan-900 font-normal">Total Vehicles</p>
                            <span className="text-lg font-semibold text-cyan-900 2xl:text-xl 3xl:text-[22px]">
                                {Number(totalVehicles).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Circular Progress Chart */}
                    <div className="h-12 w-20 ml-auto -mt-16 flex justify-center">
                        <svg viewBox="0 0 80 80" className="transition-all duration-200 transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#D7E3FE"
                                className="dark:stroke-gray-300"
                            ></circle>
                            <circle
                                cx="40"
                                cy="40"
                                r="36.5"
                                fill="transparent"
                                strokeWidth="7"
                                stroke="#EF4444"
                                strokeDasharray={vehicleCircumference}
                                strokeDashoffset={vehicleStrokeDashoffset}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
                            ></circle>
                            <foreignObject x="0" y="0" width="80" height="80">
                                <div className="flex h-full w-full flex-col items-center justify-center transition-all duration-200 transform rotate-90">
                                    <span className="text-base font-medium text-gray-700">
                                        {Math.round(vehiclePercentage)}%
                                    </span>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>

                    {/* Growth Indicator */}
                    <div className="border-t border-dashed mt-5"></div>
                    <p className="mt-4 text-gray-500 mr-4">
                        <span className="inline-flex items-center font-medium text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mr-1 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                            </svg>
                            +32.40%
                        </span>
                        <span className="ml-2">last month</span>
                    </p>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default DashboardStatsGrid

function BoxWrapper({ children }) {
    return <div className="flex-1">{children}</div>
}
