import React from 'react';
import { List } from 'antd';

class ArticleList extends React.Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.dataSouce}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description={item.des}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default ArticleList;


