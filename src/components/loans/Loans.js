import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLoans } from "../../utils/api";

function Loans({ removeToken }) {

  const [ loans, setLoans ] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchLoans = async () => {
      try {
        const result = await getLoans();
        if (isMounted) {
          setLoans(result.data.data);
        }
      } catch(err) {
        if (err.response) {
          removeToken();
        }
        console.log(err.response);
      }
    };

    fetchLoans();

    return function cleanup() {
      isMounted = false;
    }

  }, [removeToken]);

  return (
    <div className='container'>
      <div className='row'>
        { loans &&
          <div className='col text-left'>
            <h1 className='title'>Список займов</h1>
            { loans &&
            <table className='table'>
              <thead>
              <tr>
                <th scope='col'>Номер заявки</th>
                <th scope='col'>Сумма выдачи займа</th>
                <th scope='col'>Дата выдачи займа</th>
                <th scope='col'>Планируемая дата закрытия займа</th>
                <th scope='col'>Статус</th>
              </tr>

              </thead>
              <tbody>
              { loans.map((loan) =>
                <tr key={loan.number}>
                  <td><Link to={`/loan/${loan.number}`}>{ loan.number }</Link></td>
                  <td>{ loan.issue_amount }</td>
                  <td>{ loan.issue_date }</td>
                  <td>{ loan.return_date }</td>
                  <td>{ loan.status }</td>
                </tr>
              )}
              </tbody>
            </table>
            }

          </div>
        }
        { !loans &&
          <div className='col pt-5'>
            <div className="spinner-border spinner-border-lg text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Loans;