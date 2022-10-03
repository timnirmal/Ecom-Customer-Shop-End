import React from "react";
import CardTables from "/components/Cards/CardTables.tsx";
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Orders() {
    const [result] = useRealtime('Interactions', {
            select: {
                columns: "*",
            }
        }
    )
    const {data, fetching, error} = result
    console.log("Int Data ", data)


    function RenderProducts() {
        if (fetching) {
            console.log("Fetching")
            return <div>Loading...</div>
        }
        if (error) {
            console.log("Error", error)
            return <div>Error: {error.message}</div>
        }
        if (data?.length) {
            console.log("Running Data", data)
            return (
                <div>

                    <div className="relative w-full  max-w-full flex-grow flex-1 ">
                        <button
                            className={
                                "bg-slate-700 text-white font-bold py-2 px-4 rounded-full shadow-none focus:outline-none focus:shadow-outline bg-blueGray-700 text-white"
                            }
                            onClick={
                                () => {
                                    Router.push("/admin/analysis/productinteractions")
                                }
                            }
                        >
                            Product Based
                        </button>
                    </div>;

                    <CardTables title="User Interactions"
                                data={data}
                                column={[
                                    "User", "Type", "ProductID", "Date"
                                ]}

                                primarykey={[
                                    {
                                        showName: "User",
                                        name: "user",
                                        dataKey: "id",
                                        bold: true,
                                    }
                                ]}
                                datadetail={[
                                    {
                                        name: "type",
                                    },
                                    {
                                        name: "product",
                                    },
                                    {
                                        name: "created_at",
                                        type: "date",
                                    },

                                ]}
                    />
                </div>

            )

        }
    }

    return (
        <Admin>
            <div className="flex flex-wrap">
                {RenderProducts()}
            </div>
        </Admin>
    );

}

Orders.layout = Admin;
