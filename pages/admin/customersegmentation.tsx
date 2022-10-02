import React from "react";

// components

import CardTable from "/components/Cards/CardTable.js";

// layout for page

import Admin from "/layout/Admin.js";
import useSWR from 'swr'

export default function Tables({posts}) {

    console.log("Inisde card")
    console.log(posts)



    return (
        <Admin>
            <div className="flex flex-wrap mt-4">
                <div className="font-black text-center">Customer Segmentation Based on Spending Score and Interaction Score</div>
                <img
                    src={posts}
                    alt="..."

                />
            </div>
        </Admin>
    );
}

Tables.layout = Admin;

// Tables.getInitialProps = async (ctx) => {
//     //const fetcher = (...args) => fetch(...args).then((res) => res.json())
//
//     //const payload = 17 // ID is 17
//
//     //const {data, errorss} = useSWR('http://127.0.0.1:8000/segmentation', fetcher)
//
//
//     async function getData() {
//         const res = await fetch('http://127.0.0.1:8000/segmentation')
//         const json = await res.json()
//
//         return json
//     }
//
//     let vari = getData()
//
//     return {
//         namespacesRequired: ['common'],
//         imgsrc: vari,
//     }
//
//     //console.log(data)
//
//
// }


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://127.0.0.1:8000/segmentation')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

// http://127.0.0.1:8000/segmentation


// <CloudinaryContext cloudName="dxbi9m7sv">
//   <div>
//     <Image publicId="sample" width="50" />
//   </div>
//   <Image publicId="sample" width="0.5" />
// </CloudinaryContext>
