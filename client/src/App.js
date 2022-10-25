import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
  state = {
  messages: [],
  };
  newMessage = (username, message) => {
    const newChat = {
      ['username']: username,
      ['text']: message,
    };
    this.setState(currState => ({
      messages: currState.messages.concat([newChat]),
    }));
  };
  render() {
    const { messages } = this.state;

    return (
      <div className="Chat">
        <header className="chatHead">
          <h1 className="h1">Interest Board</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onMessage={this.onMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;