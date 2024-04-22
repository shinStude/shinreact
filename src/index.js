import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';


const root = document.getElementById('root');

  ReactDOM.render(
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>,
    root
  );