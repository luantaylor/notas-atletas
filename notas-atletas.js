let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
      const atleta = atletas[i];
      const notas = atleta.notas.slice(); // Copiar as notas para não alterar a original
  
      // Ordenar as notas
      notas.sort((a, b) => a - b);
  
      // Remover a menor e a maior nota
      const notasComputadas = notas.slice(1, 4);
  
      // Calcular a média
      const soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
      const media = soma / notasComputadas.length;
  
      // Exibir os resultados
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
      console.log(`Média Válida: ${media}`);
      console.log(''); // Linha em branco para separar os atletas
    }
  }
  
  // Chama a função
  calcularMedia(atletas);