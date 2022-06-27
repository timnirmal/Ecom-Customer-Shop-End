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
    const [UserName, setUserName] = React.useState(data[0].name);
    const [Price, setPrice] = React.useState(data[0].price);
    const [Discount, setDiscount] = React.useState(data[0].discount);



    async function addProduct() {
        // add product to database
        console.log("add product");
        // create product object
        let product = {
            name: Name,
            price: Price,
            discount: Discount,
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

                        {/*Order ID Label*/}
                        <div className="md:w-full lg:w-1/2  p-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="ID">
                                Order ID
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
                                Order ID is automatically generated.
                            </p>
                        </div>

                        {/*Product Name*/}
                        <InputField htmlFor="grid-user-name" fieldName="User Name" placeholder="User Name"
                                    value={UserName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    fieldDescription="This is the name of the user"/>

                        {/*Product Price*/}
                        <InputField htmlFor="grid-product-price" fieldName="Product Price" placeholder="Product Price"
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    fieldDescription="This is the price of the product"
                                    fieldSize="half"/>

                        {/*Product Discount*/}
                        <InputField htmlFor="grid-order-discount" fieldName="Order Discount"
                                    placeholder="Order Discount" value={Discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                    fieldDescription="This is the discount of the order"
                                    fieldSize="half"/>


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
        .from('orders')
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
