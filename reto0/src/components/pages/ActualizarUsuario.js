import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const ActualizarUsuarios = (usuario) => {
    const navigate = useNavigate();
    const {id} = useParams();
        const [ usuariosActualizar, guardarUsuariosActualizar] = useState([]);

        fetch(`http://localhost:8080/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
            guardarUsuariosActualizar(data);
        });
    /* const actualizarUsuario = id =>{
        console.log(id);

    }  */
    const { identification, name, birthDay, address, cellPhone, email, zone, type} = usuariosActualizar;
    const formik = useFormik({
        initialValues: {
           id: id, 
           identification:'',
           name: '',
           birthDay: '',
           monthBirthDay: '',
           address: '',
           cellPhone: '',
           email: '',
           password: '',
           zone: '',
           type: '',
        }, 
        onSubmit: datos => {         
            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);
                        fetch(`http://localhost:8080/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                //console.log(data);             
                        });
                       
                  Swal.fire(
                    'Actualizado!',
                    'Se actualizo correctamente.',
                    'success'                 
                  );
                  navigate('/productos');
                } catch (error) {
                    console.log(error)
                }
                
            }
          })
          
        }
     });
    return(
        <>
         <div className="md:flex min-h-screen" >
         <Sidebar />
         <div className="md:w-2/5 xl:w-4/5 p-6">
         <h1 className='text-3x1 font-light mb-4'>Actualizar Usuario</h1>
         <div className='flex justify-center mt-10'>
             <div className='w-full max-w-3x1'>
                 <form onSubmit={formik.handleSubmit}>
                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Identificacion</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='identification' type='number' placeholder='Identificacion' 
                        value={formik.values.identification || identification} onChange={formik.handleChange}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Nombre</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Nombre' 
                        value={formik.values.name || name} onChange={formik.handleChange}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Fecha de cumpleaños</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='birthDay' type='date' placeholder='Fecha de cumpleaños' 
                        value={formik.values.birthDay || birthDay} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Mes de cumpleaños</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='monthBirthDay' type='text' placeholder='Mes de cumpleaños' 
                        value={formik.values.monthBirthDay} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Direccion</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='address' type='text' placeholder='Direccion' 
                        value={formik.values.address || address} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Telefono</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='cellPhone' type='number' placeholder='Telefono' 
                        value={formik.values.cellPhone || cellPhone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Email</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Correo' 
                        value={formik.values.email || email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Contraseña</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' type='text' placeholder='Contraseña' 
                        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Zona</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='zone' type='text' placeholder='Zona' 
                        value={formik.values.zone || zone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cargo</label>
                        <select className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="type"   
                        value={formik.values.type || type} onChange={formik.handleChange}        >
                            <option value="true">Acesor Comercial</option>
                            <option value="false">Coordinador</option>
                            <option value="false">Administrador</option>
                        </select>
                     
                    <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Actualizar Usuario"/>
                </form>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default ActualizarUsuarios;