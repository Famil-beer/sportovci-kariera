# Firebase Setup - Návod na nastavení

Tento návod tě provede kompletním nastavením Firebase pro přihlašovací systém a databázi uživatelů.

---

## 1. Vytvoření Firebase projektu

### Krok 1: Přejdi na Firebase Console
1. Otevři [Firebase Console](https://console.firebase.google.com)
2. Přihlas se pomocí Google účtu

### Krok 2: Vytvoř nový projekt
1. Klikni na **"Add project"** (Přidat projekt)
2. Zadej název projektu: `sportovci-kariera` (nebo vlastní název)
3. Klikni **"Continue"**

### Krok 3: Konfigurace projektu
1. **Google Analytics**: Můžeš vypnout (není potřeba pro tento projekt), nebo nechat zapnuté
2. Pokud necháš zapnuté Analytics:
   - Vyber **Default Account for Firebase** nebo vytvoř nový
3. Klikni **"Create project"**
4. Počkej, než se projekt vytvoří (zabere cca 30 sekund)
5. Klikni **"Continue"**

---

## 2. Přidání webové aplikace

### Krok 1: Registrace webové aplikace
1. V přehledu projektu klikni na **ikonu web** `</>`
2. Zadej název aplikace: `sportovci-kariera-web`
3. **Firebase Hosting**: Nezaškrtávej (nepoužíváme)
4. Klikni **"Register app"**

### Krok 2: Zkopíruj Firebase konfiguraci
1. Zobrazí se ti **Firebase SDK konfigurace**:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "sportovci-kariera.firebaseapp.com",
  projectId: "sportovci-kariera",
  storageBucket: "sportovci-kariera.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

2. **DŮLEŽITÉ**: Zkopíruj si tuto konfiguraci – budeš ji potřebovat!
3. Klikni **"Continue to console"**

---

## 3. Aktivace Firebase Authentication

### Krok 1: Přejdi do Authentication
1. V levém menu klikni na **"Authentication"**
2. Klikni na **"Get started"**

### Krok 2: Aktivuj Email/Password přihlášení
1. Přejdi na záložku **"Sign-in method"**
2. V seznamu **"Sign-in providers"** najdi **"Email/Password"**
3. Klikni na řádek **"Email/Password"**
4. Přepni **Enable** (Povolit) na **ON** (zapnuto)
5. **Email link (passwordless sign-in)**: Nech **vypnuté**
6. Klikni **"Save"**

✅ **Hotovo!** Email/Password authentication je aktivní.

---

## 4. Vytvoření Firestore databáze

### Krok 1: Přejdi do Firestore Database
1. V levém menu klikni na **"Firestore Database"**
2. Klikni na **"Create database"**

### Krok 2: Vyber lokaci
1. **Location**: Vyber `europe-west3 (Frankfurt)` (nejblíže k ČR)
2. Klikni **"Next"**

### Krok 3: Nastav Security Rules
1. Vyber **"Start in production mode"** (bezpečnější)
2. Klikni **"Create"**
3. Počkej, než se databáze vytvoří (cca 30-60 sekund)

### Krok 4: Nastav Security Rules pro uživatele
1. Přejdi na záložku **"Rules"**
2. **Nahraď** stávající pravidla tímto kódem:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - každý uživatel může číst a zapisovat jen svoje data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Všechno ostatní zakázáno
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Klikni **"Publish"**

✅ **Hotovo!** Firestore databáze je připravená.

---

## 5. Integrace Firebase do HTML souborů

Teď musíš zkopírovat Firebase konfiguraci do svých HTML souborů.

### Soubory, které je třeba upravit:
- `prihlaseni.html`
- `member.html`
- `test.html`

### Postup:
1. Otevři každý z těchto souborů
2. Najdi sekci s Firebase konfigurací (hledej `firebaseConfig`):

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. **Nahraď** placeholder hodnoty (`YOUR_API_KEY` atd.) svými skutečnými hodnotami z **Kroku 2**

### Kde najdeš Firebase konfiguraci později:
1. V Firebase Console přejdi do **Project Settings** (ikona ozubeného kola)
2. Scrolluj dolů na **"Your apps"**
3. Vyber svou webovou aplikaci
4. Uvidíš **Firebase SDK snippet** → vyber **"Config"**

---

## 6. Testování

### Test registrace:
1. Otevři `prihlaseni.html` v prohlížeči
2. Klikni na záložku **"Registrace"**
3. Vyplň testovací údaje:
   - Jméno: `Jan`
   - Příjmení: `Novák`
   - Email: `test@example.com`
   - Heslo: `testovaci123`
4. Klikni **"Zaregistrovat se"**

### Ověření v Firebase Console:
1. Přejdi do **Authentication** → záložka **"Users"**
2. Měl bys vidět nově vytvořeného uživatele s emailem `test@example.com`
3. Přejdi do **Firestore Database** → záložka **"Data"**
4. Měl bys vidět kolekci `users` → dokument s ID uživatele
5. Dokument obsahuje: `firstName`, `lastName`, `email`, `createdAt`

✅ **Pokud vidíš uživatele v obou místech, vše funguje správně!**

---

## 7. Zabezpečení a doporučení

### ✅ Co je dobré udělat:

1. **Omezení domén (Authorized domains)**:
   - Přejdi do **Authentication** → záložka **"Settings"**
   - Sekce **"Authorized domains"**
   - Přidej svou doménu `sportovci-kariera.cz`
   - Odstraň `localhost` v produkci

2. **Email templates**:
   - Přejdi do **Authentication** → záložka **"Templates"**
   - Přizpůsob šablony pro:
     - **Password reset** (Obnovení hesla)
     - **Email address verification** (Ověření emailu)
   - Změň **sender name** na "Kariéra sportovců"

3. **Quota & Usage**:
   - Bezplatný plán (Spark) umožňuje:
     - 50,000 autentizací/měsíc
     - 20,000 čtení, 20,000 zápisu do Firestore/den
   - Pro více uživatelů upgraduj na **Blaze plan** (pay-as-you-go)

### 🔒 Bezpečnostní tipy:

1. **Nikdy nezveřejňuj** Firebase konfiguraci na GitHubu (pokud používáš verzování)
2. **Používej HTTPS** vždy (Firebase vyžaduje)
3. **Firestore Security Rules** jsou kritické – nikdy nenech databázi otevřenou!
4. **Pravidelně kontroluj** uživatele v Authentication sekci

---

## 8. Běžné problémy a řešení

### Problém: "Firebase: Error (auth/unauthorized-domain)"
**Řešení**: Přidej svou doménu do **Authorized domains** v Authentication → Settings

### Problém: "Missing or insufficient permissions"
**Řešení**: Zkontroluj **Firestore Security Rules** – ujisti se, že uživatelé mají přístup k `users/{userId}`

### Problém: Uživatel se registruje, ale data se neukládají do Firestore
**Řešení**:
- Zkontroluj browser konzoli (F12) na chyby
- Ověř, že Firestore Database je vytvořená
- Ověř, že Security Rules povolují zápis

### Problém: "Firebase: Error (auth/weak-password)"
**Řešení**: Firebase vyžaduje minimálně **6 znaků** pro heslo (náš formulář vyžaduje 8)

---

## 9. Užitečné odkazy

- 📚 [Firebase Documentation](https://firebase.google.com/docs)
- 🔐 [Firebase Authentication Guide](https://firebase.google.com/docs/auth)
- 💾 [Firestore Getting Started](https://firebase.google.com/docs/firestore)
- 🛡️ [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- 💬 [Firebase Support](https://firebase.google.com/support)

---

## 10. Podpora

Pokud narazíš na problém:
1. Zkontroluj **browser konzoli** (F12 → Console tab)
2. Zkontroluj **Firebase Console** → Authentication → Users
3. Zkontroluj **Firestore Database** → Data
4. Přečti si error message – Firebase poskytuje velmi detailní chyby

**Kontakt**: info@sportovci-kariera.cz

---

✅ **Hotovo! Firebase je plně nastavený a funkční.**
