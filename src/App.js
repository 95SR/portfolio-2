import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Body from './component/Body';

function App() {
  return (
    <div className="App">
      
      <div className='header'>
      <Header/>
      </div>
      <div className='menu'>
      <Menu/>
      </div>
      <div className='body'>
      <Body/>
      </div>
      
      

    </div>
  );
}

export default App;
