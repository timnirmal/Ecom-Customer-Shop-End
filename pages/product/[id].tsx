import React from "react";

import Admin from "/layout/Admin.js";
import {supabaseClient} from "../../lib/supabase";

function InputField(props: { htmlFor: string, fieldName: string, placeholder: string, value: string, onChange: (e) => void, fieldDescription: string, fieldSize: string }) {

    let fieldSize = props.fieldSize;

    if (props.fieldSize === undefined) {
        fieldSize = "md:w-full lg:w-1/2  p-3";
    } else if (props.fieldSize === "half") {
        fieldSize = "md:w-full lg:w-1/2  p-3";
    } else if (props.fieldSize === "full") {
        fieldSize = "w-full p-3";
    }

    return <div className={fieldSize}>
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

export default function NewProduct({id, data, error}) {
    console.log("Data", data[0]);
    console.log("Error", error);
    console.log("Id", id);

    const [ID, setID] = React.useState(id);
    const [Name, setName] = React.useState(data[0].name);
    const [Description, setDescription] = React.useState(data[0].description);
    const [Price, setPrice] = React.useState(data[0].price);
    const [Discount, setDiscount] = React.useState(data[0].discount);
    const [AvailableQuality, setAvailableQuality] = React.useState(data[0].available_quality);
    const [Category, setCategory] = React.useState(data[0].category);
    const [SubCategory, setSubCategory] = React.useState(data[0].sub_category);
    const [Tags, setTags] = React.useState(data[0].tags);
    const [Reviews, setReviews] = React.useState(data[0].reviews);
    const [Stock, setStock] = React.useState(data[0].stock);
    const [DiscountPrice, setDiscountPrice] = React.useState(data[0].discount_price);
    const [Images, setImages] = React.useState(data[0].images);
    const [Image, setImage] = React.useState(data[0].image);
    const [SKU, setSKU] = React.useState(data[0].SKU);


    async function addProduct() {
        // add product to database
        console.log("add product");
        // create product object
        let product = {
            name: Name,
            description: Description,
            price: Price,
            discount: Discount,
            availablequality: AvailableQuality,
            imgurl: Images,
            SKU: SKU,
            stock: Stock,
        }

        try {
            const {data, error} = await supabaseClient
                .from('products')
                .update([
                    {...product}
                ])
                .eq('id', ID)
                .then(res => {
                    if (res.error) {
                        console.log("Res.ERROR", res.error);
                    }
                })
            console.log("Update Done")
        } catch (err) {
            console.log("ERR");
        }

    }


    return (
        <Admin>
            <div className="flex flex-wrap">
                {/*Form for get product details*/}
                <div className="w-full  p-3">
                    <div className="flex flex-wrap">

                        {/*Product ID Label*/}
                        <div className="md:w-full lg:w-1/2  p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="ID">
                                Product ID
                            </label>
                            {/*Label uneditable*/}
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="ID" type="text" placeholder="Product ID"
                                //value={id}
                                value={ID}
                                onChange={(e) => setID(e.target.value)}
                                readOnly={true}
                                disabled={true}
                            />
                            <p className="text-gray-700 text-xs italic">
                                Product ID is automatically generated.
                            </p>
                        </div>

                        {/*Product Name*/}
                        <InputField htmlFor="grid-product-name" fieldName="Product Name" placeholder="Product Name"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    fieldDescription="This is the name of the product"/>

                        {/*Product Description*/}
                        {/*<div className="md:w-full lg:w-1/2 p-3">*/}
                        <div className="w-full p-3">
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

                        {/*Product Price*/}
                        <InputField htmlFor="grid-product-price" fieldName="Product Price" placeholder="Product Price"
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    fieldDescription="This is the price of the product"
                                    fieldSize="half"/>

                        {/*Product Discount*/}
                        <InputField htmlFor="grid-product-discount" fieldName="Product Discount"
                                    placeholder="Product Discount" value={Discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                    fieldDescription="This is the discount of the product"
                                    fieldSize="half"/>

                        {/*Product Available Quality*/}
                        <InputField htmlFor="grid-product-available-quality" fieldName="Product Available Quality"
                                    placeholder="Product Available Quality" value={AvailableQuality}
                                    onChange={(e) => setAvailableQuality(e.target.value)}
                                    fieldDescription="This is the available quality of the product"
                                    fieldSize="half"/>

                        {/*SKU*/}
                        <InputField htmlFor="grid-product-sku" fieldName="SKU" placeholder="SKU" value={SKU}
                                    onChange={(e) => setSKU(e.target.value)}
                                    fieldDescription="This is the SKU of the product"
                                    fieldSize="half"/>

                        {/*Product Category*/}
                        <InputField htmlFor="grid-product-category" fieldName="Product Category"
                                    placeholder="Product Category" value={Category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    fieldDescription="This is the category of the product"/>

                        {/*Product Reviews*/}
                        <InputField htmlFor="grid-product-reviews" fieldName="Product Reviews"
                                    placeholder="Product Reviews" value={Reviews}
                                    onChange={(e) => setReviews(e.target.value)}
                                    fieldDescription="This is the reviews of the product"/>

                        {/*Product Stock*/}
                        <InputField htmlFor="grid-product-stock" fieldName="Product Stock" placeholder="Product Stock"
                                    value={Stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    fieldDescription="This is the stock of the product"/>

                        {/*Product Images*/}
                        <InputField htmlFor="grid-product-images" fieldName="Product Images"
                                    placeholder="Product Images" value={Images}
                                    onChange={(e) => setImages(e.target.value)}
                                    fieldDescription="This is the images of the product"/>

                        <br/>

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

NewProduct.getInitialProps = async ({query}) => {

    const {id} = query
    console.log("inital Props ", id);

    let {data, error} = await supabaseClient
        .from('products')
        .select("*")
        .eq('id', id)

    console.log(data);
    console.log(error);

    return {
        id: id,
        data: data,
        error: error
    }
}
