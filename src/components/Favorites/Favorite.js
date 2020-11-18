import React from 'react';
import { IconButton, ListItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Favorite({ title, removeTitle }) {

    // function handleRemoveClick(){
    //     removeTitle(title.id);
    // }


    return (
        <ListItem style={{display: 'flex'}}>
            <IconButton>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Favorite;