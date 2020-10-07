import React from 'react';
import {
  List,
  Avatar,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import './App.css';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.list} secondary="deadline ⏰" />
      </ListItem>
    </List>
  );
}

export default Todo;
