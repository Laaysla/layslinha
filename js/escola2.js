document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos de produto
    const produtos = document.querySelectorAll('.produto');
    const opcoesProduto = document.getElementById('opcoesProduto');
    const produtoTitulo = document.getElementById('produtoTitulo');
    const opcoesContainer = document.getElementById('opcoesContainer');
    const voltarProdutos = document.getElementById('voltarProdutos');
    const verProdutosButton = document.getElementById('verProdutos');
    const carrinhoItens = document.getElementById('carrinhoItens');
    const totalCarrinho = document.getElementById('totalCarrinho');
    
    let itensCarrinho = [];

    // Dados dos produtos
    const dadosProdutos = {
        bolsas: [
            { nome: 'Bolsa Escolar Azul', preco: 50.00, imagem: 'img/bolsa azul2.png' },
            { nome: 'Bolsa Escolar Vermelha', preco: 55.00, imagem: 'img/bolsa vermelha2.png' },
            { nome: 'Bolsa Escolar Verde', preco: 60.00, imagem: 'img/bolsa verde2.png' },
            { nome: 'Bolsa Escolar Preta', preco: 80.00, imagem: 'img/bolsa preta2.png' },
            { nome: 'Mochila de Rodinhas Preta', preco: 100.00, imagem: 'img/rodinhas2.png' }
        ],
        cadernos: [
            { nome: 'Caderno Universitário 10 matérias', preco: 15.00, imagem: 'img/caderno 102.png' },
            { nome: 'Caderno Universitário 20 matérias', preco: 25.00, imagem:  'img/caderno 202.png'  },
            { nome: 'Caderno de Espiral 96 folhas', preco: 12.00, imagem: 'img/caderno espiral2.png' },
        ],
        canetas: [
            { nome: 'Caneta Esferográfica Azul', preco: 2.00, imagem: 'img/caneta azul.png' },
            { nome: 'Caneta Esferográfica Preta', preco: 2.00, imagem: 'img/caneta preta.png'},
            { nome: 'Caneta Gel Vermelha', preco: 3.50, imagem:  'img/caneta vermelha.png' },
            { nome: 'Caneta Gel (12 Cores)', preco: 12.50, imagem: 'img/caneta gel.png' },
            { nome: 'Caneta Marcadora Permanente (18 cores)', preco: 12.50, imagem: 'img/caneta permanente.png' },
        ],
        lapis: [
            { nome: 'Lápis de Grafite HB', preco: 1.00, imagem: 'img/lapis hb.png' },
            { nome: 'Lápis de Grafite 2B', preco: 1.50,   imagem:  'img/lapis 2b.png' },
        ],
        borrachas: [
            { nome: 'Borracha Branca', preco: 1.50, imagem: 'img/borracha branca.png' },
            { nome: 'Borracha Colorida', preco: 2.00, imagem: 'img/borracha colorida.png'}
        ],
        papelaria: [
            { nome: 'Folha Sulfite A4 (500 folhas)', preco: 8.00, imagem: 'img/sulfite a4.png' },
            { nome: 'Folha Sulfite A3 (100 folhas)', preco: 15.00, imagem: 'img/sulfite a3.png' },
            { nome: 'Papel Cartão', preco: 2.00, imagem: 'img/papel c.png' },
            { nome: 'Papel Crepom', preco: 2.10, imagem: 'img/papel cr.png' },
            { nome: 'Cartolina Pacote com 10 folhas', preco: 5.00,  imagem: 'img/cartolina 10.png' },
            { nome: 'Cartolina Pacote com 20 folhas', preco: 8.00,  imagem: 'img/cartolina 20.png'   },
            { nome: 'Cartolina Pacote Colorido com 20 folhas', preco: 15.00,  imagem: 'img/cartolinap 20.png'  }
        ],
        marcadores: [
            { nome: 'Marcador de Texto Amarelo', preco: 4.00, imagem: 'img/marca texto amarelo.png' },
            { nome: 'Marcador de Texto Rosa', preco: 4.00, imagem: 'img/marca texto rosa.png' },
            { nome: 'Marcador de Texto 15 Cores', preco: 20.00, imagem: 'img/marca texto 15.png' },
            { nome: 'Marcador de Texto Roxo', preco: 4.00, imagem: 'img/marca texto roxo.png'},
            { nome: 'Marcador de Texto Azul', preco: 4.00, imagem: 'img/marca texto azul.png'},
            { nome: 'Marcador de Texto Verde', preco: 4.00, imagem: 'img/marca texto verde.png' },
            { nome: 'Marcador de Texto Laranja', preco: 4.00, imagem: 'img/marca texto laranja.png' },
            { nome: 'Marcador para Quadro Branco (4 Cores)', preco: 5.00, imagem: 'img/marcador quadro.png' }
        ],
        canetinhas: [
            { nome: 'Canetinhas Coloridas (12 cores)', preco: 10.00, imagem: 'img/canetinha 12.png' },
            { nome: 'Canetinhas Coloridas (24 cores)', preco: 18.00,  imagem: 'img/canetinha 24.png'},
            { nome: 'Canetinha Hidrográfica (12 cores)', preco: 5.00, imagem: 'img/canetinha hidro.png' }
        ],
        lapisColoridos: [
            { nome: 'Lápis de Cor (12 Cores)', preco: 15.00,  imagem: 'img/cor 12.png'},
            { nome: 'Lápis de Cor (24 Cores)', preco: 25.00,  imagem: 'img/cor 24.png' },
            { nome: 'Lápis de Cor Pastel (10 cores)', preco: 10.50,   imagem:  'img/lapis p.png' },
        ],
        réguas: [
            { nome: 'Régua de Plástico 30 cm', preco: 3.00, imagem: 'img/regua p.png' },
            { nome: 'Régua de Alumínio 30 cm', preco: 5.00, imagem: 'img/regua a.png' },
            { nome: 'Esquadro', preco: 6.00, imagem: 'img/esquadro.png' },
            { nome: 'Transferidor', preco: 4.00, imagem: 'img/transferidor.png' },
            { nome: 'Compasso', preco: 7.00, imagem: 'img/compasso.png' },
            { nome: 'Régua Flexível 30 cm', preco: 7.00, imagem: 'img/regua f.png' }
        ],
        estojos: [
            { nome: 'Estojo Duplo', preco: 12.00, imagem: 'img/estojo d.png' },
            { nome: 'Estojo Triplo', preco: 18.00, imagem: 'img/estojo t2.png'},
            { nome: 'Estojo Divisória', preco: 30.00, imagem: 'img/estojo di.png' }
        ],
        apontadores: [
            { nome: 'Apontador Simples', preco: 2.50, imagem: 'img/apontador s.png' },
            { nome: 'Apontador com Lata', preco: 3.50, imagem: 'img/apontador l.png'}
        ],
        lapiseiras: [
            { nome: 'Lapiseira 0.5mm', preco: 6.00, imagem: 'img/lapiseira 0.5.png' },
            { nome: 'Lapiseira 0.7mm', preco: 7.00, imagem: 'img/lapiseira 0.7.png' }
        ],
        tesouras: [
            { nome: 'Tesoura Escolar', preco: 7.00, imagem: 'img/tesoura e.png'  },
            { nome: 'Tesoura de Precisão', preco: 5.00, imagem: 'img/tesoura p.png'  },
            { nome: 'Estilete', preco: 4.00, imagem: 'img/estilete.png' }
        ],
        colas: [
            { nome: 'Cola Bastão', preco: 4.00, imagem: 'img/cola b.png'  },
            { nome: 'Cola Líquida', preco: 6.00, imagem: 'img/cola l.png'  },
            { nome: 'Cola Quente', preco: 15.00, imagem: 'img/cola q.png'  },
            { nome: 'Pistola de Cola Quente', preco: 15.00, imagem: 'img/pistola q.png'  },
            { nome: 'Cola Para EVA', preco: 4.00, imagem: 'img/cola e.png'  },
        ],
        organização: [
            { nome: 'Pasta Transparente', preco: 6.00, imagem: 'img/pasta t.png' },
            { nome: 'Pasta Colorida', preco: 8.00, imagem: 'img/pasta c.png' },
            { nome: 'Pasta Catálogo', preco: 12.00, imagem: 'img/pasta ca.png' },
            { nome: 'Porta-Canetas', preco: 12.00, imagem: 'img/porta c.png' },
            { nome: 'Pranchetas', preco: 5.00, imagem: 'img/prancheta.png' },
        ],
        agendas: [
            { nome: 'Agenda 2024', preco: 20.00, imagem: 'img/agenda 2024.png' },
            { nome: 'Agenda Personalizada', preco: 25.00, imagem: 'img/agenda p.png' }
        ],
        ficharios: [
            { nome: 'Fichário A4', preco: 18.00,  imagem: 'img/fichario a4.png' },
            { nome: 'Fichário Universitário', preco: 22.00,  imagem: 'img/fichario u.png' },
            { nome: 'Divisórias para Fichário', preco: 18.00,  imagem: 'img/divisorio f.png' },
        ],
        Fitas: [
            { nome: 'Fita Adesiva Transparente', preco: 10.00,  imagem: 'img/fita t.png' },
            { nome: 'Fita Dupla Face', preco: 7.00,  imagem: 'img/fita d.png' },
            { nome: 'Fita Crepe', preco: 6.00,  imagem: 'img/fita c.png' },
            { nome: 'Fita de Cetim', preco: 2.00,  imagem: 'img/fita ce.png' },
            { nome: 'Fita Banana', preco: 10.00,  imagem: 'img/fita b.png' }
        ],   
        Calculadoras: [
            { nome: 'Calculadora Básica', preco: 7.50,  imagem: 'img/calcu b.png' },
            { nome: 'Calculadora Científica', preco: 15.00,  imagem: 'img/calcu c.png' },
        ],
        papelariaad: [
            { nome: 'Papel Kraft', preco: 8.50,  imagem: 'img/papel kr.png' },
            { nome: 'Papel Laminado', preco: 1.50,  imagem: 'img/papel l.png' },
            { nome: 'Papel Camurça', preco: 1.50,  imagem: 'img/camurça.png' },
            { nome: 'Etiquetas Adesivas', preco: 2.00,  imagem: 'img/Etiquetas.png' },
        ],
        Materiais: [
            { nome: 'Clipes de Papel', preco: 1.50,  imagem: 'img/clipes p.png' },
            { nome: 'Clipes de Binder', preco: 2.00, imagem: 'img/clipes b.png' },
            { nome: 'Alfinetes', preco: 2.50,  imagem: 'img/alfi.png' },
            { nome: 'Grampeador', preco: 17.50,  imagem: 'img/gramp.png' },
            { nome: 'Refil para Grampeador', preco: 14.50,  imagem: 'img/refil.png' },
            { nome: 'Pincel', preco: 2.00,  imagem: 'img/pincel.png' },
            { nome: 'Tinta Guache', preco: 10.50,  imagem: 'img/tinta.png' },
            { nome: 'Post-it', preco: 7.50,  imagem: 'img/post.png' },
        ],
        cadernoad: [
            { nome: 'Caderno de Desenho', preco: 10.50,  imagem: 'img/caderno de.png' },
            { nome: 'Caderno Pautado', preco: 10.50,  imagem: 'img/caderno pa.jpg' },
            { nome: 'Caderno Quadriculado', preco: 10.50,  imagem: 'img/caderno q.webp' },
        ],
        canetases: [
            { nome: 'Caneta Nanquim', preco: 10.80,  imagem: 'img/caneta n.png' },
            { nome: 'Caneta Brush Pen (24 cores)', preco: 15.50,  imagem: 'img/caneta br.png' },
            { nome: 'Caneta Ponta Fina (10 cores)', preco: 10.50,  imagem: 'img/caneta po.png' },
        ],
        Fitases: [
            { nome: 'Fita Decorativa (Washi Tape) (Kit com 6)', preco: 10.00,  imagem: 'img/fita dec.png' },
            { nome: 'Fita Adesiva Colorida (Kit com 5)', preco: 6.00,  imagem: 'img/fita color.png' },
        ],
        tecnologia: [
            { nome: 'Pen Drive', preco: 19.80,  imagem: 'img/pen.png' },
            { nome: 'Fone de Ouvido com Fio', preco: 9.50,  imagem: 'img/fone.png' },
            { nome: 'Fone de Ouvido Bluetooth', preco: 10.50,  imagem: 'img/fone b.png' },
        ],
    };  


    // Função para exibir as opções de um produto com imagem
    function mostrarOpcoes(categoria) {
        produtoTitulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        opcoesContainer.innerHTML = '';

        if (dadosProdutos[categoria]) {
            dadosProdutos[categoria].forEach(item => {
                const div = document.createElement('div');
                div.className = 'opcao';
                div.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}" style="width: 100px; height: auto; margin-right: 10px;">
                    <h3>${item.nome}</h3>
                    <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                    <button class="adicionarCarrinho" data-nome="${item.nome}" data-preco="${item.preco}">Adicionar ao Carrinho</button>
                `;
                opcoesContainer.appendChild(div);
            });
        }
        opcoesProduto.style.display = 'block';
    }

    // Função para atualizar o carrinho
    function atualizarCarrinho() {
        carrinhoItens.innerHTML = '';
        let total = 0;

        itensCarrinho.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)};`
            const removerButton = document.createElement('button');
            removerButton.textContent = 'Remover';
            removerButton.className = 'removerCarrinho';
            removerButton.dataset.index = index;
            li.appendChild(removerButton);
            carrinhoItens.appendChild(li);
            total += item.preco;
        });

        totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)};`
    }

    // Função para remover do carrinho
    function removerDoCarrinho(index) {
        itensCarrinho.splice(index, 1);
        atualizarCarrinho();
    }

    // Adiciona evento de clique em cada produto
    produtos.forEach(produto => {
        produto.addEventListener('click', function () {
            const categoria = this.dataset.produto;
            mostrarOpcoes(categoria);
        });
    });

    // Adiciona item ao carrinho ao clicar no botão "Adicionar ao Carrinho"
    opcoesContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('adicionarCarrinho')) {
            const nome = event.target.dataset.nome;
            const preco = parseFloat(event.target.dataset.preco);
            itensCarrinho.push({ nome, preco });
            atualizarCarrinho();
        }
    });

    // Remove item do carrinho ao clicar no botão "Remover"
    carrinhoItens.addEventListener('click', function (event) {
        if (event.target.classList.contains('removerCarrinho')) {
            const index = event.target.dataset.index;
            removerDoCarrinho(index);
        }
    });

    // Adiciona evento de clique no botão "Ver Produtos"
    verProdutosButton.addEventListener('click', function () {
        document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona evento de clique no botão "Voltar"
    voltarProdutos.addEventListener('click', function () {
        opcoesProduto.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const pagamentoPixForm = document.getElementById('pagamentoPixForm');

    pagamentoPixForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Coletar informações de endereço
        const rua = document.getElementById('rua').value;
        const numero = document.getElementById('numero').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;

        if (!rua || !numero || !bairro || !cidade) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
// Obter o total do carrinho
const total = totalCarrinho.textContent.replace('Total: R$ ', '').replace(',', '.'); // Remove o texto e formata para float

        alert(`Pagamento via Pix confirmado! 
Seu pedido será entregue na Rua: ${rua}, nº ${numero}, Bairro: ${bairro}, Cidade: ${cidade}. 
O preço do carrinho é R$ ${parseFloat(total).toFixed(2)}. 
O prazo de entrega é de 10 dias ou mais.`);
    });
});

document.getElementById("voltarInicio").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById('pesquisa').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(searchTerm)) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
});

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
document.addEventListener('DOMContentLoaded', function () {
    // Rolar para o topo quando a página for carregada
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
    });
});

const mensagem = document.createElement('div');
mensagem.id = 'mensagem';
mensagem.style.color = 'red';
mensagem.style.fontSize = '20px'; // Aumenta o tamanho da fonte
mensagem.style.fontWeight = 'bold'; // Deixa a fonte em negrito
document.getElementById('produtosContainer').appendChild(mensagem);

document.getElementById('pesquisa').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    let found = false;

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(searchTerm)) {
            produto.style.display = 'block';
            found = true; // Um produto foi encontrado
        } else {
            produto.style.display = 'none';
        }
    });

    // Exibe a mensagem se nenhum produto for encontrado
    if (!found && searchTerm) {
        mensagem.textContent = "Não temos esse produto em nossa loja.";
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none'; // Oculta a mensagem se algum produto foi encontrado
    }
});
