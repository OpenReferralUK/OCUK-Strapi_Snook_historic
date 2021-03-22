#!/bin/bash

#my project path
cd ~/OCUK-Strapi
git pull origin main

npm install
export PATH=~/.npm-global/bin:$PATH
source ~/.profile

npm start