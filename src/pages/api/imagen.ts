import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const METHODS = req.method;
  if(METHODS === 'POST'){
    return await createImagen(req, res);
  }else if(METHODS === 'GET'){
    return await getAllImagen(req, res);
  }else if(METHODS === 'PUT'){
    return await editImagen(req, res);
  }else if(METHODS === 'DELETE') {
    return await deleteImagen(req, res)
  } else {
    return res.status(405).json({message: 'Method not allowed', success: false});
  }
}

async function getAllImagen(req:NextApiRequest, res:NextApiResponse) {
  try{
    const imagen = await prisma.Imagenes.findMany();
    return res.status(200).json(imagen);
  }catch(e){
    res.status(500).json({ error: 'Error al obtener los elementos' });
  }
}

async function createImagen(req:NextApiRequest, res:NextApiResponse) {
  const body = req.body;
  try{
    const newImagen = await prisma.Imagenes.create({
      data: {
        url: body.url,
        nombre: body.nombre,
        descripcion: body.descripcion,
        productoId: body.productoId
      }
    });
    return res.status(201).json(newImagen);
  }catch(e){
    console.log('Request error', e);
    res.status(500).json({e: 'Error creating question', success: false})
  }
}

async function editImagen(req:NextApiRequest, res:NextApiResponse) {
  const {id, url, nombre, descripcion} = req.body
  try{
    const updateImagen = await prisma.Imagenes.update({
      where: {id},
      data: {url, nombre, descripcion}
    });
    return res.status(200).json(updateImagen);
  }catch(e){
    res.status(500).json({ error: 'Error al actualizar el elemento' });
  }
}

async function deleteImagen(req:NextApiRequest, res:NextApiResponse) {
  const {id} = req.body
  try{
    const deleteI = await prisma.Imagenes.delete({
      where: {id}
    });
    return res.status(200).json(deleteI);
  }catch(e){
    res.status(500).json({ error: 'Error al eliminar el elemento' });
  }
}