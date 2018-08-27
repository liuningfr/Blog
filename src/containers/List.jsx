import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers/blog';
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
}

const mapStateToProps = (state) => (
  {
    list: state.list,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    initList: () => {
      dispatch(actions.initList());
    },
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
