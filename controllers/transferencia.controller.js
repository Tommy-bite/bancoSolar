import { modelTransferencias } from "../model/transferencia.model.js";

// Obtener todas las canciones
const getTransferenciasController = async (req, res) => {
  // Lógica para obtener todas las canciones
  try {
    const transferencias = await modelTransferencias.getTransferenciasModel();

    if (!transferencias) {
      return res.status(400).json({ message: "No hay transferencias para mostrar" });
    }

    return res.status(201).json({ transferencias });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener las transferencias", error });
  }
};

const createTransferenciaController = async (req, res) => {
  // Lógica para obtener todas las canciones
  const { emisor, receptor, monto } = req.body;

  if (!emisor || !receptor || !monto) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newTransferencia = {
        emisor,
        receptor,
        monto
    };

    const transferencia = await modelTransferencias.createTransferenciaModel(newTransferencia);

    if (!transferencia) {
      return res.status(400).json({ message: "No se creo la transferencia" });
    }

    return res.status(201).json({ transferencia });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al crear la transferencia", error });
  }
};



// Exportar todas las funciones como un objeto
export default {
  getTransferenciasController,
  createTransferenciaController,
};
