//early description:
// get current city, current sector
// get future city, future sector
// show differences +/-
//going home cost for 15p/mile [train]

/*--------------------------------------------*/console.log();
//=============================================== DECLARATIONS:
var questions =[
  'Q1/4: Where do you live now?',
  'Q2/4: What industry do you work in?',
  'Q3/4: Which city do you want to live in?',
  'Q4/4: Which industry you want to work in?'
  // 'Q5/5: What is your family home city?',
];

var current=[];
var future=[];

var currentCostOfLiving;
var futureCostOfLiving

var distanceHome;
var costHome;

var msgHtmlChange;
var spanCityColor="<span class=\"spanGreen\">";
var spanIndustryColor="<span class=\"spanGreen\">";
var summaryIndicator= "better";
var spanSummaryColor="<span class=\"fontBigger spanGreen\">";

//===============================================FUNCT:

//inputs whatMsg into html where (by ID)
function printTo(whatMsg, where) {
  var outputDiv = document.getElementById(where);
  outputDiv.innerHTML = whatMsg;
}

//prints out one array out of city data [includes printTo] to specify div
function printCityData( cityExl, currentCity, whereHTML, title) {
  var msgHTML = title;
  for (j=0; j<currentCity.length; j++){
    msgHTML += '<p>'+cityExl[j]+': <span class = "outcomeFigure">£';
    msgHTML += currentCity[j]+'</span></p>';
    printTo(msgHTML, whereHTML);
  }
}
function bothCitiesData(currentCityHere, futureCityHere){
  printCityData(cityExl[0],currentCityHere[1], "dataCurrentOut", "<p>Average costs of living:</p>");
  var msgHTML = "<p>Average annual earnings </p>";
  msgHTML += "<p>in "+tempCurrentIndustry[0]+" sector:</p>";
  msgHTML += "<p class = \"incomeFigure\"> £"+tempCurrentIndustry[1]+"</p>";
  printTo( msgHTML, "dataCurrentIn");
  currentCostOfLiving = currentCityHere[1].reduce(getSum);

  printCityData(cityExl[0],futureCityHere[1], "dataFutureOut", "<p>Average costs of living:</p>");
  msgHTML = "<p>Average annual earnings </p>";
  msgHTML += "<p>in "+tempFutureIndustry[0]+" sector:</p>";
  msgHTML += "<p class =\"incomeFigure\"> £"+tempFutureIndustry[1]+"</p>";
  printTo( msgHTML, "dataFutureIn");
  futureCostOfLiving = futureCityHere[1].reduce(getSum);
}

// reduces all numbers in an array to one single one [sum of all numbers]
  function getSum(total, num) {
      return total + num;
  }

//indicator
function indicator(value1, value2) {
  if (value1 < value2) {
    return 'more';
  }else{
    return 'less';
  }
}

//===============================================EXEC:
//q1.asking current city:
  var q1answer = (prompt(questions[0]).toLowerCase());
  if (q1answer === 'london') {current.push(london)}
  else if (q1answer === 'manchester') {current.push(manchester)}
  else if (q1answer === 'birmingham') {current.push(birmingham)}
  else if (q1answer === 'leeds') {current.push(leeds)}
  else if (q1answer === 'glasgow') {current.push(glasgow)}
  else if (q1answer === 'edinburgh') {current.push(edinburgh)}
  else {current.push(unknown)};

//q2.asking current industry/ already know city
var q2answer = (prompt(questions[1]).toLowerCase());
var tempCurrentIndustry = [];
if (q2answer === 'it') {tempCurrentIndustry[0]=cityExl[1][0]; tempCurrentIndustry[1] = current[0][3][0]}
else if (q2answer === 'hospitality') {tempCurrentIndustry[0]=cityExl[1][1]; tempCurrentIndustry[1] = current[0][3][1]}
else if (q2answer === 'education') {tempCurrentIndustry[0]=cityExl[1][2]; tempCurrentIndustry[1] = current[0][3][2]}
else if (q2answer === 'banking') {tempCurrentIndustry[0]=cityExl[1][3]; tempCurrentIndustry[1] = current[0][3][3]}
else {tempCurrentIndustry = "unknown"};

//q3asking future:
var q3answer = (prompt(questions[2]).toLowerCase());
if (q3answer === 'london') {future.push(london)}
else if (q3answer === 'manchester') {future.push(manchester)}
else if (q3answer === 'birmingham') {future.push(birmingham)}
else if (q3answer === 'leeds') {future.push(leeds)}
else if (q3answer === 'glasgow') {future.push(glasgow)}
else if (q3answer === 'edinburgh') {future.push(edinburgh)}
else {future.push(unknown)};

//q4.asking future industry/ already know city
var q4answer = (prompt(questions[3]).toLowerCase());
var tempFutureIndustry = [];
if (q4answer === 'it') {tempFutureIndustry[0]=cityExl[1][0]; tempFutureIndustry[1] = future[0][3][0]}
else if (q4answer === 'hospitality') {tempFutureIndustry[0]=cityExl[1][1]; tempFutureIndustry[1] = future[0][3][1]}
else if (q4answer === 'education') {tempFutureIndustry[0]=cityExl[1][2]; tempFutureIndustry[1] = future[0][3][2]}
else if (q4answer === 'banking') {tempFutureIndustry[0]=cityExl[1][3]; tempFutureIndustry[1] = future[0][3][3]}
else {tempFutureIndustry = "unknown"};

// //q5.home City question
// var q5answer = 'glasgow';
// // (prompt(questions[5]).toLowerCase());
// if (q5answer === 'london') {distanceHome = future[0][4][0]}
// else if (q5answer === 'manchester') {distanceHome = future[0][4][1]}
// else if (q5answer === 'birmingham') {distanceHome = future[0][4][2]}
// else if (q5answer === 'leeds') {distanceHome = future[0][4][3]}
// else if (q5answer === 'glasgow') {distanceHome = future[0][4][4]}
// else if (q5answer === 'edinburgh') {distanceHome = future[0][4][5]}
// else {distanceHome = "unknown"};

//showing data for cities:
printTo("<p class =\"moveCentral\">You are currently living in <span class= \"titleBolder\">"+current[0][0]+"</span>.</p>", "titleCurrent", );
bothCitiesData(current[0], future[0]);
printTo("<p class =\"moveCentral\">You would like to move to <span class= \"titleBolder\">"+future[0][0]+"</span>.</p>", "titleFuture", );

//calculations:
var costOfLivingDifference = parseInt(currentCostOfLiving-futureCostOfLiving);
  if (costOfLivingDifference<0) {spanCityColor= "<span class=\"spanRed\">"};
var industryDifference = parseInt((tempFutureIndustry[1]-tempCurrentIndustry[1])/12);
  if (industryDifference<0) {spanIndustryColor= "<span class=\"spanRed\">"};
costHome = parseInt(distanceHome*2*0.15); //return ticket home- train - 15p/mile
var indicatorCity = indicator(currentCostOfLiving,futureCostOfLiving); //cost of living indicator needs to be reverse
var indicatorIndustry = indicator(tempCurrentIndustry[1],tempFutureIndustry[1]);
var summaryMonth = costOfLivingDifference+industryDifference;
  if (summaryMonth<0){summaryIndicator= "worse", spanSummaryColor="<span class=\"fontBigger spanRed\">";}
var summaryYear = summaryMonth*12;

// picture rotation:
var imgOut = '<img class= "img" src="img/'+current[0][0]+'.jpg" alt="london" id="topPicture">';
var imgIn = '<img class= "img" src="img/'+future[0][0]+'.jpg" alt="manchester" id="bottomPicture">';
console.log(current[0][0]);
printTo(imgOut, 'imgContainer1');
printTo(imgIn, 'imgContainer2');

//showing difference:
msgHtmlChange= "<p class=\"moveCentral titleBolder\">Cost of living:</br>";
msgHtmlChange+= "<p class=\"moveLower \">"+current[0][0]+" vs. "+future[0][0]+"</p>";
msgHtmlChange+= "<p class=\"moveLower moveRight\">You will pay "+indicatorCity;
msgHtmlChange+= " monthly by "+spanCityColor+"£"+Math.abs(costOfLivingDifference)+"</span></p>";
msgHtmlChange+= "<p class=\"moveRight\">annualy by "+spanCityColor+"£"+Math.abs(costOfLivingDifference)*12+"</p>";
printTo(msgHtmlChange,'change1');

msgHtmlChange= "<p class=\"moveCentral titleBolder\">Industry difference:</p>";
msgHtmlChange+= "<p class=\"moveLower \">"+tempCurrentIndustry[0]+" in "+current[0][0]+" vs. </p>";
msgHtmlChange+= "<p>"+tempFutureIndustry[0]+" in "+future[0][0]+"</p>";
msgHtmlChange+= "<p class=\"moveLower moveRight\">You will earn "+indicatorIndustry;
msgHtmlChange+= " monthly by "+spanIndustryColor+"£"+Math.abs(industryDifference)+'</span></p>';
msgHtmlChange+= "<p class=\"moveRight\">annualy by "+spanIndustryColor+"£"+Math.abs(industryDifference)*12+"</p>";
printTo(msgHtmlChange,'change2');

msgHtmlChange= "<p class=\"moveCentral titleBolder\">Summary</p><br><br>";
msgHtmlChange+= "<p class=\"moveCentral\">In total, you will be "+summaryIndicator+" off</p>"
msgHtmlChange+= "<p class=\"moveRight\"> monthly by "+spanSummaryColor+"£"+Math.abs(summaryMonth)+"</p>";
msgHtmlChange+= "<p class=\"moveRight\">annualy by "+spanSummaryColor+"£"+Math.abs(summaryYear)+"</p>";
// msgHtmlChange+= '<p>Cost of return train journey to '+q5answer+' is: £'+costHome;
printTo(msgHtmlChange,'change3');
