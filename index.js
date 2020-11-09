const testVar = 
[
  {year: "2018", result: "L"},
  //{year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];


function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let resultObj, result;
    resultObj = array.find(o => o.result === 'W');
    if (resultObj !== undefined) {
      result = resultObj.year;
    }
    return result;
};
