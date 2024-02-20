# Google Sheets Unsubscriber Processor

This project contains a Google Apps Script designed to automatically process newly added unsubscribers in a Google Sheets document. It checks for new emails in a designated "Unsubscribers" sheet and deletes corresponding entries in the main sheet.

## Configuration

Before using the script, update the `CONFIG` object at the beginning of the script:

- `mainSheetName`: Name of the main sheet where rows with unsubscribed emails will be deleted.
- `unsubscribersSheetName`: Name of the sheet that contains newly added unsubscribers' emails.
- `emailColumnIndex`: Index of the column in the main sheet that contains the emails (1 for column A, 2 for B, etc.).

## Setup

1. Open your Google Sheet.
2. Go to `Extensions > Apps Script`.
3. Copy and paste the provided script into the script editor.
4. Adjust the `CONFIG` variables as per your sheet's configuration.
5. Save the script.

## Usage

Run the `processNewUnsubscribers` function through the Google Apps Script editor to process new unsubscribers. Alternatively, set up a time-driven or spreadsheet based trigger (such as on Edit) to run this function automatically at desired intervals.

## Author

- Gunay Geyik

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Automation with Google Apps Script Triggers and Zapier

Triggers in Google Apps Script: Use triggers to automatically execute the processNewUnsubscribers function. Time-driven triggers can run at specified intervals—hourly, daily, or weekly—ensuring that your sheet is regularly processed for new unsubscribers without manual intervention.

Combining with Zapier for Auto-Filling Entries

Zapier Integration: Zapier can automate the entry of new unsubscribers into your Google Sheets. By connecting your email platform, CRM, or any service that collects unsubscribe requests to Google Sheets via Zapier, you can have unsubscribers automatically added to your "Unsubscribers" sheet in real-time.

Full Automation Overview
Set up Zapier: Connect your unsubscribe source (like your email service) to Google Sheets using Zapier, ensuring new unsubscribers are automatically added to your sheet.
Configure Triggers: In your Google Apps Script, set up a trigger for the processNewUnsubscribers function to run periodically, processing these new entries and maintaining your list efficiently.
This setup creates a seamless, automated workflow for managing unsubscribers, minimizing manual tasks and ensuring your lists are always up-to-date.
