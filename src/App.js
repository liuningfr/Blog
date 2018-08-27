import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Loading from './layouts/Loading';

// 动态加载函数
const load = loader => Loadable({ loader, loading: Loading });

const Menu = load(() => import('./containers/Menu'));
const List = load(() => import('./containers/List'));

class App extends React.Component {
  render() {
    return (
      <Router>
        <LocaleProvider locale={zhCN}>
          <Menu>
            <Switch>
              <Route exact path="/" component={List} />
            </Switch>
          </Menu>
        </LocaleProvider>
      </Router>
    );
  }
}

export default App;
