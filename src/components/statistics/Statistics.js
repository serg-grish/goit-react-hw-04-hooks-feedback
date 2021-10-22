import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.Statistics}>
    <li className={s.Statistics}>good: {good}</li>
    <li className={s.Statistics}>neutral: {neutral}</li>
    <li className={s.Statistics}>bad: {bad}</li>
    <li className={s.Statistics}>total: {total}</li>
    <li className={s.Statistics}>positive feedback: {positivePercentage}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
