// Google Sheets - Apps Script Kodi
// Ushbu kodni Google Sheet jadvallingizdagi Extensions -> Apps Script bo'limiga joylang.

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Agar sarlavhalar bo'lmasa, birinchi qatorga sarlavha qo'shamiz
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Sana", "Ism va Familiya", "Guruh / Sinf", "To'g'ri", "Noto'g'ri", "Jami", "Foiz", "Baho"]);
    }
    
    var parameter = e.parameter;
    var date = parameter.date || new Date().toLocaleString();
    var fullname = parameter.fullname || "Noma'lum";
    var group = parameter.group || "Noma'lum";
    var correct = parameter.correct || "0";
    var incorrect = parameter.incorrect || "0";
    var total = parameter.total || "20";
    var percentage = parameter.percentage || "0%";
    var grade = parameter.grade || "";
    
    sheet.appendRow([date, fullname, group, correct, incorrect, total, percentage, grade]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
