//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
//e tempo de aplicação. A primeira função retornará o montante da aplicação
//financeira sob o regime de juros simples e a segunda retornará o valor da
//aplicação sob o regime de juros compostos.(Utilizar arrow function).
const jurosSimples = (capital, taxa, tempo) => {
    return capital + (capital * taxa * tempo);//J = C × i × t
  };
  
  const jurosCompostos = (capital, taxa, tempo) => { //montante é igual ao capital, vezes a taxa de juros mais um, elevado ao tempo. 
    return capital * Math.pow(1 + taxa, tempo);
  };
  
  console.log(jurosSimples(1000, 0.1, 2)); // Juros simples
  console.log(jurosCompostos(1000, 0.1, 2)); // Juros compostos