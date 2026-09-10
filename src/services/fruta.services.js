import {pool} from ".../database/db.js";

class frutaService {
    async listarFruta() {
        const res = await pool.query("SELECT * FROM fruta")
        return res.rows    
 }
}
export const frutaService = new frutaService()