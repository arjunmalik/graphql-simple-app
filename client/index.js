import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongsList from './components/SongsList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongsCreate from './components/SongsCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return <div><SongsList /></div>
};

ReactDOM.render(
<ApolloProvider client={client}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SongsList} />
      <Route path="songs/new" component={SongsCreate} />
      <Route path="songs/:id" component={SongDetail} />
    </Route>
  </Router>
</ApolloProvider>,
  document.querySelector('#root')
);
