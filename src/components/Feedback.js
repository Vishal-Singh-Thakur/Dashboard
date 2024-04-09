import React, { useState } from 'react';

function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Feedback submitted:', feedback);
        sendFeedback();
        setFeedback('');
    };

    const sendFeedback = () => {
        console.log({ feedback });
        const data = { feedback };
        fetch("http://192.168.1.7:8089/feed/save", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("result", result);
        })
    }

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Feedback</strong>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <textarea
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        rows="4"
                        placeholder="Enter your feedback..."
                        value={feedback}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mt-3">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Feedback

