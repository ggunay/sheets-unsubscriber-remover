/**
 * Google Apps Script to process newly added unsubscribers in Google Sheets.
 * 
 * @author Gunay Geyik
 * @license MIT
 */

// Configuration Variables
var CONFIG = {
  mainSheetName: "Main Sheet", // Name of the sheet where you want to delete rows
  unsubscribersSheetName: "Unsubscribers", // Name of the sheet with new unsubscribers, emails all must be listed in the first column
  emailColumnIndex: 1, // Index of the column containing emails (1 for column A, 2 for B, etc.)
};

/**
 * Processes newly added unsubscribers.
 */
function processNewUnsubscribers() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var unsubSheet = ss.getSheetByName(CONFIG.unsubscribersSheetName);
  var lastProcessedRow = getLastProcessedRow();
  
  var newUnsubsRange = unsubSheet.getRange(lastProcessedRow + 1, 1, unsubSheet.getLastRow() - lastProcessedRow, 1);
  var newUnsubsValues = newUnsubsRange.getValues();
  var newUnsubEmails = newUnsubsValues.flat().filter(String); // Flatten the array and remove empty values
  
  if (newUnsubEmails.length > 0) {
    var mainSheet = ss.getSheetByName(CONFIG.mainSheetName);
    var mainRange = mainSheet.getDataRange();
    var mainValues = mainRange.getValues();
    
    for (var i = mainValues.length - 1; i >= 0; i--) {
      var email = mainValues[i][CONFIG.emailColumnIndex - 1];
      if (newUnsubEmails.includes(email)) {
        mainSheet.deleteRow(i + 1);
      }
    }
    
    setLastProcessedRow(unsubSheet.getLastRow());
  }
}

/**
 * Retrieves the index of the last processed row.
 */
function getLastProcessedRow() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var lastRow = scriptProperties.getProperty('lastProcessedRow');
  return lastRow ? parseInt(lastRow, 10) : 0;
}

/**
 * Sets the index of the last processed row.
 */
function setLastProcessedRow(row) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('lastProcessedRow', row.toString());
}
