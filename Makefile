setup:
	@echo "Installing dependencies to test"
	(npm install)

run:
	@echo "Running"
	(node index.js < test.txt)

test:
	@echo "Running tests"
	(npm test)
