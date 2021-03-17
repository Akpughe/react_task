import React, { useState } from 'react';

const Admin = () => {
  const entryList = [
    { id: 1, entry: 'AdminEntry1' },
    { id: 2, entry: 'AdminEntry2' },
    { id: 3, entry: 'AdminEntry3' },
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
              style={selectedItem===item.id?{ backgroundColor: "grey" }:{}}
              onClick={()=>menuClick(item.id)}
            >
              {item.entry}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Admin;