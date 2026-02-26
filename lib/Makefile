build:
	@echo "Building lib..."
	rm -rf lib/node_modules lib/dist lib/dist2
	pnpm install --frozen-lockfile
	pnpm esbuild src/index.js --platform=node --outfile=dist/index.js
	mkdir -p dist2
	pnpm pack --pack-destination dist2
