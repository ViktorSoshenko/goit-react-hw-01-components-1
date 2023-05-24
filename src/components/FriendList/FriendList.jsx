import '../App/App.css';
import flmc from './friendList.module.css';
import React from 'react';
import { FriendListItem } from 'components/FriendList/FriendListItem';

// function FriendListItem({ friends }) {
//   return friends.map(friend => (
//     <li className={flmc.item} key={friend.id}>
//       <span
//         className={
//           friend.isOnline === true ? `${flmc.status}` : `${flmc.green}`
//         }
//       >
//         {friend.isOnline}
//       </span>
//       <img
//         className={flmc.avatar}
//         src={friend.avatar}
//         alt="User avatar"
//         width="100"
//       />
//       <p className="name">{friend.name}</p>
//     </li>
//   ));
// }
export function FriendList({ friends }) {
  return (
    <ul className={flmc.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
}
