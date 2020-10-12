DEST   := /var/www/surveillancestories.com
REMOTE := surveillancestories.com
RSYNC  := rsync -chavzP --rsync-path="sudo rsync"
SRC    := dist/*
SSH    := ssh -t
BUILD  := npm run build

build:
	$(BUILD)

publish: build
	$(RSYNC) $(SRC) $(REMOTE):$(DEST)
