import React, { useState } from 'react';
import '../App.css';
const Main = () => {
  const entryList = [
    { id: 1, entry: 'Entry1' },
    { id: 2, entry: 'Entry2' },
    { id: 3, entry: 'Entry3' },
    { id: 4, entry: 'Entry4' },
    { id: 5, entry: 'Entry5' },
    { id: 6, entry: 'Entry6' },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const menuClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="main_app">
      <ul>
        {entryList.map((item) => {
          return (
            <li
              key={item.id}
              style={
                selectedItem === item.id ? { backgroundColor: 'grey' } : {}
              }
              onClick={() => menuClick(item.id)}
            >
              {item.entry}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
