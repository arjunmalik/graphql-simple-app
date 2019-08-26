import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(this.props.songId + '      ' + this.state.content);
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({content: ''}));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label> Add a Lyric </label>
        <input onChange={event => this.setState({content: event.target.value})}
        value={this.state.content}/>
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($songId: ID, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
