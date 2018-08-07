const team = {
  _players: [{firstName: "Luis", lastName: "Suarez", age: "29"},
            {firstName: "Lionel", lastName: "Messi", age: "29"},
            {firstName: "Gerard", lastName: "Pique", age: "27"}],
  
  _games: [{opponent: "Real Madrid", teamPoints: 3, opponentPoints: 0},
          {opponent: "PSG", teamPoints: 1, opponentPoints: 1},
          {opponent: "Juventus", teamPoints: 1, opponentPoints: 2}],
  
  get players(){
   return this._players; 
  },
  
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age};
  
    this.players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoints){
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    
    this.games.push(game);
  }
};

team.addPlayer('Arturo','Vidal','28');
team.addPlayer('Ausmane','Dembele','21');
team.addPlayer('Phillipe','Coutinho','25');

team.addGame('Bayern Munich', 4, 2);
team.addGame('Chealse', 2, 2);
team.addGame('Manchester City', 2, 4);

console.log(team.players);
console.log(team.games);