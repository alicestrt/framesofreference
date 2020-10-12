DEST   := /var/www/surveillancestories.com
REMOTE := surveillancestories.com
RSYNC  := rsync -chavzP
SRC    := dist/*
SSH    := ssh -t
BUILD  := npm run build
ASOURCE := audio/*
ADEST  := /var/www/surveillancestoriesaudio

build:
	$(BUILD)

publish: build
	$(RSYNC) $(SRC) $(REMOTE):$(DEST)

audio:
	$(RSYNC) $(ASOURCE) $(REMOTE):$(ADEST)

.PHONY: build publish audio
