#!/bin/bash

DOMAIN=periodic-table

# Copy conf
# cp nginx.conf /etc/nginx/sites-enabled/$DOMAIN

# Create NGINX domain
# mkdir /var/www/html

cd ../ui
npm run build
mv build/* /var/www/html/
rm build
cd ../scripts