'use client'

import CourseCard from '@/components/courseCard';
import SearchBar from '@/components/searchBar';
import React, { useContext } from 'react';
import { GlobleState } from "../../context/context";


function Serach(props) {

    const { globleState, setGlobleState } = useContext(GlobleState);


    const course = [
        {id:'',title:'title',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'Zain Ahmed',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
        {id:'',title:'title',description:'',link:'',category:'',subCategory:'',tags:['react','web','javascript'],dateOfPublish:'',type:'',instructor:'instructor',images:[],ratting:''},
    ]

    return (
        <div className='w-full'>
            {console.log(globleState,"globleState")}
            <SearchBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-3">
                {course.map((item,index)=>{
                    return(
                        <CourseCard data={item} key={index} id={index}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Serach;