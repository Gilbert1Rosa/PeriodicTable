#!/bin/bash

DOMAIN=periodic-table

# Copy conf
# cp nginx.conf /etc/nginx/sites-enabled/$DOMAIN

# Create NGINX domain
# mkdir /var/www/html

cd ../ui
npm install
npm run build
rm -fR /var/www/html/*
mv build/* /var/www/html/
rm -fR build
cd ../scripts