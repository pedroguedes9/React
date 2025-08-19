import { Student } from "@/types/Student"
type Props = {
    students: Student[]
}

export const StudentTable = ({students}:Props) => {
return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead className=" text-left border-b border-gray-600 bg-gray-800 font-bold">
                <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr key={item.id} className="bg-gray-400 text-gray-800 text-sm border-b border-gray-600" >
                        <td className="flex flex-row gap-3 p-3 items-center">
                            <img className="h-13 w-13 rounded-full" src={item.avatar} alt={item.name} />
                            <div className="flex flex-col ">
                                <h1 className="font-bold">{item.name}</h1>
                                <p>{item.email}</p>
                            </div>
                        </td>
                        <td className="p-3">
                            {item.active && <div className="bg-green-500 border border-green-700 text-white text-xs rounded-lg text-center inline-block px-2 py-1">active</div>}
                            {!item.active && <div className="bg-red-500 border border-red-700 text-white text-xs rounded-lg text-center inline-block px-2 py-1">inactive</div>}
                        </td>
                        <td className="p-3">
                            {item.grade1.toFixed(1)}
                        </td>
                        <td className="p-3">
                            {item.grade2.toFixed(1)}
                        </td>
                        <td className="p-3 font-bold">
                            {item.active && <div>{((item.grade1 + item.grade2)/2).toFixed(1)}</div>}
                            {!item.active && <div>--</div>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}