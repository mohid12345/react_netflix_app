import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import axios from "axios"


function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals'/>
      <RowPost title='Action' isSmall='false'/>

      <button  onClick={() =>{
        axios.get()
      } }>Click me</button>
    </div>
    </>
  );
}

export default App;
