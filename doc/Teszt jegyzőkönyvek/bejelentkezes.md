# Tesztjegyzőkönyv

**Projekt**: TastyGo webalkalmazás  
**Tesztelő**: Juhász Péter  
**Operációs rendszer**: Windows 10  
**Böngésző**: Google Chrome  
**Teszt dátuma**: 2024.12.06  
**Talált hibák száma**: 0  

---

## Tesztelési forgatókönyv: Bejelentkezés funkció tesztelése

### 1. Kezdőlépés: Oldal megnyitása
- **Lépések**:
  1. Böngészőben megnyitottuk az URL-t: [https://afp-tastygo.vercel.app/login](https://afp-tastygo.vercel.app/login).
  2. Az oldal betöltődött, és megjelent a bejelentkezési felület.

- **Ellenőrzés**:
  - A bejelentkezési űrlap megfelelően megjelenik.
  - Látható mezők:
    - Felhasználónév és e-mail mező.
    - Jelszó mező.
    - Bejelentkezés gomb.

---

### 2. Bejelentkezési adatok megadása
- **Lépések**:
  1. A "Felhasználónév/E-mail" mezőbe beírtuk: `peti/tesztfelhasznalo@example.com`.
  2. A "Jelszó" mezőbe beírtuk: `tesztjelszo123`.
  3. Rákattintottunk a "Bejelentkezés" gombra.

- **Ellenőrzés**:
  - A rendszer feldolgozza az adatokat.
  - Amennyiben a hitelesítés sikeres, az oldal átirányít a főoldalra.

---

### 3. Bejelentkezés utáni állapot
- **Lépések**:
  1. Sikeres bejelentkezés után a felhasználó a következő képernyőre érkezett:
     - Megjelent egy kijelentkezés gomb.
     - A főoldal, illetve egyéb navigációs opciók (pl. éttermek keresése, kosár) elérhetővé váltak.

- **Ellenőrzés**:
  - A bejelentkezett felhasználói felület hibamentesen működik.
  - Az oldal megfelelően reagál az interakciókra, például a navigációra az oldalon belül.