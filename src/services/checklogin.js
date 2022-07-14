import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const checkLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('@id-Token');

    if (!login) {
      navigate('/login', { replace: true });
      alert('Voce nao esta logado!');
    }
  }, []);
};

export default checkLogin;
