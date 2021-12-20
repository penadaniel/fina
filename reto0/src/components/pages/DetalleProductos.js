import React from 'react';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';
//import * as Yup from 'yup'


const DetalleProductos = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
           id:'', 
           brand:'',
           processor: '',
           os: '',
           description: '',
           memory: '',
           hardDrive: '',
           availability: '',
           precio: '',
           cantidad: '',
           photograohy: '',
        },
        /* validationSchema: Yup.object({
            id: Yup.number()
                     .min(1, 'Debes agregar un número')
                     .required('El id es obligatorio'),
            brand: Yup.string()
                     .min(2, 'Debes agregar una marca')
                     .required('La marca es obligatoria'),
            processor: Yup.string()
                     .min(3,'Debes agregar un procesador')
                     .required('El procesador es obligatorio'),
            os: Yup.string()
                     .min(2,'Debes agregar un sistema operativo')
                     .required('El sistema es obligatorio'), 
            description: Yup.string()
                     .min(3,'Debes agregar una descripcion')
                     .required('La descripcion es obligatoria'),
            memory: Yup.string()
                     .min(3,'Debes agregar una memoria')
                     .required('La memoria es obligatoria'),
            hardDrive: Yup.string()
                     .min(2,'Debes agregar un disco duro')
                     .required('El disco duro es obligatorio'),
            availability: Yup.string()
                     .min(1,'Debes agregar una disponibilidad')
                     .required('La deiponibilidad es obligatoria'),
            price: Yup.number()
                     .min(2,'Debes agregar un price')
                     .required('El precio es obligatorio'),
            quantity: Yup.number()
                     .min(1,'Debes agregar una quantity')
                     .required('La cantidad es obligatoria'),
            photography: Yup.string()
                     .min(1,'Debes agregar una photography')
                     .required('La foto es obligatoria'),         
                         
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
                        fetch(`http://localhost:8080/api/clone/new`, {
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
         <h1 className='text-3x1 font-light mb-4'>Detalles Productos</h1>
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
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Marca</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='brand' type='text' placeholder='Marca' 
                        value={formik.values.brand} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.brand && formik.errors.brand ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.brand} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Procesador</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='processor' type='text' placeholder='Procesador' 
                        value={formik.values.processor} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.processor && formik.errors.processor ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.processor} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Sistema Operativo</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='os' type='text' placeholder='Sistema Operativo' 
                        value={formik.values.os} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.os && formik.errors.os ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.os} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Descripcion</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='description' type='text' placeholder='Descripcion' 
                        value={formik.values.description} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.description && formik.errors.description ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.description} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Memoria</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='memory' type='text' placeholder='Memoria' 
                        value={formik.values.memory} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.memory && formik.errors.memory ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.memory} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Disco Duro</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='hardDrive' type='text' placeholder='Disco Duro' 
                        value={formik.values.hardDrive} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.hardDrive && formik.errors.hardDrive ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.hardDrive} </p>
                            </div>
                        ) : null } */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="availability"   
                        value={formik.values.availability} onChange={formik.handleChange}        >
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                        </select>
                    {/* <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Disponible</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='availability' type='text' placeholder='Disponible' 
                        value={formik.values.availability} onChange={formik.handleChange}/>
                    </div>
                     { formik.touched.availability && formik.errors.availability ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.availability} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Precio</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='price' type='number' placeholder='Precio' 
                        value={formik.values.price} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.price && formik.errors.price ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.price} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Cantidad</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='quantity' type='number' placeholder='Cantidad' 
                        value={formik.values.quantity} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.quantity && formik.errors.quantity ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.quantity} </p>
                            </div>
                        ) : null } */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='Nombre'>Foto</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='photography' type='text' placeholder='Foto' 
                        value={formik.values.photography} onChange={formik.handleChange}/>
                    </div>
                     {/* { formik.touched.photography && formik.errors.photography ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.photography} </p>
                            </div>
                        ) : null } */}
                    <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Agregar producto"/>
                 </form>
             </div>
         </div>
         </div>
         </div>
        </>
    )
}
export default DetalleProductos;