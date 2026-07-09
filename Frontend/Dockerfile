# syntax=docker/dockerfile:1

# Pegamos apenas o binário oficial do Bun para garantir estabilidade
FROM oven/bun:1.2-slim AS bun_source

FROM node:22-bookworm-slim AS build
WORKDIR /app

# Copia o binário do Bun da imagem oficial para dentro da nossa imagem Node
COPY --from=bun_source /usr/local/bin/bun /usr/local/bin/bun

# CORRIGIDO: Removido o prefixo Frontend/
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# CORRIGIDO: Mudado de 'Frontend/ .' para '. .'
COPY . .

# CORREÇÃO: Permite que o Bun/Node faça requisições HTTP/HTTPS locais ignorando travas de SSL inválido
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN bun run build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist/Frontend/browser /usr/share/nginx/html
COPY --from=build /app/dist/Frontend/server/index.server.html /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80