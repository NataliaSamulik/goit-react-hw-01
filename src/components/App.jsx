// import { useState } from 'react'
import '../App.css'
import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'

import user from '../userData.json'
import friends from '../friends.json'
import transaction from '../transactions.json'


function App() {
 const {username, tag, location, avatar, stats} = user
  return (
    <>
    <Profile name={username} tag={tag} location={location} image={avatar} stats={stats}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transaction}/>
    </>
  )
}

export default App
