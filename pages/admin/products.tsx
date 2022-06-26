import React from "react";

// components
import CardTables from "/components/Cards/CardTables.tsx";

// layout for page
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";

// json object of products
const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a product",
        price: "100",
        discount: "50",
        availableQuality: "high",
        category: "Category 1",
        subCategory: "Sub Category",
        tags: ["tag1", "tag2", "tag3"],
        reviews: "100",
        stock: "100",
        discountPrice: "90",
        images: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        ]
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is a product 2",
        price: "200",
        discount: "10",
        availableQuality: "low",
        category: "Category 2",
        subCategory: "Sub Category 2",
        tags: ["tag4", "tag2", "tag3"],
        reviews: "10",
        stock: "10",
        discountPrice: "95",
        images: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        ]
    }
];


// load products from database


export default function Settings() {
    //const [loadingProducts, setLoadingProducts] = useState(true);
    //const [products, setProducts] = useState([]);
    //
    // const realtimeEnable = false;
    // let ProductsData = undefined;

    const [result, reexecute] = useRealtime('products', {
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
                //column={["ID", "Name", "Description", "Price", "Discount", "Available Quality", "Category", "Sub Category", "Tags", "Reviews", "Stock", "Discount Price"]}
                               onAddNew={onAddNewFunc}
                               primaryKey={[
                                   {
                                       showName: "Name",
                                       name: "name",
                                       dataKey: "id",
                                   }
                               ]}
                               dataDetail={[
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
            //return <div>HI</div>
        }
    }

    // function RenderProducts() {
    //     if (fetching) {
    //         console.log("1 DATA" , data)
    //         console.log("1 Fetching" , fetching)
    //         console.log("1 Error" , error)
    //
    //         return (
    //             <div>Loading...</div>
    //         )
    //     } else {
    //         console.log("2 DATA" , data)
    //         console.log("2 Fetching" , fetching)
    //         console.log("2 Error" , error)
    //         if (error) {
    //             return <div>Error: {error.message}</div>
    //         } else {
    //             console.log("DATA" , data)
    //             console.log("Fetching" , fetching)
    //             console.log("Error" , error)
    //             return (
    //                 <CardTables
    //                     title="Products"
    //                     data={data}
    //                     column={[
    //                         "Name", "Price", "Discount", "Category", "Stock", "Edit", "Delete"
    //                     ]}
    //                     //column={["ID", "Name", "Description", "Price", "Discount", "Available Quality", "Category", "Sub Category", "Tags", "Reviews", "Stock", "Discount Price"]}
    //                     onAddNew={onAddNewFunc}
    //                     onEdit={onEditFunc}
    //                     onDelete={onDeleteFunc}
    //                 />
    //             )
    //
    //         }
    //     }
    // }

    //if (error) return <p>Oh no... {error.message}</p>

    //console.log(data)
    //ProductsData = data

    // console.log("Products", data)

    return (
        <Admin>
            <div className="flex flex-wrap">
                {
                    RenderProducts()
                }

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
            {pathname: "/product/[id]", query: { name: 'Someone' }}, `/product/${id}`).then(r => {
                console.log(r)
            }
            // return (
            //     <Link href="/product/[id]" as={`/product/${id}`}>
            //         <a href="#">
            //             <button>Edit</button>
            //         </a>
            //     </Link>
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

        DeleteProduct(id);
    }
}

Settings.layout = Admin;


// import data from supabase
