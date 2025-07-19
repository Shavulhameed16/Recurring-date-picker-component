
import React from 'react';
import useStore from './store';
const CalendarPreview = () => {
  const { startDate, endDate, recurrenceType } = useStore();
  
  return (
    <div>
      <h2>Calendar Preview</h2>
      {}
    </div>
  );
};
export default CalendarPreview;
