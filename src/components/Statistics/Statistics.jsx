import '../App/App.css';
import smc from './statistics.module.css';
import React from 'react';

// function Title({ title }) {
//   if (title) {
//     console.log(title);
//     return <h2 className={smc.title}>{title}</h2>;
//   } else {
//     return;
//   }
// }

function Statistics({ title, stats }) {
  console.log(stats);

  const listItems = stats.map(stat => (
    <li className={smc.item} key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={smc.statistics}>
      {title && <h2> {title}</h2>}

      <ul className={smc.statList}>{listItems}</ul>
    </section>
  );
}

export default Statistics;
