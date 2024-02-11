import css from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({ items = [] }) {
  if (!items) {
    return <p className={css.error}>No transactions available</p>;
  }
  return (
    <table className={css.transactions}>
      <thead className={css.head}>
        <tr className={css.main}>
          <th className={css.row}>Type</th>
          <th className={css.row}>Amount</th>
          <th className={css.row}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={css.info}>
            <td className={css.type}>{transaction.type}</td>
            <td className={css.amount}>{transaction.amount}</td>
            <td className={css.currency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
