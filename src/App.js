import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Create/>}/>
            <Route path ="/create" element={<Create/>}/>
            <Route path ="/read" element={<Read/>}/>
            <Route path ="/update" element={<Update/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
