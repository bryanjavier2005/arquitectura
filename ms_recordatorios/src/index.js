require('./decryptEnv'); // ✅ desencripta .env.enc correctamente
const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({
  logger: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  }
});

const port = process.env.PORT || 3000;

const recordatoriosRoutes = require('./routes/recordatoriosroutes');
fastify.register(recordatoriosRoutes, { prefix: '/recordatorios' });

const start = async () => {
  try {
    await fastify.listen({ port, host: '0.0.0.0' }); // ✅ importante para Docker
    fastify.log.info(`🚀 Servidor HTTPS iniciado en https://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
//fin