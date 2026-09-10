import { Router } from "express";
import { frutaService } from "../services/fruta.services";

export const frutaRouter = Router()

frutaRouter.get("/", async (req, res) => {
     try {
        const result = await frutaService.listarFrutas()
        console.log(result);
        
     } catch (error) {
        console.error(error);
        
     }
})