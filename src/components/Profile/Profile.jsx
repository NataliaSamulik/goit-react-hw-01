import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userProfile}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.span}>Followers</span>
          <span className={css.spanAmount}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.span}>Views</span>
          <span className={css.spanAmount}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.span}>Likes</span>
          <span className={css.spanAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
