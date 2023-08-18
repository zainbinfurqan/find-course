'use client'

import { fetchApis } from '@/apis';
import { constants } from '@/constants';
import React, { useState } from 'react';
import Select from 'react-select'

function AddCourseForm(props) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      const [image, setImage] = useState({})

      const handleFileSelect = (e) => {
        // get files from event on the input element as an array
        let files = [...e.target.files];
    
        // ensure a file or files are selected
        if (files && files.length > 0) {
                console.log(files)
                const extension = files[0].name.substring(files[0].name.lastIndexOf('.')+1, files[0].name.length) || files[0].name;
            if(extension === 'jpg' || extension === 'jpeg' || extension === 'png' ){
                setImage(files[0])
                console.log(files)
            }else{
                console.log('error')
            }

        }
      };

      const addCourses = () => {
        try {
            console.log(image,'addCourses')
            fetchApis.addCourse({
                id:'',
                title:'title',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                link:'',category:'',
                subCategory:'',
                tags:['react','web','javascript'],
                dateOfPublish:'',
                type:'',
                instructor:'instructor',
                images:[],
                ratting:'',
                image
            })
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <div className="grid min-h-screen place-items-center">
         <div className="flex items-center w-3/5 justify-center h-screen ">
            <div className="bg-white py-6 rounded-md w-full px-10 shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">Add Course</h1>
            <div className="space-y-4 mt-6">
                <div className="w-full">
                <input type="text" placeholder="title" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="discription" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="link" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="category" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="subcategory" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="instructor" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="rating" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full">
                <input type="text" placeholder="date of publish" className="px-4 py-2 bg-gray-50 w-full" />
                </div>
                <div className="w-full flex">
                    <div className='flex mr-4'>
                        <p>Free</p>
                        <input type="checkbox" placeholder="" className="px-4 py-2 bg-gray-50 w-full ml-2" />
                    </div>
                    <div className='flex '>
                        <p>Paid</p>
                        <input type="checkbox" placeholder="" className="px-4 py-2 bg-gray-50 w-full ml-2" />
                    </div>
                </div>
                <div className="w-full">
                    <Select isMulti={true} options={constants.Tags} />
                </div>
                <div>
                <input id="fileSelect" type="file"  className=''
                    onChange={(e) => handleFileSelect(e)}
                 />
                </div>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight" onClick={addCourses}>Add</button>
            </div>
  </div>
            </div>
    );
}

export default AddCourseForm;