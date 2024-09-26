// import React from 'react';

// export default function BuyerProfileChart({ availableStorage = 300, usedStorage = 100 }) {
//     const total = availableStorage + usedStorage;

//     // Calculate the percentages and angles for each segment
//     const availablePercentage = (availableStorage / total) * 100;
//     const usedPercentage = (usedStorage / total) * 100;

//     // SVG circle parameters
//     const radius = 100;
//     const circumference = 2 * Math.PI * radius;
//     const availableStrokeDasharray = `${(availableStorage / total) * circumference} ${circumference}`;
//     const usedStrokeDasharray = `${(usedStorage / total) * circumference} ${circumference}`;

//     return (
//         <div className="border border-gray-300 bg-gray-50 p-4 lg:p-7 rounded-lg">
//             {/* Header */}
//             <div>
//                 <h3 className="text-cyan-900 text-base font-semibold sm:text-lg">Storage Usage</h3>
//             </div>

//             {/* Chart Container */}
//             <div className="h-[300px] w-full sm:py-3">
//                 <div className="relative w-full h-full flex items-center justify-center">
//                     {/* Pie Chart with SVG */}
//                     <svg width="300" height="300" viewBox="0 0 300 300">
//                         {/* Background Circle */}
//                         <circle
//                             cx="150"
//                             cy="150"
//                             r={radius}
//                             stroke="#BFDBFE"
//                             strokeWidth="30"
//                             fill="none"
//                         />
//                         {/* Available Storage Circle */}
//                         <circle
//                             cx="150"
//                             cy="150"
//                             r={radius}
//                             stroke="#164E63"
//                             strokeWidth="30"
//                             strokeDasharray={availableStrokeDasharray}
//                             strokeDashoffset="0"
//                             fill="none"
//                             transform="rotate(-90 150 150)"
//                         />
//                         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="36">
//                             {Math.round(usedPercentage)}%
//                         </text>
//                     </svg>
//                 </div>
//             </div>

//             {/* Details Section */}
//             <div>
//                 <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
//                     <div className="flex items-center">
//                         <span className="me-2 h-2 w-2 rounded-full bg-blue-200"></span>
//                         <span className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-400">
//                             Available storage
//                         </span>
//                     </div>
//                     <span className="font-normal">{Math.round(availablePercentage)}%</span>
//                 </div>
//                 <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
//                     <div className="flex items-center">
//                         <span className="me-2 h-2 w-2 rounded-full bg-cyan-900"></span>
//                         <span className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-400">
//                             Total used storage
//                         </span>
//                     </div>
//                     <span className="font-normal">{Math.round(usedPercentage)}%</span>
//                 </div>
//             </div>
//         </div>
//     );
// }
