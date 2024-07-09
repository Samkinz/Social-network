import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Header/>
        <Nav/>
        <Routes>
        <Route path='/Profile' Component={Profile}/>
       <Route path='/Messages' Component={Dialogs}/>
       <Route path='/Music' Component={Music}/>
       <Route path='/News' Component={News}/>
       <Route path='/Settings' Component={Settings}/>
       </Routes>
    </div>  
  );
}

export default App;
