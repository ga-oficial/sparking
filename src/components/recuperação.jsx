import React, { useState } from 'react';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implementar a lógica para enviar um e-mail de recuperação de senha para o usuário
  };

  return (
    <div>
      <h2>Recuperar Senha</h2>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Recuperar Senha</button>
    </div>
  );
};

export default ForgotPasswordScreen;
