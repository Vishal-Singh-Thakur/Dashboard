import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentBooking from "./RecentBooking";
import Feedback from "./Feedback";

export default function DashBoard() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfileChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentBooking />
                <Feedback />
            </div>
        </div>
    )
}
