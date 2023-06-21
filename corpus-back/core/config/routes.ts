import { Express } from "express"
import AttendanceRoutes from "../../modules/attendance/router/router";

export default class Router {
    private app: Express
    /**
     * Classe de configuração das Rotas do sistema
     * @param app Instancia do Express
     */
    public constructor(app: Express){
        this.app = app;
    }

    public async execute(){
        await this.attendanceRouter();
    }

    /**
     * Rotas de Atendimento
     */
    private async attendanceRouter(){
        const attendanceRouter = await new AttendanceRoutes().execute();
        this.app.use("/attendance",attendanceRouter)
    }
}