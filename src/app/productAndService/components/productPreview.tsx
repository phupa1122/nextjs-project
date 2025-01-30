import Link from 'next/link';
import React from 'react'
import Star from '@/app/components/star'
import { useRouter } from "next/navigation";

import { Heart } from 'lucide-react';

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}

interface ProductPreviewProps {
    id: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ id, name, type, category, price, image, subtitle }: ProductPreviewProps) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("../account/favorites"); // นำทางไปยังหน้า /favorites
    };

    const handleBook = () => {
        router.push("/productAndService/booking"); // นำทางไปยังหน้า /productAndService/booking
    };
    

    return (
        <>
            <dialog id={`productPreview${id}`} className="modal">
                <div key={id}
                    className="modal-box w-11/12 max-w-2xl bg-slate-50 text-black1 text-start no-scrollbar">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <img
                            alt={image}
                            src={image}
                            className="aspect-[2/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                        />
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>

                            <p className='mt-2 text-gray1 truncate'>
                                {subtitle}
                            </p>
                            <section aria-labelledby="information-heading" className="mt-2">

                                <p className="text-2xl text-gray-900">{price} ฿</p>

                                {/* Reviews */}
                                <div className="mt-6">
                                    <div className="text-sm font-medium text-gray-900">ความคิดเห็น</div>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center">
                                            <Star />
                                        </div>
                                        <p className="sr-only">out of 5 stars</p>
                                        <a href="#" className="ml-3 text-sm font-medium text-blue1 hover:text-indigo-600">
                                            10 ความคิดเห็น
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="options-heading" className="mt-10">
                                <h3 id="options-heading" className="sr-only">
                                    Product options
                                </h3>

                                <form>
                                    <div className='flex justify-between gap-3'>
                                        <button
                                            type="submit"
                                            onClick={handleBook}
                                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink1 px-5 py-2 text-base font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                                        >
                                            จองคิว
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNavigate}
                                            className="mt-6 flex w-fit items-center justify-center rounded-md border-blue1 border-2 bg-slate-50 px-5 py-2 text-base font-medium text-blue1 hover:text-slate-50 hover:bg-blue-400 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                        >
                                            <Heart />
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop space-y-3">
                    <button type="submit">Close</button>
                </form>
            </dialog>
        </>
    )
}

export default ProductPreview