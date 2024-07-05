function MatchesData(teamOneName, teamTwoName, winner, teamScore1, teamScore2, matchstatuss, team1Flag, team2Flag) {
  this.teamOne = teamOneName;
  this.teamOneFlag = team1Flag;
  this.scoreTeamOne = teamScore1;
  this.teamTwo = teamTwoName;
  this.teamTwoFlag = team2Flag;
  this.scoreTeamTwo = teamScore2;
  this.winnerTeam = winner;
  this.statuss = matchstatuss;
}
// Creating match data 
let match24 = new MatchesData("Namibia", "Australia", "Aus won by 9 wickets (86 balls left)", "72 (17)", "74/1 (5.4)", "yesterday", "img/download (9).png", "img/download (3).png");
let match25 = new MatchesData("United states", "India", "IND won by 7 wickets (10 balls left)", "110/8 (20)", "111/3 (18.2)", "yesterday", "img/download (7).png", "img/download (8).png");
let match26 = new MatchesData("West Indies", "New Zealand", "WI won by 13 runs", "149/9 (20)", "136/9 (20)", "Today", "img/download (4).png", "img/download (10).png");
let match27 = new MatchesData("Bangladesh", "Netherland", "Start at 7:30 pm", null, null, "Today", "img/download(12).png", "img/download (11).png");
let match28 = new MatchesData("England", "Oman", "Starts at 12:00 am", null, null, "Tomorrow", "img/download (1).png", "img/download (2).png");
let match29 = new MatchesData("Afganistan", "Papua New Guinea", "Starts at 5:30 am", null, null, "Tomorrow", "img/download (5).png", "img/download (6).png");


// created function for create html
function createHtml(match, index) {
  const { teamOne, teamTwo, winnerTeam, scoreTeamOne, scoreTeamTwo, statuss, teamOneFlag, teamTwoFlag } = match;
  const statusHtml = `<span class='status'>${statuss}</span>`;
  const teamOneHtml = `<p class = 'para' ><img width=20 height=20 src="${teamOneFlag}"><span class='teamname'>${teamOne} </span> ${scoreTeamOne ? `<span class='score'>${scoreTeamOne}</span>` : ''}</p>`;
  const teamTwoHtml = `<p class = 'para'> <img width=20 height=20 src="${teamTwoFlag}"> <span class='teamname'>${teamTwo} </span> ${scoreTeamTwo ? `<span class='score'>${scoreTeamTwo}</span>` : ''}</p>`;
  const winnerHtml = winnerTeam ? `<p >${winnerTeam}</p>` : '';

  return `
    <p>Group stage T20 ${index + 24} of 55 ${statusHtml}</p>
    ${teamOneHtml}
    ${teamTwoHtml}
    ${winnerHtml}
  `;
}

document.getElementById('col1').innerHTML = createHtml(match24, 0);
document.getElementById('col2').innerHTML = createHtml(match25, 1);
document.getElementById('col3').innerHTML = createHtml(match26, 2);
document.getElementById('col4').innerHTML = createHtml(match27, 3);
document.getElementById('col5').innerHTML = createHtml(match28, 4);
document.getElementById('col6').innerHTML = createHtml(match29, 5);
