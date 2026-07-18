FROM node

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DB_USERNAME=admin
ENV MONGO_DB_PASSWORD=admin

CMD ["node", "server.js"]




# WORKDIR sets /backend as the working directory, so you don't need full paths.
# COPY package*.json and RUN npm install install your dependencies inside the image.
# COPY . . copies the rest of your application after dependencies are installed, which also improves Docker build caching.
# The environment variable names use the more conventional MONGO_DB_* format (your original names with MONGO_dB_* still work as long as your code uses the same names).