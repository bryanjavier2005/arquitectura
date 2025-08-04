let recordatorios = [];

function obtenerTodos() {
  return recordatorios;
}

function crear({ usuarioId, tipo, mensaje, fechaHora }) {
  const nuevo = {
    id: recordatorios.length + 1,
    usuarioId,
    tipo,
    mensaje,
    fechaHora
  };
  recordatorios.push(nuevo);
  return nuevo;
}

function actualizar(id, data) {
  const index = recordatorios.findIndex(r => r.id === parseInt(id));
  if (index === -1) return null;
  recordatorios[index] = {
    ...recordatorios[index],
    ...data
  };
  return recordatorios[index];
}

function eliminar(id) {
  const index = recordatorios.findIndex(r => r.id === parseInt(id));
  if (index === -1) return null;
  const eliminado = recordatorios.splice(index, 1);
  return eliminado[0];
}

module.exports = {
  obtenerTodos,
  crear,
  actualizar,
  eliminar
};
