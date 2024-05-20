import React, { useState } from 'react';

const TwoFactorAuthScreen = () => {
  const [code, setCode] = useState('');

  const handleTwoFactorAuth = () => {
    // Implementar a lógica para enviar o código de autenticação em dois fatores para o servidor
  };

  return (
    <div>
      <h2>Autenticação em Dois Fatores</h2>
      <p>Um código de verificação foi enviado para o seu dispositivo.</p>
      <input
        type="text"
        placeholder="Digite o código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleTwoFactorAuth}>Verificar</button>
    </div>
  );
};

export default TwoFactorAuthScreen;
