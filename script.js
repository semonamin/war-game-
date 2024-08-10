


class Card {
  constructor(suits, faceValue, value){
    this.suits = suits;
    this.faceValue = faceValue
    this.value = value
  }
}
  let  newCard = new Card("♣", 3, 7);
  console.log (newCard);



class Deck{
  constructor(){
    this.deck =[]

    const suits = ["♠", "♣", "♥", "♦"];
    const faceValue = ['A', '2','3','4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < faceValue.length; x++){
        this.deck.push (new Card(suits[i] ,faceValue[x], x + 1))
        
      } 
    }

    let y = this.deck.length;
    while (--y > 0) {
       let temp = Math.floor(Math.random() * (y + 1));
       [this.deck[temp], this.deck[y]] = [this.deck[y], this.deck[temp]];
      console.log(this.deck[y])
    }
   
  }
}
 

 let newDeck = new Deck()

 console.log(newDeck)
//   to  splitting  the cards 

 let player1 = newDeck.deck.slice(0,26);
 let player2 = newDeck.deck.slice(26,52)
 console.log(player1, player2)



  let player1Win = 0 ;
  let player2Win = 0; 

  
//   How to keep tracking  the round each time insinde the for loop 


 for (let i = 0; i < 26; i++){
  if(player1[i].value > player2[i].value){
    console.log(` player 1 winner
      ${player1[i].faceValue} 
      ${player1[i].suits} 
      " player 1 wins vs player 2" 
      ${player2[i].faceValue} 
      ${player2[i].suits}`); player1Win++
      } else if (player1[i].value < player2[i].value){
      console.log(`player 2 winner 
        ${player2[i].faceValue}
        ${player2[i].suits}
          " player 2 wins vs player 1" 
        ${player1[i].faceValue}
        ${player1[i].suits}`); player2Win++ 
    } else {
      console.log(` round tie
        ${player1[i].faceValue}
        ${player1[i].suits}
          player 1 Equals with player 2
        ${player2[i].faceValue} 
        ${player2[i].suits}`)
      }
      //  console.log(player1Win )
      //  console.log(player2Win)
    }

    // how to count the final resualt

       if(player1Win > player2Win){ player1Win++
        console.log("player 1 is the overall winner!")

       } else if (player2Win > player1Win){ player2Win++
        console.log("player 2 is the overall winner!")
       } else {
        console.log ("the game is tie!")
       }

      




// how to let playerwin keep counting the result