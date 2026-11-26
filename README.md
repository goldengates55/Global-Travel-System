# Global Visa (phone app)

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

Every time you upload a new `index.html`, change `VERSION` in `sw.js` (for example `visaguide-87`; it is now `visaguide-86`). Phones then pick up the update.

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

## Licence (activation codes)

The whole app is locked until it is activated. On first start it shows a phone code (for example `K7Q-293`) with a Copy button and a "Send on WhatsApp" button that writes to the number in `CONTACT`. The customer sends you that phone code, you make a code for it in your private code generator, and they paste it in. The same screen appears again when a licence ends.

- **How the check works.** A code holds the phone code, the day it was made and the number of days, signed with your private key. The app checks the signature with the matching public key (`LIC_PUB` in `index.html`). The private key is not in the app and must never be put in it. The check works offline.
- **One code, one phone.** A code made for one phone code is refused on another phone. If a customer clears the app's data, the phone code changes and they need a new code. The PIN lock's "Forgot PIN?" erase keeps the licence.
- **Time.** A code made on day D for N days ends N days after D (UTC), like the "Ends in" date in your generator. Lifetime codes never end. The app keeps the latest date it has seen, so setting the phone clock back does not give more time.
- **Renewing.** The More tab has a Licence page showing the status, the days left and a box for a new code. A new code replaces the old one only if it lasts longer. From 7 days before the end, the home page shows a warning. Your generator's renewal message tells customers to go to "Settings, then Licence": in Global Visa the path is More, then Licence.
- **Its own key.** Global Visa has its own key pair, separate from Stockroom. The public key (`LIC_PUB` in `index.html`) is safe to publish. The private key lives only in the key file `visa-guide-key-PRIVATE.json` and in your browser's saved key inside the code generator, never in this app folder. The generator page `visa-guide-code-generator-PRIVATE.html` holds no key: you load the key file into it once.
- **Keep keys off GitHub.** The `.gitignore` in this folder blocks any file with `PRIVATE` in its name, files named `*-key*.json`, and the folders `private/` and `keys/`. Keep the key file and the generator outside the folder you push, or inside `private/`. If a private key was ever pushed to GitHub, deleting the file is not enough, because Git keeps history. Make a new key instead: in the generator tap "Create a new key", paste the new public key (x and y) into `LIC_PUB`, publish the app, and issue new codes.
- **Limits.** Someone who can edit the app's file can remove the check, as with any offline app. There is no free trial: use the generator's 1 day option for demos. While a licence has ended, the whole app is locked, including backup and export. The client data stays on the phone until the licence is renewed.

## Logo and tax details on receipts (More tab, Agency settings)

- **Logo.** Choose a PNG or JPG file. It is resized to at most 240 pixels, saved on the phone only, and printed at the top of receipts and invoices. Transparent areas become white. The logo is not part of client backups, so add it again on a new phone.
- **Tax ID number and business registration number.** Optional lines printed under your business details.
- **Tax rate.** Optional. When set, the receipt form offers "Show the tax breakdown". The amount you enter is taken as the total including tax, and the receipt shows the amount before tax, the tax and the total. If the rate is empty, no tax lines appear. The app does not know any country's tax rate: you enter yours.
- **Saved with each document.** Each receipt or invoice keeps the business details and tax rate that were in use when it was made, so downloading it again later gives the same wording even if you change your settings. The logo is the exception: it is the current one.
- Receipts and invoices are your own records. Check what your local rules require, such as tax numbers, stamps or a set invoice format.

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

## Look and feel

Teal and vermilion "visa sticker" design: fine guilloche lines on the home banner and lock screens, a machine-readable-strip detail at the bottom of tool panels, a floating tab bar, and rounded cards. Colours are the variables at the top of the second style block in `index.html` (`--stamp` teal, `--accent` vermilion; a dark set follows for dark mode). Fonts are Bricolage Grotesque (headings) and Instrument Sans (text), loaded from Google Fonts on the first visit and kept for offline use. App icons and `og.png` use the same colours.

## Countries, payment details and dashboard

- **Applying from (Settings):** Cameroon, Nigeria, Ghana, Senegal and Côte d’Ivoire. The choice sets the default country code and currency, the home-page line, and the checklist rule about ties to the home country. For Cameroon the Routes tab shows the detailed guides. For the other four it shows a general “Applying from…” page with steps and official links, because detailed route guides are only written for Cameroon. To add a country, add a line to `ORIGINS` in `index.html` (name in English and French, French “from” phrase `fp`, country code `cc`, currency `cur`).
- **Payment details (Settings):** payment provider, number and account name. They appear on invoices, and on receipts that still have a balance, with a QR code. The QR code is made inside the app (`QR` in `index.html`) and holds plain text: provider, number, amount and reference. It does not start a payment by itself.
- **Dashboard (Clients tab):** open cases, money still to collect, money received this month, clients by stage, approval rate by destination and money received over the last 6 months, with a table view. It reads only the client data on the phone.
- **Currencies:** XAF, XOF, NGN, GHS, EUR, USD.

## Client intake, payment plans and reminders

- **Client intake:** `intake.html` is a short public form for clients (English and French). It sends nothing to a server. It opens WhatsApp with the client's details and a code line that starts with `GVI1:`. In the Clients tab, **Client intake** shares the link (with your WhatsApp number and business name filled in) and turns a pasted message into a new client. The link only works once the app is uploaded online. Upload `intake.html` together with `index.html`.
- **Payment plan:** on a client page, add dated instalments or split the balance into 2 to 6 monthly instalments. Overdue and soon-due instalments show on the client list. “Mark paid” adds the amount to “Paid so far”. “Instalment reminder” writes a WhatsApp message with your payment number. Instalments are included in backups.
- **Appointment reminders:** on a client page with an upcoming appointment, **Add to my calendar** downloads a calendar file with a reminder the day before, and **Remind client on WhatsApp** writes the message, including documents still missing.
- The “Documents still needed” and “Payment reminder” messages were already in the app.

## Converter, what's new and share page

- **Currency converter (Tools):** XAF, XOF, NGN, GHS, EUR, USD, GBP, CAD and AUD. You type the rate; it is saved on the phone for that pair. The euro is fixed at 655.957 CFA francs (XAF and XOF). The app never goes online for rates.
- **What's new banner (home page):** to announce a fee or rule change, add a line at the top of the `NEWS` list in `index.html` with a new `id` (a later date sorts higher), an English text, a French text and optionally `go` (the page to open). Then raise `VERSION` in `sw.js` and upload. Each phone shows the banner once, until the person taps “Got it”.
- **Share the app:** shows a QR code of the app's own address (only once the app is online) and an install guide for Android and iPhone.

## Scans and team sharing

- **Scans (client page):** take a photo or choose photos, pick what the document is (this also ticks it in the client's checklist) and a clean-up mode (original, brighten, black and white). Photos are shrunk, stored in the phone's own database (IndexedDB), and can be viewed, saved, or combined into one PDF. They are **not** included in client backups or team files, and they are deleted when the client is deleted. Clearing the app's data on the phone deletes them.
- **Team sharing (Clients tab):** creates a file protected with a passphrase (AES-256-GCM, key from PBKDF2 with 250,000 rounds, built into the browser). Another agent chooses the file, enters the passphrase and the clients are merged: new clients are added, for a client on both phones the most recent edit wins, and receipts from both copies are kept. Deleting a client is not passed on. This needs the app to be opened from its online (https) address, because browsers only allow this encryption there. There is no server, so there are no accounts and no live sync. Each client has an optional “Handled by” name.

## User manual and privacy page

Both are in More and are written in English and French inside `index.html` (the `MAN` and `PRIV` lists). When you add or change a feature, update the matching topic in both languages so the manual stays correct. The privacy page lists what stays on the phone, what leaves it only when the agent chooses, the connections the app makes (Google Fonts on the first visit), the limits (the PIN does not encrypt, backups are not encrypted) and the agent's duties. If you add anything that sends data off the phone, update the privacy page first.

## Backups and import

- Save backup now asks for a passphrase (8 characters or more) and writes an encrypted file (AES-256-GCM, key from PBKDF2). The passphrase is never stored and cannot be recovered. Saving without protection is still possible. Encryption needs https or localhost.
- Restore backup opens both kinds of file and asks for the passphrase when needed.
- The Clients tab reminds the agent after 7 days or 10 changes since the last backup, with a "remind me in 3 days" button.
- Import spreadsheet reads a CSV file (comma, semicolon or tab; English or French column titles), lets the agent check the column mapping, shows a preview, skips clients already in the app (same phone or name), and imports up to 500 rows at a time.

## PIN, unpaid balances, document alerts, health check

- When the app lock is on and the app is opened over https (or localhost), the client list is stored encrypted (AES-256-GCM) with a key derived from the PIN (PBKDF2, 150,000 rounds). The key lives only in memory after unlock. A 4 to 6 digit PIN is weak against an expert, and scans in IndexedDB are not encrypted. A forgotten PIN means the list cannot be read again, only restored from a backup.
- Clients > Who owes me lists balances, late instalments first, with WhatsApp reminders.
- Each client can hold a passport expiry date and a bank statement date. Warnings: passport valid for less than 6 months after the appointment (or today), statement older than about 3 months. These are common embassy rules, not universal, and the text says so.
- More > App health check shows install, offline, version, https, backup, PIN, storage and persistence status, and can ask the browser to keep the data.

## Route guides and training sheet

- Routes now has Applying from Nigeria and Applying from Ghana. They are written as data (`ROUTES` in `index.html`) with English and French together, and list sources. Facts come from official pages and news reports read in November 2026. Re-check them before relying on them: centres and US rules change often. Apostille status was not confirmed from an official source, so the text says to check the HCCH table.
- `training-en.pdf` and `training-fr.pdf` are the one-page training sheets, made with `tools/training.py` (not included in the zip). They are listed in the service worker precache and linked from More, Training sheet.

## Stage messages, expenses, attention list

- Changing a client's status offers a WhatsApp message for the new stage (`cstage` in `index.html`). Editable text lives in the WhatsApp compose box.
- Expenses (`vg-expenses`) are stored like the client list: plain, or encrypted with the PIN key when the lock is on. They are in backups but not in team files. The Income report shows profit per currency for the month.
- `cattn(c)` decides who "needs attention": follow-up due, appointment within 2 days or passed, instalment due, document alert, or 14 days idle in early stages. Destination and handler filters sit under the search box.

## Referrals and team results

- Each client can have `src` (one of `SRC`) and `ref` (name of the referrer, up to 60 characters). Both are in the CSV export and in team files. They are not read by the CSV import.
- Clients > Where clients come from groups by source and by referrer. Clients > Team results groups by the Handled by field. Money figures use "Paid so far" on each client, per currency, not monthly receipts.

## Immigration

- New visa type `immigration` (client form, intake page, CSV). Seven extra checklist rules apply when Visa type is Immigration and Destination is Canada (job offer, recommendation, language test, education, work experience, funds, police and medical). The "return flight", "accommodation" and "ties to home country" rules are hidden for this type.
- Routes > Immigration to Canada: rural programs is written as data (`IMM` in `index.html`), English and French together, with sources. Facts about the permanent RCIP (opens 1 January 2027) come from news reports of the 9 November 2026 announcement, not from an IRCC page we could open. The six FCIP communities and the FCIP French level were not readable, so the guide says to check IRCC. Re-check before relying on it.
- The Immigration guide also covers Express Entry (French-language category, 2026 draw figures, proposed language reforms that were not in force) and Quebec (PSTQ, fees, the temporary PEQ window). Most figures come from news reports and the Quebec government page; re-check them against IRCC's Express Entry rounds page and quebec.ca before relying on them.
- The Immigration guide also covers the Atlantic Immigration Program and the provincial nominee programs. PNP and AIP details (stream changes in Ontario, BC and Nova Scotia, the New Brunswick designation pause, the six FCIP communities) come from secondary news sources, not from the provincial or IRCC pages. Re-check them before relying on them.

## Price list, today's messages and service agreement

- **Price list** (Clients, Price list): your usual service fee per destination, and optionally per visa type. A new client gets the fee and currency filled in. It is saved on the phone and included in backups.
- **Today's messages**: the clients who need a WhatsApp message today (appointment today or tomorrow, instalment due or late, follow-up due, documents missing for 7 days). The message opens ready in WhatsApp. Done or skipped clients leave the list for the day.
- **Service agreement (PDF)**: in a client's page. English or French, with fee and instalments, refund policy, client duties, data use, an extra immigration clause when relevant, and signature lines. It is a template, not legal advice.

- The main Checklist page now has the purpose **Immigration (permanent residence)**. With Canada it lists the immigration documents; other destinations show the basic documents with a note.

- In a client's page: **Appointment sheet (PDF)** (documents to bring, ticked when held) and **Send status on WhatsApp** (stage, appointment, documents received and missing, balance).

- The checklist PDF (installed app) now follows the printed page design: title, selections box, ticked boxes and a note.

## Studio and client status link

- **Studio** (Clients, Studio): one home screen with client engagement (open clients, today's messages), team workload per person, this month's money, marketing sources, and brand/profile gaps, with buttons to the full screens.
- **Client status link**: in a client's page. Opens `status.html`, a read-only page with stage, appointment, documents and balance. The data is inside the link (after the #), not on a server, so it is a snapshot: send a new link to update it. Upload `status.html` with the other files.

- **Ask for feedback** (Studio, Marketing): lists approved clients with a phone number, opens a ready WhatsApp message asking for a recommendation or review (optional review link), and remembers who was asked. Included in backups.

- **Refusals** (Studio, or a refused client): reasons, what to fix, a reapply date with reminder, a WhatsApp message and a new application. Included in backups.
- **Year summary** (Studio, Money): clients, approvals, money, profit, best month, top destinations and sources, team. PDF or text.

## Practice, scam checker, appearance, voice notes

- **Interview practice** and **Scam checker** are in the Tools tab.
- **Appearance** (More): theme (automatic/light/dark) and text size, kept per device.
- **Voice notes**: in a client's page, stored in IndexedDB on the phone only (not in backups, not scrambled by the PIN). Needs microphone permission and HTTPS.

## Calendar, report, commissions, estimate, expiry reminders

- **Calendar** (Studio or Clients): appointments, follow-ups, unpaid instalments; `.ics` export of upcoming dates.
- **Agency report**: daily or 7-day text summary to copy or send.
- **Commissions**: per client (who, amount, paid), totals per person in Studio. Included in backups.
- **Cost estimate**: official fee (typed by you, remembered per destination and type) + other costs + your price-list fee. No official fees are built in because they change.
- **Expiry reminders**: clients with a passport or bank statement alert appear in Today's messages (not repeated for 14 days).

- **Client rating** (1 to 5, average in Studio), **Translations** list per client, **Receipt photos** on expenses (IndexedDB, phone only). Rating and translations are in backups; photos are not.

## Agency profiles

Studio, Agency profiles: up to 3 agencies per phone. Profile 1 keeps the existing storage keys, so nothing moves. Profiles 2 and 3 use a prefix (`p2:`, `p3:`) on every saved item and on the IndexedDB database names. A small script at the top of `<head>` installs this before anything else reads storage. Shared across profiles: licence, language, theme, text size, exchange rates, last tab. "Erase all data" only erases the agency you are in.

- **Quote (PDF)**, **Documents we hold** (+ handover receipt), **Embassy booking** (printed on the appointment sheet), **Goals** (progress bars in Studio), **Bulk messages** (one WhatsApp after another). The held list, booking details and goals are included in backups.

- **Appointment checklist** (+ WhatsApp reminder), **view-only mode** (Studio; blocks saving to local storage, not IndexedDB), **Photo check** (Tools), **Client FAQ**, **Season planner**. Checklist ticks, FAQ and notes are included in backups.

- **Studio:** Search, Closing the day, Passport expiry dashboard, Data health check (+ duplicate merge, which closes the second card and never deletes), Message scripts. **Client page:** Timeline (`vg-tl`), Statement of account (PDF). New clients are checked for duplicates. Timeline notes and edited scripts are in backups.

- **Morning briefing** (`vg-brief`, `vg-brief-off`), **My document lists** (`vg-dl`, wraps `cdocs`), **Accountant pack** PDF, **Update now** (App health: unregisters the service worker, deletes `visaguide-*` caches, reloads; data untouched). `vg-dl` is in backups.

- **Tags + saved filters** (`vg-tag`, `vg-sf`), **Quick add** from a pasted message, **Folder cover** PDF, **Receipt photos** gallery with one-PDF export (`pdfPhotos`, reads the `vg-exphoto` store), **Referral rewards** (`vg-rw`), **Second attempts** tracker (`vg-rap`, set when a new application is started from a refusal plan). All the maps are in backups.

- Removed the in-app "Publish this on GitHub" page (hosting steps stay in this README).
- Removed the in-app developer pages (Design, Maintenance, Data, Architecture, Roadmap, Business model). The "Build your own system" group is gone from More.
- **Layout review:** Studio regrouped (Today, Clients, Team, Money, Marketing, Brand, collapsed Setup); button grids; the extra cards in a client page are collapsible (`collapseCards`, wraps `crmDetail`); checkbox rows fixed.
- **Payment schedule** PDF + weekly / 2-weekly / monthly split, **Interview day pack** PDF (uses `PQ` practice questions), **Move to a new phone** guide (Studio).
- **Quick tour** (`vg-tour`), **review reminders** (`fbDue`), **Documents that must be recent** (`vg-dage`), **Notice board** (`vg-note`), improved `.ics` (times, alarms, fixed `;` escaping), quote total in another currency (uses the typed `vg-rates`). `vg-dage` and `vg-note` are in backups.

## Cloud backup with Firebase (optional)

The app can keep an encrypted backup in your own Firebase project. The data is scrambled on the phone with your passphrase before it is sent. This is backup and phone-to-phone restore, not live sharing.

1. Go to the Firebase console and create a project (the free Spark plan is enough).
2. Build > Authentication > Get started > Sign-in method: switch on **Email/Password**. Do not offer sign-up to anyone else.
3. Authentication > Users > Add user: create one email and password for your agency.
4. Build > Firestore Database > Create database (production mode).
5. Firestore > Rules: replace the rules with the text below and Publish.
6. Project settings > General: copy the **Web API key** and the **Project ID**.
7. In the app: Studio > Cloud backup. Enter the four values and sign in. Then Upload a backup now.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/backup/{doc} {
      allow read, delete: if request.auth != null && request.auth.uid == uid;
      allow create, update: if request.auth != null && request.auth.uid == uid
        && doc.matches('meta|c[0-9]|c1[0-9]')
        && (doc == 'meta' || request.resource.data.d.size() < 800000);
    }
  }
}
```

Notes: each backup is split in parts of about 600 KB (Firestore limit is 1 MB per document). Voice notes, scans and receipt photos are not included. If the passphrase is lost, the cloud copy cannot be opened. Clients uploading their own documents is not built, because it needs a separate, stricter privacy design.

## One shared cloud for all agencies (owner setup)

1. Create the Firebase project as above (steps 1, 4, 5 and 6) and enable Email/Password sign-in. Use the rules shown above: each account can touch only its own `users/{uid}/backup` folder, at most 20 small documents.
2. In `index.html`, find `var CLOUD_SHARED={k:"",p:""};` and put your Web API key and Project ID between the quotes. These two values are public by design. The rules protect the data, not the key. Rebuild the zip and upload it.
3. In Google Cloud console, set a **billing budget alert** and, in Firebase Authentication settings, keep "Email enumeration protection" on. If spam accounts appear, switch sign-up off (Authentication > Settings > User actions) and add users by hand.
4. The app asks agencies for an email and password and shows a consent notice before it creates an account. The licence check on the Create account button is only a courtesy in the app: Firebase itself accepts any sign-up while sign-up is on.
5. You hold: emails, creation dates, and the size and date of each backup. You cannot read backup contents. Ask a local lawyer to review the terms and privacy text before you invite agencies (see `cloud-terms-draft.md` delivered with this release).
- **Form data sheet** (`vg-fd`, `fdRows`, `fdPdf`), **Travel date planner** (`tpPlan`, `vg-tpd`, times saved per destination), **Payments check** (`vg-rc`, transaction reference `tx` on receipts, `reconPdf`). All three are in the backup (`fd`, `tpd`, `rc`).
- **Families and groups** (`grp` on the client, `grpPdf`), **Late payers ladder** (`ladInfo`, `c:pay1..3`, `vg-lad`), **Staff mode** (`vg-staff`, a filter on one phone, not in backups) and **day report PDF** (`repPdf`).
- **Bookings** (`vg-bk`, `bkClean`, margin and deadline alerts), **Supplier payables** (`suppPdf`) and **Traveller pack** (`tvPdf`, `tvText`). Bookings are in the backup (`bk`).
- **Client language** (`lang` on the client, `pl`, `wl`, `lwrap` wrap messages and PDFs), **What happens next** (`vg-nx`), **Appointment-day card** (`apptCardPdf`, place/time in `vg-fd`), **Price sheet terms** (`vg-pol`, printed by `quotePdf`). The tracking page shows the next step and the arrival time.
- **Privacy**: consent (`c.cons`, `consClean`; withdrawn clients are skipped by `bulkKey`), data copy (`dcObj`, `dcPdf`), deletion (`purgeClient`, `delFlow`, log `vg-dr`), complaints (`vg-cmp`, `crmCmp`), and `practice.html` (questions embedded from `PQ`; link `#p=` payload built by `practiceLink`).
- **Client portal**: `status.html` is now the portal (same `#s=` link). `statusLink` adds `pt pf pp pn py rc rf rt`. Ticks are stored on the client phone only (`vgp*` key). Existing old links keep working.
- **Refund** (`c.rfd`, `rfdClean`, `rfdUI`, `rfdPdf`, message `c:refund`; portal payload `rd`).
- **Profit by client** (`profitRows`, `crmProfit`, `profPdf`): received − refunded − costs of active bookings; hidden in staff mode.
- **Package quote** (`c.pkg`, `pkgClean`, `pkgUI`, `pkgPdf`, message `c:pkg`; accepting creates bookings via `bkClean`).
- **Group tour sheet** (`vg-gt`, `gtUI`, `gtPdf`), **Visa validity** (`c.visa`, `visaClean`, `visaWarn`, `visaAlerts`, `visaUI`, `crmVisas`; messages `c:vexp`, `c:ret`; portal payload `vz`).
- **Client page tabs** (`sideTabs`, `DSIDE` lists which card is Client or Agency; key `vg-dtab`: client, agency or all). Tests set `vg-dtab` to `all` so every card is visible.
- **Relationships**: `c.enq`, `c.rel`, `c.bd`; `todayItems`, `crmToday`, `crmEnq`, `crmDep`; wa.me clicks in a client page set `rel.lc`; `feedback.html` (link built by `fbLink`).
- **Colours**: deep purple `#4a1388` and gold `#ffd21e` (high contrast: text 9:1 or better) (set in the `:root` blocks of each page; the dark theme uses gold as the main colour).
- **Keeping in touch**: `c.pn`, `c.pc` (`pcClean`), `c.ra`; `updDue` (7 days), `pastDone/pastReach/pastDue`, `crmPast`; messages `c:update`, `c:again`, `c:visaend`.
- **Common questions**: `faq.html` (9 general answers + up to 5 custom from `vg-faq`, payload `#p=`), `crmFaq`, `faqLink`; message `c:welcome`, `c:faq`; the portal link carries `fq`.
- **Refusal support and weekly summary**: message `c:refused` (uses `rfGet`/`RFR`), My day item for 7 days after a refusal; `weekRows/weekText/crmWeek` (mode `week`).
- **Hand-over, testimonials, group message**: `c.ho` (`hoClean`), `c.ts` (`tsClean`), `hoUI/hoText`, `crmTst`, `crmTagMsg` (modes `tst`, `tmsg`, message `c:grpmsg` uses `CV.gmsg`).
- **Polls and news page**: `poll.html`, `news.html` (payload `#p=`), `vg-poll`, `vg-post`, `crmPoll`, `crmPost`, `pollLink`, `postLink`; messages `c:poll`, `c:news`; both in the backup (`poll`, `post`).
- **Share as picture**: `shareCard(title,body,foot,name)` draws a 1080px PNG and hands it to `saveFile`; used by News posts and Testimonials.
- **Greetings, congratulations, thank referrers**: `HOL` list, "All clients" in the group message page, `congratsCard`, `referredBy`, message `c:thanksref` and a My day item.
- **Talk to us** card in `status.html` (question, call back, appointment change, feedback, recommend). Needs `ag.w`.
- **Live page (Firebase)**: `live.js` (client pages, Firestore REST, create-only), `liveCfg/lvCall/lvList/lvPublish/liveSync/crmLive` and `LV_RULES` (the full rules, also shown in the app). Collections under `pages/{uid}`: `pub/polls`, `pub/posts` (public read, agent write), `votes`, `likes`, `comments`, `requests` (clients create only; agent reads). Links carry `lv:{k,p,u}` only when `vg-live` is on. Needs the cloud sign-in (`vg-cloud`).

### Live page: Firebase setup
1. Use the same Firebase project as Cloud backup (Authentication Email/Password and Firestore on).
2. Replace the Firestore rules with the rules in Studio > Live page > Copy the rules (they include the backup rules) and Publish.
3. Sign in under Studio > Cloud backup, then open Studio > Live page and switch it on. Send clients new links.
4. Set a billing budget alert in Google Cloud. Anyone with a link can add small records; the rules limit size and fields but cannot rate-limit.
- **Shared cloud is active**: `CLOUD_SHARED` holds the project `global-visa-software` (Web API key and Project ID, both public by design). Tests that need the own-project form set `CV.own` or clear `CLOUD_SHARED`.
- The create-account notice now says the Live page data is stored readable. `cloud-terms-draft.md` (delivered separately) has a section for it.
- **Chat and team notes**: `c.th` (thread id, `thEnsure`), `threads/{th}/msgs` (capability by the unguessable id; client can add, agent can add as `a`), `inbox` (unread pings), `team` (agent account only); `crmChat`, `crmMsgs`, `crmTeam`, `lvDelThread`, message `c:chat`. Rules must be re-published from Studio > Live page. Deleting a client or account removes threads.
- **Staff accounts**: `pages/{owner}/staff/{staffUid}` (owner adds), `roster/{th}` (first name and assignee, owner publishes), `staffOf()` (`vg-staffof`), `lvCall(...,uid)` addresses the agency from a staff phone; `crmStaffAcc`, `crmSInbox`, `crmSChat`, `rosterPut`; client field `as`. Rules use `isOwner/isStaff` and `exists()`; re-publish them from Studio > Live page. Staff never get the client list, payments or documents.
- **Self-updating link**: `statusObj(c)` is the payload; `statusPublish()` writes `pub/s<th>` (hash in `vg-lvh` to skip unchanged), called from `statusSoon()` (4 s after `csave`) and at load. `status.html` fetches it when `D.th` and `D.lv` exist and replaces its snapshot. Consent withdrawal, client delete and account delete remove the doc. Rules updated (`pub/s...`).
- **Online enquiry form**: `intakeLink()` adds `lv=` (base64url `{k,p,u}`) when the Live page is on; `intake.html` loads `live.js` and writes one create-only doc to `pages/{uid}/enquiries` (falls back to WhatsApp when offline or without `lv`). `liveSync` lists `enquiries`; `crmLive` shows them with Add as client (`enqDraft`) and Done. Rules updated; re-publish from Studio > Live page.
- **Self-booking**: `vg-slots` (free times, "YYYY-MM-DD HH:MM"), `crmBook`, `slotsPublish` writes the free slot ids (booked ones removed) to `pub/slots`. `book.html` reads them and creates `bookings/{slotId}` (create-only, so the second person gets 409/403 and is told to pick another time). Rules updated; re-publish from Studio > Live page.
- **Client documents**: `status.html` (chat card) shrinks a photo to a JPEG data URL (< 600k chars) and creates `threads/{th}/files/{id}` (`k,n,d,t`; create-only for clients, read/delete by the owner only, not staff). `crmFiles` in the client chat lists metadata with a field mask, loads one photo on demand, saves it to the phone and deletes it. `lvDelThread` also removes files. No Firebase Storage is used (it needs a paid plan). Rules updated; re-publish from Studio > Live page.
- **My message templates**: `vg-tpl` (`{id,n,en,fr}`, max 20), `crmTpl` (Studio), `tplFill/tplBody`, message key `c:t:<id>` handled in `cmsg`, added to the client Send a message list. In the backup as `tpl`. Local only; no cloud.
- **Automatic deletion**: `vg-ret` (`on`, `d` days 30/60/90/180, `at`, `n`), off by default. `retRun(force)` deletes chat msgs and files (per client thread), `enquiries`, `requests`, `inbox` older than the cutoff and past `bookings`; runs 9 s after load (max every 12 h) and from Studio > Automatic deletion. No server: only runs when the app is opened. Does not touch local clients, backups, polls, news or comments.
- **Staff onboarding**: `vg-onb` (`steps` optional override of `ONBD`, `people[{id,n,start,done}]`), `crmOnb` (Studio), in the backup as `onb`. Local only; it does not grant access.
