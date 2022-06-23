import React from "react";

// components

import CardSettings from "/components/Cards/CardSettings.js";
import CardProfile from "/components/Cards/CardProfile.js";


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
    }
];


export default function Settings() {
    return (
        <Admin>
            <div className="flex flex-wrap">
                <CardTables
                    title="Products"
                    data={products}
                    column={[
                        "Name", "Price", "Discount",  "Category",   "Stock", "Edit", "Delete"
                    ]}
                    //column={["ID", "Name", "Description", "Price", "Discount", "Available Quality", "Category", "Sub Category", "Tags", "Reviews", "Stock", "Discount Price"]}

                />
            </div>
        </Admin>
    );
}

Settings.layout = Admin;
