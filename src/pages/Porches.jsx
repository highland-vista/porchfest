import { useParams } from 'react-router-dom';

const Porches = () => {
  // /porches/:name
  const params = useParams();
  console.log(params);
  return <h1>This is the {params.name} porch</h1>;
};

export default Porches;
