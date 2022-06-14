let log = console.log



const square1 = document.getElementById('tick1')
const square2 = document.getElementById('tick2')
const square3 = document.getElementById('tick3')
const square4 = document.getElementById('tick4')
const square5 = document.getElementById('tick5')
const square6 = document.getElementById('tick6')
const square7 = document.getElementById('tick7')
const square8 = document.getElementById('tick8')
const square9 = document.getElementById('tick9')



 const gameBoard = (function (one,two,three,four,five,six,seven,eight,nine)   {

   let  gameBoard =[one,two,three,four,five,six,seven,eight,nine]

   return {
       
       gameBoard
   }

})





let turn = document.getElementById('turn')
 let start = document.getElementById('start')

 


start.addEventListener('click',()  => {
    document.getElementById('winnerbox').style.display = 'none'



    square1.textContent = ''
    square2.textContent = ''
    square3.textContent = ''
    square4.textContent = ''
    square5.textContent = ''
    square6.textContent = ''
    square7.textContent = ''
    square8.textContent = ''
    square9.textContent = ''
          

      let player1name =  document.getElementById('player1')
      let player2name = document.getElementById('player2')

     let createPlayer = (mark) => {
        return  playername = prompt('Input player '+ mark +' Name')
     }

   let player1 = createPlayer('x')
   let player2 = createPlayer('o')

     turn.textContent = player1 +' '+ 'Turn'

      player1name.textContent = ('X Player:'+ ' ' + player1)
      player2name.textContent = ('O Player:'+ ' ' + player2)
      


       let  get = (e) => {

        if(turn.textContent == player1 +' '+ 'Turn' && e.path[0].textContent == '' ) {
            e.path[0].textContent = 'X'
            turn.textContent = player2 +' '+ 'Turn'
            checkWinner()
            
        }
        if (turn.textContent == player2 +' '+ 'Turn'&& e.path[0].textContent == '') {
            e.path[0].textContent = 'O'
            turn.textContent = player1 +' '+ 'Turn'
            checkWinner()
        }
    }

    document.getElementById('tickcontainer').addEventListener('click',get)

     let checkWinner = () => {
        let winner =  document.getElementById('textwinner')
    
                   // check X
        if( square1.textContent == 'X' && square2.textContent == 'X' && square3.textContent == 'X'){
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if (square1.textContent == 'X' && square4.textContent == 'X' && square7.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if (square1.textContent == 'X' && square5.textContent == 'X' && square9.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if(square3.textContent == 'X' && square5.textContent == 'X' && square7.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if(square3.textContent == 'X' && square6.textContent == 'X' && square9.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if(square2.textContent == 'X' && square5.textContent == 'X' && square8.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        } if(square3.textContent == 'X' && square6.textContent == 'X' && square9.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        }if(square4.textContent == 'X' && square5.textContent == 'X' && square6.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1
        }if(square7.textContent == 'X' && square8.textContent == 'X' && square9.textContent == 'X') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player1                      
        }  
                                                                                                                 //check O
        if( square1.textContent == 'O' && square2.textContent == 'O' && square3.textContent == 'O'){
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if (square1.textContent == 'O' && square4.textContent == 'O' && square7.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if (square1.textContent == 'O' && square5.textContent == 'O' && square9.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if(square3.textContent == 'O' && square5.textContent == 'O' && square7.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if(square3.textContent == 'O' && square6.textContent == 'O' && square9.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if(square2.textContent == 'O' && square5.textContent == 'O' && square8.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        } if(square3.textContent == 'O' && square6.textContent == 'O' && square9.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        }if(square4.textContent == 'O' && square5.textContent == 'O' && square6.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2
        }if(square7.textContent == 'O' && square8.textContent == 'O' && square9.textContent == 'O') {
            document.getElementById('winnerbox').style.display = 'flex'
            winner.textContent =  player2                      
        }  
       
        
         if(square1.textContent !== '' &&  square2.textContent !== '' && square3.textContent !== '' &&  square4.textContent !== '' && square5.textContent !== '' && square6.textContent !== '' && square7.textContent !== '' && square8.textContent !== '' && square9.textContent !== '' ) {
            document.getElementById('winnerbox').style.display = 'flex'
            document.getElementById('winner').textContent =  'TIE'
         }
    
          

} 
})










































