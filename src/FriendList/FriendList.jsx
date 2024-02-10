import FriendListItem from './FriendsListItem';

function FriendList({ friends }) {
  return (
    <ul>
      <li>
        {friends.map((item) => (
          <FriendListItem items={item} key={item.id} />
        ))}
      </li>
    </ul>
  );
}

export default FriendList;
