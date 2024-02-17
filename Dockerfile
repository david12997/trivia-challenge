# Utilizamos una imagen base de Node
FROM node:18-alpine as builder

# Instalamos dependencias globales
RUN npm install -g typescript ts-node

# Definimos el directorio de trabajo para el backend
WORKDIR /usr/src/app

# Copiamos los archivos de package para el backend y frontend
COPY package*.json ./
COPY trivia/package*.json ./trivia/

# Instalamos las dependencias del backend
RUN npm install

# Instalamos las dependencias del frontend
WORKDIR /usr/src/app/trivia
RUN npm install

# Copiamos el resto del código fuente del backend
WORKDIR /usr/src/app
COPY . .

# Construimos el backend
RUN npm run build:backend

# Construimos el frontend
WORKDIR /usr/src/app/trivia
RUN npm run build

# Etapa de producción
FROM node:18-alpine as production

# Copiamos el build del backend y el frontend al nuevo directorio de trabajo
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/trivia/dist ./trivia/dist
COPY package*.json ./

# Instalamos solo las dependencias de producción
RUN npm install --only=production

# Exponemos el puerto que utiliza nuestro servidor de Express
EXPOSE 3009

# Ejecutamos el servidor de Express
CMD ["node", "dist/index.js"]