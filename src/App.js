import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/" BookList="/" exact>
            Book List
          </NavLink>
          <NavLink to="/" BookDetail="/" exact>
            Book Detail
          </NavLink>
        </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/books/:id" component={BookDetail}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
