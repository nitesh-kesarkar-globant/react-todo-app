import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a URL with data
    navigate('details', { state: { id: 123, name: 'John' } });
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Details</button>
    </div>
  );
};

export default MyPage;
