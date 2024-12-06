# Tesztjegyzőkönyv

**Projekt**: TastyGo webalkalmazás  
**Tesztelő**: Juhász Péter  
**Operációs rendszer**: Windows 10  
**Böngésző**: Google Chrome  
**Teszt dátuma**: 2024.12.06  
**Talált hibák száma**: 1  

---

## Tesztelési forgatókönyv: Alsó menüsor és "Career" oldal tesztelése

### 1. Kezdőlépés: Oldal megnyitása

**Lépések**:
1. Böngészőben megnyitottuk az URL-t: [https://afp-tastygo.vercel.app](https://afp-tastygo.vercel.app).
2. Az oldal betöltődött, és az alsó menüsor minden opciója elérhetővé vált.

**Ellenőrzés**:
- Az alsó menüsor megfelelően megjelenik.
- Látható opciók:
  - Contact
  - For Customers
  - For Delivery Staff
  - Terms and Conditions
  - Privacy Policy
  - Career

---

### 2. Menüpontok tesztelése

**Lépések**:
1. Az alsó menüsor minden egyes menüpontjára rákattintottunk.
2. Ellenőriztük, hogy a kapcsolódó oldalak megfelelően betöltődnek.

**Ellenőrzés**:
- Minden menüpont (Contact, For Customers, For Delivery Staff stb.) oldala hibamentesen betöltődik.

---

### 3. "Career" oldal tesztelése

**Lépések**:
1. Az alsó menüsor "Career" menüpontjára kattintottunk.
2. Az oldal betöltődött, és a munkalehetőségek listája megjelent:
   - Frontend Developer
   - Delivery Driver
   - Marketing Specialist
3. Az "Apply Now" gombra kattintottunk minden pozíció esetében.

**Eredmény**:
- Az "Apply Now" gombra kattintva nem történt semmilyen művelet vagy visszajelzés egyik pozíciónál sem.

---

## Tesztelés eredménye

- Az alsó menüsor minden menüpontja hibamentesen működik, és az oldalak megfelelően betöltődnek.  
- A "Career" oldalon megjelenő munkalehetőségek listája megfelelően látható, de az "Apply Now" gomb nem reagál a felhasználói interakciókra.

---

## Talált hiba részletei

- **Hiba típusa**: A "Career" oldalon az "Apply Now" gomb nem reagál.  
- **Reprodukálható**: Igen, minden kattintásnál azonos hiba tapasztalható.  
- **Hatás**: A felhasználók nem tudnak jelentkezni a meghirdetett pozíciókra a weboldalon keresztül.

---

## Tesztjegyzőkönyv összefoglalása

- Az alsó menüsor funkciói hibamentesen működnek.  
- A "Career" oldalon megjelenő munkalehetőségek listája megfelelően látható, de az "Apply Now" gomb nem reagál a felhasználói interakciókra.  

**Talált hibák száma**: 1  
**Javaslatok**: Vizsgálja meg a "Career" oldalon az "Apply Now" gomb működését, és javítsa a kattintásra adott reakciót, hogy lehetővé váljon a jelentkezési folyamat.