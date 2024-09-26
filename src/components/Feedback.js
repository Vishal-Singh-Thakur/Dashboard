// import React, { useState } from 'react'

// function Feedback() {
//     const [feedback, setFeedback] = useState('')

//     const handleChange = (event) => {
//         setFeedback(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log('Feedback submitted:', feedback)
//         // sendFeedback();
//         // setFeedback('');
//     }

    // const sendFeedback = () => {
    //     console.log({ feedback });
    // const data = { feedback };
    // fetch("http://192.168.1.7:8089/feed/save", {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then((result) => {
    //     console.log("result", result);
    // })
    // }

//     return (
//         <div className="rounded-lg shadow-lg w-[375px] border border-muted bg-gray-50 p-5 lg:p-7 flex flex-col relative lg:col-span-2 xl:col-span-12">
//             <strong className="text-cyan-900 font-bold text-center">Feedback</strong>
//             <form onSubmit={handleSubmit}>
//                 <div className="mt-10">
//                     <textarea
//                         className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         rows="4"
//                         placeholder="Enter your feedback..."
//                         value={feedback}
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>
//                 <div className="mt-10 text-center">
//                     <button
//                         type="submit"
//                         className="px-4 py-2 ml-5 bg-cyan-900 text-white rounded-full hover:bg-white focus:outline-none focus:bg-cyan-900 hover:text-cyan-900 hover: border border-cyan-900"
//                     >
//                         Feedback
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Feedback
