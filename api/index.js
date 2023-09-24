// Import your API modules here
const googleCalendarApi = require('./google-calendar');

// Test your API functions here
const calendarId = 'your_calendar_id';
const startTime = new Date('2023-09-01');
const endTime = new Date('2023-09-10');

googleCalendarApi.getFreeBusyIntervals(calendarId, startTime, endTime)
    .then((busyIntervals) => {
        console.log('Busy Intervals:', busyIntervals);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
