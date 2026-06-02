//import logo from './logo.svg';
import Navbar from './CustomComponents/Navbar';
import CustomForm from './CustomComponents/CustomForm';



function App() {
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <div className="container" >
          <CustomForm heading="Enter the text here"/>
      </div>
      
    </>

  );
}

export default App;
