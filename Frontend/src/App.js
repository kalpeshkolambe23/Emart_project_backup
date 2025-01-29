
import { NavbarExample } from './Components/Header'; // Correct relative path
import ImageSlider from './Components/ImageSlider';
//import ContactForm from './Components/Contactus';
import Cards from './Components/Cards';
import './App.css';
import Footer from './Components/footer';

const images = [
  {
    url: "https://unsplash.com/photos/V1DFo8C4JPA/download?ixid=M3wxMjA3fDF8MXxzZWFyY2h8MXx8Y2FyfGVufDB8fHx8MTczODAxMzI4OHww&force=true", // Example image URL
    name: "Image 1",
  },
  {
    url: "https://unsplash.com/photos/3ZUsNJhi_Ik/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Y2FyfGVufDB8fHx8MTczODAxMzI4OHww&force=true", 
    name: "Image 2",
  },
  {
    url: "https://unsplash.com/photos/j0YPbvXu4t0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDJ8fGNhcnxlbnwwfHx8fDE3MzgwMTgzMDR8MA&force=true", 
    name: "Image 3",
  },
  {
    url: "https://unsplash.com/photos/BgZFS8DPg0I/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTJ8fGNhcnxlbnwwfHx8fDE3MzgwMTgzMDR8MA&force=true", 
    name: "Image 3",
  },
  // Add more image objects as needed
];

function App() {
  return (
    <div>
      <NavbarExample /> {/* Use NavbarExample here */}
     <center> <h1>My Image Slider</h1></center>
      {/* <img src={image} alt="Logo" /> */}
      <ImageSlider images={images} /> {/* Pass the images prop */}
      <center><h1>This is My Cards</h1></center>
     <Cards/>
     
     <Footer/>

    
      
    </div>
  );
}

export default App;
