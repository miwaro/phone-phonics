import React, { useState } from 'react';
import SimpleSnackbar from '../toast';


function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => ++value); 
  } 

const Favorites = (title) => {

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const forceUpdate = useForceUpdate();



    const addTitle = () => {
        let strTitle = title.title;
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if ( favorites && !favorites.includes(strTitle)) {
            favorites.push(strTitle);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            const titles = [strTitle];
            localStorage.setItem('favorites', JSON.stringify(titles));
        }
    }

    // const removeTitle = (title) => {

    //     if (favorites && favorites.includes(title)) {
    //         const removedTitle = favorites.filter((val) => val !== title);
    //         localStorage.setItem('favorites', JSON.stringify(removedTitle));

    //         forceUpdate();
    //     } 
    // }

    return (
        <div>
            <li style={{display: 'flex', justifyContent: 'space-between'}}>
                Add to Favorites
                <SimpleSnackbar 
                    className='add-button'
                    addTitle={addTitle}
                    fontSize='large' 
                    style={{transform: 'Translate(0, -10px)', cursor: 'pointer'}}/>
            </li>
        </div>
    )
}

export default Favorites;

