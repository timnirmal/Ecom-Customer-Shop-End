import React from "react";
import CardTables from "/components/Cards/CardTables.tsx";
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";


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
            return <CardTables title="User Interactions"
                               data={data}
                               column={[
                                   "User", "Type", "ProductID", "Date"
                               ]}
                //onAddNew={onAddNewFunc}
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
