import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/books">Catalog</NavLink>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
