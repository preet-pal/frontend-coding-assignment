import 'tailwindcss/tailwind.css';

export default function SearchResults({ results }) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Count
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Low Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {results.map(({ id, product: { title, price }, category }, index) => (
                                    <tr key={id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td className="px-1 py-1 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-900">
                                                {title}
                                            </span>
                                        </td>
                                        <td className="px-1 py-1 whitespace-nowrap">
                                            <span className="x-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {price?.low}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
