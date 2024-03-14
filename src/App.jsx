import './App.css';
import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

import user from './data/userData.json';
import friends from './data/friends.json';
import transaction from './data/transactions.json';

function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
