import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../utils/axiosClient'

function ConsultPets() {
    const { id } = useParams()
    const [pet, setPet] = useState({})
    useEffect(() => {
        const getPet = async () => {
            const response = await axiosClient.get(`/mascotas/${id}`)
            if (response.status == 200) {
                console.log(response.data);
                setPet(response.data)
            }
        }

        getPet()
    }, [])
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div style={{ backgroundImage: "url('/bg.svg')", width: '400px', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full flex justify-between px-10 py-6 items-center'>
                    <h1 className='text-white w-full text-center'>Consultar Mascotas</h1>
                    <div className='w-[10%]'>
                        <Link to="/inicio"><img src="/btn-close.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-8 px-5 flex-col gap-3 items-center'>
                    <img src={`http://localhost:3000/public/img/${pet.photo}`} alt="" className='w-[150px] h-[150px] rounded-full border border-blue-500' />
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='w-full flex flex-row'>
                            <div className='w-[30%] px-5 py-3 bg-[#8090ac] rounded-l-lg'>
                                <p>Nombre:</p>
                            </div>
                            <div className='w-[70%] px-5 py-3 bg-[#abb5c7] rounded-r-lg'>
                                <p>{pet.pet_name}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row rounded'>
                            <div className='w-[30%] px-5 py-3 bg-[#8090ac] rounded-l-lg'>
                                <p>Raza:</p>
                            </div>
                            <div className='w-[70%] px-5 py-3 bg-[#abb5c7] rounded-r-lg'>
                                <p>{pet.race_name}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row rounded'>
                            <div className='w-[30%] px-5 py-3 bg-[#8090ac] rounded-l-lg'>
                                <p>Categoría:</p>
                            </div>
                            <div className='w-[70%] px-5 py-3 bg-[#abb5c7] rounded-r-lg'>
                                <p>{pet.category_name}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row rounded'>
                            <div className='w-[30%] px-5 py-3 bg-[#8090ac] rounded-l-lg'>
                                <p>Genero:</p>
                            </div>
                            <div className='w-[70%] px-5 py-3 bg-[#abb5c7] rounded-r-lg'>
                                <p>{pet.gender_name}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultPets
