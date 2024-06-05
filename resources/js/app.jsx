import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from '@/src/Routes';
import Login from './src/pages/auth/login';

const app =ReactDOM.createRoot(document.getElementById('app'));

app.render(
    <Routes/>
)
