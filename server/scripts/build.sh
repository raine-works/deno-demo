#!/bin/bash

VERSION=$(jq -r .version deno.json)

cd ../

docker build \
    -f server/Dockerfile \
    -t ghcr.io/bndl-co/server:latest \
    -t ghcr.io/bndl-co/server:${VERSION} \
    --build-arg=PORT=8000 \
    --build-arg=STACK=${STACK} \
    --build-arg=VERSION=${VERSION} \
    .

docker image prune -f