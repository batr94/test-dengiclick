import React, { useEffect, useState } from 'react';
import { getLoan } from "../../utils/api";

function Loan({ match, removeToken }) {
  const [loanData, setLoanData ] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchLoan = async () => {
      try {
        const result = await getLoan(match.params.loanId);
        if (isMounted) {
          setLoanData(result.data.data);
        }
      } catch(err) {
        if (err.response) {
          removeToken();
        }
        console.log(err.response);
      }
    };
    fetchLoan();

    return function cleanup() {
      isMounted = false;
    }

  }, [removeToken, match.params.loanId]);

  return (
    <div className='container'>
      <div className='row'>
        { loanData &&
          <div className='col text-left'>
            <h1 className='title'>Детали займа</h1>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Номер заявки</td>
                  <td>{loanData.number}</td>
                </tr>
                <tr>
                  <td>Сумма выдачи займа</td>
                  <td>{loanData.issue_amount}</td>
                </tr>
                <tr>
                  <td>Общая сумма оплат по займу</td>
                  <td>{loanData.repaid_amount}</td>
                </tr>
                <tr>
                  <td>Дата выдачи займа</td>
                  <td>{loanData.issue_date}</td>
                </tr>
                <tr>
                  <td>Планируемая дата закрытия займа</td>
                  <td>{loanData.return_date}</td>
                </tr>
                <tr>
                  <td>Статус</td>
                  <td>{loanData.status}</td>
                </tr>
                <tr>
                  <td>Процентная ставка по займу</td>
                  <td>{loanData.interest}%</td>
                </tr>
                <tr>
                  <td>Сумма к возврату</td>
                  <td>{loanData.return_amount}</td>
                </tr>
                <tr>
                  <td>Сумма к возврату сегодня</td>
                  <td>{loanData.return_on_current_date}</td>
                </tr>
              </tbody>

            </table>
          </div>
        }
        { !loanData &&
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

export default Loan;