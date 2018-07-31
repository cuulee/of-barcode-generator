# OpenFaaS - Barcode generator

Do you need to generate barcodes or qr codes? This function can generate ```EAN13```, ```QR```, ```PDF417```, ```CODE39```, ```CODE128```, ```DataMatrix``` and ```Interleaved 2 of 5```

> This is a port of [barcode-as-a-service](https://github.com/padiazg/barcode-as-a-service). Also published on [Heroku](https://barcode-render.herokuapp.com/).

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
* **code**: The requested code. *Mandatory*  
    Posible values are
    + ean13
    + qr
    + pdf417
    + code39
    + code128
    + datamatrix
    + interleaved2of5
* **value**: The value to represent. *Mandatory*
* **scale**: The scale of the image. Defaults to 0, increase the value to get a larger image. *Optional*
* **base64**: If we want the ouput encoded en base64. Defaults tu false. *Optional*
