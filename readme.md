# OpenFaaS - Barcode generator

Do you need to generate barcodes or qr codes? This function can generate a lot of them.

>This project uses [bwip-js](https://github.com/metafloor/bwip-js).  
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode). The translated code can run on any modern browser or JavaScript-based server framework.

## Before you start

1. Clone this repository
```bash
$ git clone https://github.com/padiazg/barcode-af.git
```
2. Replace "padiazg/" prefix from Docker Hub in stack.yml with your own account

3. Build/deploy
Create new function, make sure to specify ```barcode``` as the name of your function.
```bash
$ faas-cli new barcode --lang node
```
Now you can build/deploy
```bash
faas-cli build && faas-cli deploy
```

## Parameters:
Parameters must be passed in JSON format:  
Example:
```json
{
  "bcid": "qrcode",
  "text": "Hello world from OpenFaaS!"
}
```
Specific from this project:
* **base64**: Optional, not part of the modules parameters. Tells the function that we want the ouput encoded in base64. Defaults tu ```false```.

Specific from bwip-js
* **bcid**: The requested code. *required*  
Look [here](https://github.com/bwipp/postscriptbarcode/wiki/Symbologies-Reference) a reference of the codes that can be generated.  
Search the symbol you are interested in, go into the page (Ex: let´s say ```EAN-13``` as example) and search the ```Encoder:``` value (ean13 in this example). This value is what we need pass as ```bcid```'s value.

* **text**: The value to represent. *required*. Look at the [reference](https://github.com/bwipp/postscriptbarcode/wiki/Symbologies-Reference) to know what's the format for each symbol.

* **scaleX**: The x-axis scaling factor. Must be an integer > 0. Default is 2.

* **scaleY**: The y-axis scaling factor. Must be an integer > 0. Default is scaleX.

* **scale**: Sets both the x-axis and y-axis scaling factors. Must be an integer > 0.

* **rotate**: Allows rotating the image to one of the four orthogonal orientations. A string value. Must be one of:

    + "N" : Normal (not rotated). The default.  
    + "R" : Clockwise (right) 90 degree rotation.  
    + "L" : Counter-clockwise (left) 90 degree rotation.  
    + "I" : Inverted 180 degree rotation.   

*  **paddingwidth**: Sets the left and right padding (in points/pixels) around the rendered barcode. Rotates and scales with the image.

* **paddingheight**: Sets the top and bottom padding (in points/pixels) around the rendered barcode. Rotates and scales with the image.

* **monochrome**: Sets the human-readable text to render in monochrome. Boolean true or false. Default is false which renders 256-level gray-scale anti-aliased text.

There are more options specific from BWIPP, and they are documented in the  [BWIPP wiki](https://github.com/bwipp/postscriptbarcode/wiki). You need to consult there to determine what options are available for each barcode type.
