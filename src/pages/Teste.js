import {Navigate} from 'react-router-dom';
import React from 'react';

const Teste = () => {
    const [navigate, setNavigate] = React.useState();
    
    return (
    <div>ffsdf
        <Navigate to="/login"  />
    </div>);
  };
  
  export default Teste;