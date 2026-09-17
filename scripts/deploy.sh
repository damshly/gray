#!/usr/bin/env bash
set -e

# Configuration
IMAGE_NAME="idamshly/mk:latest"
SERVER_USER="damshly"            # تغير حسب اليوزر عندك على السيرفر
SERVER_IP="damshly.com"     # عنوان السيرفر أو الـ Host
APP_DIR="/srv/gray"   # مسار المجلد يلي فيه ملف docker-compose.yml على السيرفر

# 1. Local execution
echo "==> Building app locally..."
pnpm build

echo "==> Building Docker image..."
docker build --platform linux/amd64 -t "$IMAGE_NAME" .

echo "==> Pushing image to registry..."
docker push "$IMAGE_NAME"

# 2. Remote execution via SSH
echo "==> Deploying to remote server..."
ssh "${SERVER_USER}@${SERVER_IP}" "cd ${APP_DIR} && docker compose pull && docker compose up -d --remove-orphans && docker compose up -d --force-recreate"

echo "==> Deployment finished successfully!"