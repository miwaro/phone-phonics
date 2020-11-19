import React, {useState} from 'react';


const ringtonesJSON = require("../../data/ringtones.json");

function useForceUpdate(){
  const [value, setValue] = useState(0); 
  return () => setValue(value => ++value); 
} 

const FavoritesPage = () => {

    const forceUpdate = useForceUpdate();
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const filtered = ringtonesJSON.filter((ringtone) => {
        return favorites.includes(ringtone.title);
    });


    const removeTitle = (title) => {

        if (favorites && favorites.includes(title)) {
            const removedTitle = favorites.filter((val) => val !== title);
            localStorage.setItem('favorites', JSON.stringify(removedTitle));

            forceUpdate();
        } 
    }

    return (
        <div className='favorites-container'>
            <h1 className='favorites-header'>Favorites</h1>

            {filtered.map((ringtone) => (
                <ul className='favorites-list' key={ringtone.id}>
                    <li>
                        {ringtone.title}    
                    </li>
                    <button
                        className='favorites-button'
                        onClick={() => removeTitle(ringtone.title)}
                    >
                        Remove
                    </button> 
                  

                </ul>   
            ))}
  

        </div>
    )
}

export default FavoritesPage;























// const LOCAL_STORAGE_KEY ='react-title-list-titles';


//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if (storageTodos) {
//       setTodos(storageTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(titles));
//   }, [titles] );

//   function toggleComplete(id) {
//   setTitles(
//     titles.map(title => {
//       if (title.id === id) {
//         return {
//           ...title,
//           completed: !title.completed
//         };
//       }
//       return title;
//     })                                           
//   );
//   }
