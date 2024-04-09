export function getBookingStatus(status) {
    switch (status) {
        case 'WAITING':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'CONFIRMED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'PENDING':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )

    }
}