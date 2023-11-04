import { useState } from 'react';

// Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální hodnotu, kterou uživatel do inputu napíše.

export const Ukol1 = () => {
  const [login, setLogin] = useState('petr');

  return (
    <>
      <h1>Úkol 1</h1>
      <label>
        {login}:
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
      </label>
    </>
  );
};
