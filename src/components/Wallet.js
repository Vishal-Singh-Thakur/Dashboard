import React from "react";
import { Link } from "react-router-dom";

export default function Wallet() {
    return (
        <div>
            <p>this is Wallet page</p>
            <Link to="/" className="underline">
                go to dashboard
            </Link>

        </div>
    )
}