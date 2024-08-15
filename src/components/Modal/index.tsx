import React, { useEffect, useState } from "react";
import { useGetUsersMutation } from "../../app/slice";
import { toast, ToastContainer } from "react-toastify";
import { ModalProps, User } from "./Interface";
import "react-toastify/dist/ReactToastify.css";
import {Icons} from "../../icon/icons";

const Modal: React.FC<ModalProps> = ({ index, onClose }) => {
    const [getUsers] = useGetUsersMutation();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            toast.info('Loading Customer\'s Information...', { autoClose: false });
            try {
                const response = await getUsers({
                    query: `
                        query {
                            users {
                                data {
                                    name
                                    email
                                    phone
                                    address {
                                        street
                                        city
                                        zipcode
                                    }
                                    company {
                                        name
                                        catchPhrase
                                        bs
                                    }
                                }
                            }
                        }
                    `,
                }).unwrap();


                if (response && response?.data?.users?.data) {
                    setUser(response?.data?.users?.data[index]);
                    toast.dismiss();
                }

            } catch (err) {
                console.error("Failed to fetch users:", err);
                toast.error("Failed to fetch users");
            }
        };

        fetchData();
    }, [getUsers, index]);

    if (!user) {
        return <ToastContainer />;
    }

    return (
        <div className="relative p-6 ml-3">
            <ToastContainer/>
            <div className="absolute top-2 right-6 cursor-pointer text-lg font-bold" onClick={onClose}>
                <p className={"text-4xl"}> ×</p>
            </div>
            <h2 className="text-2xl font-semibold mt-40">Customer's Information</h2>

            <div className={"mt-5 w-72 "}>
                <img src={Icons.line} alt={"line"}/>
            </div>

            <div className="mt-10">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
            <div className="mt-4">
                <p><strong>Address :</strong></p>
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
            </div>
            <div className="mt-4">
                <p><strong>Company's Information:</strong></p>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
};

export default Modal;
