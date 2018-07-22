# 10k-binary-to-canvas
Display 10k random bytes of data on an html5 canvas

* random-gen.sh writes 10k bytes of data to a text file and initializes an express server.

* The express server listens on port 8000 and serves the index.html page with a canvas element.

* The HTML page runs a javascript file that fetches the random data from the express server and populates the canvas element.
