#!/bin/bash

VERSION=$(jq -r .version deno.json)

cd ../

docker build \
    -f api/Dockerfile \
    -t ghcr.io/bndl-co/api:latest \
    -t ghcr.io/bndl-co/api:${VERSION} \
    --build-arg=PORT=8000 \
    --build-arg=STACK=${STACK} \
    --build-arg=VERSION=${VERSION} \
    .