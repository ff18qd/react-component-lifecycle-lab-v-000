import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()
  
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }
  
  componentWillReceiveProps(nextProps) {
    
    this.setState({
      tweets: [
        ...nextProps.newTweets,
        ...this.state.tweets],
        
    })
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.newTweets.length === 0) {
      return false
    } else {
      return true
    }
    // if (this.state.tweets !== nextState.tweets) {
    //   return true
    // } else {
    //   return false
    // }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
