import { pool } from "../database/connection.db.js";

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
};

const createClienteModel = async (newUsuario) => {
  try {
    const { nombre, balance } = newUsuario;

    const query = {
      text: "INSERT INTO usuarios (nombre, balance) VALUES ($1 , $2) RETURNING *",
      values: [nombre, balance],
    };
    const { rows } = await pool.query(query);

    return rows[0];
  } catch (error) {
    throw error;
  }
};

export const modelBancoSolar = {
  getClienteModel,
  createClienteModel,
};
