import React, {useState} from "react";

// components
import CardTables from "/components/Cards/CardTables.tsx";

// layout for page
import Admin from "/layout/Admin.js";
import {supabaseClient} from "../../lib/supabase";
import {useRealtime} from "react-supabase";


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

    const realtimeEnable = false;
    let ProductsData = undefined;

    if (realtimeEnable) {
        const [result, reexecute] = useRealtime('products', {
                select: {
                    columns: "*",
                }
            }
        )
        const {data, fetching, error} = result

        if (fetching) return <p>Loading...</p>
        //if (error) return <p>Oh no... {error.message}</p>

        console.log(data)
        ProductsData = data
/*
        if (!ProductsData) {
            ProductsData = products
        } else {
            setLoadingProducts(false)
        }*/

    }

    console.log("Products", ProductsData)

    const subscriptions = supabaseClient.getSubscriptions()
    console.log("subscriptions", subscriptions)

    return (
        <Admin>
            <div className="flex flex-wrap">
                {/*if ProductsData availabale show CardTables, else show loading..*/}

                <CardTables
                    title="Products"
                    data={ProductsData}
                    column={[
                        "Name", "Price", "Discount", "Category", "Stock", "Edit", "Delete"
                    ]}
                    //column={["ID", "Name", "Description", "Price", "Discount", "Available Quality", "Category", "Sub Category", "Tags", "Reviews", "Stock", "Discount Price"]}
                    onAddNew={onAddNewFunc}
                    onEdit={onEditFunc}
                    onDelete={onDeleteFunc}

                />


            </div>
        </Admin>
    );

    function onAddNewFunc() {
        console.log("Add new");
    }

    function onEditFunc(id) {
        console.log("Edit", id);
    }

    function onDeleteFunc(id) {
        console.log("Delete", id);
    }
}

Settings.layout = Admin;


// import data from supabase
