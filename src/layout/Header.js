import React from 'react';
import useDarkMode from '../hook/useDarkMode';
import puzzle from "../template/icons/puzzle.svg";
import DarkMode from './DarkMode';

export default function Header() {
    useDarkMode();
    return (
        <nav className="bg-yellow-500 flex dark:bg-black justify-between min-h-full min-w-full overflow-hidden transition duration-500">
            <ul className="flex justify-between w-4/12">
                <li 
                    className="flex items-center mx-2"
                >
                    <a href="/">
                        <img
                            className="bg-green-700 dark:bg-yellow-300 min-h-full min-w-max opacity-80 hover:opacity-100 rounded m-1"
                            src={puzzle}
                            alt="logo" 
                        />
                    </a>
                </li>
            </ul>
            <ul className="flex flex-wrap justify-end items-center w-5/12 font-bold">
                <li>
                    <p 
                        className="text-gray-800 hover:text-green-700 dark:text-white dark:hover:text-yellow-300 cursor-pointer mx-2"
                    >
                        Edit
                    </p>
                </li>
                <li>
                    <p 
                        className="text-gray-800 hover:text-green-700 dark:text-white dark:hover:text-yellow-300 cursor-pointer mx-2"
                    >
                        Home
                    </p>
                </li>
                <li className="m-2">
                    <DarkMode />
                </li>
            </ul>    
        </nav>
    );
}