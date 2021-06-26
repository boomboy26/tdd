import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Counter from './counter/Counter';
import Jotto from './jotto/JottoHome';
import './App.css';

function App() {
  return (
    <div className='App' data-test='app-component'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/counter'>Counter</Link>
              </li>
              <li>
                <Link to='/jotto'>Jotto</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/counter'>
              <Counter />
            </Route>
            <Route path='/jotto'>
              <Jotto />
            </Route>
            <Route path='/'></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
