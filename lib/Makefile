SHELL := /bin/bash
MISE := mise exec --

%:
	@echo "Unknown target: $@. Ignoring"

install:
	@echo '>>> lib: install'
	mise install
	$(MISE) pnpm install --frozen-lockfile

build: install
	@echo '>>> lib: build'
	rm -rf dist dist2
	$(MISE) pnpm exec esbuild src/index.js --platform=node --format=esm --outfile=dist/index.js
	$(MISE) pnpm exec esbuild src/index.js --platform=node --format=cjs --outfile=dist/index.cjs
	mkdir -p dist2
	$(MISE) pnpm pack --pack-destination dist2

lint:
	@echo '>>> lib: lint'
	$(MISE) pnpm audit

lint-fix:
	@echo '>>> lib: lint-fix'
	$(MISE) pnpm audit

test:
	@echo '>>> lib: test (no unit tests in lib module)'

clean:
	@echo '>>> lib: clean'
	rm -rf node_modules dist dist2 .cache

all: build lint test

publish:
	@echo '>>> lib: publish'
	$(MISE) npx -y monotag@1.26.0 current --bump-action=latest --prefix=
	$(MISE) npm publish --no-git-checks --provenance
