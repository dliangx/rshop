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

# 创建输出目录
mkdir -p ./target/release/bundle

# 运行Docker容器进行编译
echo "🔨 在Docker中编译应用..."
docker run --rm \
    -v "$(pwd)/target:/app/target" \
    -v "$(pwd)/src-tauri/target:/app/src-tauri/target" \
    tauri-linux-builder

echo "✅ 编译完成！"
echo "📁 编译产物位置："
find ./target -name "*.deb" -o -name "*.AppImage" -o -name "rshop" -type f 2>/dev/null | head -10

echo ""
echo "🎉 Linux应用构建成功！"