# 10k-binary-to-canvas
Display 10k random bytes of data on an html5 canvas as black and white pixels (for no practical reason other than my interest in exploring bash scripting and HTML canvas).

* Executing random-gen.sh writes 10k bytes of random data from /dev/random (entropy) to a text file and then initializes an express server that listens for requests on port 8000. 

* The server looks for the randomly generated ~jibberish~ binary data in the text file, converts binary to an array of hex values, and then concatantes each index while converting hex to string. 

* A GET request for the index responds with a webpage page that immediately executes a javascript file which draws, something like 90,000 pixels on a canvas element.

Some possible impractical applications...

* Generating very complex QR codes
* Art
