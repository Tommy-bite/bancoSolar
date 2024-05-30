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

const createClienteController = async (req, res) => {
  // Lógica para obtener todas las canciones
  const { nombre, balance } = req.body;

  if(!nombre || !balance){
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {

    const newUsuario = {
      nombre,
      balance
    }

    const usuario = await modelBancoSolar.createClienteModel(newUsuario);

    if(!usuario){
        return res.status(400).json({ message: "No se creo el usuario" });
    }

    return res
      .status(201)
      .json({  usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener al crear usuario" , error });
  }
};


// Exportar todas las funciones como un objeto
export default {
    getClienteController,
    createClienteController
};
