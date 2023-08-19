import Link from 'next/link';
import React from 'react';

function CourseCard({data, id, ...props}) {
    return (
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center" key={id}>
                {/* <div className="mb-8">
                    <img className="object-center object-cover h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                </div> */}
                <div className="">
                    <p className="text-xl text-center text-gray-700 font-bold mb-2">{data.title}</p>
                    {/* <p className="text-base text-center text-gray-400 font-normal">{data.instructor}</p> */}
                    {/* <div className='flex flex-wrap'>
                        {data.tags.map((tags,index)=>{
                            return(
                                <p key={index} className="text-small text-gray-400 font-normal">#{tags}&nbsp;</p>
                            )
                        })}
                    </div> */}
                    <p className="text-base text-gray-400 font-normal">{data.description}</p>
                    <div className='flex items-center my-2'>
                        <p className="text-base  text-gray-700 font-bold">Instructor:&nbsp;</p>
                        <p className="text-base text-gray-400 font-normal">{data.instructor}</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <p className="text-base  text-gray-700 font-bold">Rating:&nbsp;</p>
                        <p className="text-base text-gray-400 font-normal">{data.ratting}</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <p className="text-base  text-gray-700 font-bold">Source:&nbsp;</p>
                        <p className="text-base text-gray-400 font-normal">{data.source}</p>
                    </div>
                    
                    <div className='flex items-center my-2'>
                        <p className="text-base  text-gray-700 font-bold">Link:&nbsp;</p>
                        <p className="text-base text-gray-400 font-normal"><Link href={data.link}>Go to course</Link></p>
                    </div>
                </div>
            </div>
    );
}

export default CourseCard;