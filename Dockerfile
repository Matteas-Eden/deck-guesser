# --- Stage 1: Build ---
FROM node:22-slim AS builder
COPY --from=denoland/deno:bin-2.7.11 /deno /usr/local/bin/deno
WORKDIR /app
COPY . .
RUN deno install
RUN deno task build

# --- Stage 2: Production ---
FROM denoland/deno:2.7.11
WORKDIR /app

# 1. Copy the standalone folder (this contains its own minimal node_modules)
COPY --from=builder /app/.next/standalone ./
# 2. Manually copy static files (Next.js standalone doesn't do this by default)
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 3. Rename server.js to server.cjs so Deno knows it's CommonJS
# This avoids many "unexpected token" or module errors
RUN mv server.js server.cjs

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

# Run the standalone server with all permissions
CMD ["deno", "run", "-A", "server.cjs"]