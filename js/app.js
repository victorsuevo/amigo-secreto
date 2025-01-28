let listaAmigos = [];

// Adiciona um amigo à lista
function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo").value.trim();

  if (listaAmigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado!");
    return;
  } else if (nomeAmigo === "") {
    alert("O nome não pode estar vazio!");
    return;
  }

  listaAmigos.push(nomeAmigo);

  // Atualiza a lista na tela
  document.getElementById("lista-amigos").textContent = listaAmigos.join(", ");

  // Limpa o campo de entrada
  document.getElementById("nome-amigo").value = "";
}

// Sorteia todos os amigos no estilo "amigo oculto"
function sortear() {
  if (listaAmigos.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear.");
    return;
  }

  // Cria uma cópia do array e embaralha
  let amigosEmbaralhados = [...listaAmigos];
  amigosEmbaralhados.sort(() => Math.random() - 0.5);

  // Forma o ciclo fechado
  let pares = [];
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    let nome1 = amigosEmbaralhados[i];
    let nome2 = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Último faz par com o primeiro
    pares.push(`${nome1} => ${nome2}`);
  }

  // Exibe os pares sorteados
  document.getElementById("lista-sorteio").innerHTML = pares.join('<br>');
}

// Reinicia a lista
function reiniciar() {
  listaAmigos = [];
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
}
