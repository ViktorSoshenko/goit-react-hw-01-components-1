import React from 'react';
import '../App/App.css';
import flmc from './friendList.module.css';
import PropTypes from 'prop-types';
export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={flmc.item} key={id}>
      <span className={isOnline === true ? `${flmc.status}` : `${flmc.green}`}>
        {isOnline}
      </span>
      <img className={flmc.avatar} src={avatar} alt="User avatar" width="100" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
  }),
};
