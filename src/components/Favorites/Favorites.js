import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Favorites = (title) => {

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

    return (
        <div>
            <li style={{display: 'flex', justifyContent: 'space-between'}}>
                Add to Favorites
                <AddBoxIcon 
                    className='add-button'
                    onClick={addTitle} 
                    fontSize='large' 
                    style={{transform: 'Translate(0, -10px)', cursor: 'pointer'}}/>
            </li>
        </div>
    )
}

export default Favorites;

