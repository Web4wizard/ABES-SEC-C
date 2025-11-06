import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !pass) return alert('Fill all fields!');
    alert(`Registered Successfully!\nWelcome ${name}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setName(e.target.value)} /><br /><br />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} /><br /><br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
