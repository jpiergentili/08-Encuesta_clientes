const doGet = () =>{
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag("viewport",'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"')
        .setTitle("InBeck - Encuesta clientes")
        .setFaviconUrl("https://drive.google.com/uc?id=1g8MxbchD3P6nZL67SXrqmgvcggbxr9F2&export=download&format=png");
}
    
const include = (ruta) =>
      HtmlService.createHtmlOutputFromFile(ruta).getContent();