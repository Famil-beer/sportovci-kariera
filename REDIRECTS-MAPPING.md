# 🔀 Mapa 301 Přesměrování - sportovci-kariera.cz

Tento dokument obsahuje kompletní seznam všech 301 přesměrování na webu.

---

## ✅ NOVĚ PŘIDANÁ PŘESMĚROVÁNÍ

### 📁 Staré WordPress URL (s trailing slash)

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/kontakt/` | `/kontakt.html` | WordPress struktura → statický web |
| `/cookies/` | `/ochrana-osobnich-udaju.html` | Přejmenovaná stránka |
| `/o-mne/` | `/o-mne.html` | WordPress struktura → statický web |
| `/clanky/` | `/clanky.html` | WordPress struktura → statický web |

### 📝 Staré WordPress články

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/prace-a-studium-pro-sportovce-3-2-2/` | `/clanek-vzdelavani-sportovcu.html` | Starý článek o práci a studiu |
| `/prace-a-studium-pro-sportovce-2-2-2.../` | `/clanek-vzdelavani-sportovcu.html` | Varianta téhož článku |
| `/jak-se-pripravit-na-zivot-po-ukonceni-sportovni-kariery-zivot-po-sportu/` | `/clanek-povolani-sportovcu.html` | Starý článek o životě po sportu |
| `/prechod-ze-sportu-do-prace/` | `/clanek-povolani-sportovcu.html` | Starý článek o přechodu do práce |
| `/pruvodce-pro-sportovce-krok-po-kroku/` | `/index.html` | Průvodce → hlavní stránka |
| `/karierni-poradenstvi-pro-skoly/` | `/o-mne.html` | Služby pro školy → O mně |

### 📧 Staré kontaktní stránky

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/bcd31-contact-us/` | `/kontakt.html` | Starý kontaktní formulář |
| `/contact/` | `/kontakt.html` | Anglická verze kontaktu |
| `/contact-us/` | `/kontakt.html` | Anglická verze kontaktu |

### 👤 WordPress author pages

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/author/famil/` | `/o-mne.html` | Stará autor stránka z WordPressu |
| `/author/*` | `/o-mne.html` | Jakákoliv autor stránka → O mně |

### 🔍 WordPress search URLs

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/search/*` | `/clanky.html` | Stará WordPress vyhledávací URL |
| `/?s={term}` | `/clanky.html` | WordPress search query → články |

### 📡 WordPress feed URLs (410 Gone)

| Stará URL | Status | Důvod |
|-----------|--------|-------|
| `/feed/` | 410 Gone | RSS feed neexistuje na statickém webu |
| `/category/*/feed/` | 410 Gone | Kategorie feedy neexistují |

### 🔄 Duplicitní WordPress varianty

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/prace-a-studium-pro-sportovce-2-2-2/prace-a-studium-pro-sportovce-2-2-2-2/` | `/clanek-vzdelavani-sportovcu.html` | Duplicitní nested URL |

### 🌍 Staré anglické články (nepodstatné)

| Stará URL | Nová URL | Důvod |
|-----------|----------|-------|
| `/how-analytics-can-fuel-your-marketing-success/` | `/index.html` | Starý anglický článek, nepodstatný |
| `/the-future-of-marketing-automation/` | `/index.html` | Starý anglický článek, nepodstatný |

---

## 📌 EXISTUJÍCÍ PŘESMĚROVÁNÍ (již bylo v .htaccess)

### 🔒 HTTPS a WWW redirecty
- `http://` → `https://` (Force HTTPS)
- `sportovci-kariera.cz` → `www.sportovci-kariera.cz` (Force WWW)

### 📄 Programy (přesměrováno na homepage)
- `/bronzovy-program.html` → `/index.html#jak-to-funguje`
- `/stribrny-program.html` → `/index.html#jak-to-funguje`
- `/zlaty-program.html` → `/index.html#jak-to-funguje`

### 🔄 Přejmenované soubory
- `/privacy-policy.html` → `/ochrana-osobnich-udaju.html`

### ❌ Neexistující články (na seznam článků)
- `/clanek-linkedin.html` → `/clanky.html`
- `/clanek-pohovor.html` → `/clanky.html`
- `/clanek-skoly-praha.html` → `/clanky.html`
- `/clanek-zivotopis.html` → `/clanky.html`

### ✏️ Opravy překlepů
- `/clanek-typy-treniku.html` → `/clanek-typy-treningu.html`

### 🔐 Cloudflare Email Protection
- `/cdn-cgi/l/email-protection` → `/kontakt.html`

---

## 📊 STATISTIKA

| Kategorie | Počet redirectů |
|-----------|-----------------|
| WordPress URL (s trailing slash) | 4 |
| WordPress články | 6 |
| Kontaktní stránky | 3 |
| WordPress author pages | 2 |
| WordPress search URLs | 2 |
| WordPress feed URLs (410 Gone) | 3 |
| Duplicitní WordPress varianty | 1 |
| Anglické články | 2 |
| Programy | 3 |
| Neexistující články | 4 |
| Přejmenované soubory | 1 |
| Opravy překlepů | 1 |
| Ostatní (email protection, index.html) | 2 |
| **CELKEM** | **34** |

---

## 🧪 TESTOVÁNÍ

Pro otestování redirectů použij:

```bash
# Test redirect z příkazové řádky
curl -I https://www.sportovci-kariera.cz/kontakt/

# Mělo by vrátit:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.sportovci-kariera.cz/kontakt.html
```

### Klíčové URL k otestování:

**WordPress URL:**
1. ✅ https://www.sportovci-kariera.cz/kontakt/
2. ✅ https://www.sportovci-kariera.cz/cookies/
3. ✅ https://www.sportovci-kariera.cz/o-mne/
4. ✅ https://www.sportovci-kariera.cz/clanky/

**WordPress články:**
5. ✅ https://www.sportovci-kariera.cz/prace-a-studium-pro-sportovce-3-2-2/
6. ✅ https://www.sportovci-kariera.cz/jak-se-pripravit-na-zivot-po-ukonceni-sportovni-kariery-zivot-po-sportu/
7. ✅ https://www.sportovci-kariera.cz/pruvodce-pro-sportovce-krok-po-kroku/

**Kontaktní stránky:**
8. ✅ https://www.sportovci-kariera.cz/bcd31-contact-us/
9. ✅ https://www.sportovci-kariera.cz/contact/

**WordPress author & search:**
10. ✅ https://www.sportovci-kariera.cz/author/famil/
11. ✅ https://www.sportovci-kariera.cz/search/sportovci/

**Feed URLs (410 Gone):**
12. ✅ https://www.sportovci-kariera.cz/feed/
13. ✅ https://www.sportovci-kariera.cz/category/marketing/feed/

---

## 🚀 NASAZENÍ

1. Nahraj `.htaccess` na server přes FTP
2. Ujisti se, že `mod_rewrite` je povolený na serveru
3. Vyčkej 24-48 hodin na reindexaci Google
4. Sleduj Google Search Console → Coverage → Redirected

---

## 📝 POZNÁMKY

- Všechny redirecty jsou **301 (Permanent)** - to znamená, že Google přenese SEO hodnotu ze staré URL na novou
- Trailing slash (`/`) je zachycen pomocí `/?$` regulárního výrazu
- Redirecty jsou seřazeny od nejspecifičtějších po nejobecnější
- ErrorDocument 404 je nastaven na `/404.html`

---

**Poslední aktualizace:** 22. prosince 2025
**Vytvořeno pro:** sportovci-kariera.cz
