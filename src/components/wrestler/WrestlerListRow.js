import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const WrestlerListRow = ({wrestler}) => {
  return (
    <tr>
      <td>{wrestler.usawId}</td>
      <td>{wrestler.firstName + " " + wrestler.lastName}</td>
      <td>{wrestler.city + " " + wrestler.state + ", " + wrestler.zip}</td>
      <td>{wrestler.gender}</td>
      <td>{wrestler.dob}</td>
      <td><Link to={'/wrestler/' + wrestler.usawId}>{wrestler.email}</Link></td>
    </tr>
  );
};

WrestlerListRow.propTypes = {
  wrestler: PropTypes.object.isRequired
};

export default WrestlerListRow;
