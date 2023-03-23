import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  console.log(title);

  return (
    <section>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
