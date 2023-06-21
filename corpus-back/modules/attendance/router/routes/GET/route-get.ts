import { Router } from "express";

export default class GetAttendanceController {
    private router: Router
    public constructor(router: Router){
        this.router = router;
    }

    public sayHello()
}