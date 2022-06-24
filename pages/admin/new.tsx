import React from "react";

// components
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


function InputField(props: { htmlFor: string, fieldName: string, placeholder: string, value: string, onChange: (e) => void, fieldDescription: string }) {
    return <div className="md:w-full lg:w-1/2  p-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
               htmlFor={props.htmlFor}>
            {props.fieldName}
        </label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={props.htmlFor} type="text" placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        <p className="text-gray-700 text-xs italic">
            {props.fieldDescription}
        </p>
    </div>;
}

export default function NewProduct() {
    // variable to store the products name
    const [Name, setName] = React.useState("");
    const [Description, setDescription] = React.useState("");
    const [Price, setPrice] = React.useState("");
    const [Discount, setDiscount] = React.useState("");
    const [AvailableQuality, setAvailableQuality] = React.useState("");
    const [Category, setCategory] = React.useState("");
    const [SubCategory, setSubCategory] = React.useState("");
    const [Tags, setTags] = React.useState("");
    const [Reviews, setReviews] = React.useState("");
    const [Stock, setStock] = React.useState("");
    const [DiscountPrice, setDiscountPrice] = React.useState("");
    const [Images, setImages] = React.useState("");
    const [Image, setImage] = React.useState("");


    function addProduct() {
        // add product to database
        console.log("add product");

    }


    return (
        <Admin>
            <div className="flex flex-wrap">
                {/*Form for get product details*/}
                <div className="w-full  p-3">
                    <div className="flex flex-wrap">


                        {/*Product Name*/}
                        <InputField htmlFor="grid-product-name" fieldName="Product Name" placeholder="Product Name" value={Name}
                                    onChange={(e) => setName(e.target.value)} fieldDescription="This is the name of the product"/>

                        {/*Product Description*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-description">
                                Product Description
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-product-description" type="text" placeholder="Product Description"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <p className="text-gray-700 text-xs italic">
                                This is the description of the product
                            </p>
                        </div>

                        <InputField htmlFor="grid-product-description" fieldName="Product Description" placeholder="Product Description" value={Description}
                                    onChange={(e) => setDescription(e.target.value)} fieldDescription="This is the description of the product"/>

                        {/*Product Price*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-price">
                                Product Price
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-price" type="text" placeholder="Product Price"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <p className="text-gray-700 text-xs italic">
                                This is the price of the product
                            </p>
                        </div>

                        <InputField htmlFor="grid-product-price" fieldName="Product Price" placeholder="Product Price" value={Price}
                                    onChange={(e) => setPrice(e.target.value)} fieldDescription="This is the price of the product"/>

                        {/*Product Discount*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-discount">
                                Product Discount
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-discount" type="text" placeholder="Product Discount"
                            />
                            <p className="text-gray-700 text-xs italic">
                                This is the discount of the product
                            </p>
                        </div>

                        {/*Product Available Quality*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-available-quality">
                                Product Available Quality
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-available-quality" type="text"
                                placeholder="Product Available Quality"/>
                            <p className="text-gray-700 text-xs italic">
                                This is the available quality of the product
                            </p>
                        </div>

                        {/*Product Category*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-category">
                                Product Category
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-category" type="text" placeholder="Product Category"/>
                            <p className="text-gray-700 text-xs italic">
                                This is the category of the product
                            </p>
                        </div>

                        {/*Product Reviews*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-reviews">
                                Product Reviews
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-reviews" type="text" placeholder="Product Reviews"/>
                            <p className="text-gray-700 text-xs italic">
                                This is the reviews of the product
                            </p>
                        </div>

                        {/*Product Stock*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-stock">
                                Product Stock
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-stock" type="text" placeholder="Product Stock"/>
                            <p className="text-gray-700 text-xs italic">
                                This is the stock of the product
                            </p>
                        </div>

                        {/*Product Images*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-product-images">
                                Product Images
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-product-images" type="text" placeholder="Product Images"/>
                            <p className="text-gray-700 text-xs italic">
                                This is the images of the product
                            </p>
                        </div>

                        {/*Submit Button*/}
                        <div className="md:w-full lg:w-1/2 p-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => {
                                    addProduct();
                                }
                                }
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </Admin>
    );

}

NewProduct.layout = Admin;
