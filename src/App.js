import SearchHeader from './components/SearchHeader';
import './styles/SearchHeader.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Results from './components/Results';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/search">
              <Results></Results>
            </Route>
            <Route path="/">
              <SearchHeader></SearchHeader>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
