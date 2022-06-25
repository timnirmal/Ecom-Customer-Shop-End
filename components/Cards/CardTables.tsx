import React from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "/components/Dropdowns/TableDropdown.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'

export default function CardTables({children, className, ...props}) {
    console.log("In Table")
    console.log("In Table")
    console.log("In Table")
    console.log("In Table")
    console.log("In Table")
    console.log("In Table")
    console.log(props.data);
    console.log(typeof props.data);

    if (typeof props.data === "undefined") {
        return null;
    }

    return (
        <div className={`card ${className}`} {...props}>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (props.color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (props.color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                {props.title}
                            </h3>
                        </div>


                        {/*Add new button in Right edge of table */}
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">

                            <button
                                className={
                                    "bg-slate-700 text-white font-bold py-2 px-4 rounded-full shadow-none focus:outline-none focus:shadow-outline " +
                                    (props.color === "light" ? "bg-blueGray-700 text-white" : "bg-white text-blueGray-700")
                                }
                                onClick={props.onAddNew}
                            >
                                <FontAwesomeIcon icon={faPlus}/>
                                Add New
                            </button>
                            {/*<button
                                className={(props.color === "light" ? "bg-blueGray-200" : "bg-blueGray-600")}
                                    onClick={props.onAddNew}
                            >
                                <span
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-none text-blueGray-600 bg-blueGray-100 hover:bg-blueGray-200">
                                    <svg className="w-5 h-5" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </svg>
                                </span>
                                Add New
                            </button>*/}

                        </div>

                    </div>
                </div>


                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            {
                                props.column.map((column) => (
                                    <th
                                        key={column.id}
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (props.color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                        }
                                    >
                                        {column}
                                    </th>
                                ))
                            }
                        </tr>
                        </thead>


                        <tbody>

                        {
                            props.data.map((product) => (
                                <tr>
                                    <th
                                        key={product.id}
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                                    >
                                        <span
                                            className={
                                                "ml-3 font-bold " +
                                                +(props.color === "light" ? "text-blueGray-600" : "text-white")
                                            }
                                        >
                    {product.name}
                  </span>

                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        ${product.price}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        ${product.discount}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.category}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.stock}
                                    </td>

                                    {/*Edit Icon Button*/}
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {
                                            // On click of edit button
                                            <button
                                                className={
                                                    (props.color === "light"
                                                        ? "bg-blueGray-200"
                                                        : "bg-blueGray-600")

                                                }
                                                onClick={() => props.onEdit(product.id)}
                                            >
                                                <span
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-none text-blueGray-600 bg-blueGray-100 hover:bg-blueGray-200">
                                                <svg className="w-5 h-5" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    {/*<path
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                        */}
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </svg>
                                            </span>
                                            </button>
                                        }
                                    </td>

                                    {/*Delete Icon Button*/}
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {
                                            // On click of delete button
                                            <button
                                                className={
                                                    (props.color === "light"
                                                        ? "bg-blueGray-200"
                                                        : "bg-blueGray-600")

                                                }
                                                onClick={() => props.onDelete(product.id)}
                                            >
                                                <span
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-none text-blueGray-600 bg-blueGray-100 hover:bg-blueGray-200">
                                                <svg className="w-5 h-5" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    {/*Bin Icon*/}
                                                    {/*<i className="fa fa-trash"></i>
                                                    <path
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v9a2 2 0 01-2 2H7m2 0v-9a2 2 0 012-2h7.879M15 7v9a2 2 0 002 2h7M7 7l-.867 12.142A2 2 0 007.138 21H18.138a2 2 0 001.995-1.858L19 7m-5 4V8a2 2 0 012-2h5.879M7 7v9a2 2 0 002 2h9"></path>
                                                    */}
                                                    <FontAwesomeIcon icon={faTrashCan}/>

                                                </svg>
                                            </span>
                                            </button>
                                        }
                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        <TableDropdown/>
                                    </td>

                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

CardTables.defaultProps = {
    color: "light",
};

CardTables.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
