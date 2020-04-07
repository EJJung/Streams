import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// const PageOne = () => {
//   return <div>Page One
//     {/* <div>BAD!!</div>
//   <a href="/pagetwo">Navigate to Page Two</a> */}
//   <div>this is good.
//     <Link to="/pagetwo">Navigate to Page Two</Link>
//   </div>
  
//   </div>;
// }

// const PageTwo = () => {
//   return <div>Page Two
//   <button>Click Me!</button>
//   {/* <div>BAD!!</div>
//   <a href="/">Navigate to Page One</a> */}
//   <div>this is good.
//     <Link to="/">Navigate to Page one</Link>
//   </div>
//   </div>;
// }

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;