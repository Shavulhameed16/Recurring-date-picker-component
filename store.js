
import create from 'zustand';
const useStore = create((set) => ({
  recurrenceType: 'daily',
  startDate: null,
  endDate: null,
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
export default useStore;
