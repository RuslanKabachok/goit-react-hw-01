import FriendList from '../FriendList/FriendList';
import Profile from '../Profile/Profile';
import userData from '../Profile/Profile.json';
import friends from '../FriendList/FriendList.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/TransactionHistory.json';
import css from '../App/App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
