import os
import sys
import json
import time
import logging
import watchdog.events;
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler

def increment_version(version):
	# Split version into major, minor, patch
	version = version.split('.')
	# Increment patch
	version[2] = str(int(version[2]) + 1)
	# Return version
	return '.'.join(version)

def build():
	# run ./build.sh
	print('Building...')
	os.system('./build.sh')

class Handler(watchdog.events.FileSystemEventHandler):
		def on_modified(self, event: watchdog.events.FileModifiedEvent):
			# return super().on_modified(event)
			if (event.is_directory): return

			# if event src_path is content.ts or bundle.ts
			if event.src_path.endswith('content.ts') or event.src_path.endswith('bundle.ts'):
				build()
			else: print('Not building file ' + event.src_path)

if __name__ == "__main__":
	# If first argument is 'increment' then increment package.json patch version
	if sys.argv[1] == 'increment':
		# Read package.json
		with open('package.json') as json_file:
			data = json.load(json_file)
			# Increment patch version
			data['version'] = increment_version(data['version'])
		# Write package.json
		with open('package.json', 'w') as outfile:
			json.dump(data, outfile, indent=4)

	# else if first argument is 'watch'
	elif sys.argv[1] == 'watch':
		if __name__ == "__main__":
				logging.basicConfig(level=logging.INFO,
														format='%(asctime)s - %(message)s',
														datefmt='%Y-%m-%d %H:%M:%S')
				path = '.'
				observer = Observer()
				observer.schedule(Handler(), path, recursive=True)
				observer.start()
				try:
						while True:
								time.sleep(1)
				except KeyboardInterrupt:
						observer.stop()
				observer.join()



