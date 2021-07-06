const DAYS_IN_WEEK = 7;

function createDaysOfWeek () {
    let zeroDay = new Date();
    const firstDateOfWeek = zeroDay.getDate() - zeroDay.getDay();
    zeroDay.setDate(firstDateOfWeek);
  
    const days = [];
  
    let i = 0;
    while(i < DAYS_IN_WEEK) {
      const dayText = zeroDay.toLocaleDateString("en", {weekday: "short"});
      days.push(dayText);
      zeroDay.setDate(zeroDay.getDate() + 1)
      i = i + 1;
    }

    return days;
}

function createLongMonthNames () {
  const months = [];
  const monthCount = 12;

  let i = 0;
  while (i < monthCount) {
    months.push(i);
    i = i + 1;
  }

  const arrOfMonthsNames = months.map((month, index) => {
    const date = new Date(2000, index); 
    return date.toLocaleString("en", {month: "long"});
  });

  return arrOfMonthsNames;
}

export {
    DAYS_IN_WEEK,
    createDaysOfWeek,
    createLongMonthNames,
}