import FriendList from '../FriendList/FriendList';
import Profile from '../Profile/Profile';
import userData from '../Profile/Profile.json';
import friends from '../FriendList/FriendList.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/TransactionHistory.json';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
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
