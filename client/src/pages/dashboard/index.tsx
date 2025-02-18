import styles from './index.module.scss';
const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/index');
  };

  return (
    <>
      <nav></nav>
      <p onClick={handleClick}>dashboard</p>
    </>
  );
};

export default Index;
