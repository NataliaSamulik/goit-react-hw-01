import clsx from "clsx";
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div >
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.offline, {
        [css.online]: isOnline,
      })}>{isOnline? 'online' : 'offline'}</p>
    </div>
  );
};

export default FriendListItem;

