#!/bin/bash

DOMAIN=periodic-table

# Deploy backend

cd ../backend
npm install
screen -d -m "npm start"
cd ../scripts

# Deploy UI
cd ../ui
npm install
npm run build
rm -fR /var/www/html/*
mv build/* /var/www/html/
rm -fR build
cd ../scripts