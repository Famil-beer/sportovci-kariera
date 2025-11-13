<div align="center">

# 🏆 Kariéra sportovců

**Profesionální kariérní poradenství pro sportovce**

[![Website](https://img.shields.io/badge/Web-sportovci--kariera.cz-blue?style=for-the-badge)](https://sportovci-kariera.cz)
[![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)](https://sportovci-kariera.cz)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

*Pomáháme sportovcům využít jejich dovednosti pro školu, práci a život.*

[Demo](https://sportovci-kariera.cz) • [Dokumentace](#dokumentace) • [Kontakt](#kontakt)

</div>

---

## 📖 O Projektu

**Kariéra sportovců** je webová platforma zaměřená na kariérní poradenství pro aktivní i bývalé sportovce. Pomáháme sportovcům:

- 🎓 Najít správnou školu nebo studijní obor
- 💼 Přejít z aktivní sportovní kariéry do práce
- 🚀 Využít sportovní dovednosti v byznysu
- 🧠 Budovat osobní brand a networking

### 📊 Stats

- **350+** sportovců pomoženo
- **95%** úspěšnost programů
- **Partner** ARTECON Praha (největší sportovní SŠ v ČR)

---

## ✨ Features

### 🎯 Core Features

- ✅ **Interaktivní kvíz** - 10 otázek, 3 personalizované výsledky
- ✅ **Funkční kontaktní formulář** - Formspree integrace
- ✅ **3 cenové programy** - Bronzový, Stříbrný, Zlatý
- ✅ **Testimonials** - Reálné příběhy sportovců
- ✅ **FAQ sekce** - Odpovědi na nejčastější otázky
- ✅ **Social media integrace** - Instagram, YouTube, TikTok

### 🔧 Technical Features

- ⚡ **Pure HTML/CSS/JS** - Žádné frameworky, maximální rychlost
- 📱 **Responzivní design** - Mobile-first approach
- ♿ **WCAG 2.1 compliant** - Accessibility first
- 🔍 **SEO optimalizace** - Structured Data, Open Graph
- 🍪 **GDPR compliant** - Cookie consent
- 🎨 **Modern UI/UX** - Clean, profesionální design

---

## 🚀 Quick Start

### Prerequisities

- Webhosting s FTP přístupem
- SSL certifikát (Let's Encrypt)
- Žádné další závislosti! ✅

### Instalace

```bash
# 1. Klonuj repository
git clone https://github.com/tvuj-username/sportovci-kariera.git

# 2. Otevři složku
cd sportovci-kariera

# 3. Připoj FileZilla a nahraj na server
# - Host: ftp.sportovci-kariera.cz
# - Nahraj všechny soubory do public_html/

# 4. Hotovo! 🎉
```

### Konfiguracja

1. **Formspree:**
   - Zaregistruj se na [formspree.io](https://formspree.io)
   - Vytvoř nový formulář
   - Nahraď `YOUR_FORM_ID` v `kontakt.html`

2. **Google Analytics:**
   - Vytvoř property na [analytics.google.com](https://analytics.google.com)
   - Nahraď `G-XXXXXXXXXX` ve všech HTML souborech

3. **Obrázky:**
   - Nahraj vlastní fotky do `images/` složek
   - Dodržuj struktu a názvy dle `images/README.txt`

---

## 📁 Struktura Projektu

```
sportovci-kariera/
│
├── index.html              # Homepage (kvíz, programy, testimonials)
├── o-mne.html              # O mně (příběh, fotogalerie, hodnoty)
├── kontakt.html            # Kontakt (formulář, trust signals)
│
├── images/                 # Obrázky
│   ├── README.txt          # Návod k fotkám
│   ├── workshops/          # 6 fotek z workshopů
│   ├── contact/            # 4 fotky konzultací
│   └── social/             # 3 fotky pro social karty
│
├── docs/                   # Dokumentace
│   ├── README.md           # Tento soubor
│   ├── QUICK-START.md      # Rychlý start
│   ├── CHANGELOG.md        # Historie změn
│   └── ...
│
└── LICENSE                 # Licence
```

---

## 🎨 Design System

### Barevná Paleta

```css
--primary:       #007BFF  /* Hlavní modrá */
--primary-dark:  #0056b3  /* Tmavší modrá */
--secondary:     #00D9FF  /* Cyan */
--dark:          #0A0E27  /* Téměř černá */
--light:         #F7F9FC  /* Téměř bílá */
--success:       #00E676  /* Zelená */
--warning:       #FFD700  /* Zlatá */
```

### Typography

- **Font:** Inter (Google Fonts)
- **Weights:** 400, 600, 800
- **Scale:** 16px base, 1.25 ratio

### Layout

- **Max width:** 1200px
- **Breakpoint:** 768px (mobile/desktop)
- **Spacing:** 8px base unit

---

## 🔍 SEO

### Meta Tags

✅ Title tags na všech stránkách  
✅ Meta descriptions (155 znaků)  
✅ Open Graph tags  
✅ Canonical URLs  
✅ Alt texty na všech obrázcích  

### Structured Data

```json
{
  "Organization": "Homepage",
  "ContactPage": "Kontakt",
  "FAQPage": "Homepage",
  "Person": "O mně"
}
```

### Performance

- **PageSpeed Score:** 85-95/100
- **First Paint:** ~1.2s
- **Time to Interactive:** ~2.5s

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| IE 11   | -       | ❌ No   |

---

## 🛠️ Tech Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript
- **Forms:** [Formspree](https://formspree.io)
- **Analytics:** Google Analytics
- **Fonts:** Google Fonts (Inter)
- **Hosting:** Any static hosting (Netlify, Vercel, cPanel)

---

## 📊 Analytics & Tracking

### Google Analytics

- Event tracking pro kvíz completion
- Form submission tracking
- CTA button clicks
- Scroll depth tracking

### Formspree Stats

- Dashboard: [formspree.io/forms/movyvdlr](https://formspree.io/forms/movyvdlr)
- 50 submissions/měsíc (Free)
- Email notifikace: info@sportovci-kariera.cz

---

## 🚧 Roadmap

### v1.1 (Tento týden)

- [ ] Vlastní fotky místo placeholders
- [ ] Favicon.ico
- [ ] Skutečné Google Analytics ID
- [ ] Privacy Policy stránka

### v1.2 (Příští měsíc)

- [ ] External CSS/JS (minifikace)
- [ ] WebP obrázky (70% úspora)
- [ ] sitemap.xml
- [ ] robots.txt

### v1.3 (Budoucnost)

- [ ] Blog sekce
- [ ] Video testimonials
- [ ] Live chat (Tawk.to)
- [ ] Exit-intent popup
- [ ] Calendly booking widget

---

## 🤝 Contributing

Příspěvky jsou vítány! Pro větší změny prosím nejdřív otevři issue.

1. Fork projektu
2. Vytvoř feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit změny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branche (`git push origin feature/AmazingFeature`)
5. Otevři Pull Request

---

## 📄 Licence

© 2025 Kariéra sportovců. Všechna práva vyhrazena.

Tento projekt je proprietární software. Není povolen žádný fork, redistribuce nebo komerční použití bez výslovného písemného souhlasu autora.

---

## 📞 Kontakt

**Famil Beer**  
Kariérový poradce pro sportovce  
Bývalý hokejista • 20+ let zkušeností

- 📧 Email: [info@sportovci-kariera.cz](mailto:info@sportovci-kariera.cz)
- 🌐 Web: [sportovci-kariera.cz](https://sportovci-kariera.cz)
- 📷 Instagram: [@karierove_poradenstvi](https://www.instagram.com/karierove_poradenstvi/)
- 🎥 YouTube: [@karierasportovcu](https://www.youtube.com/@karierasportovcu)
- 🎵 TikTok: [@karierasportovcu](https://www.tiktok.com/@karierasportovcu)

---

## 🙏 Poděkování

- [Unsplash](https://unsplash.com) - Placeholder fotky
- [Formspree](https://formspree.io) - Formulář backend
- [Google Fonts](https://fonts.google.com) - Inter font
- [ARTECON Praha](https://artecon.cz) - Partnership

---

## 📈 Stats

![GitHub last commit](https://img.shields.io/github/last-commit/tvuj-username/sportovci-kariera)
![GitHub issues](https://img.shields.io/github/issues/tvuj-username/sportovci-kariera)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fsportovci-kariera.cz)

---

<div align="center">

**[⬆ Zpět nahoru](#-kariéra-sportovců)**

Made with ❤️ for sportovce

</div>
