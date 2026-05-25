[OPEN] Debug Session: group-class-no-data

## Symptom
- group-class-announcement.html shows no classes even though a Google Apps Script Web App URL is configured.

## Quick Evidence
- Fetching `.../exec?action=published` returns an Apps Script runtime error:
  - `TypeError: ContentService.createTextOutput(...).setMimeType(...).setHeader is not a function`

- After updating the Apps Script, `.../exec?action=published` returns non-ISO date/time strings:
  - `weekStart`: `"Mon May 25 2026 00:00:00 GMT+0700 ..."`
  - `schedule[].date`: `"Fri May 29 2026 00:00:00 GMT+0700 ..."`
  - `schedule[].start`: `"Sat Dec 30 1899 07:00:00 GMT+0707 ..."`
  - This causes "Invalid Date" in UI because the page expects ISO `YYYY-MM-DD` and `HH:MM`.

## Hypotheses (falsifiable)
1. Apps Script fails at runtime due to unsupported API usage (`setHeader`), causing no data to be returned.
2. `publishedWeekStart` is empty in `config` sheet, so API returns an empty schedule.
3. `classes` sheet has missing/incorrect headers, so week filtering returns no rows.
4. API URL configured in the page is wrong or points to an older deployment.
5. Browser blocks cross-origin JSON fetch; JSONP is required for `file://` and GitHub Pages.

## Next Steps
- Replace Apps Script with a corrected full version (remove `setHeader`) and redeploy.
- Add normalization in Apps Script to output ISO strings for weekStart/date and HH:MM for start.
- Verify `YOUR_WEB_APP_URL?action=published` returns `{ weekStart, schedule }`.
- Ensure `config` has `publishedWeekStart` and `classes` contains rows with that `weekStart`.
