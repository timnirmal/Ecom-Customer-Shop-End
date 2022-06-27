import React from "react";
import CardTables from "/components/Cards/CardTables.tsx";
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";


export default function Products() {
    const [result] = useRealtime('products', {
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
            return <CardTables title="Products"
                               data={data}
                               column={[
                                   "Name", "Price", "Discount", "Category", "Stock", "Edit", "Delete"
                               ]}
                               onAddNew={onAddNewFunc}
                               primarykey={[
                                   {
                                       showName: "Name",
                                       name: "name",
                                       dataKey: "id",
                                       bold: true,
                                   }
                               ]}
                               datadetail={[
                                   {
                                       name: "price",
                                   },
                                   {
                                       name: "discount",
                                       type: "money",
                                   },
                                   {
                                       name: "category",
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
            {pathname: "/product/[id]", query: {name: 'Someone'}}, `/product/${id}`).then(r => {
                console.log(r)
            }
        )
    }

    function onDeleteFunc(id) {
        console.log("Delete", id);

        async function DeleteProduct(id) {
            console.log("Delete", id);
            const {data, error} = await supabaseClient
                .from('products')
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

Products.layout = Admin;
