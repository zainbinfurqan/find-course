import React from 'react';

function CourseCard({data,...props}) {
    return (
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                </div>
                <div class="">
                    <p class="text-xl text-center text-gray-700 font-bold mb-2">{data.title}</p>
                    <p class="text-base text-center text-gray-400 font-normal">{data.instructor}</p>
                    <div className='flex flex-wrap'>
                        {data.tags.map((tags,index)=>{
                            return(
                                <p class="text-small text-gray-400 font-normal">#{tags}&nbsp;</p>
                            )
                        })}
                    </div>
                    <p class="text-base text-gray-400 font-normal">{data.description}</p>
                    <div className='flex items-center my-2'>
                        <p class="text-base  text-gray-700 font-bold">Instructor:&nbsp;</p>
                        <p class="text-base text-gray-400 font-normal">{data.instructor}</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <p class="text-base  text-gray-700 font-bold">Rating:&nbsp;</p>
                        <p class="text-base text-gray-400 font-normal">{data.instructor}</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <p class="text-base  text-gray-700 font-bold">Link:&nbsp;</p>
                        <p class="text-base text-gray-400 font-normal">Go to course</p>
                    </div>
                </div>
            </div>
    );
}

export default CourseCard;