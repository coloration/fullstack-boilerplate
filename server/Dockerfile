# 使用 Bun 官方镜像
FROM oven/bun:latest

WORKDIR /app

COPY . .

# 安装依赖
RUN bun install

# 启动应用
CMD ["bun", "run", "index.ts"]
