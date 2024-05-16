# Utiliza una imagen base de Node
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto que tu aplicación utilizará
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["npx", "nodemon", "src/server.js"]
