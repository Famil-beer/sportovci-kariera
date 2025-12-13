# 🔧 DEBUG INSTRUKCE - Oprava chyby při odesílání testu

## ⚠️ Problém
Test se vyplní, ale při kliknutí na "Dokončit test" se zobrazí chyba a v Google Sheets nejsou žádná data.

---

## 🔍 KROK 1: Nahraj aktualizovaný test.html

1. **Nahraj přes FileZilla** nový `test.html` na server
2. **Vymaž cache prohlížeče**: `Ctrl+Shift+R` (Windows) nebo `Cmd+Shift+R` (Mac)
3. **Znovu otevři** `https://sportovci-kariera.cz/test.html`

---

## 🔍 KROK 2: Otevři Developer Console

### Jak otevřít konzoli:
- **Chrome/Edge**: `F12` nebo `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
- **Firefox**: `F12` nebo `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
- **Safari**: `Cmd+Option+C` (Mac) - nejdřív povol Developer menu v Preferences

### Co uvidíš v konzoli:
Během vyplňování testu se zobrazí:
```
💡 DEBUG MODE: Pro otestování webhooku spusť v konzoli: testWebhook()
```

---

## 🔍 KROK 3: Test webhook PŘED vyplněním testu

### V konzoli napiš a stiskni Enter:
```javascript
testWebhook()
```

### Co se stane:
1. Odešle se testovací request na Google Apps Script
2. V konzoli uvidíš detailní výpis
3. Zobrazí se alert s výsledkem

### ✅ Pokud test PROJDE:
```
✓ WEBHOOK FUNGUJE!
- status: 200
- ok: true
```
→ **Webhook funguje správně!** Pokračuj na KROK 4.

### ❌ Pokud test SELŽE:
```
✗ WEBHOOK SELHAL!
- status: 403 Forbidden
```
→ **Problém je v Google Apps Script!** Jdi na KROK 5.

---

## 🔍 KROK 4: Vyplň test s otevřenou konzolí

1. **Nech konzoli OTEVŘENOU** (F12)
2. **Vyplň test** normálně (všech 120 otázek)
3. **Klikni "Dokončit test"**
4. **Sleduj konzoli** - uvidíš detailní výpis:

### ✅ Úspěšný výpis vypadá takto:
```
=== ZAČÁTEK SUBMITTESTU ===
1. Kontrola odpovědí...
✓ Všechny otázky odpovězeny
2. Kontrola currentUser...
currentUser: {uid: "...", email: "tvuj@email.cz"}
✓ currentUser OK, email: tvuj@email.cz
3. Načítám data z localStorage...
✓ firstName: Tvoje
✓ lastName: Jméno
4. Připravuji data pro odeslání...
✓ testData připravena
5. Odesílám na webhook: https://script.google.com/...
6. Response přijata:
   - status: 200
   - ok: true
✓ Data úspěšně odeslána!
=== SUBMITTEST DOKONČEN ÚSPĚŠNĚ ===
```

### ❌ Chybový výpis obsahuje:
```
=== CHYBA V SUBMITTESTU ===
Error message: [zde bude přesná chyba]
```

**Pošli mi screenshot této chyby!**

---

## 🔍 KROK 5: Kontrola Google Apps Script

### Problém: Webhook vrací 403 Forbidden

**Možné příčiny:**

### A) Webhook není nasazený jako "Web app"
1. Otevři Google Apps Script editor
2. Klikni **Deploy** → **Manage deployments**
3. Zkontroluj že existuje aktivní deployment typu "Web app"
4. Pokud ne, jdi na **Deploy** → **New deployment**

### B) Webhook nemá správná oprávnění
1. V **Manage deployments** klikni na ⚙️ (edit)
2. Zkontroluj nastavení:
   - **Execute as**: Me (tvůj účet)
   - **Who has access**: **Anyone** ⚠️ DŮLEŽITÉ!
3. Pokud je špatně, uprav a klikni **Deploy**

### C) URL se změnila
1. V **Manage deployments** zkopíruj **Web app URL**
2. URL musí končit na `/exec` (ne `/dev`)
3. Porovnej s URL v `test.html:460`
4. Pokud se liší, vlož novou URL do test.html

---

## 🔍 KROK 6: Test přímo v Google Apps Script

1. Otevři Google Apps Script editor
2. V dropdown menu vyber funkci **`testWebhook`**
3. Klikni **Run** (▶️)
4. Zkontroluj:
   - **Execution log**: Měl bys vidět úspěšný zápis
   - **Google Sheet**: Měl by přibýt řádek s testovacími daty
   - **Email**: Měl by přijít notifikační email

### Pokud test v Apps Script FUNGUJE, ale webhook z webu NE:
→ Problém je v CORS nebo oprávněních webhooku

---

## 📋 Checklist pro debugging

- [ ] Nahrál jsem aktualizovaný test.html na server
- [ ] Vymazal jsem cache prohlížeče (Ctrl+Shift+R)
- [ ] Otevřel jsem Developer Console (F12)
- [ ] Spustil jsem testWebhook() před vyplněním testu
- [ ] Pokud webhook test selhal, zkontroloval jsem Google Apps Script deployment
- [ ] Zkontroloval jsem že "Who has access" je nastaveno na "Anyone"
- [ ] Webhook URL v test.html končí na /exec
- [ ] Test funkce v Google Apps Script (testWebhook) funguje
- [ ] Vyplnil jsem test s otevřenou konzolí a sledoval logy

---

## 🆘 Co mi poslat pro další pomoc:

### 1. Screenshot z konzole po kliknutí "Dokončit test"
- Celý výpis od `=== ZAČÁTEK SUBMITTESTU ===` po konec

### 2. Výsledek funkce testWebhook()
```javascript
testWebhook()
```
- Screenshot výpisu v konzoli

### 3. Screenshot z Google Apps Script
- Deploy → Manage deployments
- Nastavení deploymentu (Execute as, Who has access)
- Webhook URL

### 4. Odpověď na tyto otázky:
- Zobrazila se chybová hláška v alertu? Jaký byl text?
- Co bylo poslední v konzoli před chybou?
- Funguje test funkce přímo v Google Apps Script editoru?

---

## 🔧 Rychlá oprava (pokud znáš problém)

### Problém: currentUser je null
→ Uživatel není přihlášen - zkontroluj Firebase Authentication

### Problém: 403 Forbidden
→ Google Apps Script webhook nemá správná oprávnění - změň na "Anyone"

### Problém: CORS error
→ Normální, ale data by se měla přesto odeslat - zkontroluj Google Sheet

### Problém: TypeError: Cannot read property 'email' of null
→ currentUser není inicializován - zkontroluj auth.onAuthStateChanged

---

## ✅ Po opravě

1. Vymaž cache (Ctrl+Shift+R)
2. Znovu vyplň test
3. Zkontroluj Google Sheet
4. Zkontroluj email notifikaci

**Pokud to funguje, hotovo! 🎉**
