import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../utils/axiosClient';

const TraerMascotas = () => {
    const [mascotas, setMascotas] = useState([]);
    const navigate = useNavigate()
    const getMascotas = async () => {
        try {
            const response = await axiosClient.get("http://localhost:3000/mascotas");
            if (response.status === 200) {
                setMascotas(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMascotas();
    }, []);


    const handleDeletePet = async (id) => {
        try {
            if (confirm('¿Estás seguro de eliminar esta mascota?')) {
                await axiosClient.delete(`/mascotas/${id}`);
                alert('Mascota eliminada correctamente');
                getMascotas();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div style={{ backgroundImage: "url('/bg.svg')", width: '400px', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full flex justify-between px-10 py-6 items-center'>
                    <h1 className='text-white w-full text-center'>Administrar Mascotas</h1>
                    <div className='w-[10%]'>
                        <Link to="/logout"><img src="/btn-close.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Link to="/create"><img src="/btn-add.svg" alt="" /></Link>
                </div>
                <div className='px-4 py-4 h-[75%] overflow-auto'>
                    {mascotas.length > 0 ? (
                        <ul className='space-y-4'>
                            {mascotas.map((mascota, index) => (
                                <li key={index} className='text-blue-900'>

                                    <div className='flex justify-between items-center py-4 px-3 bg-white bg-opacity-60 rounded-xl'>
                                        <div className='flex flex-row items-center gap-3'>
                                            <img className='w-12 h-12 rounded-full border border-blue-700' src={`http://localhost:3000/public/img/${mascota.photo}`} alt="" />
                                            <div className='flex flex-col'>
                                                <span>{mascota.pet_name}</span>
                                                <span className='text-sm text-blue-900'>{mascota.race_name}</span>
                                            </div>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <button onClick={() => { navigate(`/consult/${mascota.id}`) }}><img src="/btn-show.svg" alt="Show" /></button>
                                            <button onClick={() => { navigate(`/edit/${mascota.id}`)  }}>
                                                <img src="/btn-edit.svg" alt="Edit" />
                                            </button>
                                            <button onClick={() => { handleDeletePet(mascota.id) }}>
                                                <img src="/btn-delete.svg" alt="Delete" />
                                            </button>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='text-white'>No hay mascotas registradas.</p>
                    )}
                </div>
            </div>
        </div>
    );

};

export default TraerMascotas
