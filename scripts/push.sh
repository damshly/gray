#!/usr/bin/env bash
set -e

# Variable definition
IMAGE_NAME="idamshly/mk:latest"

pnpm build
docker build --platform linux/amd64 -t "$IMAGE_NAME" .
docker push "$IMAGE_NAME"