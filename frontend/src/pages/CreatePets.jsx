import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../utils/axiosClient';

function CreatePets() {
    const navigate = useNavigate()
    const [races, setRaces] = useState([])
    const [categories, setCategories] = useState([])
    const [genders, setGenders] = useState([])

    const name = useRef(null)
    const race_id = useRef(null)
    const category_id = useRef(null)
    const photo = useRef(null)
    const gender_id = useRef(null)

    useEffect(() => {
        const getData = async () => {
            await axiosClient.get("http://localhost:3000/races").then(response => {
                if (response.status == 200) {
                    setRaces(response.data)
                }
            })
            await axiosClient.get("http://localhost:3000/categories").then(response => {
                if (response.status == 200) {
                    setCategories(response.data)
                }
            })
            await axiosClient.get("http://localhost:3000/genders").then(response => {
                if (response.status == 200) {
                    setGenders(response.data)
                }
            })

        }
        getData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(confirm("¿Estás seguro que quierea crear la mascota?")){
                const formData = new FormData()
                formData.append('pet_name', name.current.value)
                formData.append('race_id', race_id.current.value)
                formData.append('photo', photo.current.files[0])
                formData.append('category_id', category_id.current.value)
                formData.append('gender_id', gender_id.current.value)

                // const data = {
                //     pet_name: name.current.value,
                //     race_id: parseInt(race_id.current.value),
                //     photo: photo.current.files[0],
                //     category_id: parseInt(category_id.current.value),
                //     gender_id: parseInt(gender_id.current.value)
                // }
                const response = await axiosClient.post("http://localhost:3000/mascotas", formData, {})
                if(response && response.status == 201){
                    alert("Mascota creada correctamente")
                    navigate("/inicio")
                } else{8
                    alert("Error al crear la mascota")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div style={{ backgroundImage: "url('/bg.svg')", width: '400px', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full flex justify-between px-10 py-6 items-center'>
                    <h1 className='text-white w-full text-center'>Adicionar Mascotas</h1>
                    <div className='w-[10%]'>
                        <Link to="/inicio"><img src="/btn-close.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-8'>
                    <img src="/photo-lg-0.svg" alt="" />
                </div>
                <div>
                    <form className='w-full flex flex-col px-6 mt-14' onSubmit={handleSubmit} encType='multipart/form-data'>
                        <input className='bg-white bg-opacity-60 rounded-full mb-6 px-4 py-4' type="text" name='pet_name' placeholder='Nombre' ref={name} />
                        <select ref={race_id} className='bg-white bg-opacity-60 rounded-full mb-6 px-4 py-4'>
                            <option value="" >Seleccione raza</option>
                            {
                                races.map(r => (
                                    <option value={r.id} key={r.id}>{r.name}</option>
                                ))
                            }
                        </select>
                        <select ref={category_id} className='bg-white bg-opacity-60 rounded-full mb-6 px-4 py-4'>
                            <option value="0" >Seleccione categoría</option>
                            {
                                categories.map(c => (
                                    <option value={c.id} key={c.id}>{c.name}</option>
                                ))
                            }
                        </select>
                        <input className='bg-white bg-opacity-60 rounded-full mb-6 px-4 py-4' type="file" name='photo' placeholder='Photo' ref={photo} />
                        <select ref={gender_id} className='bg-white bg-opacity-60 rounded-full mb-6 px-4 py-4'>
                            <option value="gender">Seleccione género</option>
                            {
                                genders.map(g => (
                                    <option value={g.id} key={g.id}>{g.name}</option>
                                ))
                            }
                        </select>
                        <button  className='w-full flex justify-center' type='submit'>
                            <img src="/btn-save.svg" alt="" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};


export default CreatePets