# 🏒 Kariéra sportovců - Website

Kompletní statický website pro kariérové poradenství sportovců.

## 📁 Struktura projektu

```
sportovci-kariera/
├── index.html                 # Homepage
├── kontakt.html              # Kontaktní stránka
├── o-mne.html                # O mně (Famil Beer)
├── bronzovy-program.html     # Bronze program (499 Kč)
├── stribrny-program.html     # Silver program (1 490 Kč)
├── zlaty-program.html        # Gold program (2 999 Kč)
├── images/                   # Složka s obrázky
│   ├── famil-gym.jpg
│   └── famil-portrait.jpg
└── README.md                 # Tento soubor
```

---

## 🚀 NÁVOD: Jak nahrát na GitHub

### Krok 1: Vytvoř GitHub repository

1. Jdi na https://github.com/new
2. Název repository: `sportovci-kariera` (nebo jiný)
3. Nastav na **Public**
4. **NEZAŠKRTÁVEJ** "Add README" (už máš)
5. Klikni **Create repository**

### Krok 2: Nahraj soubory (jednoduché - přes webové rozhraní)

**Varianta A: Přes webové rozhraní (JEDNODUŠŠÍ)**

1. V GitHub repository klikni na **Add file** → **Upload files**
2. Přetáhni tam všechny soubory + složku `images/`
3. Napiš commit message: "Initial website upload"
4. Klikni **Commit changes**

**Varianta B: Přes Git (pokud máš Git nainstalovaný)**

```bash
# V této složce spusť:
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/USERNAME/sportovci-kariera.git
git push -u origin main
```

---

## 🌐 NÁVOD: Jak nahrát na webhosting.cz

M�š hosting na **sportovci-kariera.cz**, takže postupuj takto:

### Krok 1: Připoj se k FTP

1. Otevři FTP klienta (např. **FileZilla** - zdarma)
2. Stáhni FileZilla: https://filezilla-project.org/
3. Přihlas se pomocí údajů z webhostingu:
   - **Host**: ftp.sportovci-kariera.cz (nebo IP z webhostingu)
   - **Username**: tvoje_uzivatelske_jmeno
   - **Password**: tvoje_heslo
   - **Port**: 21

### Krok 2: Najdi správnou složku

- Na serveru najdi složku **public_html** nebo **www**
- To je root složka tvého webu

### Krok 3: Nahraj soubory

1. **SMAZAT starý WordPress:** V `public_html` smaž všechny staré soubory
2. **Nahrát nové soubory:**
   - Přetáhni všechny `.html` soubory do `public_html`
   - Přetáhni složku `images/` do `public_html`

### Výsledná struktura na serveru:

```
public_html/
├── index.html
├── kontakt.html
├── o-mne.html
├── bronzovy-program.html
├── stribrny-program.html
├── zlaty-program.html
└── images/
    ├── famil-gym.jpg
    └── famil-portrait.jpg
```

### Krok 4: Testuj

- Otevři https://sportovci-kariera.cz
- Měl by se zobrazit nový web!

---

## ✅ SEO CHECKLIST

### Meta tagy (✅ HOTOVO)
- [x] Title na každé stránce
- [x] Description na každé stránce
- [x] Canonical URL
- [x] Open Graph tagy (pro sociální sítě)

### Obrázky (✅ HOTOVO)
- [x] Alt texty na všech obrázcích
- [x] Optimalizované názvy souborů
- [x] Lazy loading (`loading="lazy"`)

### Odkazy (✅ HOTOVO)
- [x] Všechny interní odkazy fungují
- [x] Externí odkazy mají `rel="noopener noreferrer"`
- [x] Smooth scroll pro anchor links

### Technické (✅ HOTOVO)
- [x] Responsive design (mobil-ready)
- [x] Rychlé načítání
- [x] Validní HTML5
- [x] Accessibility (ARIA labels, sémantické tagy)

---

## 📊 Google Analytics & Search Console

### Google Analytics (doporučuji přidat)

1. Jdi na https://analytics.google.com
2. Vytvoř nový property pro sportovci-kariera.cz
3. Zkopíruj Google Analytics kód
4. Přidej ho do `<head>` každé HTML stránky (před </head>)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Jdi na https://search.google.com/search-console
2. Přidej property: `sportovci-kariera.cz`
3. Ověř vlastnictví (přes HTML tag nebo soubor)
4. Počkej pár dní na indexaci

---

## 🔧 Úpravy webu

### Jak upravit obsah?

1. Otevři HTML soubor v textovém editoru (VS Code, Notepad++, ...)
2. Najdi sekci, kterou chceš upravit
3. Změň text
4. Ulož soubor
5. Nahraj znovu na FTP (přepiš starý soubor)

### Jak přidat více fotek?

1. Nahraj novou fotku do složky `images/`
2. V HTML použij: `<img src="images/nova-fotka.jpg" alt="Popis">`

---

## 📱 Testování

### Otestuj na:
- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Mobil (iOS, Android)
- ✅ Tablet

### Nástroje na testování:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **HTML Validator**: https://validator.w3.org/

---

## 🆘 Časté problémy

### Fotky se nezobrazují
- **Problém**: Špatná cesta k obrázkům
- **Řešení**: Zkontroluj, že složka `images/` je správně nahraná

### Odkazy nefungují
- **Problém**: Špatné linky mezi stránkami
- **Řešení**: Všechny odkazy by měly být relativní (např. `kontakt.html`)

### Web se nezobrazuje
- **Problém**: Soubory nejsou v `public_html`
- **Řešení**: Přesuň všechny soubory přímo do `public_html/`

---

## 📞 Kontakty

- **Email**: k.poradenstvi7@gmail.com
- **Instagram**: @karierove_poradenstvi
- **Web**: https://sportovci-kariera.cz

---

## 📄 Licence

© 2024 Kariéra sportovců - Všechna práva vyhrazena
