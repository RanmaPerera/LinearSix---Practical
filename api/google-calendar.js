const axios = require('axios');

// Google Calendar API endpoint and API key (replace with your own)
const BASE_URL = 'https://www.googleapis.com/calendar/v3/calendars/';
const API_KEY = 'YOUR_API_KEY';

// Function to fetch free/busy intervals for a Google Calendar
async function getFreeBusyIntervals(calendarId, startTime, endTime) {
    try {
        const response = await axios.get(`${BASE_URL}${calendarId}/freeBusy?key=${API_KEY}`, {
            params: {
                timeMin: startTime.toISOString(),
                timeMax: endTime.toISOString(),
            },
        });

        if (response.status === 200) {
            return response.data.calendars[calendarId].busy;
        } else {
            throw new Error(`Failed to fetch busy intervals: ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Error fetching busy intervals: ${error.message}`);
    }
}

module.exports = {
    getFreeBusyIntervals,
};
