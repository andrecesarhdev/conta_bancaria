//importa a classe conta que é a classe mae.
import { Conta } from "./Conta";

//export indica que posso usar essa classe em outro lugar e extends indica que to herdando atributos e metodos da classe Conta.
export class ContaCorrente extends Conta{
    
    // declara atributos pivados
    private _limite:number;

    // o contrutor é responsavel por criar a conta sem o objeto ContaCorrente nao poderia ser criado. ele é o pedreiro. A classe pode ter a ideia mas quem constroi é o construtor.
    constructor(numero:number, agencia:number, tipo:number, titular:string, saldo:number, limite:number){

        super(numero, agencia, tipo, titular,saldo);
        this._limite = limite;
    }
        // gets e sets sao obrigatorios e repetivos
    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    // metodos especificos criado para realizar alguma tarefa especifica, condicoes, calculos, mostrar msg etc 
    public sacar(valor: number): boolean {
        
        if ((this.saldo + this._limite ) < valor) {
            console.log('\n Saldo insuficiente!');
            return false; 
        }
        this.saldo -= valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log('Limite: ' + this._limite.toFixed(2));
        
    }
}