# Portfolio Makefile

.PHONY: dev build preview clean help install

help:
	@echo "Available commands:"
	@echo "  make dev      - Start the development server"
	@echo "  make build    - Build the project for production"
	@echo "  make preview  - Preview the production build"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make install  - Install dependencies"

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf dist

install:
	npm install
