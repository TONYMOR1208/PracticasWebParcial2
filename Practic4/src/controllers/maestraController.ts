import { Request, Response } from "express";
import  httpClient from "../utils/httpClient";

// URL del servicio REST de tu compañero
const externalServiceURL = 'https://f312-205-235-0-21.ngrok-free.app/api/resultado';

// Controlador para obtener los datos desde el servicio REST de tu compañero
export const getAllTablas = async (resq: Request, res: Response) => {
  console.log('Recibida solicitud para obtener todas las tablas');
  try {
    const data = await httpClient.get(externalServiceURL);
    console.log('Datos recibidos del servicio externo:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener datos del servicio externo:', error);
    res.status(500).json({ message: 'Error al obtener datos del servicio externo XD' });
  }
};
