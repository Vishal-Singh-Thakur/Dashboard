import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
// import RecentBooking from "./RecentBooking";
// import Feedback from "./Feedback";
import Chart from "./TransactionChart";
// import TransactionChart from "./TransactionChart";
// import BuyerProfileChart from "./BuyerProfileChart";
// import RecentBooking from "./RecentBooking";
import Booking from "./RecentBooking";


export default function DashBoard() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
              <Chart />
            </div>
            <div className="flex flex-row gap-4">
               <Booking />
            </div>
        </div>
    )
}
