
import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DatePicker from './DatePicker';
import CalendarPreview from './CalendarPreview';
const App = () => {
  return (
    <div className="p-4">
      <RecurrenceOptions />
      <DatePicker />
      <CalendarPreview />
    </div>
  );
};
export default App;
