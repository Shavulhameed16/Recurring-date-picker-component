
import React from 'react';
import useStore from './store';
const RecurrenceOptions = () => {
  const { setRecurrenceType } = useStore();
  return (
    <div>
      <h2>Select Recurrence Type</h2>
      <select onChange={(e) => setRecurrenceType(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};
export default RecurrenceOptions;
