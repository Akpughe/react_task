import React, { useState } from 'react';
import Main from './components/Main';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [show, setShow] = useState('App');

  const handleShow = (str) => {
    setShow(str);
  };

  return (
    <>
      <div className="header">
        <div className="logo_div">
          <img src="https://dillali.com/wp-content/uploads/2020/12/Logo-darkbg@2x.png" alt="logo" />
        </div>
        <div className="input_div">
          <label htmlFor="">
            <input
              defaultChecked
              type="radio"
              name="name"
              id=""
              onClick={() => handleShow('App')}
            />
            app mode
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="name"
              id=""
              onClick={() => handleShow('Admin')}
            />
            admin mode
          </label>
        </div>
      </div>
      {show === 'App' ? <Main /> : show === 'Admin' && <Admin />}
    </>
  );
}

export default App;
