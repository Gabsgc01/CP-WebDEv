const produtos = [
    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos", disponibilidade: true },
    { nome: "Camiseta", preco: 60, categoria: "Roupas", disponibilidade: true },
    { nome: "Celular", preco: 2500, categoria: "Eletrônicos", disponibilidade: false },
    { nome: "Calça Jeans", preco: 120, categoria: "Roupas", disponibilidade: true },
    { nome: "Livro JS", preco: 80, categoria: "Livros", disponibilidade: true },
    { nome: "Tablet", preco: 1400, categoria: "Eletrônicos", disponibilidade: true },
    { nome: "Jaqueta", preco: 200, categoria: "Roupas", disponibilidade: false },
    { nome: "Livro HTML", preco: 90, categoria: "Livros", disponibilidade: true },
    { nome: "Fone de ouvido", preco: 300, categoria: "Eletrônicos", disponibilidade: true },
    { nome: "Livro CSS", preco: 70, categoria: "Livros", disponibilidade: false },
  ];
  
  function renderizarProduto(produto) {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <strong>${produto.nome}</strong><br>
      Preço: R$ ${produto.preco}<br>
      Categoria: ${produto.categoria}<br>
      ${produto.disponibilidade ? "Disponível" : "Indisponível"}
    `;
    return div;
  }
  
  function listarProdutos(data) {
    const container = document.getElementById("produtos-container");
    container.innerHTML = "";
    data.forEach(produto => {
      container.appendChild(renderizarProduto(produto));
    });
  }
  
  function filtrarProdutos(data, categoria, somenteDisponiveis) {
    return data.filter(prod => {
      const matchCategoria = !categoria || prod.categoria === categoria;
      const matchDisponibilidade = !somenteDisponiveis || prod.disponibilidade;
      return matchCategoria && matchDisponibilidade;
    });
  }
  
  document.getElementById("btn-listar").addEventListener("click", () => {
    listarProdutos(produtos);
  });
  
  document.getElementById("filtro-form").addEventListener("submit", e => {
    e.preventDefault();
    const categoria = document.getElementById("categoria").value;
    const somenteDisponiveis = document.getElementById("disponiveis").checked;
  
    const resultado = filtrarProdutos(produtos, categoria, somenteDisponiveis);
    listarProdutos(resultado);
  });
  