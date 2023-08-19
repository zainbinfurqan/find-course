'use client'

import CourseCard from '@/components/courseCard';
import SearchBar from '@/components/searchBar';
import React, { useContext, useEffect, useState } from 'react';
import data from '../../../data.JSON'
import { GlobleState } from "../../context/context";
import io from 'socket.io-client';
const socket = io('ws://localhost:3001', { transports: ['websocket'] });

function Serach(props) {

    // const { globleState, setGlobleState } = useContext(GlobleState);
    const [text, setText] = useState('')
    const [suggestedSearchText, setSuggestedSearchText] = useState([])

    useEffect(() => {
        eventLS()
        return () => socket.off('receive-suggestion');
    }, [socket])

    const eventLS = () => {
        socket.on('receive-suggestion', (data) => {
            console.log(data)
            data.data.length > 0 && setSuggestedSearchText(data.data)
        })
    }

    const handleTextChange = (value) => {
        setText(value.target.value)
    }

    useEffect(() => {
        if (text !== '') {
            console.log('useEffect')
            socket.emit('search-auto-suggest', { t: text })
        }
    }, [text])

    // const handleClickSearch = async () => {
    //     await searchWithQuery(text)
    // }

    return (
        <div className='w-full'>
            <SearchBar handleTextChange={handleTextChange} value={text}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-3">
                {data.searchResult.map((item,index)=>{
                    return(
                        <CourseCard data={item} key={index} id={index}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Serach;