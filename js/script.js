const jogoDaVelha = {

   board: ['', '', '', '', '', '', '', '', ''],
   playerTurn: {
      symbols: ['X', 'O'],
      turn: 'O',

      change(){

         this.turn = this.turn == 'X' ? 'O' : 'X'

      },

   },
   win: false,


   checkWinner(){

      winnerSequence = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [6,4,2],
      ]
      
      winnerSequence.forEach((element, index) => {

         if (this.board[element[0]] !== '' && this.board[element[1]] !== '' && this.board[element[2]] !== ''){

            if (this.board[element[0]] === this.board[element[1]] && this.board[element[1]] === this.board[element[2]]){
               this.win = true
               
            }
            
         }
      })

   },

   reset(){
      this.board.fill('')
      this.win = false
      this.draw()
   },


   makePlay(id){

      if (this.board[id] === '' && this.win === false){
         this.board[id] = this.playerTurn.turn

         this.playerTurn.change()

         this.draw()
         
         this.checkWinner()
         
      }
      else{
         return 0
      }

   },

   draw(){

      document.querySelector('.game').innerHTML = ''
      document.querySelector('.playerTurn').innerHTML = `<h3>Vez de: ${this.playerTurn.turn}</h3>`

      this.board.forEach((element, index, array) => {
         document.querySelector('.game').innerHTML += `<div class="positions" id="${index}" onclick="jogoDaVelha.makePlay(${index})"">${this.board[index]}</div>`
      })

   },

}
