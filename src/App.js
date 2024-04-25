import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import AddProductForm from './Component/Forms/AddProductForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddProductForm />
    </div>
  );
}

export default App;
