import Homepage from "./pages/Homepage.js";
import Chatpage from "./pages/Chatpage.js";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
