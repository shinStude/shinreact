import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './capter_06/NotificationList';


const root = document.getElementById('root');

  ReactDOM.render(
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>,
    root
  );

 //  reportWebVitals();

// -- chapter 03
// const root = document.getElementById('root');
//setInterval(() => {
//  ReactDOM.render(
//    <React.StrictMode>
//      <Clock />
//    </React.StrictMode>,
//    root
//  );
// }, 1000);

// -- chapter 04
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


