/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../navegacion/navigation';
import Salir from '../navegacion/salir';
import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class UpdateMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('id'),
            titulo: localStorage.getItem('titulo'),
            resumen: localStorage.getItem('resumen'),
            categoria: localStorage.getItem('categoria'),
            valorBoleto: localStorage.getItem('valorBoleto'),
            imagen: '',
            estado: true,
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    encodeImageFileAsURL = (e) => {
        const reader = new FileReader();
        const file = new Blob([e.target.value], { type: 'img/png' });
        this.setState({ imagen: file });
        reader.onloadend = e => {
            this.setState({ imagen: e.target.result })
        }
        reader.readAsDataURL(file);
    }

    onFileChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ imagen: reader.result })
            console.log(reader.result)
        }
        reader.readAsDataURL(file);
    }

    saveData = e => {
        e.preventDefault()
        this.update = {
            datos: {
                id: this.state.id,
                titulo: this.state.titulo,
                resumen: this.state.resumen,
                categoria: this.state.categoria,
                valorBoleto: this.state.valorBoleto,
                imagen: this.state.imagen,
                estado: this.state.estado,
            }
        }

        if (this.update.datos.id === "" ||
            this.update.datos.titulo === "" ||
            this.update.datos.resumen === "" ||
            this.update.datos.categoria === "" ||
            this.update.datos.valorBoleto === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.put(`${API}?id=${ this.state.id }`, this.update)
          .then(response => {
            if ( response.data.ok === true ) {
                window.location.assign("http://localhost:3000/movies");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };


    render() {
        const { 
            titulo, 
            resumen, 
            categoria, 
            valorBoleto, 
            imagen,
        } = this.state
        return(
            <div>
                <Sidebar />,
                <Salir />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center my-5 text-2xl">Bienvenido a la sección para modificar la pelicula.</p>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8" onSubmit={ this.saveData }>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="titulo">
                                        Título
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Ej: El Viaje al Centro de la Tierra"
                                        name="titulo"
                                        value={ titulo }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 ">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="resumen">
                                        Resumen
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Sinopsis de la película"
                                        name="resumen"
                                        value={ resumen }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="categoria">
                                        Categoria
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text" 
                                        placeholder="Ej: Comedia"
                                        name="categoria"
                                        value={ categoria }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="valorBoleto">
                                        Valor del Boleto
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text"
                                        min="0"
                                        placeholder="Ej: 3.50"
                                        name="valorBoleto"
                                        value={ valorBoleto }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="imagen">
                                        Portada de la Película
                                    </label>
                                    <input 
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                        name="imagen"
                                        type="file"
                                        defaultValue={ imagen }
                                        onChange={ this.onFileChange }
                                    />
                                </div>
                            </div>
                            <p className="text-red text-xs italic">Por favor complete todos los campos.</p>
                            <div className="mt-4">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Actualizar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}

export default UpdateMovie;