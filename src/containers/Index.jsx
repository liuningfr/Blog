import React from 'react';
import Menu from './Menu';
import List from './List';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <List />
      </React.Fragment>
    )
  }
};

export default Index;
