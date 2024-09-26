import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const alphanumericRegex = /^[a-zA-Z0-9]{8}$/;
    return alphanumericRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setErrorMessage('Password must be exactly 8 alphanumeric characters.');
      return;
    }
    setErrorMessage('');
    localStorage.setItem('isAuthenticated', 'true');
    alert('Login Successfully!');
    navigate('/');
  };

  return (
    <div className="h-screen mobile:px-4 flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-logistics-industrial-port-transport-truck-for-container-import-and-export-photo-image_15526855.png)' }}>
      <form className="bg-slate-700 bg-opacity-70 p-12 h-[400px] w-[500px] rounded-xl shadow-xl flex flex-col items-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-black font-extrabold mb-5">Login</h1>
        <div className="w-full mb-4 py-6">
          <input
            type="text"
            placeholder="Username*"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full p-2 border border-cyan-300 rounded-md"
            required
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Password*"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border border-cyan-300 rounded-md"
            required
          />
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <div>
        <span>Not a member?  <Link to="/signup">Signup now</Link></span>
        </div>
        <button type="submit" className="mt-4 px-8 py-2 bg-cyan-600 text-white rounded-full hover:bg-white hover:text-cyan-900 hover:border border-cyan-900 mb-5 ">Submit</button>
      </form>
    </div>
  );
}
