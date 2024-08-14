import React from "react"
import styles from "./index.module.css"
import photo from "../../asset/images/Ellipse 1.png"
import {Icons} from "../../icon/icons";
import Table from "../Table";


const DashBoard : React.FC = () => {
    return (
        <div className={"flex flex-row justify-between font-custom-fonts-family"}>
            <div className={`flex flex-col w-custom-side-bar-width ml-4 mt-10 ${styles.sideBar}`}>
                <div className={"flex flex-row gap-8 ml-5"}>
                    <img src={photo} alt={"dummy profile pic"} width={80}/>
                    <div className={"flex flex-col gap-2 mt-2"}>
                        <h4 className={"font-custom-font-weight text-custom-font-size"} >Anna George</h4>
                        <p className={"text-custom-font-size2 text-custom-customer-position-color"}>Customer Operations</p>
                    </div>

                </div>


                <div className={"mt-20 flex flex-col gap-14  font-custom-font-weight2 text-custom-color text-custom-font-size3"}>
                    <div className={"flex flex-row gap-4 cursor-pointer ml-5"}>
                        <img src={Icons.dashboard} alt={"dashboard"} width={30}/>
                        <p>Dashboard</p>
                    </div>

                    <div className={"flex flex-row gap-5 cursor-pointer ml-5"}>
                        <img src={Icons.task} alt={"task"} width={25}/>
                        <p>Task</p>
                    </div>

                    <div className={"bg-custom-customer-bg-color w-80  h-14 p-3 rounded-custom-border-radius"}>
                    <div className={"flex flex-row gap-4 cursor-pointer pl-3 text-custom-customer-text-color"}>
                        <img src={Icons.contact} alt={"customers"} width={30}/>
                        <p>Customers</p>
                    </div>
                        </div>

                    <div className={"flex flex-row gap-5 cursor-pointer ml-5"}>
                        <img src={Icons.chat} alt={"chat"} width={25}/>
                        <p>Chats</p>
                    </div>

                    <div className={"flex flex-row gap-4 cursor-pointer ml-5"}>
                        <img src={Icons.dispute} alt={"disputes"} width={30}/>
                        <p>Disputes</p>
                    </div>

                    <div className={"mt-20 w-72 ml-5"}>
                        <img src={Icons.line} alt={"line"}/>
                    </div>

                    <div className={"flex flex-row gap-4 cursor-pointer ml-5"}>
                        <img src={Icons.setting} alt={"settings"} width={30}/>
                        <p>Settings</p>
                    </div>
                </div>
            </div>


            <div className={"w-full h-custom-table-container bg-white rounded-3xl mt-2"}>
                <Table/>
            </div>
        </div>
    )
}

export default DashBoard