import './App.css';
import TopNav from "./topnav/topnav";
import MainBody from "./mainBody/mainbody";
import UpdatesView from './updatesView/updatesView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Router>
        <TopNav/>
        <Switch>
            <Route path="/home">
              <MainBody/>
            </Route>
            <Route path="/updates">
              <UpdatesView />
            </Route>
            <Route path="/">
              <MainBody/>
            </Route>

        </Switch>

      
      </Router>
    </div>
    
  );
}

export default App;
