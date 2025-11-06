import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email && pass ? alert(`Welcome ${email}`) : alert('Fill all fields!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} /><br /><br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
