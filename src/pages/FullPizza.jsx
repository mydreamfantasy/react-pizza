import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63e3f143619fce55d4250f0c.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Такой питсы нет');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
