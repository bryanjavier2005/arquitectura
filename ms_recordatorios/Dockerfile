# 1. Imagen base oficial recomendada para producción
FROM node:20-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar package.json y lock para instalar dependencias primero
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --omit=dev

# 5. Copiar el resto del código (incluye /src y decryptEnv.js)
COPY . .

# 6. Establecer variable de entorno (puedes quitar si se lee desde .env.enc)
ENV NODE_ENV=production

# 7. Comando para ejecutar el microservicio
CMD ["node", "src/index.js"]

# 8. Puerto que expone Fastify (por ejemplo 3000)
EXPOSE 3000
