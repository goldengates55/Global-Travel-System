# Visa Guide (phone app)

A phone-style app version of the Visa Travel Platform guide, built the same way as the Golden Gates app: one `index.html`, a manifest, a service worker and three icons. It opens full screen from the home screen and works without internet after the first visit.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest` | App name, colours and icons |
| `sw.js` | Keeps the app on the phone so it opens offline |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | App icons |
| `og.png` | Picture shown when the link is shared |

## Publish

1. Upload all the files to the root of a GitHub repository (or any web host with https).
2. On GitHub: Settings, then Pages, then Deploy from a branch, `main` and `/ (root)`.
3. Open the address on a phone and install it:
   - Android (Chrome): menu with 3 dots, then Install app. The app also shows an "Install app" button in its top bar.
   - iPhone (Safari only): Share, then Add to Home Screen.
4. In `index.html`, find the commented `og:image` line near the top and put in your real address, so WhatsApp shows the share picture.

The service worker only works on the published `https` address, not when `index.html` is opened from a folder.

## Updating

Every time you upload a new `index.html`, change `VERSION` in `sw.js` (for example `visaguide-10`; it is now `visaguide-9`). Phones then pick up the update.

## What is inside the app

Six tabs: Tools (checklist, passport check, cost estimator, timeline planner, Schengen 90/180-day calculator, readiness quiz, itinerary builder), Clients (the client tracker), Guides, Routes (from Cameroon: France, US, Canada, UK, Australia, updates), Templates (letters and messages), and More (agency settings, about, services, FAQ, privacy, share the app, and the system design pages). English and French, with a switch in the top bar.

## Client tracker (Clients tab)

For agents. Each client has a name, WhatsApp number, destination, visa type, status, next appointment and notes. Tap a client to change the status, send a WhatsApp message from the message templates (the name and appointment date are filled in), call, edit or delete. The home of the tab shows appointments in the next 7 days and can be searched and filtered by status.
- **Follow-ups.** Set a "Follow up on" date on a client. When it arrives or passes, the client appears under "Follow-ups due" at the top of the list, with a "Follow-up done" button.
- **Your fees.** Enter your own service fee and the amount paid so far (XAF, EUR or USD). The list shows the balance due for each client and the total outstanding. "Mark as fully paid" sets the paid amount to the fee. These are your own records only; do not enter card or bank account numbers.

- **Data stays on the phone.** It is saved inside the app on that phone only and is never sent anywhere. Clearing the app data, uninstalling the app or losing the phone erases it.
- **Backups.** "Save backup" creates a file you can keep in Files, WhatsApp or Drive. "Restore backup" loads such a file and replaces the list after asking. The app reminds you when the last backup is older than 14 days.
- **Documents.** Each client page has a document checklist built from the main checklist rules for that client's destination and visa type. Tick what has been received; the page shows how many. Documents that depend on the case (job, funds, minor) are not included, so use the Visa checklist for those. Ticks are saved under the English document name, so if you rename a rule in `RULES`, its ticks reset.
- **History.** Every status change is saved with its date and shown on the client page (last 8 changes).
- **Export.** "Export spreadsheet" saves all clients as a CSV file that opens in Excel or Google Sheets. Backups include documents, history, fees and follow-ups.
- **Pipeline chips.** Above the search box, one chip per status shows how many clients are in it. Tap a chip to filter the list, tap it again to clear.
- **Messages made for one client.** On a client page the message list also offers a payment reminder (only when a balance is due), a list of the documents still needed (only when some are not ticked) and a check-in message. They are filled in with the client's name, destination, balance and missing documents, and sent through WhatsApp in the app's current language.
- **Receipts and invoices.** On a client page, "Create receipt or invoice" makes a one-page PDF with your business details, the client's name, the amount, the date, the payment method and the fee balance. Receipts can add the amount to "Paid so far". Numbers run REC-2026-0001, INV-2026-0001 and so on, and the last 5 documents are listed on the client page with a PDF button to download them again. Backups keep the document list and the number counters, so numbers do not repeat after a restore.
- **Visa result.** On a client page, set the result (pending, approved, refused, withdrawn) and its date. For a refusal, tick the reasons given (the same eight reasons as the Refusal reasons guide) and set an optional reapply date.
- **Income report.** The "Income report" button on the client list shows, month by month, what was received through receipts created in the app: totals per currency, by payment method and by destination, with a CSV export. Below it, "Results by destination" shows approved and refused counts with the approval rate, and the most common refusal reasons. The list also shows "Received this month". Payments entered only by editing "Paid so far" are not counted, because they have no receipt.
- **Do not store sensitive numbers.** The form has no passport or card fields, and says never to put them in the notes.
- **Each phone has its own list.** To move clients to another phone, save a backup on one and restore it on the other.

## App lock (More tab, Agency settings)

Turn on a 4 to 6 digit PIN. The app then asks for it when opened and after a minute in the background. Five wrong tries in a row cause a 30 second wait. The PIN is stored only as a salted hash, not as the number itself.

The lock keeps other people out of the app, but it does not encrypt the data stored on the phone, and it does not protect a phone that someone can open with other tools. If the PIN is forgotten, the only way back in is "Forgot PIN?", which erases all app data on that phone (clients, receipts and settings). Keep backups of the client list.

## After a refusal (Guides tab)

A short guide on what to do after a refusal. It was checked on 14 November 2026 against these sources:

- **Schengen:** the Visa Code, Regulation (EC) No 810/2009, Article 32 (right to appeal, under the national law of the country that decided). One national ministry page is used as an example of a short deadline (15 days).
- **United Kingdom:** a UK Parliament written answer of 19 May 2026 (no right of appeal against a visit visa refusal).
- **United States:** the State Department's Visa Denials page on travel.state.gov (no appeal process for a 214(b) refusal, reapply with a new application, fee and interview, and one year to send documents after a 221(g) refusal).
- **Canada:** the IRCC Help Centre page on refused visitor visas (updated 3 November 2026), section 72 of the Immigration and Refugee Protection Act and the Federal Court guide (judicial review leave application within 60 days outside Canada, 15 days in Canada).
- **Australia:** no official page could be confirmed, and the law firm and agent guides disagree on the deadline (21, 28 or 14 days depending on the page). The guide therefore gives no number of days and tells the reader to use the date in the refusal notice. To complete it, read the Administrative Review Tribunal and Department of Home Affairs pages and update `AFS` in `index.html`.

Rules and deadlines change. To update the guide, change the text and the date in `AFS` in `index.html` and recheck each source from time to time.

## Agency settings (More tab)

Enter your business name, your name, WhatsApp number, email, address, default country code (237 for Cameroon), default currency and a note for the bottom of receipts. They are saved on the phone only. They are printed on receipts and invoices, replace `[business]` and `[your name]` in the message templates, add a signature to the client messages, and set how 9-digit phone numbers are turned into WhatsApp numbers.

## Adding a language

1. Add the language to `LANGS` in `index.html`: code, name, page title. The language button then cycles through the list.
2. Add `TR.xx = {"English text": "Translation", ...}` for the page text. Copy the entries of `TR.fr` as the list of lines to translate.
3. The text that the app builds itself (client tracker, tools, messages, receipts) uses `T("English","French")` and `fr ? ... : ...` in the code. These know English and French only, so a third language shows English there until they are extended. The checklist rules (`RULES`) and the message templates (`MSG`) also carry a French version each.

## Adding a country (where applicants live)

Cameroon is the only origin today. The structure for more is in place:

- `ORIGINS` in `index.html` lists each origin with its name, default phone country code and default currency. When it has more than one entry, Agency settings shows an "Applying from" choice that sets those defaults.
- A checklist rule can carry `o:["cm"]` to apply only to that origin. Rules without `o` apply to every origin. The rule "Proof of ties to Cameroon" already carries it.
- The Routes tab, the guides and the cost estimator are still written for applicants from Cameroon. They are the pages to copy and adapt for each new origin.

## Edit the content

- **Contact details:** in the script, find `var CONTACT=` and fill in `whatsapp` (digits with country code) and `email`.
- **Checklist rules and dates:** the `RULES` list in the script. Add `v:"YYYY-MM-DD"` and `u:"https://..."` when a rule has been verified.
- **Updates:** the `UPD` list in the script.
- **Other text:** the French text for the pages is stored in a dictionary (`TR.fr` in `index.html`) keyed by the exact English text. If you change an English sentence, change its key too, or that sentence stays in English. A line with no entry is simply shown in English, so a missing translation never breaks the rest of the page.

## Limits

- The checklist rules are sample data. Always confirm requirements on the embassy or visa centre website.
- Nothing is stored on a server. Progress and choices stay on the phone, and clearing the app data or uninstalling the app erases them.
- The first visit needs internet to load the fonts and install the app.
- In the installed app, printing is replaced by sharing a PDF (checklist and itinerary), and letters, the calendar file and the sample data files open the phone's share sheet (save to Files, send on WhatsApp). In a normal browser, printing and downloads work as usual. Please test these on both Android and iPhone.
- Every page has a "Report a mistake on this page" button that opens WhatsApp to the number in `CONTACT`, with the page name filled in. Leave `whatsapp` empty to hide it.
