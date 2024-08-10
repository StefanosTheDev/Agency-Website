'use client'
import Image from 'next/image';

export default function TestimonialTile(props) {
    return (
        <div className="flex flex-col bg-gray-100 w-full h-auto md:h-[277px] rounded-lg p-6 justify-between max-w-xl mx-auto">
            <div className="flex w-full justify-center items-center px-6 pt-4">
                <p className="text-center text-gray-800">{props.testimonial}</p>
            </div>
            <div className="flex flex-row w-full justify-start items-center gap-4 mt-4">
                <Image className="w-12 h-12 rounded-full bg-gray-300" src={props.avatar} alt={props.name} width={48} height={48} />
                <div>
                    <p className="font-semibold text-gray-800">{props.name}</p>
                    <p className="text-gray-500">{props.title}</p>
                </div>
            </div>
        </div>
    );
}
