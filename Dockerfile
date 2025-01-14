FROM node:21-alpine AS install

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:21-alpine AS builder

WORKDIR /app

COPY . .

COPY --from=install /app/node_modules ./node_modules

RUN npm run build

FROM node:21-alpine AS runner

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
