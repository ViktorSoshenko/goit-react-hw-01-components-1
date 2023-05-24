import React from 'react';

import { Profile } from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import data from '../data/data.json';
import friends from '../data/friends.json';
import user from '../data/user.json';
import transactions from '../data/transactions.json';

// const stats = data;
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        backgroundColor: '#e0e0e0',
      }}
    >
      <Profile user={user} />
      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={data} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
