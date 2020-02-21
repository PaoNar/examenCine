import React from'react';
import { Link } from "react-router-dom";
import '../styles/tailwind.css';

const menu = () => (
    
<nav className="bg-white  pt-4  shadow-md  ">
        <div className="-mb-px flex justify-end items-center pl-10 mx-14 pr-64">
            
            <a className="px-6">
                    <Link to="/report">
                        <button className="text-gray-900 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-newspaper mr-2 text-sm"></i>
                            Compras
                        </button>
                    </Link>
            </a>



            <a className=" no-underline mx-auto text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3    ">
                <Link to="/movies">
                    <button className="text-green-500 hover:text- text-xs uppercase py-1 font-bold ">
                        Carterlera
                    </button>
                </Link>

            </a>

            
            
             <div className="px-6">
                        <a>
                            <Link to="/add_movie">
                                <li className=" text-gray-800 hover:text-red-600">
                                    Nueva Película+
                                </li>
                            </Link>
                        </a>
            </div>
            <div className="px-6">
                
                        <a>
                            <Link to="/schedules">
                                <li className=" text-gray-800 hover:text-red-600">
                                    
                                 Horarios
                                </li>
                            </Link>
                        </a>
            </div>
            <div className="px-6" >
                        <a>
                            <Link to="/rooms">
                                <li className=" text-gray-800 hover:text-red-500   ">
                                     Salas
                                </li>
                            </Link>
                </a>
            </div>
            <div className="px-6" >
                        <a>
                            <Link to="/films_room_add">
                                <li className=" text-gray-800 hover:text-red-500   ">
                                    asigna peliculas
                                </li>
                            </Link>
                        </a>

                
            </div>
           

            

     </div>
</nav>
)
    
export default menu ;


