import sys
import json

def increment_version(version):
	# Split version into major, minor, patch
	version = version.split('.')
	# Increment patch
	version[2] = str(int(version[2]) + 1)
	# Return version
	return '.'.join(version)

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
		
		# Replace VERSION in content.ts
		# with open('content.ts', 'r') as file :
		# 	filedata = file.read()
		# # Replace the target string
		# newLine = "export const VERSION = '" + data['version'] + "'; //! MACRO:VERSION"
		# filedata = filedata.replace("export const VERSION = '.*'; //! MACRO:VERSION", newLine)

		# # Write the file out again
		# with open('content.ts', 'w') as file:
		# 	file.write(filedata)

	
