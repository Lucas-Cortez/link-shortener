FROM node:18-alpine AS builder

WORKDIR /home/app
COPY . ./

# ENVIRONMENT VARIABLES ==========================================

ARG AWS_ACCESS_KEY_ID
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID 

ARG AWS_SECRET_ACCESS_KEY
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY 

ARG AWS_REGION
ENV AWS_REGION=$AWS_REGION 

ARG TABLE_NAME
ENV TABLE_NAME=$TABLE_NAME 

ARG NEXT_PUBLIC_FRONT_DNS
ENV NEXT_PUBLIC_FRONT_DNS=$NEXT_PUBLIC_FRONT_DNS

# ================================================================

RUN echo $NEXT_PUBLIC_FRONT_DNS
RUN echo "Installing dependencies"
RUN npm install --frozen-lockfile

RUN echo "Bundling with dev dependencies"
RUN npm run build

RUN echo "Installing production dependencies"
RUN rm -rf node_modules && npm install --production --ignore-scripts

# ================================================================

FROM node:18-alpine as runner

WORKDIR /home/app

RUN addgroup -S docker && adduser -S app -G docker
USER app

COPY --from=builder /home/app/.next/standalone ./
COPY --from=builder /home/app/.next/static ./.next/static
COPY --from=builder /home/app/package.json ./
COPY --from=builder /home/app/next.config.js ./
# COPY --from=builder /home/app/public ./public


EXPOSE 3000

CMD ["node", "server.js"]
