import React from 'react';
import '../App/App.css';
import flmc from './friendList.module.css';

export function FriendListItem({ avatar, name, isOnline, id }) {
  console.log(id);
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
