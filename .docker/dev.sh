#!/bin/bash

yarn install

# tail -f /dev/null

yarn migration:generate
yarn migration:run
yarn dev 