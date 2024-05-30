import { modelBancoSolar } from "../model/bancosolar.model.js";

// Obtener todas las canciones
const getClienteController = async (req, res) => {
  // Lógica para obtener todas las canciones
  try {
    const usuarios = await modelBancoSolar.getClienteModel();

    if(!usuarios){
        return res.status(400).json({ message: "No hay usuarios para mostrar" });
    }

    return res
      .status(201)
      .json({  usuarios });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener al cliente" , error });
  }
};


// Exportar todas las funciones como un objeto
export default {
    getClienteController,
};
