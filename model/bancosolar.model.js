import {pool} from '../database/connection.db.js'


const getClienteModel = async () => {
    try {
        const query = {
          text: "SELECT * FROM usuarios",
        };
        const { rows } = await pool.query(query);
    
        return rows;
      } catch (error) {
        throw error;
      }
}


export const modelBancoSolar = {
    getClienteModel
}
