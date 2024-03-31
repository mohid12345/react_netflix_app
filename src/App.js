import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,actions} from './urls'


function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Action' isSmall/>
      <RowPost url={actions} title='Action' isSmall/>


      {/* <button  onClick={() =>{
        axios.get()
      } }>Click me</button> */}
    </div>
    </>
  );
}

export default App;
