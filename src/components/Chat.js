import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import You from '../assets/img/black-bird.jpeg';
import Me from '../assets/img/white-bird.jpeg';

const Chat = (props) => {
  const isQuestion = props.type === 'question';
  const classes = isQuestion ? 'chat__row' : 'chat__reverse';

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Me} />
        ) : (
          <Avatar alt="icon" src={You} />
        )}
      </ListItemAvatar>
      <diV className="chat__bubble">{props.text}</diV>
    </ListItem>
  );
};

export default Chat;
