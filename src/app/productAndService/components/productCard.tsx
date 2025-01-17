import React, { ReactHTMLElement } from 'react'
import Image from 'next/image'


import { FaStar, FaRegStar } from "react-icons/fa";
import Modal from './modal'

interface productCardProps {
    id: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

export default function productCard({ id, name, type, category, price, image, subtitle }: productCardProps) {
    const openModal = (id:number) => {
        console.log("product ID:",id)
        const modal = document.getElementById(`my_modal_2${id}`) as HTMLDialogElement;
        modal?.showModal();
    }

    return (
        <>
            <div
                key={id}
                className="bg-[#ffffff] p-4 w-32 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto"
            >
                <div className="w-full space-y-2">
                    <h1 className="text-black1 text-2xl text-center font-bold truncate">{name}</h1>
                    <div className="mx-auto w-44 h-44 rounded-md overflow-hidden mb-4">
                        <Image
                            src={image || "default.jpg"}
                            alt="models"
                            width={200}
                            height={200}
                            priority={true}
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                            className="rounded-md mx-auto"
                        />
                    </div>
                    <p className="text-gray1 text-start truncate">{subtitle}</p>

                    <div className="flex flex-row">
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaRegStar size={12} />
                        <FaRegStar size={12} />
                    </div>

                    <div
                        className="text-black1 text-xl text-justify overflow-hidden text-ellipsis mt-2"
                        style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                    >
                        {price}
                    </div>

                    <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                        <button className="px-3 py-1 items-center text-pink1 rounded hover:text-blue1" onClick={()=>openModal(id)}>
                            จองคิว
                        </button>
                        <Modal id={id} category={category} price={price} />
                    </div>
                </div>
            </div>

        </>
    )
}
