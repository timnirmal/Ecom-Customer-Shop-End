import React from "react";

// components


import CardTables from "/components/Cards/CardTables.tsx";

// layout for page
import Admin from "/layout/Admin.js";


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


export default function Customers() {
    return (
        <Admin>
            <div className="flex flex-wrap">
                <CardTables
                    title="Products"
                    data={products}
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

Customers.layout = Admin;
