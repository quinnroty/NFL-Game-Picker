function ajaxGetRequest(path, callback){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState===4&&this.status ===200){
      callback(this.response);
    }
  };
  request.open("GET", path);
  request.send();
}

function ajaxPostRequest(path, data, callback){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState===4&&this.status ===200){
      callback(this.response);
    }
  };
  request.open("POST", path);
  request.send(data)
}

function sendPick(){
  let teamNameElement = document.getElementById("teamname");
  console.log(teamNameElement)
  let game1Element=document.getElementById("game1choice");
  let game2Element=document.getElementById("game2choice");
  let game3Element=document.getElementById("game3choice");
  let game4Element=document.getElementById("game4choice");
  let game5Element=document.getElementById("game5choice");
  let game6Element=document.getElementById("game6choice");
  let game7Element=document.getElementById("game7choice");
  let game8Element=document.getElementById("game8choice");
  let game9Element=document.getElementById("game9choice");
  let game10Element=document.getElementById("game10choice");
  let game11Element=document.getElementById("game11choice");
  let game12Element=document.getElementById("game12choice");
  let game13Element=document.getElementById("game13choice");
  let game14Element=document.getElementById("game14choice");
  let game15Element=document.getElementById("game15choice");
  let game16Element=document.getElementById("game16choice");
  let tieBreakerElement=document.getElementById("tieBreaker");
  let teamName = teamNameElement.value;
  teamNameElement.value = " ";
  let game1Pick =  
  game1Element.value;
  game1Element.value = "";
  let game2Pick =  
  game2Element.value;
  game2Element.value = "";
  let game3Pick =  
  game3Element.value; 
  game3Element.value = "";
  let game4Pick =  
  game4Element.value;
  game4Element.value = "";
  let game5Pick =  
  game5Element.value;
  game5Element.value = "";
  let game6Pick =  
  game6Element.value;
  game6Element.value = "";
  let game7Pick =  
  game7Element.value;
  game7Element.value = "";
  let game8Pick =  
  game8Element.value;
  game8Element.value = "";
  let game1Pick =  
  game9Element.value;
  game9Element.value = "";
  let game10Pick =  
  game10Element.value;
  game10Element.value = "";
  let game11Pick =  
  game11Element.value;
  game11Element.value = "";
  let game1Pick =  
  game12Element.value;
  game12Element.value = "";
  let game13Pick =  
  game13Element.value;
  game13Element.value = "";
  let game14Pick =  
  game14Element.value;
  game14Element.value = "";
  let game15Pick =  
  game15Element.value;
  game15Element.value = "";
  let game1Pick =  
  game16Element.value;
  game16Element.value = "";
  let tieBreakerPick = 
  tieBreakerElement.value
  tieBreakerElement.value = "";
  let toSend = JSON.stringify({"TeamName":teamName,"Game1Pick":game1Pick,"Game2Pick":game2Pick,"Game3Pick":game3Pick,"Game4Pick":game4Pick,"Game5Pick":game5Pick,"Game6Pick":game6Pick,"Game7Pick":game7Pick,"Game8Pick":game8Pick,"Game9Pick":game9Pick,"Game10Pick":game10Pick,"Game11Pick":game11Pick,"Game12Pick":game12Pick,"Game13Pick":game13Pick,"Game14Pick":game14Pick,"Game15Pick":game15Pick,"Game16Pick":game16Pick,"TieBreakerPoints":tieBreakerPick});
  ajaxPostRequest("/send", toSend,  renderChoices)
}

function renderChoices(jsonData){
  let picks = JSON.parse(jsonData)
  console.log(picks)
}