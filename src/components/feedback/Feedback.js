import React from "react";
import s from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ feedbackState, onAddFeedback }) => (
  <ul className={s.Feedback}>
    {feedbackState.map((el) => (
      <li key={el} className={s.item}>
        <button className={s.btm} onClick={() => onAddFeedback(el)}>
          {el}
        </button>
      </li>
    ))}
  </ul>
);

export default Feedback;

Feedback.propTypes = {
  feedbackState: PropTypes.array.isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
