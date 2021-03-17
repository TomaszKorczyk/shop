import React from 'react';
import puzzle from "../template/icons/puzzle.svg";

export default function Header() {
    return (
        <nav className="bg-green-200 flex dark:bg-gray-900 justify-between">
            <ul className="flex justify-between w-full">
                <li 
                    className="bg-red-700 flex m-1 dark:bg-yellow-400"
                >
                    <a href="/">
                        <img 
                            src={puzzle} 
                            width="100"
                            alt="logo" 
                        />
                    </a>
                </li>
            </ul>
            <ul className="flex justify-around m-2 items-center w-full">        
                <li>
                    <p className="text-yellow-400 cursor-pointer hover:text-yellow-600 h-full mx-2">Edit</p>
                </li>
                <li>
                    <p className="text-green-500 mx-2 align-middle items-center">Home</p>
                </li>
            </ul>    
        </nav>
    )
}
