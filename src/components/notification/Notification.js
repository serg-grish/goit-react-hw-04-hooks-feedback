import PropTypes from "prop-types";

function Notification({ message, children }) {
  return (
    <section>
      {{ message } && <h3 className="title">{message}</h3>}
      {children}
    </section>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node,
};

export default Notification;
