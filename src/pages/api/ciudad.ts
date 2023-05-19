import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const METHODS = req.method;
  if (METHODS === "POST") {
    return await createCiudad(req, res);
  } else if (METHODS === "GET") {
    return await getAllCiudad(req, res);
  } else if (METHODS === "PUT") {
    return await editCiudad(req, res);
  } else if (METHODS === "DELETE") {
    return await deleteCiudad(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

export async function getAllCiudad(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ciudad = await prisma.Ciudades.findMany();
    return res.status(200).json(ciudad);
  } catch (e) {
    res.status(500).json({ error: "Error al obtener los elementos" });
  }
}

async function createCiudad(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newCiudad = await prisma.Ciudades.create({
      data: {
        nombreCiudad: body.nombreCiudad,
        url: body.url,
      },
    });
    return res.status(201).json(newCiudad);
  } catch (e) {
    console.log("Request error", e);
    res.status(500).json({ e: "Error creating question", success: false });
  }
}

async function editCiudad(req: NextApiRequest, res: NextApiResponse) {
  const { id, nombreCiudad, url } = req.body;
  try {
    const updateCategoria = await prisma.Ciudades.update({
      where: { id },
      data: { nombreCiudad, url },
    });
    return res.status(200).json(updateCategoria);
  } catch (e) {
    res.status(500).json({ error: "Error al actualizar el elemento" });
  }
}

async function deleteCiudad(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  try {
    const deleteC = await prisma.Ciudades.delete({
      where: { id },
    });
    return res.status(200).json(deleteC);
  } catch (e) {
    res.status(500).json({ error: "Error al eliminar el elemento" });
  }
}
