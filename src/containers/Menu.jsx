import React from 'react';
import { Menu, Icon } from 'antd';

class TopMenu extends React.Component {
  render() {
    const { children} = this.props;
    return (
     <div>
        <Menu
        selectedKeys={['mail']}
        mode="horizontal">
        <Menu.Item key="articles">
          <Icon type="book" />文章
        </Menu.Item>
        <Menu.Item key="aboutme">
          <Icon type="user" />关于我
        </Menu.Item>
      </Menu>
      {children}
     </div>
    );
  }
};

export default TopMenu;