test:
	yarn install --frozen-lockfile

	cp src/index.test src/index-test.ts

	echo "Linting... (should have errors)"
	yarn eslint . --ext .ts | grep "A space is required"

	echo "Fixing..."
	yarn eslint . --ext .ts --fix

	echo "Linting... (should not have errors)"
	yarn eslint . --ext .ts

	echo "Building package with esbuild..."
	yarn esbuild src/index-test.ts --bundle --platform=node --outfile=dist/index-test.js

