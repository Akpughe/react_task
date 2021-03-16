import React from 'react';
import '../App.css';
const Main = () => {
  const entryList = [
    'Entry1',
    'Entry2',
    'Entry3',
    'Entry4',
    'Entry5',
    'Entry6',
  ];
  return (
    <div className="main_app">
      <ul>
        {entryList.map((item, idx) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Main;
