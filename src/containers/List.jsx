import React from 'react';
import { connect } from 'react-redux';
import { initList } from '../reducers/blog';
import ArticleList from '../components/Articles';

class List extends React.Component {
  componentDidMount() {
    const { initList } = this.props;
    initList();
  }
  render() {
    const { list } = this.props;
    return (
     <ArticleList dataSouce={list} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initList: () => {
      dispatch(initList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);