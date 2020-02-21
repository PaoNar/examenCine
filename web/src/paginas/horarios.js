import React, { Component } from 'react';
import Sidebar from '../navegacion/navigation';
import Salir from '../navegacion/salir';
import axios from 'axios';

const API = "http://localhost:5000/film/horario";

class Horario extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                id: 'N°',
                hora: 'Horas de Proyección',
                
            },
            horarios: [],
            hora: '',
        }
        
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ horarios: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            datos: {
                hora: this.state.hora
            }
        }

        if (this.post.datos.hora === "" 
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                window.location.assign("http://localhost:3000/schedules");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/schedules");
    }

    

    render() {
        const { 
            hora, horarios
        } = this.state
        return(
            <div>
                <Sidebar />,
                <Salir/>
                
                <div className="  mx-auto w-64 ">
                    <hr />
                    <main className="my-8">
                        <p className="text-center my-5 text-2xl">Nuevo Horario</p>
                        <form className="bg-white  px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8" onSubmit={ this.saveData }>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="block text-sm text-gray-600" htmlFor="hora">Horario</label>
                                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                          type="text" 
                                          placeholder=" 10 a 12 " 
                                          name="hora"
                                          value={ hora }
                                          onChange={ this.changeHandler } 
                                        />
                                </div>
                            </div>
                      
                            
                            <div className="mt-4">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                            </div>
                        </form>



                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-screen text-md bg-white shadow-md rounded mb-4">
                                 <thead className="border-b">
                                    <tr>
                                       <th className="text-left p-3 px-5">{ this.state.table_header.id }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.hora }</th>
  
                                    </tr>
                                 </thead>

                               <tbody>
                                     <tr className="border-b   hover:bg-orange-100 ">
                                        <td>
                                            { horarios.map(element => <p className="p-2 px-5" key={ element.id }> {element.id} </p>) }
                                        </td>
                                        <td>
                                            { horarios.map(element => <p className="p-2 px-5" key={ element.id }> {element.hora} </p>) }
                                        </td>

                                      
                                       
                                         <td>
                                            { horarios.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ () => this.deleteData(element.id) } className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></p> )}
                                         </td>
                                     </tr>
                                 </tbody>
                            </table>
                      </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Horario;

