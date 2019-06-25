import React from 'react';
import Proptypes from 'prop-types'
import Card from './card';

const listStyle = {
    listStyleType: 'none'
}

const CardList = props => {
    const { userData } = props;
    return (
        <ul style={listStyle}>
            {userData.length > 0 ?
              userData.map(user => 
            <li key={user.login.uuid}>
               <Card user={user} />
            </li>
            )
          :
            <li>No User Data</li>
            }
        </ul>
    )
}



CardList.propTypes = {
    userData: Proptypes.array
}

export default CardList;