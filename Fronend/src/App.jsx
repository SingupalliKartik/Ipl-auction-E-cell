/* eslint-disable no-unused-vars */

import './App.css'


import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { AccountCircle, GroupOutlined } from '@mui/icons-material';
import {
  Route,
  Routes,
  Router
} from "react-router-dom";
import HomePage from './assets/HomePage';
import About from './assets/MyPlayers';
import Dashboard from './assets/Dashboard';
import Admin from './assets/AdminPage';

export default function App() {
  return(
    <>
<div className=' bg-white w-full h-full'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
</div>
 
    </>
  )

}