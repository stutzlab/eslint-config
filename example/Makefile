SHELL := /bin/bash
MISE := mise exec --

%:
	@echo "Unknown target: $@. Ignoring"

install:
	@echo '>>> example: install'
	mise install
	-$(MISE) pnpm install --no-frozen-lockfile
	$(MISE) pnpm install --no-frozen-lockfile

build: install
	@echo '>>> example: build'

lint:
	@echo '>>> example: lint'
	$(MISE) pnpm audit

lint-fix:
	@echo '>>> example: lint-fix'
	$(MISE) pnpm audit

test: install
	@echo '>>> example: test'
	cp src/index.test src/index-test.ts

	@echo 'Linting... (should have errors)'
	$(MISE) pnpm exec eslint src/ | grep "A space is required"

	@echo 'Fixing...'
	$(MISE) pnpm exec eslint src/ --fix

	@echo 'Linting... (should not have errors)'
	$(MISE) pnpm exec eslint src/

	@echo 'Building package with esbuild...'
	$(MISE) pnpm exec esbuild src/index-test.ts --bundle --platform=node --outfile=dist/index-test.js

clean:
	@echo '>>> example: clean'
	rm -rf node_modules dist .cache

all: build test

