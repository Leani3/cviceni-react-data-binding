import { useState } from 'react';

// Zadání 1: Vytvořte stavy pro login a heslo a propojte je obousměrně s příslušnými inputy ve formuláři.

// Zadání 2: Na formulář pověstě obsluhu události `onSubmit`. Nezapomeňte na `e.preventDefault`. Po odeslání formuláře vypište do konzole objekt se dvěma vlastnostmi: `login` a `password`, které budou obsahovat aktuální hodnoty z inputů.

// Zadání 3: Vytvořte si stav `error`, bude obsahovat zprávu pro uživatele, pokud něco vyplní špatně. Na začátku bude mít prázdnou hodnotu prázdný řetězec. Zobrazte obsah tohoto stavu v prvku `.alert`.

// Zadání 4: Pokud uživatel nechal prázdné pole s loginem, nastavte při odeslání formuláře do stavu `error` text `Chybí login`.

// Zadání 5: Pokud uživatel nechal prázdné pole s heslem, nastavte při odeslání formuláře do stavu `error` text `Chybí heslo`.

// Zadání 6: Pokud uživatel správně vyplnil obě pole, do stavu `error` nastavte text `Přihlášení proběhlo úspěšně`.

export const Ukol4 = () => {
  const [login, setLogin] = useState('');
  const [heslo, setHeslo] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`login: ${login}, password: ${heslo}`);

    if (login.length < 1) {
      setError('Chybí login');
    } else if (heslo.length < 1) {
      setError('Chybí heslo');
    } else {
      setError('Přihlášení proběhlo úspěšně');
      setHeslo('');
      setLogin('');
    }
  };

  return (
    <>
      <h1>Úkol 4</h1>
      <div className="alert">{error}</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Login:
            <input
              type="text"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </label>
        </div>
        <div className="field">
          <label>
            Heslo:
            <input
              type="password"
              onChange={(e) => setHeslo(e.target.value)}
              value={heslo}
            />
          </label>
        </div>
        <button type="submit">Přihlásit</button>
      </form>
    </>
  );
};
