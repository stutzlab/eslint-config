test:
	@echo "Installing lib..."
	
	# will fail, but will update pnpm-lock.yaml file with newer lib checksum
	-pnpm install --no-frozen-lockfile

	# now it will work
	pnpm install --no-frozen-lockfile

	cp src/index.test src/index-test.ts

	@echo "Linting... (should have errors)"
	pnpm eslint . --ext .ts | grep "A space is required"

	@echo "Fixing..."
	pnpm eslint . --ext .ts --fix

	@echo "Linting... (should not have errors)"
	pnpm eslint . --ext .ts

	@echo "Building package with esbuild..."
	pnpm esbuild src/index-test.ts --bundle --platform=node --outfile=dist/index-test.js

