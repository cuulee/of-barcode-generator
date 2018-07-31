"use strict";
const rescode = require("rescode");

module.exports = (context, callback) => {
    // always receive params as a json object
    let parms;
    try {
        parms = JSON.parse(context);
    } catch (e) {
        callback(e, undefined);
        return;
    }

    // code type requested
    const code = parms.code.toLowerCase();

    // value to display
    const value = parms.value;

    // scale
    const scale = parms.scale || 0;

    // output format
    const format = parms.fmt ? parms.fmt.toLowerCase() : "png";

    // encode to base64
    const base64 = parms.base64 ? parms.base64 : false;

    const render_options = {
        includetext: true,
        guardwhitespace: true,
        inkspread: 0,
        scaleX: scale,
        scaleY: scale
    };

    const modules = [];

    switch (code) {
        case "code128":
            modules.push("code128");
            break;

        case "code39":
            modules.push("code39");
            break;

        case "ean13":
            modules.push("ean2", "ean5", "ean8", "ean13");
            break;

        case "interleaved2of5":
            module.push("interleaved2of5");
            break;

        case "pdf417":
            modules.push("pdf417");
            render_options.includetext = false;
            break;

        case "qrcode":
            modules.push("qrcode");
            render_options.includetext = false;
            break;

        case "datamatrix":
            modules.push("datamatrix");
            render_options.includetext = false;
            break;

        default:
            callback("Unknown code requested: " + code, undefined);
            return;
    } // switch (code) ...

    rescode.loadModules(modules, render_options);
    const bc = rescode.create(code, value);

    callback(undefined, base64 ? bc.toString("base64") : bc);
};
