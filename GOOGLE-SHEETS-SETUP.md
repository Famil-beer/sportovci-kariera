# Google Sheets Setup - Návod na nastavení

Tento návod tě provede vytvořením Google Sheets pro ukládání odpovědí z testu a nastavením webhooku přes Google Apps Script.

---

## 1. Vytvoření Google Sheet

### Krok 1: Vytvoř nový Google Sheet
1. Přejdi na [Google Sheets](https://sheets.google.com)
2. Klikni na **"Blank"** (Prázdný) nebo `+` pro nový sheet
3. Pojmenuj dokument: `Test osobnosti - Odpovědi`

### Krok 2: Nastav hlavičky sloupců
1. V prvním řádku vytvoř následující hlavičky:

| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 | ... | EX1 |
|----|----|----|----|----|----|----|-----|-----|-----|
| Datum | Jméno | Příjmení | Sport | Email | Q1 | Q2 | Q3 | ... | Q120 |

### Krok 3: Rychlý způsob vytvoření hlaviček
1. Do buněk A1-E1 napiš: `Datum`, `Jméno`, `Příjmení`, `Sport`, `Email`
2. Do buňky F1 vlož tento vzorec:
   ```
   =ARRAYFORMULA("Q" & SEQUENCE(1, 120))
   ```
3. To automaticky vytvoří Q1 až Q120

### Krok 4: Formátování
1. **Zvýrazni první řádek**:
   - Vyber řádek 1
   - Udělej ho **tučný** (Ctrl+B)
   - Přidej pozadí (volitelné): světle modrá
2. **Zamkni první řádek**:
   - View → **Freeze** → **1 row**

✅ **Tabulka je připravená!**

---

## 2. Google Apps Script - Vytvoření Webhooku

### Krok 1: Otevři Apps Script Editor
1. V Google Sheets klikni na **Extensions** → **Apps Script**
2. Otevře se nové okno s editorem kódu
3. Smaž všechen výchozí kód

### Krok 2: Vlož webhook kód
Zkopíruj a vlož následující kód:

```javascript
/**
 * Webhook pro příjem odpovědí z testu osobnosti
 * Autor: Kariéra sportovců
 */

function doPost(e) {
  try {
    // Otevři aktuální sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse JSON data z requestu
    var data = JSON.parse(e.postData.contents);

    // Validace dat
    if (!data.firstName || !data.lastName || !data.sport || !data.email || !data.answers) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Chybí povinná data"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Kontrola, že máme 120 odpovědí
    if (data.answers.length !== 120) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Nesprávný počet odpovědí. Očekáváno: 120, Obdrženo: " + data.answers.length
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Vytvoř řádek s daty
    var timestamp = new Date(data.timestamp);
    var row = [
      timestamp,
      data.firstName,
      data.lastName,
      data.sport,
      data.email
    ];

    // Přidej všechny odpovědi (120 hodnot)
    row = row.concat(data.answers);

    // Vlož řádek do sheetu
    sheet.appendRow(row);

    // Formátuj timestamp
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("dd.mm.yyyy hh:mm:ss");

    // === EMAIL NOTIFIKACE ===
    // Pošli email notifikaci
    sendEmailNotification(data.firstName, data.lastName, data.sport, data.email);

    // Vrať success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Test úspěšně uložen",
      row: lastRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());

    // Vrať error response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Funkce pro odeslání email notifikace
 */
function sendEmailNotification(firstName, lastName, sport, email) {
  var recipient = "info@sportovci-kariera.cz"; // ZMĚŇ NA SVŮJ EMAIL
  var subject = "✅ Nový test dokončen: " + firstName + " " + lastName;

  var body = "Ahoj!\n\n";
  body += "Právě byl dokončen nový test osobnosti.\n\n";
  body += "📋 INFORMACE O UŽIVATELI:\n";
  body += "━━━━━━━━━━━━━━━━━━━━━━━━\n";
  body += "Jméno: " + firstName + " " + lastName + "\n";
  body += "Sport: " + sport + "\n";
  body += "Email: " + email + "\n";
  body += "Datum: " + new Date().toLocaleString('cs-CZ') + "\n\n";
  body += "📊 ODKAZ NA ODPOVĚDI:\n";
  body += "━━━━━━━━━━━━━━━━━━━━━━━━\n";
  body += SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n";
  body += "💡 CO DĚLAT DÁLE:\n";
  body += "━━━━━━━━━━━━━━━━━━━━━━━━\n";
  body += "1. Otevři Google Sheet s odpověďmi\n";
  body += "2. Zkontroluj poslední řádek s odpověďmi\n";
  body += "3. Zpracuj výsledky a pošli zpětnou vazbu na email: " + email + "\n\n";
  body += "──────────────────────────\n";
  body += "Kariéra sportovců | Automatická notifikace\n";

  // Odešli email
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: body
  });

  Logger.log('Email notifikace odeslána na: ' + recipient);
}

/**
 * Test funkce - Spusť pro otestování
 */
function testWebhook() {
  var testData = {
    timestamp: new Date().toISOString(),
    firstName: "Jan",
    lastName: "Novák",
    sport: "Fotbal",
    email: "test@example.com",
    answers: Array(120).fill(3) // Všechny odpovědi = 3 (Nejsem si jistý/á)
  };

  var e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  var result = doPost(e);
  Logger.log(result.getContent());
}
```

### Krok 3: Úprava email adresy
1. Najdi řádek: `var recipient = "info@sportovci-kariera.cz";`
2. **Změň** na svůj email, kam chceš dostávat notifikace

### Krok 4: Ulož projekt
1. Klikni na **ikonu diskety** nebo `Ctrl+S`
2. Pojmenuj projekt: `Test Webhook`
3. Klikni **"OK"**

---

## 3. Nasazení Webhooku (Deploy as Web App)

### Krok 1: Deploy aplikace
1. V Apps Script editoru klikni na **"Deploy"** → **"New deployment"**

### Krok 2: Konfigurace deploymentu
1. Klikni na **ikonu ozubeného kola** (⚙️) vedle "Select type"
2. Vyber **"Web app"**
3. Nastav parametry:
   - **Description**: `Test Webhook v1`
   - **Execute as**: **Me** (tvůj účet)
   - **Who has access**: **Anyone** (Kdokoli)
     - ⚠️ **DŮLEŽITÉ**: Musí být "Anyone", aby webhook fungoval!
4. Klikni **"Deploy"**

### Krok 3: Autorizace
1. Zobrazí se: **"Authorization required"**
2. Klikni **"Authorize access"**
3. Vyber svůj Google účet
4. Zobrazí se varování: **"Google hasn't verified this app"**
   - Klikni na **"Advanced"**
   - Klikni na **"Go to Test Webhook (unsafe)"**
5. Klikni **"Allow"** pro povolení přístupu

### Krok 4: Zkopíruj Webhook URL
1. Po úspěšném deployi se zobrazí **"Web app URL"**:
   ```
   https://script.google.com/macros/s/ABC123XYZ.../exec
   ```
2. **ZKOPÍRUJ SI TUTO URL!** Budeš ji potřebovat v dalším kroku
3. Klikni **"Done"**

✅ **Webhook je nasazený!**

---

## 4. Integrace Webhook URL do test.html

### Krok 1: Otevři test.html
1. Otevři soubor `test.html` v textovém editoru

### Krok 2: Najdi webhook URL
1. Hledej řádek (cca řádek 461):
```javascript
const GOOGLE_SHEETS_WEBHOOK = "ZDE_VLOZIT_WEBHOOK_URL";
```

### Krok 3: Nahraď URL
1. **Nahraď** placeholder svou skutečnou URL:
```javascript
const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/ABC123XYZ.../exec";
```

### Krok 4: Ulož soubor
1. Ulož `test.html`

✅ **Integrace dokončena!**

---

## 5. Testování Webhooku

### Test 1: Testovací funkce v Apps Script
1. V Apps Script editoru vyber funkci **"testWebhook"** z dropdown menu (vedle tlačítka Run)
2. Klikni na **"Run"** (▶️)
3. Zkontroluj:
   - **Execution log**: Měl bys vidět "Email notifikace odeslána..."
   - **Google Sheet**: Měl by se přidat nový řádek s testovacími daty
   - **Email**: Měl bys dostat notifikační email

### Test 2: Skutečný test z webu
1. Otevři `prihlaseni.html` v prohlížeči
2. Vyplň formulář (Jméno, Příjmení, Sport, Email, Kód)
3. Zadej přístupový kód `SPORTOVEC27_`
4. Spusť test v `test.html`
5. Odpověz na všech 120 otázek (můžeš použít klávesy 1-5 pro rychlejší testování)
6. Klikni **"Dokončit test"**
7. Zkontroluj:
   - **Google Sheet**: Nový řádek s tvými odpověďmi (včetně sportu)
   - **Email**: Notifikační email

✅ **Pokud vidíš data v sheetu a dostal jsi email, vše funguje!**

---

## 6. Běžné problémy a řešení

### Problém: "Authorization required" při deploy
**Řešení**: Postupuj podle **Kroku 3.3** - musíš autorizovat aplikaci

### Problém: Webhook vrací error 403 (Forbidden)
**Řešení**:
- Zkontroluj, že "Who has access" je nastaveno na **"Anyone"**
- Zkontroluj, že používáš URL končící na `/exec` (ne `/dev`)

### Problém: Data se neuloží do sheetu
**Řešení**:
- Otevři Apps Script → View → **Executions**
- Zkontroluj error message v logu
- Zkontroluj, že JSON data mají správný formát

### Problém: Email se neposílá
**Řešení**:
- Zkontroluj, že email adresa v `sendEmailNotification()` je správná
- Gmail má limit 100 emailů/den pro bezplatné účty
- Zkontroluj spam folder

### Problém: CORS error v browseru
**Řešení**:
- Toto je normální! Google Apps Script má automatickou CORS politiku
- Pokud stále nefunguje, zkontroluj že URL je správně zkopírovaná

---

## 7. Aktualizace Webhooku

### Pokud potřebuješ změnit kód:
1. Uprav kód v Apps Script editoru
2. Ulož změny (`Ctrl+S`)
3. **Deploy** → **Manage deployments**
4. Klikni na **ikonu tužky** (✏️) u aktuálního deploymentu
5. Změň **Version**: **New version**
6. Klikni **"Deploy"**
7. **URL zůstane stejná!** Nemusíš měnit v `test.html`

---

## 8. Bezpečnost a doporučení

### ✅ Doporučené postupy:

1. **Backup Google Sheet**:
   - File → **Make a copy** pravidelně
   - Nebo použij **Version history**

2. **Sdílení přístupu**:
   - Klikni **"Share"** v pravém horním rohu
   - Přidej email adresy spolupracovníků
   - Nastav oprávnění: **Viewer** nebo **Editor**

3. **Ochrana dat**:
   - Data → **Protect sheets and ranges**
   - Vyber první řádek (hlavičky) a zamkni ho

4. **Validace dat** (volitelné):
   - Data → **Data validation**
   - Nastav rozsah hodnot pro Q1-Q120 (pouze 1-5)

### 🔒 Bezpečnostní tipy:

1. **Webhook URL** je veřejná, ale:
   - Nikdo nemůže číst data bez přístupu k Google Sheet
   - Můžeš přidat autentizaci (pokročilé)

2. **Google Apps Script má limity**:
   - 20,000 email recipients/den
   - 6 minut max execution time/request

3. **GDPR a ochrana osobních údajů**:
   - Google Sheet obsahuje osobní údaje (email, jméno)
   - Nesdílej přístup s neoprávněnými osobami

---

## 9. Užitečné odkazy

- 📚 [Google Apps Script Documentation](https://developers.google.com/apps-script)
- 💾 [Google Sheets API](https://developers.google.com/sheets/api)
- 📧 [MailApp Reference](https://developers.google.com/apps-script/reference/mail/mail-app)

---

## 10. Podpora

Pokud narazíš na problém:
1. Zkontroluj **Apps Script Logs**: View → Executions
2. Zkontroluj **browser konzoli** (F12) při odesílání testu
3. Zkontroluj, že webhook URL je správně zkopírovaná

**Kontakt**: info@sportovci-kariera.cz

---

✅ **Hotovo! Google Sheets webhook je plně nastavený a funkční.**
