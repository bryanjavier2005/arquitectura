const recordatoriosController = require('../controllers/recordatorios.controller');

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return { mensaje: '¡Hola desde Fastify con HTTPS y .env cifrado!' };
  });

  fastify.get('/listar', recordatoriosController.listar);
  fastify.post('/', recordatoriosController.crear);
  fastify.put('/:id', recordatoriosController.actualizar);
  fastify.delete('/:id', recordatoriosController.eliminar);
};
