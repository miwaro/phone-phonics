// import React from 'react';

// import { List } from '@material-ui/core';
// import Favorite from './Favorite';

// // const ringtonesJSON = require("../../data/ringtones.json");


// function TitleList(props) {

//     return (
//         <List>
//             {props.newTitles.map(title => (
//                 <Favorite key={title.id} title={title}/>
//             ))}
//         </List>
//     )
// }

// export default TitleList;


import React from 'react';

import './FavoritesList.css';

const TitleList = props => {
  return (
    <section className="ingredient-list">
      <h2>Titles</h2>
      <ul>
        {props.newTitles.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TitleList;