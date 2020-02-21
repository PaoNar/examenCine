import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000/film/persona";

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  registerUser = e => {
    e.preventDefault()
    this.post = {
      datos: {
          nombre: this.state.nombre,
          correo: this.state.correo,
          clave: this.state.clave,
      }
  }
    if (this.post.datos.nombre === "" || this.post.datos.correo === "" || this.post.datos.clave === "") {
      alert("Complete todos los campos porfavor");
    } else {
      axios.post(API_URL, this.post)
      .then(response => {
        if ( response.data.ok === true ) {
          alert("Registro Exitoso")
          window.location.assign("http://localhost:3001/");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { nombre, correo, clave } = this.state
    return (
      <body className="bg-image-1 font-mono bg-black">
                  {/* <!-- Container --> */}
                  <div className="container mx-auto  ">
                    <div className="flex justify-center px-6 my-12">
                      {/* <!-- Row --> */}
                      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* <!-- Col --> */}
                        <a className="p-1" >
                                <img alt="Placeholder" className="block h-full w-screen" src="https://picsum.photos/600/400/?random"></img>
                              </a>
                      </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                          <h3 className="pt-4 text-2xl text-center">Registro</h3>
                          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={ this.registerUser }>
                            <div className="mb-4">
                              <label className="font-bold text-gray-700 block mb-2">Nombre</label>
                                <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={ nombre }
                                onChange={ this.changeHandler } 
                                />
                              </div>
          
                              <div className="mb-4">
                                  <label className="font-bold text-gray-700 block mb-2">Correo Electrónico</label>
                                    <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                      type="text"
                                      placeholder="correo@gmail.com"
                                      name="correo"
                                      value={ correo }
                                      onChange={ this.changeHandler } 
                                      />
                              </div>
                              
                              <div className="mb-4">
                                <label className="font-bold text-gray-700 block mb-2">Contraseña</label>
                                  <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                  type="password"
                                  placeholder="********"
                                  name="clave"
                                  value={ clave }
                                  minLength="6"
                                  onChange={ this.changeHandler } 
                                  securetextentry="true"
                                  />
                              </div>
                            
                             
                              <div className="flex items-center justify-between">
                                <button type="submit" className="bg-gray-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                                  Registrarse
                                </button>
                                <a href="http://localhost:3000/" className="bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                                  back
                                </a>
                              </div>  
                            </form>
                          </div>
                        </div>
                      </div>
                    
                  </body> 
    )
  }
}

export default Register;




                