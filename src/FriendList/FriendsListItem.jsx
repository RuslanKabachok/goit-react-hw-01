import css from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

function FriendListItem({ items }) {
  return (
    <div className={css.friendCard}>
      <img src={items.avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{items.name}</p>
      <p
        className={clsx(css.status, items.isOnline ? css.online : css.offline)}
      >
        {items.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
