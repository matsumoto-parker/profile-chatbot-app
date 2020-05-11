import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false,
    };
  }
  render() {
    return (
      <section className="section">
        <div className="box"></div>
      </section>
    );
  }
}
