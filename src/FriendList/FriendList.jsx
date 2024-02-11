import css from '../FriendList/FriendList.module.css';
import FriendListItem from './FriendsListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((item) => (
        <li key={item.id} className={css.item}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
