// import React, { useEffect, useState } from "react";
// import { useGetUsersMutation } from "../../app/slice";
// import { Icons } from "../../icon/icons";
// import { ToastContainer, toast } from "react-toastify";
// import Modal from "../Modal";
// import { User } from "./Interface";
// import "react-toastify/dist/ReactToastify.css";
//
// const Table: React.FC = () => {
//     const [getUsers, { data }] = useGetUsersMutation();
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedCompany, setSelectedCompany] = useState("");
//     const itemsPerPage = 5;
//
//     useEffect(() => {
//         const fetchData = async () => {
//             toast.info('Loading Customers...', { autoClose: false });
//             try {
//                 await getUsers({
//                     query: `
//                         query {
//                             users {
//                                 data {
//                                     id
//                                     name
//                                     email
//                                     phone
//                                     company {
//                                         name
//                                     }
//                                 }
//                             }
//                         }
//                     `,
//                 }).unwrap();
//                 toast.dismiss();
//             } catch (err) {
//                 toast.error('Failed to fetch users');
//                 console.error('Failed to fetch users:', err);
//             }
//         };
//
//         fetchData();
//     }, [getUsers]);
//
//     const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchQuery(event.target.value);
//         setCurrentPage(1);
//     };
//
//     const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCompany(event.target.value);
//         setCurrentPage(1);
//     };
//     const startIndex = (currentPage - 1) * itemsPerPage;
//
//     const filteredData = data?.data?.users?.data?.filter((user: User) =>
//         user.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//
//     const filteredData2 = data?.data?.users?.data?.filter((user: User) => {
//         const matchesSearchQuery = user.name.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesCompany = selectedCompany ? user.company.name === selectedCompany : true;
//         return matchesSearchQuery && matchesCompany;
//     });
//
//
//     const paginatedData = filteredData?.slice(startIndex, startIndex + itemsPerPage);
//     const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
//
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     const handleRowClick = (userId: number) => {
//         setSelectedUserId(userId);
//     };
//
//     const handleCloseModal = () => {
//         setSelectedUserId(null);
//     };
//
//
//     const originalData = data?.data?.users?.data || [];
//     const selectedUser = originalData.find((user: User) => user.id === selectedUserId) || null;
//
//     return (
//         <div className={`w-full h-custom-table-container bg-white rounded-3xl mt-2 font-custom-fonts-family ${selectedUserId !== null ? 'opacity-50' : ''}`}>
//             <ToastContainer />
//             <div
//                 className="bg-custom-grey2 w-custom-width h-custom-table-container2 ml-10 mr-5 mt-10 rounded-custom-border-radius flex flex-col">
//                 <div
//                     className="ml-5 mt-12 flex flex-row justify-between bg-search-container-color w-custom-width2 p-3 rounded-custom-border-radius">
//                     <div className="flex flex-row bg-white rounded-custom-border-radius">
//                         <div className="mt-3 ml-6">
//                             <img src={Icons.search} alt="search" width={20}/>
//                         </div>
//                         <div>
//                             <input
//                                 type="search"
//                                 className="w-80 h-11 rounded-custom-border-radius outline-none text-custom-font-size2 pl-2"
//                                 data-testid="search-input"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                                 placeholder="Search by name..."
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <div
//                             className="flex flex-row gap-3 w-48 border-custom-color2 border-solid border-2 p-2 rounded-custom-border-radius cursor-pointer">
//                             <img src={Icons.filter} alt="filter" className="w-5 h-4 mt-1 ml-2"/>
//                             <select
//                                 className="outline-none w-full bg-transparent"
//                                 value={selectedCompany}
//                                 onChange={handleCompanyChange}
//                             >
//                                 <option value="">Filter by Company</option>
//                                 {companyNames.map((company : string, index : number) => (
//                                     <option key={index} value={company}>
//                                         {company}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="mt-6">
//                     <table className="w-custom-width2 ml-5 relative">
//                         <thead>
//                         <tr className="bg-custom-color3 h-16">
//                             <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Name</th>
//                             <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Email</th>
//                             <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Phone</th>
//                             <th className="py-2 px-4 text-left font-custom-font-weight2 w-1/4">Company Name</th>
//                         </tr>
//                         </thead>
//
//                         <tbody>
//                         {paginatedData?.length ? (
//                             paginatedData.map((user: User) => (
//                                 <tr
//                                     key={user.id}
//                                     className="hover:bg-search-container-color cursor-pointer hover:py-4 hover:px-6 hover:h-16"
//                                     onClick={() => handleRowClick(user.id)}
//                                 >
//                                     <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.name}</td>
//                                     <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.email}</td>
//                                     <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.phone}</td>
//                                     <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.company.name}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan={4} className="py-4 text-center font-custom-font-weight2">No user found</td>
//                             </tr>
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//
//                 <div className="flex justify-end mt-36">
//                     {Array.from({length: totalPages}, (_, index) => (
//                         <div
//                             key={index}
//                             className={`mx-1 border-solid border-2 rounded-3xl h-11 w-11 pt-2 pl-4 cursor-pointer ${
//                                 currentPage === index + 1 ? 'border-custom-color-4 bg-custom-color-5' : ''
//                             }`}
//                             onClick={() => handlePageChange(index + 1)}
//                         >
//                             {index + 1}
//                         </div>
//                     ))}
//                 </div>
//
//
//             </div>
//
//             {selectedUserId !== null && selectedUser && (
//                 <>
//                     <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
//                     <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50">
//                         <Modal index={selectedUserId - 1} onClose={handleCloseModal}/>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Table;
//

import React, { useEffect, useState } from "react";
import { useGetUsersMutation } from "../../app/slice";
import { Icons } from "../../icon/icons";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../Modal";
import { User } from "./Interface";
import "react-toastify/dist/ReactToastify.css";

const Table: React.FC = () => {
    const [getUsers, { data }] = useGetUsersMutation();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
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
            id
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

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCompany(event.target.value);
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;

    const filteredData = data?.data?.users?.data?.filter((user: User) => {
        const matchesSearchQuery = user.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCompany = selectedCompany ? user.company.name === selectedCompany : true;
        return matchesSearchQuery && matchesCompany;
    });

    const paginatedData = filteredData?.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleRowClick = (userId: number) => {
        setSelectedUserId(userId);
    };

    const handleCloseModal = () => {
        setSelectedUserId(null);
    };

    const companyNames :string[] = Array.from(new Set(data?.data?.users?.data.map((user: User) => user.company.name)));

    const originalData = data?.data?.users?.data || [];
    const selectedUser = originalData.find((user: User) => user.id === selectedUserId) || null;

    return (
        <div
            className={`w-full h-custom-table-container bg-white rounded-3xl mt-2 font-custom-fonts-family ${selectedUserId !== null ? 'opacity-50' : ''}`}>
            <ToastContainer/>
            <div
                className="bg-custom-grey2 w-custom-width h-custom-table-container2 ml-10 mr-5 mt-10 rounded-custom-border-radius flex flex-col">
                <div
                    className="ml-5 mt-12 flex flex-row justify-between bg-search-container-color w-custom-width2 p-3 rounded-custom-border-radius">
                    <div className="flex flex-row bg-white rounded-custom-border-radius">
                        <div className="mt-3 ml-6">
                            <img src={Icons.search} alt="search" width={20}/>
                        </div>
                        <div>
                            <input
                                type="search"
                                className="w-80 h-11 rounded-custom-border-radius outline-none text-custom-font-size2 pl-2"
                                data-testid="search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by name..."
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex flex-row gap-3 w-48 border-custom-color2 border-solid border-2 p-2 rounded-custom-border-radius cursor-pointer">
                            <img src={Icons.filter} alt="filter" className="w-5 h-4 mt-1 ml-2"/>
                            <select
                                className="outline-none w-full bg-transparent"
                                value={selectedCompany}
                                onChange={handleCompanyChange}
                            >
                                <option value="">Filter by Company</option>
                                {companyNames.map((company: string, index: number) => (
                                    <option key={index} value={company}>
                                        {company}
                                    </option>
                                ))}
                            </select>
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
                        {paginatedData?.length ? (
                            paginatedData.map((user: User) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-search-container-color cursor-pointer hover:py-4 hover:px-6 hover:h-16"
                                    onClick={() => handleRowClick(user.id)}
                                >
                                    <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.name}</td>
                                    <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.email}</td>
                                    <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.phone}</td>
                                    <td className="py-2 px-4 font-custom-font-weight2 pt-9 w-1/4">{user.company.name}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="py-4 text-center font-custom-font-weight2">No user found</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="flex justify-end" style={{marginTop:"-90px"}} >
           <div className={"mr-20 flex flex-row"}>
               {Array.from({length: totalPages}, (_, index) => (
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


            {selectedUserId !== null && selectedUser && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50">
                        <Modal index={selectedUserId - 1} onClose={handleCloseModal}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default Table;
