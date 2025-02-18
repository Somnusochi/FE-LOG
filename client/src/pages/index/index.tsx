import styles from './index.module.scss';
const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Navigation />
      <Login />
      <p className={styles.test} onClick={handleClick}>
        index
      </p>
    </>
  );
};

export default Index;
