import '../App/App.css';
import smc from './statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

      id: PropTypes.string.isRequired,
    })
  ),
};
