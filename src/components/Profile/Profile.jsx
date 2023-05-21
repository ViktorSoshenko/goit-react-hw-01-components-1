export const Profile = props => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};
/* <div className={pmc.profile}>
      <div className={pmc.description}>
        <img src={user.avatar} alt="User avatar" className={pmc.avatar} />
        <p className={pmc.name}>{user.username}</p>
        <p className={pmc.tag}>@{user.tag}</p>
        <p className={pmc.location}>{user.location}</p>
      </div>

      <ul className={pmc.stats}>
        <li>
          <span className={pmc.label}>Followers</span>
          <span className={pmc.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={pmc.label}>Views</span>
          <span className={pmc.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={pmc.label}>Likes</span>
          <span className={pmc.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div> */
