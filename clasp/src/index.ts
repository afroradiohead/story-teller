// const Speech = require("speak-tts")
declare var global: any;


global.onOpen = () => {
  DocumentApp.getUi()
  .createMenu('Story Teller')
  .addItem('Open App','openUrl')
  .addToUi();
}

global.doGet = () => {
  const result = {
    text: DocumentApp.getActiveDocument().getBody().getText()
  }
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

global.openUrl = () => {
  var js = " \
    <script> \
      window.open('https://afroradiohead-storyteller.herokuapp.com/', '_blank', 'width=800, height=600'); \
      google.script.host.close(); \
    </script> \
  ";
  var html = HtmlService.createHtmlOutput(js)
    .setHeight(10)
    .setWidth(100);
    DocumentApp.getUi().showModalDialog(html, 'Now loading.');
}

