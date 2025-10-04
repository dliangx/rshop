#!/bin/bash

# Tauri Linux构建脚本 (使用Docker)

set -e

echo "🚀 开始使用Docker构建Tauri Linux应用..."

# 检查Docker是否运行
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker未运行，请启动Docker Desktop"
    exit 1
fi

# 构建Docker镜像
echo "📦 构建Docker编译环境..."
docker build -f Dockerfile.build -t tauri-linux-builder .

# 运行Docker容器进行编译
echo "🔨 在Docker中编译应用..."
docker run --rm \
    -v "$(pwd)/public:/app/public" \
    -v "$(pwd)/src-tauri:/app/src-tauri" \
    -v "$(pwd)/src:/app/src" \
    -v "$(pwd)/index.html:/app/index.html" \
    -it tauri-linux-builder bash -c "npm run tauri build"

echo "🎉 后续编译完成"
