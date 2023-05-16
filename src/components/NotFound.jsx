import { Link } from "react-router-dom";

function NotFound({ message, status, linkText, link }) {
  return (
    <div
      className={`alert alert-${status} d-flex justify-content-between align-items-center`}
      role="alert"
    >
      <span>{message}</span>
      {link && linkText && (
        <Link to={link} class="alert-link">
          {linkText}
        </Link>
      )}
    </div>
  );
}

export default NotFound;
