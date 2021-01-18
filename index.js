var readline = require('readline-sync');

score =0

var userName = readline.question("Your name ? ")
console.log("Hello, ", userName, " Lets play")

var questions = [
  {
    que : " Fav Cartoon ",
    ans:"shinchan",
  },
  {
    que : "cold or hot coffee ",
    ans:"cold",
  },
 {
    que : "I stay in ",
    ans:"Pune",
  },
  {
    que : "Fav sport? ",
    ans:"Cricket",
  },
  {
    que : "My email address? ",
    ans:"sayurikamble123@gmail.com",
  },
]

function playGame (que, ans) {
  var userAns = readline.question(que)
    if (userAns==ans){
      score++
      console.log ("Good! " + "score:" , score)
      console.log("")
    }else{
      score--
      console.log ("Nah! " + "score:" , score)
      console.log("")
    }

  
}

for (i=0; i<questions.length; i++){
  currentQue = questions[i] ;
  playGame(currentQue.que, currentQue.ans)
}

console.log("")
console.log("")
console.log("final score ", score) 
console.log("Top Players: Ayushi-->3/5")
console.log("Send me Screenshot if you've crossed the high score") 
console.log("thanks for playing")