//import logo from './logo.svg';
import Navbar from './CustomComponents/Navbar';
//import CustomForm from './CustomComponents/CustomForm';
import About from './CustomComponents/About';



function App() {
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <div className="container my-3" >
{/*           <CustomForm heading="Enter the text to Analyze below"/> */}    
      <About/>
   </div>
      
    </>

  );
}

export default App;
