FROM node:15.10.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19.7-alpine
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html
COPY --from=build /usr/src/app/.well-known/pki-validation/5658F887755CCCA3E677302E1C24837B.txt /usr/share/nginx/html/.well-known/pki-validation/5658F887755CCCA3E677302E1C24837B.txt
COPY --from=build /usr/src/app/certificate/certificate.crt /etc/ssl/certificate.crt
COPY --from=build /usr/src/app/certificate/private.key /etc/ssl/private.key

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
