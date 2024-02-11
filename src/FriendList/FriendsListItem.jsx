import css from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
