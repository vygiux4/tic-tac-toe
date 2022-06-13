let log = console.log

//BUTTON STUFF

const btnX= document.getElementById('ix')
const btnO = document.getElementById('oho')

btnO.style.backgroundColor = 'rgb(216, 216, 216)'
btnX.style.backgroundColor = 'rgb(216, 216, 216)'

btnX.addEventListener('click',() => {
    if (btnX.style.backgroundColor == 'rgb(216, 216, 216)') {
      return    btnX.style.backgroundColor = 'red',
          btnO.style.backgroundColor = 'rgb(216, 216, 216)'
    } 
    if (btnX.style.backgroundColor == 'red') {
         return btnX.style.backgroundColor = 'rgb(216, 216, 216)'
    }

})
btnO.addEventListener('click',() => {
    if (btnO.style.backgroundColor == 'rgb(216, 216, 216)') {
      return    btnO.style.backgroundColor = 'green',
      btnX.style.backgroundColor = 'rgb(216, 216, 216)'
    } 
    if (btnO.style.backgroundColor == 'green') {
         return btnO.style.backgroundColor = 'rgb(216, 216, 216)'
        

    }

})

// Displaying X  and O's
document.getElementById('tickcontainer').addEventListener('click',get)

function get(e) {

    if(btnX.style.backgroundColor == 'red' && e.path[0].textContent == '' ) {
        e.path[0].textContent = 'X'
        checkWinner()
    }
    if (btnO.style.backgroundColor == 'green' && e.path[0].textContent == '') {
        e.path[0].textContent = 'O'
        checkWinner()
    }
}





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

   const gameBoard =[one,two,three,four,five,six,seven,eight,nine]


     square1.textContent = one
     square2.textContent = two
     square3.textContent = three
     square4.textContent = four
     square5.textContent = five
     square6.textContent = six
     square7.textContent = seven
     square8.textContent = eight
     square9.textContent = nine
   

   return {
       
       gameBoard
   }

})

let xscore = 0
let oscore = 0

function checkWinner() {
                                                                                                          // check X
    if( square1.textContent == 'X' && square2.textContent == 'X' && square3.textContent == 'X'){
        log('xwin')
        score
    } if (square1.textContent == 'X' && square4.textContent == 'X' && square7.textContent == 'X') {
        log('xwin')
    } if (square1.textContent == 'X' && square5.textContent == 'X' && square9.textContent == 'X') {
        log('xwin')
    } if(square3.textContent == 'X' && square5.textContent == 'X' && square7.textContent == 'X') {
        log('xwin')
    } if(square3.textContent == 'X' && square6.textContent == 'X' && square9.textContent == 'X') {
        log('xwin')
    } if(square2.textContent == 'X' && square5.textContent == 'X' && square8.textContent == 'X') {
        log('xwin')
    } if(square3.textContent == 'X' && square6.textContent == 'X' && square9.textContent == 'X') {
        log('xwin')
    }if(square4.textContent == 'X' && square5.textContent == 'X' && square6.textContent == 'X') {
        log('xwin')
    }if(square7.textContent == 'X' && square8.textContent == 'X' && square9.textContent == 'X') {
        log('xwin')                          
    }  
                                                                                                             //check O
    if( square1.textContent == 'O' && square2.textContent == 'O' && square3.textContent == 'O'){
        log('OWIN')
    } if (square1.textContent == 'O' && square4.textContent == 'O' && square7.textContent == 'O') {
        log('OWIN')
    } if (square1.textContent == 'O' && square5.textContent == 'O' && square9.textContent == 'O') {
        log('OWIN')
    } if(square3.textContent == 'O' && square5.textContent == 'O' && square7.textContent == 'O') {
        log('OWIN')
    } if(square3.textContent == 'O' && square6.textContent == 'O' && square9.textContent == 'O') {
        log('OWIN')
    } if(square2.textContent == 'O' && square5.textContent == 'O' && square8.textContent == 'O') {
        llog('OWIN')
    } if(square3.textContent == 'O' && square6.textContent == 'O' && square9.textContent == 'O') {
        log('OWIN')
    }if(square4.textContent == 'O' && square5.textContent == 'O' && square6.textContent == 'O') {
        log('OWIN')
    }if(square7.textContent == 'O' && square8.textContent == 'O' && square9.textContent == 'O') {
        log('OWIN')                        
    }  
   
    
     if(square1.textContent !== '' &&  square2.textContent !== '' && square3.textContent !== '' &&  square4.textContent !== '' && square5.textContent !== '' && square6.textContent !== '' && square7.textContent !== '' && square8.textContent !== '' && square9.textContent !== '' ) {
      log('gg')
     }
  















}






















 const player =  (name) =>{
     this.name = name 
 return {
     name
 }
 }



