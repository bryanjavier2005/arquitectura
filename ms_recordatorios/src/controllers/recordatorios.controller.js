const modelo = require('../models/recordatorio.model');

exports.listar = async (req, reply) => {
  return reply.send(modelo.obtenerTodos());
};

exports.crear = async (req, reply) => {
  const nuevo = modelo.crear(req.body);
  return reply.code(201).send({
    mensaje: 'Recordatorio creado correctamente',
    data: nuevo
  });
};

exports.actualizar = async (req, reply) => {
  const actualizado = modelo.actualizar(req.params.id, req.body);
  if (!actualizado) {
    return reply.status(404).send({ mensaje: 'Recordatorio no encontrado' });
  }
  return reply.send({
    mensaje: `Recordatorio ${req.params.id} actualizado correctamente`,
    data: actualizado
  });
};

exports.eliminar = async (req, reply) => {
  const eliminado = modelo.eliminar(req.params.id);
  if (!eliminado) {
    return reply.status(404).send({ mensaje: 'Recordatorio no encontrado' });
  }
  return reply.send({
    mensaje: `Recordatorio ${req.params.id} eliminado correctamente`,
    eliminado,
    timestamp: new Date().toISOString()
  });
};