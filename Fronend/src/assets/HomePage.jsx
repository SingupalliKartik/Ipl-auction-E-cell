
/* eslint-disable no-unused-vars */



import  React,{useEffect, useState} from 'react';
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
import {db} from '../config/Firebase';
import { doc, onSnapshot,getDocs, collection, } from "firebase/firestore";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

const  HomePage = () => {

  const [players, setPlayers] = useState([]);
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, 'Player'), (snapshot) => {
    const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // set your state here
    // this will trigger a re-render of your component
    setPlayers(newData);
  });

  // Clean up the subscription on unmount
  return () => unsubscribe();


}, [])

//   const unsub = onSnapshot(doc(db, "Players",""), (doc) => {
//     console.log("Current data: ", doc.data());
// });
// unsub();
    const [value, setValue] = React.useState('recents');
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    useEffect(() => {
      if (ref.current && ref.current.ownerDocument && ref.current.ownerDocument.body) {
        ref.current.ownerDocument.body.scrollTop = 0;
      }
      setMessages(refreshMessages());
    }, [value, setMessages]);
    
    return (
<>
<div>


<ImageList sx={{ width: 500, height: 450 }}>
{itemData.map((item) => (
  <ImageListItem key={item.img}>
    <img
      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      src={`${item.img}?w=248&fit=crop&auto=format`}
      alt={item.title}
      loading="lazy"
    />
    <ImageListItemBar
      title={item.title}
      subtitle={<span>by: {item.author}</span>}
      position="below"
    />
  </ImageListItem>
))}
</ImageList>{
players.map((player)  => {
  return <div key={2}>
    <p>{player.Name}</p>
    <p>{player.Final}</p>
    <p>{player.isSold}</p>
    <p>{player.Base}</p>
  </div>
})

}</div>
</>
    );
  
  
    
  }
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
  const messageExamples = [
    {
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: '/static/images/avatar/5.jpg',
    },
    {
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: '/static/images/avatar/1.jpg',
    },
    {
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: '/static/images/avatar/2.jpg',
    },
    {
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: '/static/images/avatar/3.jpg',
    },
    {
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: '/static/images/avatar/4.jpg',
    },
    {
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: '/static/images/avatar/5.jpg',
    },
    {
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: '/static/images/avatar/1.jpg',
    },
  ];
  

export default HomePage;