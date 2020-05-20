import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    // <Route path="/" render={() => <h1>Home!</h1>} />
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies'
                 render={
                   routerProps =>
                       <MoviesPage {...routerProps}
                                   movies={this.state.movies}
                       />}
          />
        </div>
      </Router>
    );
  }
}
/*
As we see in the example above,
this means we can write JSX code directly,
having the function return <div>Home</div>.
Or, we can have the function return a component,
like the second Route above.
*/

/*
So, if the URL path matches /movies,
the function inside render is called.
The object that is passed in, routerProps,
gets passed to the MoviesPage component as props.
Using the spread operator ({...routerProps})
will result in the creation of props for each key
present inside the routerProps object.
This isn't vital but is a helpful way to pass many props in
without too much code clutter.
*/
export default App;
