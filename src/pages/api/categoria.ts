// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const METHODS = req.method;
  if (METHODS === "POST") {
    return await createCategoria(req, res);
  } else if (METHODS === "GET") {
    return await getAllCategoria(req, res);
  } else if (METHODS === "PUT") {
    return await editCategoria(req, res);
  } else if (METHODS === "DELETE") {
    return await deleteCategoria(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getAllCategoria(req: NextApiRequest, res: NextApiResponse) {
  try {
    const categorias = await prisma.categorias.findMany();
    return res.status(200).json(categorias);
  } catch (e) {
    res.status(500).json({ error: "Error al obtener los elementos" });
  }
}

async function createCategoria(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newCategoria = await prisma.categorias.create({
      data: {
        nombreCategoria: body.nombreCategoria,
        descripcionCategorias: body.descripcionCategorias,
        url: body.url,
      },
    });
    return res.status(201).json(newCategoria);
  } catch (e) {
    console.log("Request error", e);
    res.status(500).json({ e: "Error creating question", success: false });
  }
}

async function editCategoria(req: NextApiRequest, res: NextApiResponse) {
  const { id, nombreCategoria, descripcionCategorias, url } = req.body;
  try {
    const updateCategoria = await prisma.categorias.update({
      where: { id },
      data: { nombreCategoria, descripcionCategorias, url },
    });
    return res.status(200).json(updateCategoria);
  } catch (e) {
    res.status(500).json({ error: "Error al actualizar el elemento" });
  }
}

async function deleteCategoria(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  try {
    const deleteC = await prisma.categorias.delete({
      where: { id },
    });
    return res.status(200).json(deleteC);
  } catch (e) {
    res.status(500).json({ error: "Error al eliminar el elemento" });
  }
}
