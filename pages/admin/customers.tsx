import React, { useState, useEffect } from "react"
import Table from "../../components/Cards/ReactTable.tsx";

function Customers() {
    const data = [
        { username: "1", email: "sds", gender: "male", phone: "023" },
        { username: "2", email: "fggf", gender: "female", phone: "23232" }
    ]


    const [rowdata, setRowData] = useState(data)
    const onAddRowClick = () => {
        setRowData(
            rowdata.concat({ username: "", email: "", gender: "", phone: "" })
        )
    }
    const columns = [
        {
            Header: "Name",
            accessor: "username",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Gender",
            accessor: "gender",
        },
        {
            Header: "Phone",
            accessor: "phone",
        },
    ]





    return (
        <div className="container mx-auto">
            {/*<button
                onClick={onAddRowClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Row
            </button>*/}
            <div className="flex justify-center mt-8">
                <Table columns={columns} data={rowdata} />
            </div>
        </div>
    )
}
export default Customers
