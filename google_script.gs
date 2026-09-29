// Google Sheets - Apps Script Kodi
// Ushbu kod to'g'ridan-to'g'ri ko'rsatilgan jadvalga (ID: 1OTSZWR9yo80kZUwtG4ucdkNXM5vFPE6SVZ3GrW2WIok) ma'lumot yozadi.

const SPREADSHEET_ID = "1OTSZWR9yo80kZUwtG4ucdkNXM5vFPE6SVZ3GrW2WIok";

function doPost(e) {
  return handleRequest(e);
}

function doGet(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getActiveSheet();
    
    // Agar jadval bo'sh bo'lsa, birinchi qatorga sarlavha qo'shamiz
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Sana", "Ism va Familiya", "Guruh / Sinf", "To'g'ri javob", "Noto'g'ri javob", "Jami savollar", "Natija (Foiz)", "Baho"]);
    }
    
    var params = e && e.parameter ? e.parameter : {};
    
    // JSON formatida kelgan bo'lsa
    if (e && e.postData && e.postData.contents) {
      try {
        var jsonBody = JSON.parse(e.postData.contents);
        Object.assign(params, jsonBody);
      } catch (err) {}
    }
    
    var date = params.date || new Date().toLocaleString("uz-UZ");
    var fullname = params.fullname || "Noma'lum";
    var group = params.group || "Noma'lum";
    var correct = params.correct || "0";
    var incorrect = params.incorrect || "0";
    var total = params.total || "20";
    var percentage = params.percentage || "0%";
    var grade = params.grade || "";
    
    sheet.appendRow([date, fullname, group, correct, incorrect, total, percentage, grade]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
