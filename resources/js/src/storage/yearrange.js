const currentYear = new Date().getFullYear();
function generateYearRange(start, end) {
    const tempYears = [];
    for (let i = start; i>=end; i--) {
        tempYears.push(i);
    }
    return tempYears;
}

export const years = generateYearRange(currentYear, currentYear - 20);