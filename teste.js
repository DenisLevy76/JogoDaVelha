lista = [[1, 2, 3], [2, 3, 4]]

lista2 = ['a', 'o' ,'x', 'x', 'x', 'o']

novaLista = []

lista.forEach((elemente, index) => {
   console.log(lista2[elemente[0]] , lista2[elemente[1]] , lista2[elemente[2]]);
   if (lista2[elemente[0]] === lista2[elemente[1]] && lista2[elemente[1]] === lista2[elemente[2]]){
      console.log(true);
   }
   else{
      console.log(false);
   }
})
