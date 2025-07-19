
import React from 'react';
import useStore from './store';
const DatePicker = () => {
  const { setStartDate, setEndDate } = useStore();
  return (
    <div>
      <h2>Select Dates</h2>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
    </div>
  );
};
export default DatePicker
