import React, {PropTypes} from 'react';
import WrestlerListRow from './WrestlerListRow';

const WrestlerList = ({wrestlers}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>usawId</th>
        <th>Name</th>
        <th>Location</th>
        <th>Gender</th>
        <th>D.O.B.</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {wrestlers.map(wrestler =>
        <WrestlerListRow key={wrestler.usawId} wrestler= {wrestler}/>
      )}
      </tbody>
    </table>
  );
};

WrestlerList.propTypes = {
  wrestlers: PropTypes.array.isRequired
};

export default WrestlerList;
