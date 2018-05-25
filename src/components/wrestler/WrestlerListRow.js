import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const WrestlerListRow = ({wrestler}) => {
  return (
    <tr>
      <td><a href={wrestler.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/wrestler/' + wrestler.id}>{wrestler.email}</Link></td>
      <td>{wrestler.authorId}</td>
      <td>{wrestler.category}</td>
      <td>{wrestler.length}</td>
    </tr>
  );
};

WrestlerListRow.propTypes = {
  wrestler: PropTypes.object.isRequired
};

export default WrestlerListRow;
