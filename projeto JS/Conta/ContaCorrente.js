import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
          let = taxa = 1.1;
          return this._sacar(valor, taxa);
    }
  }





  //#saldo = 0; //


//A organização de um projeto de programação é algo muito importante para que conforme
//o sistema crescer encontrarmos mais facilmente as classes e lugares que queremos alterar.
//Para que serve a criação de módulos no JavaScript?

//Criamos módulos para compartilhar 
//código entre os diferentes arquivos do meu sistema, ajudando na organização dele.

//Isso, dentro do JS cada arquivo é 
//considerado um módulo e podemos escolher o que queremos exportar ou não a partir dele.

//Sobre os assessores do tipo get e set marque as alternativas corretas:

//Usando assessores do tipo set podemos alterar a regra de como um 
//atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
//Excelente! Essa é a ideia mesmo, 
//assim se qualquer regra de atribuição mudar só precisamos modificar um único lugar.
//Usar assessores do tipo set é uma 
//boa prática para garantirmos que a atribuição de propriedades está sempre segura
//Sim! Chamamos essa ideia de proteger atributos de nossas classes de encapsulamento e 
//devemos sempre manter o máximo de encapsulamento possível.
//Abaixo, temos algumas afirmações a respeito da utilização de construtores.
//Qual delas é verdadeira?
//Construtores são utilizados para inicializar os atributos.
//Correta! A inicialização de atributos é a principal responsabilidade do construtor.
//Em seu jogo, Luan quer sempre manter o número do total de jogadores atualizado. Para isso, 
//escreveu o código abaixo:
//class Jogador{

    //Código omitido
    //_totalJogadores = 0;

    //constructor(){
        //this._totalJogadores++;
    //}
//}
//Porém, o contador sempre apresenta 1 após inserir um novo jogador.
//Qual dos motivos abaixo explica a razão desse acontecimento?
//O _totalJogadores deveria estar como estático, assim, sempre que fosse criado um novo 
//objeto do tipo Jogador, 
//não seria criado um novo total, mantendo o valor correto.
//Correta! A declaração correta deste campo é static //_totalJogadores//