build:
	@echo "Building lib..."
	rm -rf lib/node_modules lib/dist lib/dist2
	pnpm install --frozen-lockfile
	pnpm esbuild src/index.js --platform=node --outfile=dist/index.js
	mkdir -p dist2
	pnpm pack --pack-destination dist2

publish:
	# check if tag is current and bump version in package.json to latest tag
	npx -y monotag@1.26.0 current --bump-action=latest --prefix=
	npm publish --no-git-checks --provenance
