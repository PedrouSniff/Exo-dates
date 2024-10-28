// Exo2 //
function isValidDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);

    if(year > 1000 || month > 1 || month < 12 || day > 1 || day < 31) {
        return true
}