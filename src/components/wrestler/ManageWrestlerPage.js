import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wrestlerActions from '../../actions/wrestlerActions';
import WrestlerForm from './WrestlerForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageWrestlerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      wrestler: Object.assign({}, this.props.wrestler),
      errors: {},
      saving: false
    };

    this.updateWrestlerState = this.updateWrestlerState.bind(this);
    this.saveWrestler = this.saveWrestler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.wrestler.usawId != nextProps.wrestler.usawId) {
      this.setState({wrestler: Object.assign({}, nextProps.wrestler)});
    }
  }

  updateWrestlerState(event) {
    const field = event.target.name;
    let wrestler = this.state.wrestler;
    wrestler[field] = event.target.value;
    return this.setState({wrestler: wrestler});
  }

  wrestlerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.wrestler.email.length < 5) {
      errors.email = 'Email must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveWrestler(event) {
    event.preventDefault();

    if (!this.wrestlerFormIsValid()) {
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveWrestler(this.state.wrestler)
      .then(()=> this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Wrestler Saved');
    this.context.router.push('/wrestlers');
  }

  render() {
    return (
      <WrestlerForm
        allAuthors={this.props.authors}
        onChange={this.updateWrestlerState}
        onSave={this.saveWrestler}
        wrestler={this.state.wrestler}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageWrestlerPage.propTypes = {
  wrestler  : PropTypes.object.isRequired,
  authors : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

//Pull in the React Router contextso router is available on this.context.router.
ManageWrestlerPage.contextTypes = {
  router: PropTypes.object
};

function getWrestlerById(wrestlers, id) {
  const wrestler = wrestlers.filter(wrestler => wrestler.usawId ==id);
  if (wrestler.length) return wrestler[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const wrestlerId = ownProps.params.usawId; // from the path `/wrestler/:id`

  let wrestler = {
    usawId           : '',
    email            : '',
    firstName        : '',
    lastName         : '',
    dob              : '',
    phone            : '',
    gender           : '',
    address1         : '',
    address2         : '',
    city             : '',
    state            : '',
    zip              : '',
    parentFirstName  : '',
    parentLastName   : '',
    parentEmail      : '',
    parent2FirstName : '',
    parent2LastName  : '',
    parent2Email     : ''
  };

  if (wrestlerId && state.wrestlers.length > 0) {
    wrestler = getWrestlerById(state.wrestlers, wrestlerId);
  }

  return {
    wrestler: wrestler,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wrestlerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWrestlerPage);
