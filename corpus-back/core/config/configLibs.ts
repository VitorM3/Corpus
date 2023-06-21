import { Express } from "express";
import dotenv from "dotenv"

export default class ConfigLibs {
    private app: Express;
    /**
     * Classe de Configuração das bibliotecas
     * @param app Instancia do Express
     */
    public constructor(app: Express){
        this.app = app;
    }

    public async execute(){
        this.dotenv();
    }

    /**
     * Método para a configuração do Dotenv, biblioteca para leitura das váriaveis de ambiente
     */
    private dotenv(){
        dotenv.config()
    }
}