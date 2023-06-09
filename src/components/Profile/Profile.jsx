import '../App/App.css';
import pmc from './profile.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  return (
    <div className={pmc.profile}>
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
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
