DEST   := /var/www/food.alicestrete.me
REMOTE := kstraat
RSYNC  := rsync -chavzP --rsync-path="sudo rsync"
SRC    := dist/*
SSH    := ssh -t
BUILD  := npm run build

build:
	$(BUILD)

publish: build
	$(RSYNC) $(SRC) $(REMOTE):$(DEST)
