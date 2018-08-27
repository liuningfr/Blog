import React from 'react';
import { List } from 'antd';

const ArticleList = ({ dataSouce }) => (
  <List
    itemLayout="horizontal"
    dataSource={dataSouce}
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

export default ArticleList;
