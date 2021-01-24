import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'


function App () {


  const handelName= (name)=>{
    alert(name)
  }
  return (
    <>
    <Profile handleName={handleName} name="Jihen" bio="dfdfdf"  profession="rfrrtrt" >{logo}</Profile>

    </>
  )
}


export default App