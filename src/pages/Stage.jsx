import { useParams } from 'react-router-dom';

const Stage = () => {
  const params = useParams();
  console.log(params);
  return <h1>This is the {params.name} stage</h1>;
};

export default Stage;
