// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {

  const intervalsSorted = [];
  const intervalHelper = {
    intervalsOpen: [],
    currentStart: null,
    sum: 0
  }

  for (let i = 0; i < intervals.length; i++) {

    intervalsSorted.push({
      value: intervals[i][0],
      index: i,
      intervalEnd: false
    },
    {
      value: intervals[i][1],
      index: i,
      intervalEnd: true
    });
  }

  intervalsSorted.sort((a, b) => a.value - b.value);

  for (let i = 0; i < intervalsSorted.length; i++) {

    if(!intervalsSorted[i].intervalEnd) {

      intervalHelper.intervalsOpen.push(intervalsSorted[i].index);

      if(intervalHelper.currentStart === null) {
        intervalHelper.currentStart = intervalsSorted[i].value;
      }
    }
    if(intervalsSorted[i].intervalEnd) {

      intervalHelper.intervalsOpen = intervalHelper.intervalsOpen.filter((index) => index !== intervalsSorted[i].index);

      if(!intervalHelper.intervalsOpen.length) {

        intervalHelper.sum += intervalsSorted[i].value - intervalHelper.currentStart;
        intervalHelper.currentStart = null;
      }
    }
  }

  return intervalHelper.sum;
}



module.exports = {
  sumIntervals
}