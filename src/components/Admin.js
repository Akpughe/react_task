import React from 'react';

const Admin = () => {
  const entryList = ['AdminEntry1', 'AdminEntry2', 'AdminEntry3'];
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

export default Admin;
