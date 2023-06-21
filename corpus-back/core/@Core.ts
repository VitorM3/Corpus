import express, {Express} from "express"
import ConfigLibs from "./config/configLibs";
import Router from "./config/routes";
const app = express()

export default class Main {
    private app: Express
    private port: number
    /**
     * Classe Pricipal para inicialização do Servidor
     * @param app Instancia principal do Express
     * @param port Porta do servidor
     */
    public constructor(app:Express, port: number){
        this.app = app;
        this.port = port;
    }

    /**
     * Método Principal
     */
    public async bootstrap(){
    this.configLibs()
    this.router()
    this.init()
    }

    /**
     * Método para instanciar a configuração das bibliotecas
     */
    private configLibs(){
        new ConfigLibs(this.app).execute()
    }

    /**
     * Método para instanciar as rotas do sistema
     */
    private router(){
        return new Router(this.app).execute()
    }

    /**
     * Método para inicialização do servidor
     */
    private  init(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor Iniciado na porta ${this.port}`)
        })
    }
}
