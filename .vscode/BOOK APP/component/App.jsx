import React from 'react';
import Book from './Book';
import './book.css';
import './App.css'; 

function App() {
  return (
    <div id="ary">
      <Book title="Physics" price="500" img="path/to/physics.jpg"/>
      <Book title="Chemistry" price="600" img="path/to/chemistry.jpg"/>
      <Book title="Mathematics" price="700" img="path/to/mathematics.jpg"/>
    </div>
  );
}

export default App;
