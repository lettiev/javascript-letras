// ---FASE 1---


/*

var letras = ['L','E','T','I','C','I','A']; 

for (var i =0; i<letras.length; i++) {
	console.log(letras[i]);
}

*/

// ---Fase 2---

/* 

var letras = ['L','E','T','1','C','I','A']; 
var nombre = "LET1CIA";
console.log("Partimos del nombre :",nombre);



for (var i =0; i<letras.length; i++) {
	console.log(letras[i]);

if (isNaN(letras[i])) {

if (letras[i] == 'A'|| letras[i] == 'E' || letras[i] == 'I' || letras[i] == 'O' || letras[i] == 'U') {

		console.log("He  encontrado la VOCAL: " + letras[i]);
	
	} else { 

			console.log("He encontrado la CONSONANTE: " + letras[i]);

		}


}

else { 

	console.log ("Los nombres de personas no contienen el num: " + letras[i]);


}
 
}

*/

// ---FASE 3---

/*var name = "LETICIA";

nameMap = new Map();
for(var i=0;i<name.length;i++){
    
     let number=nameMap.get(name[i]);

    if (number) {
          nameMap.set(name[i],number+1)
    }
    else {
        nameMap.set(name[i],1)
    }
}
console.log(nameMap);


/*
// ---Fase 4

var name = ["LETICIA VAZQUEZ"];
console.log(Array.from(name));
*/
