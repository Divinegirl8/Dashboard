
import React, { useEffect, useState } from "react";
import { useGetUsersMutation } from "../../app/slice";
import { Icons } from "../../icon/icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


interface User {
    name: string;
    email: string;
    phone: string;
    company: {
        name: string;
    };
}


const Table: React.FC = () => {
    const [getUsers, { data }] = useGetUsersMutation();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            toast.info('Loading Customers...', { autoClose: false });
            try {
                await getUsers({
                    query: `
                        query {
                            users {
                                data {
                                    name
                                    email
                                    phone
                                    company {
                                        name
                                    }
                                }
                            }
                        }
                    `,
                }).unwrap();
                toast.dismiss();
            } catch (err) {
                toast.error('Failed to fetch users');
                console.error('Failed to fetch users:', err);
            }
        };

        fetchData();
    }, [getUsers]);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data?.data?.users?.data?.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil((data?.data?.users?.data?.length || 0) / itemsPerPage);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full h-custom-table-container bg-white rounded-3xl mt-2 font-custom-fonts-family">
            <ToastContainer />
            <div className="bg-custom-grey2 w-custom-width h-custom-table-container2 ml-10 mr-5 mt-10 rounded-custom-border-radius flex flex-col">
                <div className="ml-5 mt-12 flex flex-row justify-between bg-search-container-color w-custom-width2 p-3 rounded-custom-border-radius">
                    <div className="flex flex-row bg-white rounded-custom-border-radius">
                        <div className="mt-3 ml-6">
                            <img src={Icons.search} alt="search" width={20} />
                        </div>
                        <div>
                            <input
                                type="search"
                                className="w-80 h-11 rounded-custom-border-radius outline-none text-custom-font-size2 pl-2"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row gap-3 w-28 border-custom-color2 border-solid border-2 p-2 rounded-custom-border-radius cursor-pointer">
                            <img src={Icons.filter} alt="filter" className="w-5 h-4 mt-1 ml-2" />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <table className="w-custom-width2 ml-5 relative">
                        <thead>
                        <tr className="bg-custom-color3 h-16">
                            <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Name</th>
                            <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Email</th>
                            <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Phone</th>
                            <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Company Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        {paginatedData?.map((user: User, index: number) => (
                            <tr key={index}>
                                <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.name}</td>
                                <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.email}</td>
                                <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.phone}</td>
                                <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.company.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="relative mt-48 mr-20 flex justify-end">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <div
                            key={index}
                            className={`mx-1 border-solid border-2 rounded-3xl h-11 w-11 pt-2 pl-4 cursor-pointer ${
                                currentPage === index + 1 ? 'border-custom-color-4 bg-custom-color-5' : ''
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
            </div>
    );
};

export default Table;
