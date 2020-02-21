import React from'react';
import { Link } from "react-router-dom";

const Salir = () => (
        <div className=" flex-grow flex mr-2 ml-64">
        <div className=" flex-grow flex">
            </div>
            <div>
                <Link to="/">
                    <button className="w-full px-10 py-2 font-bold text-white bg-red-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                      Salir
                    </button>
                </Link>
            </div>            
        </div>
)

export default Salir;