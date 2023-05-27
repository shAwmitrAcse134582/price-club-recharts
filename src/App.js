import './App.css';
import Assignment from './components/Assignment/Assignment';
import Nav from './components/Nav/Nav';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className='text-3xl font-bold'>This is header of tailwindcss </h1>
      <h1>I have completed all set up to use tailwindcss</h1>
      <Pricing></Pricing>
      <Assignment></Assignment>
      <PhoneBar></PhoneBar>

    </div>
  );
}

export default App;
