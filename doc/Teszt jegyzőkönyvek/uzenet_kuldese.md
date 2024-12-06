# Tesztjegyzőkönyv

**Projekt**: TastyGo webalkalmazás  
**Tesztelő**: Juhász Péter  
**Operációs rendszer**: Windows 10  
**Böngésző**: Google Chrome  
**Teszt dátuma**: 2024.12.06  
**Talált hibák száma**: 1  

---

## Tesztelési forgatókönyv: "Kapcsolatfelvétel" űrlap tesztelése

### 1. Kezdőlépés: Oldal megnyitása

**Lépések**:
1. Böngészőben megnyitottuk az URL-t: [https://afp-tastygo.vercel.app/contact](https://afp-tastygo.vercel.app/contact).
2. Az oldal betöltődött, és megjelent a kapcsolatfelvételi űrlap.

**Ellenőrzés**:
- Az oldal megfelelően megjeleníti a kapcsolatfelvételi űrlapot.
- Látható mezők:
  - **Név mező**.
  - **E-mail mező**.
  - **Üzenet mező**.
  - **"Send Message"** gomb.

---

### 2. Az űrlap kitöltése és elküldése

**Lépések**:
1. Kitöltöttük az űrlapot:
   - **Név**: "Teszt Felhasználó".
   - **E-mail**: "teszt@tastygo.com".
   - **Üzenet**: "Ez egy tesztüzenet."
2. A "Send Message" gombra kattintottunk.

**Eredmény**:
- Az űrlap elküldése helyett a rendszer egy általános hibaüzenetet jelenít meg.
- Az elküldés sikertelen volt, és nem történt visszajelzés az üzenet sikeres feldolgozásáról.

---

## Tesztelés eredménye

- A kapcsolatfelvételi űrlap alapvetően hibamentesen működik:
  - A mezők validációja megfelelő:
    - Kötelező mezők ellenőrzése.
    - E-mail formátum ellenőrzése.
  - A rendszer figyelmeztetései egyértelműek és felhasználóbarátok.
- Azonban az üzenet elküldése után a rendszer hibát jelez, ami megakadályozza az üzenet továbbítását.

---

## Talált hiba részletei

- **Hiba típusa**: Az üzenet küldése sikertelen.
- **Reprodukálható**: Igen, minden elküldési kísérletnél azonos hiba jelenik meg.
- **Hatás**: A felhasználók nem tudják elküldeni az üzenetüket a kapcsolatfelvételi űrlapon keresztül.

---

## Tesztjegyzőkönyv összefoglalása

A kapcsolatfelvételi űrlap hibamentesen működik az adatok kitöltéséig. A mezők validációja megfelelő, és a rendszer figyelmeztetései egyértelműek. Azonban az üzenet elküldése sikertelen, ami akadályozza a kapcsolatfelvételt.

**Talált hibák száma**: 1  
**Javaslatok**: Vizsgálja meg a kapcsolatfelvételi űrlap backend oldalát, különös tekintettel a küldés feldolgozási logikájára, és javítsa a hibát.