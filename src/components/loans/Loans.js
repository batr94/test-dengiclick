import React, { useEffect, useState } from 'react';
import { getLoans, removeTokenFromStorage } from "../../utils/api";

function Loans({ removeToken }) {

  const [ loans, setLoans ] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const result = await getLoans();
        setLoans(result.data.data);
        console.log(result);
      } catch(err) {
        if (err.response) {
          removeToken();
        }
        console.log(err.response);
      }
    };

    fetchLoans();

  }, [removeToken]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-left'>
          <h1 className='title'>Список займов</h1>
        </div>
      </div>
    </div>
  );
}

export default Loans;