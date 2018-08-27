import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Loading from './layouts/Loading';
import Menu from './layouts/Menu';

// 动态加载函数
const load = loader => Loadable({ loader, loading: Loading });

const List = load(() => import('./containers/List'));
const Me = load(() => import('./containers/Me'));


const App = () => (
  <Router>
    <LocaleProvider locale={zhCN}>
      <Menu>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/articles" component={List} />
          <Route exact path="/aboutme" component={Me} />
        </Switch>
      </Menu>
    </LocaleProvider>
  </Router>
);


export default App;
