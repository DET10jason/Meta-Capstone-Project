import { initializeTimes, updateTimes } from './Main'; // Adjust import paths

describe('Booking Reducer Functions', () => {
    
    test('initializeTimes returns the correct initial state', () => {
        const expectedInitialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const result = initializeTimes();
        
        expect(result).toEqual(expectedInitialTimes);
    });

    test('updateTimes returns the same value provided in the state', () => {
        const initialState = ["17:00", "18:00"];
        const action = { type: 'UPDATE_TIMES', date: '2026-05-04' };
        
        // At this stage, updateTimes is expected to be a "pass-through" function
        const result = updateTimes(initialState, action);
        
        expect(result).toEqual(initialState);
    });
});