import React from "react";
import PropTypes from "prop-types";

import TableDropdown from "/components/Dropdowns/TableDropdown.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


export default function CardTables({children, className, ...props}) {
    console.log("CardTables props", props);


    return (
        <div className={`card ${className}`} {...props}>
            <div
                className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (props.color === "light" ? "bg-white" : "bg-blue-900 text-white")}>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        {/*Title*/}
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className={"font-semibold text-lg " + (props.color === "light" ? "text-blueGray-700" : "text-white")}>
                                {props.title}
                            </h3>
                        </div>

                        {/*Add new button in Right edge of table */}
                        {props.onAddNew ? (<AddNewButton color={props.color} onClick={props.onAddNew}/>) : null}
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th key={props.primarykey[0].dataKey}
                                className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (props.color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                                {props.primarykey[0].showName}
                            </th>
                            {props.datadetail.map((dataD) =>
                                (<th key={dataD.id}
                                     className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (props.color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                                    {dataD.showName ? dataD.showName : dataD.name}
                                </th>))
                            }
                        </tr>
                        </thead>

                        <tbody>
                        {
                            props.data.map((product) => (
                                <tr>
                                    {/*First data cell in Row*/}
                                    <CellHead colName={product[props.primarykey[0].name]} bold={props.primarykey[0].bold} primary={true}
                                              dataKey={product[props.primarykey.id]}/>

                                    {/*Other data cells in a row*/}
                                    {
                                        props.datadetail.map((dataD) => (
                                            dataD.type === "button" ?
                                                <IconButton color={props.color}
                                                            onClick={() => dataD.onClick(product.id)}
                                                            icon={dataD.icon}/>
                                                : dataD.type === "date" ?
                                                    <CellDate colName={product[dataD.name]}/>
                                                    :
                                                    <Cell colName={product[dataD.name]} bold={false} primary={false}
                                                          type={dataD.type}/>

                                        ))
                                    }

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

function AddNewButton(props: { color: any, onClick: any }) {
    return <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <button
            className={
                "bg-slate-700 text-white font-bold py-2 px-4 rounded-full shadow-none focus:outline-none focus:shadow-outline " +
                (props.color === "light" ? "bg-blueGray-700 text-white" : "bg-white text-blueGray-700")
            }
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faPlus}/>
            Add New
        </button>
    </div>;
}

{/*
function Cell(props: { colName: any, type?: any, bold?: any, primary?: any, dataKey?: any }) {
    return (
        <span>
            {props.primary ?
                <span>
                    <th key={props.dataKey}>
                        <span className="font-semibold">{props.colName}</span>
                    </th>
                    </span>
                :

                <span>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">

                        <span className={(props.bold === true ? "font-bold" : "")}>
            {props.type === "money" ? "$" : ""}
                            {props.colName}</span>

                    </td>
                </span>
            }
        </span>
    )
}*/
}

function Cell(props: { colName: any, type?: any, bold?: any, primary?: any, dataKey?: any }) {
    return (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {props.type === "money" ? "$" : ""}
            {props.colName}
        </td>
    );
}

function CellDate(props: { colName: any }) {
    return (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            <span>{new Date(props.colName).toISOString().split('T')[0]}</span>

        </td>
    )
}

function CellHead(props: { colName: any, type?: any, bold?: any, primary?: any, dataKey?: any }) {
    return (

        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ml-3"
            key={props.dataKey}
        >
            {props.type === "money" ? "$" : ""} {props.colName}

        </th>
    );
}

function IconButton(props: { color: any, onClick: () => any, icon: any }) {
    return <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {
            <button
                className={(props.color === "light" ? "bg-blueGray-200" : "bg-blueGray-600")}
                onClick={props.onClick}
            >
                <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-none text-blueGray-600 bg-blueGray-100 hover:bg-blueGray-200">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <FontAwesomeIcon icon={props.icon}/>
                    </svg>
                </span>
            </button>
        }
    </td>;
}

function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};


// var datemysql = "2022-06-18T12:34:00.133789+00:00" ;
// // convert mysql date to js date
// var date = new Date(datemysql);
// console.log(date);
// // get date in format YYYY-MM-DD
// var dateString = date.toISOString().split('T')[0];
// console.log(dateString);

// console.log(new Date(datemysql).toISOString().split('T')[0]);
