# Storybook Makefile

# Container name
CONTAINER := nextjs

# Start Storybook
story:
	@echo "Starting Storybook..."
	@docker compose exec $(CONTAINER) yarn storybook

# Start Storybook in foreground
story-start:
	@echo "Starting Storybook in foreground..."
	make app-up
	make app-install
	@docker compose exec $(CONTAINER) yarn storybook

# Stop Storybook
story-stop:
	@echo "Stopping Storybook..."
	@docker compose exec $(CONTAINER) pkill -f "storybook"

# Show Storybook logs
story-logs:
	@docker compose logs -f $(CONTAINER)

# Clean Storybook processes
story-clean:
	@echo "Cleaning Storybook processes..."
	@docker compose exec $(CONTAINER) pkill -f "storybook" || true 