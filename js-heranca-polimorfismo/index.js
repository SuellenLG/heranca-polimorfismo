/* parte de criação das contas

    
    import {Cliente} from "./Cliente.js";
    import {ContaCorrente} from "./Conta/ContaCorrente.js";
    import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
    import {ContaSalario} from "./Conta/ContaSalario.js";
    
    const cliente1 = new Cliente("Ricardo", 11122233309);
    
    const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
    const contaPoupanca= new ContaPoupanca(50, cliente1, 1001);
    const conta = new Conta(0, cliente1, 1001);
    
    console.log(conta);
*/

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo, 10000, 12345678900");
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo, 5000, 12378945601");
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais, 78945612379, 456");


const diretorEstaLogado =  SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado =  SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado =  SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

