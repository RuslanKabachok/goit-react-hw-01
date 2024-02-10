import css from '../FriendList/FriendList.module.css';
function FriendListItem({ items }) {
  return (
    <div className={css}>
      <img src={items.avatar} alt="Avatar" width="48" />
      <p>{items.name}</p>
      <p>{items.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
