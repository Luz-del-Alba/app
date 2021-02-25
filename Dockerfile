FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
COPY . .
#RUN npm run build:$ENV

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
#COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/index.html /usr/share/nginx/html/index.html
COPY --from=build /usr/src/app/.well-known/pki-validation/5658F887755CCCA3E677302E1C24837B.txt /usr/share/nginx/html/.well-known/pki-validation/5658F887755CCCA3E677302E1C24837B.txt
COPY --from=build /usr/src/app/certificate/certificate.crt /etc/ssl/certificate.crt
COPY --from=build /usr/src/app/certificate/private.key /etc/ssl/private.key

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
