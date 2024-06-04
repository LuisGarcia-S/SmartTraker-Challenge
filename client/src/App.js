import './App.css';
import TopBar from './components/Header/header';
import DataTable from './components/DataTable/DataTable';
import { Routes, Route } from 'react-router-dom';
import Post from './components/post/post';

 
function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path='/' element={<DataTable/>}/>
            <Route path='Post/:id' element={<Post/>}/>
        </Routes>
    </div>
  );
}

export default App;
