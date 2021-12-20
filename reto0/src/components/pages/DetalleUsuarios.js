import React from 'react';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';
//import * as Yup from 'yup'

const DetalleUsuarios = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
           id:'', 
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
        /* validationSchema: Yup.object({
            id: Yup.number()
                     .min(1, 'Debes agregar un número')
                     .required('El id es obligatorio'),
            identification: Yup.number()
                     .min(2, 'Debes agregar una identification')
                     .required('La identificacion es obligatoria'),
            name: Yup.string()
                     .min(3,'Debes agregar un name')
                     .required('El nombre es obligatorio'),
            birthDay: Yup.string()
                     .min(3,'Debes agregar fecha de cumpleaños')
                     .required('El cumpleaños es obligatorio'), 
            monthBirthDay: Yup.string()
                     .min(2,'Debes agregar un monthBirthDay de cumpleaños')
                     .required('El mes es obligatorio'),
            address: Yup.string()
                     .min(3,'Debes agregar una address')
                     .required('La direccion es obligatoria'),
            cellPhone: Yup.string()
                     .min(3,'Debes agregar un numero celular')
                     .required('El celular es obligatorio'),
            email: Yup.string()
                     .min(3,'Debes agregar un email')
                     .required('El correo es obligatorio'),
            password: Yup.string()
                     .min(3,'Debes agregar una contraseña')
                     .required('La contraseña es obligatoria'),
            zone: Yup.string()
                     .min(1,'Debes agregar una zona')
                     .required('La zona es obligatoria'),
            type: Yup.string()
                     .min(1,'Debes agregar un tipo')
                     .required('El tipo es obligatorio'),         
                         
         }), */
         onSubmit: datos => {
            Swal.fire({
                title: 'Quieres crear el producto?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);
                        fetch(`http://localhost:8080/api/user/new`, {
                            method: "POST",
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
                    
                    'Se creo correctamente.',
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
         <h1 className='text-3x1 font-light mb-4'>Detalles Usuarios</h1>
         <div className='flex justify-center mt-10'>
             <div className='w-full max-w-3x1'>
                 <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>ID</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='id' type='number' placeholder='Id' 
                        value={formik.values.id} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Identificacion</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='identification' type='text' placeholder='Identificacion' 
                        value={formik.values.identification} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.identification && formik.errors.identification ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.identification} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Nombre</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Nombre' 
                        value={formik.values.name} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.name && formik.errors.name ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.name} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Fecha Cumpleaños</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='birthDay' type='date' placeholder='Cumpleaños' 
                        value={formik.values.birthDay} onChange={formik.handleChange}/>
                    </div>
                    {/*  { formik.touched.birthDay && formik.errors.birthDay ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.birthDay} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Mes de cumpleaños</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='monthBirthDay' type='number' placeholder='Mes de cumpleaños' 
                        value={formik.values.monthBirthDay} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.monthBirthDay && formik.errors.monthBirthDay ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.monthBirthDay} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Direccion</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='address' type='text' placeholder='Direccion' 
                        value={formik.values.address} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.address && formik.errors.address ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.address} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Celular</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='cellPhone' type='number' placeholder='Celular' 
                        value={formik.values.cellPhone} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.cellPhone && formik.errors.cellPhone ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.cellPhone} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Correo</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Correo' 
                        value={formik.values.email} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Contraseña</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' type='text' placeholder='Contraseña' 
                        value={formik.values.password} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.password} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Zona</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='zone' type='text' placeholder='Zona' 
                        value={formik.values.zone} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.zone && formik.errors.zone ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.zone} </p>
                            </div>
                        ) : null } */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="availability"   
                        value={formik.values.availability} onChange={formik.handleChange}        >
                            <option value="true">Acesor Comercial</option>
                            <option value="false">Coordinador</option>
                            <option value="false">Administrador</option>
                        </select>
                    {/* <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Tipo</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='type' type='text' placeholder='Tipo' 
                        value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                     { formik.touched.type && formik.errors.type ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.type} </p>
                            </div>
                        ) : null } */}
                    <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Agregar usuario"/>
                 </form>
             </div>
         </div>
         </div>
         </div>
        </>
    );
}
export default DetalleUsuarios;