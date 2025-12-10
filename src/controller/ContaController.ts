import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";



export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array();
    numero: number = 0;

    procurarPorNumero(numero: number): void {

    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        };
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\n Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }
    atualizar(conta: Conta): void {

    }
    deletar(numero: number): void {

    }
    sacar(numero: number, valor: number): void {

    }
    depositar(numero: number, valor: number): void {

    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {

    }
    // metodos auxiliares da conta

    //gerar numero da conta
    public gerarNumero(): number {
        return ++ this.numero;
    }

}