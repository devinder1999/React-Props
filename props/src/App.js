import logo from './logo.svg';
import './App.css';
import A from './Component/A';
import Parameterprops from './Component/Parameterprops';

function App() {
  return (
    <>
    <div className="App">
      <A  name="Davinder Singh"
   age={24}
   city="Ferozepur Cantt"
   phone={9781254681}/>
    </div>

    <div className='Example2'>

<Parameterprops

name="Davinder Ankush"
age={23}
city="Ferozepur Cantt"
phone={9781254681}

/>


    </div>

    </>
  );
}

export default App;
