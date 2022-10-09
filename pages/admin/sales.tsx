// sales by last number of sale /salesnum/{numoforders}
// BY dates /sales/{numofdays}
// By dates plot /sales/{numofdays}/plot


import React, {useEffect} from "react";
import CardTables from "../../components/Cards/CardTables.tsx";
import Admin from "../../layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";


export default function Sales({posts}) {
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

                    <CardTables title="User Interactions Based on Product"
                                data={data}
                                column={[
                                    "ProductID", "interaction Type", "count"
                                ]}
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

Sales.layout = Admin;


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch('http://127.0.0.1:8000/sales/30/plot')
    // console.log(res)
    const posts = "https://res.cloudinary.com/dxbi9m7sv/image/upload/sales"

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
