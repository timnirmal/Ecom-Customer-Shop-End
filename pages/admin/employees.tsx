import React from "react";
import CardTables from "/components/Cards/CardTables.tsx";
import Admin from "/layout/Admin.js";
import {useRealtime} from "react-supabase";
import Router from "next/router";
import {faEdit, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {supabaseClient} from "../../lib/supabase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAuth} from '../../lib/auth'


export default function Orders() {
    const {loading, users, loggedIn, role} = useAuth()


    const [result] = useRealtime('worker', {
            select: {
                columns: "*",
            }
        }
    )
    const {data, fetching, error} = result
    console.log("Int Data ", data)
    console.log("Loading ", loading)
    console.log("Users ", users)
    console.log("Logged In ", loggedIn)
    console.log("Role ", role)
    console.log("Role ", role)
    console.log("Role ", role)
    console.log("Role ", role)


    function RenderProducts() {
        if (fetching) {
            console.log("Fetching")
            return <div>Loading...</div>
        }
        if (error) {
            console.log("Error", error)
            return <div>Error: {error.message}</div>
        }
        if (data?.length) {
            console.log("Running Data", data)
            return (
                <div>


                    <CardTables title="Employee Details"
                                data={data}
                                column={[
                                    "Emp ID", "Name", "Email", "Contact", "Role", "DOB"
                                ]}

                                primarykey={[
                                    {
                                        showName: "Emp ID",
                                        name: "id",
                                        dataKey: "id",
                                        bold: true,
                                    }
                                ]}
                                datadetail={[
                                    {
                                        name: "name",
                                    },
                                    {
                                        name: "email",
                                    },
                                    {
                                        name: "contact",
                                    },
                                    {
                                        name: "role",
                                    },
                                    {
                                        name: "dob",
                                        type: "date",
                                    }

                                ]}
                    />
                </div>

            )

        }
    }

    return (
        <Admin>
            <div className="flex flex-wrap">
                {/*{users  && RenderProducts()}*/}
                {role == "Admin" && RenderProducts()}
                {!users && role != "Admin" && <div className="flex flex-wrap"> You have no permission to view this page</div>}
            </div>
        </Admin>
    );

}

Orders.layout = Admin;
