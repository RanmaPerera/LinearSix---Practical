// date-extension.js

Date.prototype.daysTo = function (otherDate) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diffDays = Math.round(Math.abs((this - otherDate) / oneDay));
    return diffDays;
};
