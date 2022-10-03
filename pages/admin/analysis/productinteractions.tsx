import React, {useEffect} from "react";
import CardTables from "../../../components/Cards/CardTables.tsx";
import Admin from "../../../layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";


export default function Orders({posts}) {
    const [data, setData] = React.useState(posts)

    console.log("Data ", data)

    function RenderProducts() {
        if (!data) {
            console.log("Fetching")
            return <div>Loading...</div>
        }
        if (data?.length) {
            console.log("Running Data", data)
            return (
                <div>
                    <div className="whitespace-pre-line bg-blue-50 hover:whitespace-normal p-2 m-5">

                        Click - 1

                        Like - 2

                        Wishlist - 4

                        Add to Cart - 5

                        Proceed to Purchase - 3

                    </div>

                    <CardTables title="User Interactions Based on Product"
                                data={data}
                                column={[
                                    "ProductID", "interaction Type", "count"
                                ]}
                        //onAddNew={onAddNewFunc}
                                primarykey={[
                                    {
                                        showName: "Product ID",
                                        name: "ProductID",
                                        dataKey: "id",
                                        bold: true,
                                    }
                                ]}
                                datadetail={[
                                    {
                                        name: "interaction Type",
                                    },
                                    {
                                        name: "count",
                                    },

                                ]}
                    />


                </div>
            )
        }
    }

    return (
        <Admin>
            <div className="flex flex-wrap">
                {RenderProducts()}
            </div>
        </Admin>
    );

}

Orders.layout = Admin;


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://127.0.0.1:8000/productinteractions/3')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
