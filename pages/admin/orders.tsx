import React from "react";
import CardTables from "/components/Cards/CardTables.tsx";
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";


export default function Orders() {
    const [result] = useRealtime('orders', {
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
            return <CardTables title="Orders"
                               data={data}
                               column={[
                                   "Username", "Payment", "Discount", "Orders"
                               ]}
                               //onAddNew={onAddNewFunc}
                               primarykey={[
                                   {
                                       showName: "username",
                                       name: "username",
                                       dataKey: "id",
                                       bold: false,
                                   }
                               ]}
                               datadetail={[
                                   {
                                       name: "payment",
                                   },
                                   {
                                       name: "discount",
                                       type: "money",
                                   },
                                   {
                                       name: "orders",
                                   },
                                   {
                                       name: "stock",
                                   },
                                   {
                                       name: "edit",
                                       type: "button",
                                       onClick: onEditFunc,
                                       icon: faEdit,
                                   },
                                   {
                                       name: "delete",
                                       type: "button",
                                       onClick: onDeleteFunc,
                                       icon: faTrashCan,
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

    function onAddNewFunc() {
        console.log("Add new");
        Router.push("/admin/new").then(r => {
            console.log(r)
        });
    }

    function onEditFunc(id) {
        console.log("Edit", id);
        Router.push(
            {pathname: "/order/[id]", query: {name: 'Someone'}}, `/order/${id}`).then(r => {
                console.log(r)
            }
        )
    }

    function onDeleteFunc(id) {
        console.log("Delete", id);

        async function DeleteProduct(id) {
            console.log("Delete", id);
            const {data, error} = await supabaseClient
                .from('orders')
                .delete()
                .eq('id', id)
                .then(res => {
                    console.log(res)
                    return res
                })
            console.log("Data", data)
            console.log("Error", error)
        }

        DeleteProduct(id).then(r => {
            console.log(r)
        });
    }
}

Orders.layout = Admin;
