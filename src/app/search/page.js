import CourseCard from '@/components/courseCard';
import SearchBar from '@/components/searchBar';
import React from 'react';

function Serach(props) {

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
            <SearchBar/>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-3">
                {course.map((item,index)=>{
                    return(
                        <CourseCard data={item}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Serach;