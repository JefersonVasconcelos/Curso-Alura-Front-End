import {cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new cliente("Lais", 78945612379, 456);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutenticacao.log(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);






//Vimos que a criação de uma classe pode ser feita através da palavra-chave class e com isso definimos quais atributos 
//queremos que essa classe possua.
//Sabendo que classes são apenas um dos recursos da linguagem Javascript, quando é que devemos criar ou não uma classe ?

//Classes definem uma forma de 
//organizarmos uma série de informações repetidas no nosso código e por isso devemos
//usar elas quando temos código que se repete e que faz parte de um contexto coeso.

//Exatamente. Se tivermos código que se repete porém não forma um contexto coeso, 
//provavelmente teremos que criar duas classes, cada uma delimitando um contexto único que faça sentido.

// O que aprendemos sobre métodos/funções?
//Função e método são termos sinônimos e que nós ajudam 
//a criar um vocabulário mais rico dentro do nosso sistema
//Correta! Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a 
//comunicação dentro da equipe
//Um método pode receber qualquer quantidade de parâmetros.
//Correto, um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações 
//para podermos reutilizar métodos em diferentes cenários
//Um método define o comportamento ou a maneira de fazer algo.
//Correto, esse é o objetivo de métodos, definir o que um objeto saber fazer. 
//O comportamento é implementado dentro do método.

//Sobre a proteção de atributos, marque as alternativas corretas:
//Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.
//Isso mesmo! Apesar de ainda ser possível alterar essa 
//propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.
//Atualmente no Js nenhum atributo ou método é realmente privado
//Sim, o JS é uma linguagem de escopo 
//aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.
