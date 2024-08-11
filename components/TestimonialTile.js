'use client'
import Image from 'next/image';

export default function TestimonialTile({ testimonial, name, title, avatar }) {
    return (
        <div className="flex flex-col bg-gray-100 w-full max-w-xl h-auto md:h-[277px] rounded-lg p-6 justify-between mx-auto">
            <div className="flex w-full justify-center items-center px-6 pt-4">
                <p className="text-center text-gray-800">{testimonial}</p>
            </div>
            <div className="flex flex-row w-full justify-start items-center gap-4 mt-4">
                <Image
                    className="rounded-full bg-gray-300"
                    src={avatar}
                    alt={name}
                    width={48}
                    height={48}
                />
                <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
}
