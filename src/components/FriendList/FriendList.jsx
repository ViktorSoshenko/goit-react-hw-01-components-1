import '../App/App.css';
import flmc from './friendList.module.css';
import React from 'react';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';
export function FriendList({ friends }) {
  return (
    <ul className={flmc.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
