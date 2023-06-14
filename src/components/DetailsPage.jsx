import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const { id, name } = location.state;

  return (
    <div>
      <h2>Details Page</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default DetailsPage;
