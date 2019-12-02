var arrp = document.getElementsByTagName('p');
var size = arrp.length;
console.log('the no of P elements are '+size);

var P = arrp[0];
 for(propertyName in P)
  console.log(propertyName +"- "+P[propertyName]);
  P.getAttribute('align');

  
 P.innerHTML