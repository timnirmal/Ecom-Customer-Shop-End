import React, {useState} from "react";

// components
import CardTables from "/components/Cards/CardTables.tsx";

// layout for page
import Admin from "/layout/Admin.js";
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
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [products, setProducts] = useState([]);

    const realtimeEnable = false;
    let ProductsData = undefined;

    /*
    if (realtimeEnable) {
        const [result, reexecute] = useRealtime('products', {
                select: {
                    columns: "*",
                }
            }
        )
        const {data, fetching, error} = result

        //if (fetching) return <p>Loading...</p>
        //if (error) return <p>Oh no... {error.message}</p>

        console.log(data)
        ProductsData = data

        if (!ProductsData) {
            ProductsData = products
        }

    }
    */

    /*
        else {
            const useProducts = async () => {
                let {datas, error} = await supabaseClient
                    .from('products')
                    .select('*')
                    .then(res => {
                        setLoadingProducts(true)
                        console.log("False DOne")
                        console.log("False DOne")
                        console.log("False DOne")

                        // console log data type of res
                        console.log("Res", res.data)
                        console.log("Res", res.data)
                        console.log("Tyepe of Res", typeof res.data)
                        ProductsData = res.data
                    })
                // if data exists, setLoadingProducts to false

                console.log("Products sdsddsdsdsds", ProductsData)
                console.log("Type of prodiucr ", typeof ProductsData)
                console.log(typeof ProductsData)
                console.log(typeof ProductsData)

                return ProductsData
            }

            ProductsData = useProducts();
            console.log(ProductsData)
        }

        console.log(realtimeEnable)
        console.log("Product Data", ProductsData)

        if (ProductsData.length === 0) {
            console.log("True Done")
            console.log("True Done")
            console.log("True Done")
            console.log("True Done")
            setLoadingProducts(false)
        }


        // const [{data, error}] = useRealtime('products', {
        //     select: {
        //         columns: 'id,name',
        //     },
        // })

        //console.log(data)

     */


    async function getProducts() {
        let {data, error} = await supabaseClient
            .from('products')
            .select('*')
        // .then(() => {
        //     setLoadingProducts(true)
        // })
        if (error) {
            throw new Error(error.message);
        }

        setLoadingProducts(false)
        setProducts(data)
        return data;
    }


    if (loadingProducts) {
        return <p className="text-2xl">Loading ...</p>
    }
    else {
        getProducts();
    }
    if (!products.length) return <p className="text-2xl">No products found</p>

    console.log("Products", products)

    const subscriptions = supabaseClient.getSubscriptions()
    console.log("subscriptions", subscriptions)

    return (
        <Admin>
            <div className="flex flex-wrap">
                {/*if ProductsData availabale show CardTables, else show loading..*/}
                {loadingProducts ?

                    <p>Loading...</p>

                    :

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

                }


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
