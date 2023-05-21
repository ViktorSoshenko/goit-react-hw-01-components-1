import '../App.css';
import pmc from './profile.module.css';
import React from 'react';

const Profile = props => (
  <div className={pmc.profile}>
    <div className={pmc.description}>
      <img src={avatar} alt="User avatar" className={pmc.avatar} />
      <p className={pmc.name}>{username}</p>
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
  </div>
);

export default Profile;
