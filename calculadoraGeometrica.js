
// calculadora geométrica

alert("Bem vindo a Calculadora Geométrica, Prossiga!")

let menuCalculadora


do{
  menuCalculadora = prompt("Escolha uma opção: \n" +
  "\n1. Calcular area do Triangulo " +
  "\n2. Calcular area do Retangulo: " +
  "\n3. Calcular area do Quadrado: " +
  "\n4. Calcular area do Trapezio" +
  "\n5. Calcular area do PI" +
  "\n6. Sair"
)

   switch(menuCalculadora) {
    // area triangulo
    case "1": 
       const areaT = parseFloat(prompt("Informe o número da base:"))
       const alturaT = parseFloat(prompt("Informe o numero da altura:"))
          function areaTriangulo(base, altura) {
           return  base * altura / 2;
       }
          alert("o resultado da area do triangulo é " + areaT * alturaT / 2)
    break

      // area retangulo
    case "2": 
       const areaR = parseFloat(prompt("Informe o número da base:"))
       const alturaR = parseFloat(prompt("Informe o numero da altura"))
          function areaRetangulo(base, altura) {
          return base * altura;
      }
          alert("o resultado da area do retamgulo é  " + areaR * alturaR)

    break
      // area quadrado
    case "3":
       const areaQ = parseFloat(prompt("Informe o número da base:"))
       const alturaQ = parseFloat(prompt("Informe o número da altura:"))
         function areaQuadrado(lado) {
         return  lado * lado;
     }
        alert("o resultado da area do quadrado é " + areaQ * alturaQ )

    break

      // area trapezio
    case "4": 
        const maiorBase = parseFloat(prompt("Informe o numero da maior base:"))
        const menorBase = parseFloat(prompt("Informe o numero da menor base:"))
        const alturaTrapezio = parseFloat(prompt("Informe o numero da altura:"))
          function areaTrapezio() {
          return (maiorBase + menorBase) * alturaTrapezio / 2
    }
        alert("o resultado da area do trapezio é : " + (maiorBase + menorBase) * alturaTrapezio / 2);

    break
      // area circulo (PI)
    case "5" :
       const raio = parseFloat(prompt("Informe o numero do raio do circulo:"));
         function areaCirculo() {
         return 3.14 * raio * raio
    }
        alert("o resultado da area do circulo é " + 3.14 * raio * raio)

    break

    // option out
    case "6":
       alert('Encerrando')
    break

    // option invalid
    default:
      alert("Opção Inválida, tente novamente!")
   } 
    
} while (menuCalculadora !== "6") {
  alert("Encerrado")
}


