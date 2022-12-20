function doGet(){
    return HtmlService
        .createTemplateFromFile("public/index")
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setFaviconUrl("../public/favicon.ico")
        .addMetaTag("viewport","width=device-width, initial-scale=1.0");
}

const include = (ruta) => HtmlService.createHtmlOutputFromFile(ruta).getContent();