import React from "react";
import {Icons} from "../../icon/icons";

const Table: React.FC = () => {
    return (

        <div className={"w-full h-custom-table-container bg-white rounded-3xl mt-2 font-custom-fonts-family"}>
            <div className={"bg-custom-grey2 w-custom-width h-custom-table-container2 ml-10 mr-5 mt-10 rounded-custom-border-radius flex flex-col"}>

                <div className={"ml-5 mt-12 flex flex-row justify-between bg-search-container-color w-custom-width2 p-3 rounded-custom-border-radius"}>
                    <div className={"flex flex-row bg-white rounded-custom-border-radius"}>
                        <div className={"mt-3 ml-6 "}>
                            <img src={Icons.search} alt={"search"} width={20}/>
                        </div>
                        <div>
                            <input type={"text"} className={"w-80 h-11 rounded-custom-border-radius outline-none  text-custom-font-size2 pl-2"}/>
                        </div>

                    </div>

                    <div>
                          <div className={"flex flex-row gap-3 w-28 border-custom-color2 border-solid border-2 p-2 rounded-custom-border-radius cursor-pointer"}>
                              <img src={Icons.filter} alt={"filter"} className={"w-5 h-4 mt-1 ml-2"} />
                              <p className={""}>Filter</p>
                          </div>
                    </div>
                </div>

                <div>
                    {/* Table content or additional elements can be added here */}
                </div>

            </div>


        </div>


    );
};

export default Table;
