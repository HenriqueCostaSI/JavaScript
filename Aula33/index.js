 /* 
 Primitivos (imutáveis) - strings, number, boolean, undefined, null, symbol
 */

 let nome = 'Luiz';
 nome = 'Otávio';
 console.log(nome);


 let a = 'A';
 let b = a;//cópia
 console.log(a,b);

 a = 'c';
 console.log(a,b);

 //Referecia (mutaveis) - array, object, function

 let lista = [1,2,3,4,5];
 let d = lista;// d aponta pra o mesmo valor na memoria
 let c = [...lista];//c tem uma copia da lista(spred)
 

 console.log(b.splice(1));


