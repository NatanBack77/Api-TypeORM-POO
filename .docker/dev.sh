#!/bin/bash

yarn install

# tail -f /dev/null

yarn migration:run
yarn dev 