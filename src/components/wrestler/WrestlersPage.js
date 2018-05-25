import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wrestlerActions from '../../actions/wrestlerActions';
import WrestlerList from './WrestlerList';
import {browserHistory} from 'react-router';

class WrestlersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddWrestlerPage = this.redirectToAddWrestlerPage.bind(this);
  }

  wrestlerRow(wrestler, index) {
    return <div key={index}>{wrestler.email}</div>;
  }

  redirectToAddWrestlerPage() {
    browserHistory.push('/wrestler');
  }
  render () {
    const {wrestlers} = this.props;

    return (
      <div>
        <h1>Wrestlers</h1>
        <input
          type="submit"
          value="Add Wrestler"
          className="btn btn-primary"
          onClick={this.redirectToAddWrestlerPage}/>
        <WrestlerList wrestlers={wrestlers}/>
      </div>
    );
  }
}

WrestlersPage.propTypes = {
  wrestlers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    wrestlers: state.wrestlers
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(wrestlerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WrestlersPage);
