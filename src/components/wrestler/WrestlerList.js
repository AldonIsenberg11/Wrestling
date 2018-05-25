import React, {PropTypes} from 'react';
import WrestlerListRow from './WrestlerListRow';

const WrestlerList = ({wrestlers}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Email</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {wrestlers.map(wrestler =>
        <WrestlerListRow key={wrestler.id} wrestler= {wrestler}/>
      )}
      </tbody>
    </table>
  );
};

WrestlerList.propTypes = {
  wrestlers: PropTypes.array.isRequired
};

export default WrestlerList;
