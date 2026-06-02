//import logo from './logo.svg';
import './AppA.css';
import Navbar from './CustomComponents/Navbar';
import CustomForm from './CustomComponents/CustomForm';



function App() {
  
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils" />

      <div className="container" >
          <CustomForm heading="Enter the text here"/>
      </div>
      
    </>

  );
}

export default App;
