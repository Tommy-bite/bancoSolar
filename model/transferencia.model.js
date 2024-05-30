import { pool } from "../database/connection.db.js";

const getTransferenciasModel = async () => {
  const rowsTransferencias = [];

  try {
    const query = {
      text: "SELECT monto, receptor, emisor, fecha FROM transferencias",
    };
    const { rows } = await pool.query(query);

    for (const item of rows) {
      const emisor = await getClienteById(item.emisor);
      const receptor = await getClienteById(item.receptor);

      const transferencia = {
        monto: item.monto,
        receptor,
        emisor,
        fecha: item.fecha,
      };

      rowsTransferencias.push(transferencia);
    }

    console.log(rowsTransferencias);
    return rowsTransferencias;
  } catch (error) {
    throw error;
  }
};


const getClienteById = async (id) => {
  try {
    const query = {
      text: "SELECT nombre FROM usuarios WHERE id =  $1",
      values: [id],
    };
    const { rows } = await pool.query(query);
    console.log(rows[0].nombre)
    return rows[0].nombre;
  } catch (error) {
    throw error;
  }
};

const getClienteByNombre = async (nombre) => {
  try {
    const query = {
      text: "SELECT id FROM usuarios WHERE nombre =  $1",
      values: [nombre],
    };
    const { rows } = await pool.query(query);
    return rows[0].id;
  } catch (error) {
    throw error;
  }
};

const createTransferenciaModel = async (newTransferencia) => {
  try {
    const { emisor, receptor, monto } = newTransferencia;

    const emisorID =  await getClienteByNombre(emisor);
    const receptorID =  await getClienteByNombre(receptor);


    const query = {
      text: "INSERT INTO transferencias (emisor, receptor, monto) VALUES ($1 , $2, $3)  RETURNING *",
      values: [emisorID, receptorID, monto],
    };
    const { rows } = await pool.query(query);

    return rows[0];
  } catch (error) {
    throw error;
  }
};



export const modelTransferencias = {
    getTransferenciasModel,
  createTransferenciaModel,

};
