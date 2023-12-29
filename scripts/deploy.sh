#!/bin/bash

DOMAIN=periodic-table

# Deploy backend

screen -d -m "cd ../backend && npm start"

# Deploy UI
cd ../ui
npm install
npm run build
rm -fR /var/www/html/*
mv build/* /var/www/html/
rm -fR build
cd ../scripts