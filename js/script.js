const jogoDaVelha = {

   container: ['', '', '', '', '', '', '', '', ''],
   playerTurn: {
      symbols: ['X', 'O'],
      turn: 'O',

      change(){

         this.turn == 'X' ? this.turn = 'O' : this.turn = 'X'

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

         if (this.container[element[0]] !== '' && this.container[element[1]] !== '' && this.container[element[2]] !== ''){

            if (this.container[element[0]] === this.container[element[1]] && this.container[element[1]] === this.container[element[2]]){
               document.querySelector('#')
               this.win = true
               
            }
            
         }
      })

   },

   reset(){
      this.container = ['', '', '', '', '', '', '', '', '']
      this.win = false
      this.draw()
   },


   makePlay(id){

      if (this.container[id] === '' && this.win === false){
         this.container[id] = this.playerTurn.turn

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
      this.container.forEach((element, index, array) => {
         document.querySelector('.game').innerHTML += `<div class="positions" id"${index} onclick="jogoDaVelha.makePlay(${index})"">${this.container[index]}</div>`
      })

   },

}
