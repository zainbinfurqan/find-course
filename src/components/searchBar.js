import React from 'react';

function SearchBar(props) {

    const search=""

    return (
        <div className='flex items-center justify-center w-full'>
        <div className="flex items-center w-full mx-auto bg-white rounded-lg " x-data="{ search: '' }">
            <div className="w-full">
                <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                    placeholder="search" x-model="search"/>
            </div>
            <div>
                <button type="submit" className={`${(search.length > 0) ? 'bg-purple-500' : 'bg-gray-500 '} flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg`} >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    );
}

export default SearchBar;