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

const getClienteById = async (id) => {
  try {
    const query = {
      text: "SELECT * FROM usuarios WHERE id =  $1",
      values: [id],
    };
    const { rows } = await pool.query(query);

    return rows[0];
  } catch (error) {
    throw error;
  }
};

const updateClienteModel = async (id, editCliente) => {
  try {
    const { nombre, balance } = editCliente;

    const query = {
      text: "UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3",
      values: [nombre, balance, id],
    };

    await pool.query(query);
  } catch (error) {
    throw error;
  }
};

export const modelBancoSolar = {
  getClienteModel,
  createClienteModel,
  getClienteById,
  updateClienteModel,
};
