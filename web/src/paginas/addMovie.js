import React, { Component } from 'react';

import axios from 'axios';
import Navega from '../navegacion/navigation';
import Salir from '../navegacion/salir';
import ImageBase64 from 'image-to-base64';

import '../styles/tailwind.css';

const API = "http://localhost:5000/film/pelicula";


//codigo
class Nuevapeli extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      resumen: '',
      categoria: '',
      valorBoleto: '',
      imagen: '',
      estado: true
    }

    this.onFileChange = this.onFileChange.bind(this);
    
  }

  

  changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            datos: {
                titulo: this.state.titulo,
                resumen: this.state.resumen,
                categoria: this.state.categoria,
                valorBoleto: this.state.valorBoleto,
                estado: this.state.estado,
                imagen: this.state.imagen
            }
        }

        if (this.post.datos.titulo === "" ||
            this.post.datos.resumen === "" ||
            this.post.datos.categoria === "" ||
            this.post.datos.valorBoleto === ""
            ) {
          alert("Complete todos campos porfavor");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Agregado exitosamente")
                window.location.assign("http://localhost:3000/add_movie");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    onFileChange(e) {
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({
          imagen: reader.result
        })
        console.log(reader.result)
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }

  
  render() {
        const { 
            titulo, 
            resumen, 
            categoria, 
            valorBoleto, 
        } = this.state
        
    return (
      

        <div  >
        <Navega />,
        <Salir/>
          <div className="container  my-10  mx-auto  px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
                  <div className="my-1 px-1 w-full md:w-3/3 lg:my-4 lg:px-4 lg:w-1/3 mx-auto">
                          <form className="flex mx-auto  flex-wrap items-center justify-between leading-tight p-2 md:p-4 " onSubmit={ this.saveData }>
                              <a className="p-1" >
                              <input type='file' onChange={this.onFileChange} ></input>
                              </a>
                              <div className="text-lg">
                                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="titulo">
                                        Nombre de la Pelicula
                                     </label>
                                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder=" Nombre Pelicula"
                                        name="titulo"
                                        value={ titulo }
                                        onChange={ this.changeHandler } 
                                    />
                              </div>



                              <div className="text-lg">
                                     <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="categoria">
                                          categoria
                                    </label>
                                      <div className="relative" onSubmit={this.handleSubmit}>

                                        <a>
                                          <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" 
                                            type="text"
                                            name="categoria"
                                            value={ categoria }
                                            onChange={this.changeHandler} 
                                            
                        
                                          
                                          >
                                          <option value={this.state.value}  >seleccionar una ...</option>
                                          <option value='suspenso' >Suspenso</option>
                                          <option  value='romance'>Romance</option>
                                          <option value='animadas'>Animadas</option>
                                          <option value='terror'>terror</option>
                                          
                                        
                                        </select>
                                      </a>
                                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>


                                <div  className="text-lg">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="valorBoleto">
                                          valor del Boleto
                                    </label>
                                    <input className=" appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 -ml-36 mb-3 " 
                                        type="number"
                                        min="0"
                                        placeholder="valor"
                                        name="valorBoleto"
                                        value={ valorBoleto }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>

                                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="resumen">
                                        Resumen
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Sinopsis de la película"
                                        name="resumen"
                                        value={ resumen }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
          
                                <div className="block items-center justify-between leading-none p-0 md:p-4">
                                        
                                  <div >
                                      <button className="px-4 py-3 text-white font-light tracking-wider bg-gray-900 hover:bg-green-800 " type="submit"  >Guardar</button>
                                  </div>
                
                                
                                    
                                </div>
                          </form>
                  </div>
                   {/* END Column  */}  
                </div>
              </div>  
        </div>
        )
    }
}

export default Nuevapeli ;