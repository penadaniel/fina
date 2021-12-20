import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUsuario from '../pages/ActualizarUsuario';

const FormularioUsuarios = ({usuario}) => {
    const {id, name, cellPhone, photography, email, zone } = usuario;
    const [usuarios, guardarUsuarios] = useState([]);
    fetch("http://localhost:8080/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        guardarUsuarios(data);
    });   
    const actualizarUsuario = id =>{

        {usuarios.map( usuario =>(
            <ActualizarUsuario 
           key={usuario.id}
            usuario={usuario}
           /> ))}
    }
    const borrarUsuario = id =>{
        Swal.fire({
            title:'Quieres borrar el usuario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(id);
                    fetch(`http://localhost:8080/api/user/${id}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Deleted!',
                'Se borro correctamente.',
                'success'
              );
            } catch (error) {
                console.log(error)
            }
            
        }
    })
}
return(
    <>
    <div className="w-full px-3 mb-4">
        <div className="p-5 shadow-md bg-white">
            <div className="lg:flex">
                <div className="lg:w-5/12 xl:w-3/12">                  
                  <img src={photography} alt=" imagen usuario " />
                    <div className="sm:flex sm:-mx-2 pl-2">
                            
                    </div>
                </div>
                <div className="lg:w-7/12 xl:w-9/12 pl-5">
                    <p className="font-bold text-2xl text-yellow-600 mb-4">{name} </p>
                    <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                    <p className="text-gray-600 mb-4">{cellPhone} </p>                            
                    <p className="text-gray-600 mb-4">Correo: {''}
                        <span className="text-gray-700 font-bold">{email}</span> 
                    <p className="text-gray-600 mb-4">Zona: {''}
                        <span className="text-gray-700 font-bold">{zone}</span> 
                    </p>
                    </p>
                    <button onClick={ () => borrarUsuario(usuario.id)} type="submit" className="bg-red-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold">Borrar</button>
                    <Link to={`/actualizar-usuario/${usuario.id}`}>Actualizar Usuario</Link>
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default FormularioUsuarios;