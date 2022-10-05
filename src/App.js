import './App.css';
import './index.css';
import { Connect, Gateway } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#333] h-full">
      <Routes>
        <Route path='/' element={<Connect/>} end/>
        <Route path='/gateway' element={<Gateway/>}/>
      </Routes>
    </div>
  );
}

export default App;
