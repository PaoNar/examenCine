import React, { Component } from 'react';
import axios from 'axios';
import '../styles/tailwind.css';

const API_LOGIN = "http://localhost:5000/film/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_LOGIN, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          window.location.assign("http://localhost:3000/movies");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    const foto = require('../assets/cine.jpg');
    return (               
              <body className="bg-image-1 font-mono bg-black">
                  {/* <!-- Container --> */}
                  <div className="container mx-auto  ">
                    <div className="flex justify-center px-6 my-12">
                      {/* <!-- Row --> */}
                      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* <!-- Col --> */}
                        <a className="p-1" href="#">
                                <img alt="Placeholder" className="block h-full w-screen" src={foto}></img>
                              </a>
                      </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                          <h3 className="pt-4 text-2xl text-center">login Access</h3>
                          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={ this.loginAccess }>
                            <div className="mb-4">
                                <label className="font-bold text-gray-700 block mb-2">Correo </label>
                                <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 "
                                type="text"
                                placeholder="correo@gmail.com"
                                name="correo"
                                value={ correo }
                                onChange={ this.changeHandler } 
                                />
                              </div>
                              <div className="mb-4">
                                  <label className="font-bold text-gray-700 block mb-2">Contraseña</label>
                                  <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 "
                                  type="password"
                                  placeholder="**************"
                                  name="clave"
                                  value={ clave }
                                  onChange={ this.changeHandler } 
                                  securetextentry="true"
                              />
                                
                                </div>
                            
                              {/* <div className="mb-4">
                                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                <label className="text-sm" for="checkbox_id">
                                  Remember Me
                                </label>
                              </div> */}
                              <div className="flex items-center justify-between">
                                  <button type="submit" className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white  py-2 px-4 rounded">
                                    Ingresar
                                  </button>
                                  <a href="http://localhost:3000/register" className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white  py-2 px-4 rounded">
                                    Registrarse
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

export default Login;

