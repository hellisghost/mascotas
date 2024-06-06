import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosClient from "../utils/axiosClient";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosClient.post('/login', { email, password });
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/inicio');
      } else {
        alert('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: "url('/bg-login.svg')", width: '400px', height: '785px', backgroundRepeat: 'no-repeat' }}
        className='flex justify-center items-end pb-10'
      >
        <form onSubmit={handleLogin} className='w-full flex flex-col gap-3 px-10'>
          <input
            className='rounded-full p-2 px-4 bg-slate-100 opacity-70'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Correo electrónico'
            required
          />
          <input
            className='rounded-full p-2 px-4 bg-slate-100 opacity-70'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Contraseña'
            required
          />
          <button
            type="submit"
            className='bg-blue-900 text-white rounded-full p-2'
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

