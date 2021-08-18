var leap_Years = (lowerYear, maxYear) => {
    var arrYear = []
    for (let i = lowerYear; i <= maxYear; i++){
        if (i % 4 === 0) {
            arrYear.push(i)
        }
    }
    return arrYear.slice(1, 31)
}

console.log(leap_Years(1900, 2020))