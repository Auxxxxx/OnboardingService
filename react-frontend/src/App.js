import React, { useState } from 'react';
import './Forms.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка данных формы
    console.log('Отправленная форма:', { firstName, lastName, gender, dateOfBirth });
    // Сброс значений полей формы
    setFirstName('');
    setLastName('');
    setGender('');
    setDateOfBirth('');
  };

  const handleLogin = () => {
    // Логика для кнопки “Войти”
    console.log(`Вход выполнен: ${firstName} ${lastName}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <img src="./logo.png" alt="logo"></img>
          <div>
<label>
First Name:  
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Second Name:  
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Gender:  
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Choose Gender</option>
            <option value="male">Man</option>
            <option value="female">Woman</option>
            <option value="other">Unnamed</option>
        </select>
      </label>
    </div><div>
        <label>
          Birthday:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
      </div><button type submit>Отправить</button><button type button onClick={handleLogin}>Войти</button>
    </form>
  );
}

export default Form;