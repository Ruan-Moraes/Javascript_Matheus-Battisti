// 1 - var, let e let

var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

console.log('--------------------------------------------');

const a = 10;
const b = 15;

if (a >= 10) {
  const a = 5;
  console.log(a);
}

console.log(a);

console.log('--------------------------------------------');

let g = 10;
let h = 15;

if (g >= 10) {
  let g = 5;
  console.log(g);
}

console.log(g);

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 2 - Arrow functions

const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return 'Olá ' + name + '!';
  } else {
    return 'Olá';
  }
};

console.log(greeting('Ruan'));
console.log(greeting());

const testeArrow = () => console.log('Testou!');

testeArrow();

const user = {
  name: 'Theo',

  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(this);
      console.log('Username: ' + self.name);
    }, 500);
  },

  sayUserNameArrow() {
    var self = this;
    setTimeout(() => {
      console.log(this);
      console.log('Username: ' + this.name);
    }, 700);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 3 - FIlter

const arr = [1, 2, 3, 4, 5, 7, 9];

const highNumbers = arr.filter((n) => {
  if (n >= 4) {
    return n;
  }
});

console.log(highNumbers);

const alunos = [
  { nome: 'João', disponivel: true },
  { nome: 'Carlos', disponivel: false },
  { nome: 'Ana', disponivel: true },
  { nome: 'Maria', disponivel: true },
  { nome: 'Ruan', disponivel: false },
];

const alunosDisponiveis = alunos.filter((aluno) => {
  if (aluno.disponivel) {
    return aluno;
  }
});

console.log(alunosDisponiveis);

const alunosNaoDisponiveis = alunos.filter((aluno) => {
  if (!aluno.disponivel) {
    return aluno;
  }
});

console.log(alunosNaoDisponiveis);

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 04 - Map

const products = [
  { name: 'Camisa', price: 10, category: 'Roupas' },
  { name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro' },
  { name: 'Fogão', price: 1000, category: 'Eletro' },
  { name: 'Calça jeans', price: 60, category: 'Roupas' },
];

products.map((product) => {
  if (product.category === 'Roupas') {
    product.onSale = true;
    product.price *= 0.85;
  }
});

console.log(products);

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 05 - Template literals

const userName = 'Ruan';
const age = 19;

console.log(`O nome do usuário é ${userName} e tem ${age} anos.`);
console.log('O nome do usuário é ' + userName + ' e tem ' + age + ' anos.');

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 06 - Destructuring

const frutas = ['Maça', 'Laranja', 'Mamão'];

const [f1, f2, f3] = frutas;

console.log(f1, f2, f3);

const detalhesDoProduto = {
  nome: 'Mouse',
  preco: 40,
  categoria: 'Periféricos',
  cor: 'Preto',
};

const {
  nome: nomeDoProduto,
  preco: preco,
  categoria: categoria,
  cor: corDoProduto,
} = detalhesDoProduto;

console.log(
  `O nome do produto ${nomeDoProduto} e tem o preço de ${preco}, pertece a categoria ${categoria} e possuí a cor ${corDoProduto}.`
);

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 07 - Spread operator

const a1 = [0, 1, 23, 4, 6, 7];
const a2 = [7, 9, 56, 1, 0, 3, 1, 5];

const a3 = [...a1, ...a2];

console.log(a3);

const carName = { name: 'Gol' };
const carBrand = { brand: 'VW' };
const otherInfos = { km: 100000, price: 40000 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 08 - Classe

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product('Camisa', 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tenis verde', 120);

console.log(tenis.productWithDiscount(20));

console.log(
  '--------------------------------------- FIM -----------------------------------------'
);

// 09 Heranca

class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log('As cores são:');
    this.colors.forEach((color) => console.log(color));
  }
}

const hat = new productWithAttributes('Chapéu', 30, ['preto', 'azul', 'verde']);

console.log(hat.productWithDiscount(50));

hat.showColors();
 
console.log(hat);
