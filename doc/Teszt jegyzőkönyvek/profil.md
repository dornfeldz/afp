# Tesztjegyzőkönyv

## Projekt: TastyGo webalkalmazás  
**Tesztelő:** Juhász Péter  
**Operációs rendszer:** Windows 10  
**Böngésző:** Google Chrome  
**Teszt dátuma:** 2024.12.06  
**Talált hibák száma:** 0  

---

## Tesztelési forgatókönyv: Profil gomb és profiloldal tesztelése

### 1. Kezdőlépés: Oldal megnyitása  
**Lépések:**  
1. Böngészőben megnyitottuk az URL-t: https://afp-tastygo.vercel.app.  
2. Bejelentkeztünk egy érvényes fiókkal (pl. felhasználónév és jelszó megadásával).  

**Ellenőrzés:**  
- Az oldal betöltődött, és a főoldalon a "Profile" gomb megjelent a fejléc jobb felső sarkában.  

---

### 2. Profil gomb működésének tesztelése  
**Lépések:**  
1. Rákattintottunk a "Profile" gombra.  
2. Az oldal átirányított a profiloldalra (URL: https://afp-tastygo.vercel.app/profile).  

**Ellenőrzés:**  
- A profiloldal megfelelően betöltődött.  
- Az oldalon megjelentek a következő mintaadatok:  
  - Név: John Doe  
  - E-mail: john.doe@example.com  
  - Szállítási cím: 123 Main St, San Francisco, CA 94105  
- Minden adat mellett megjelent egy "Edit" gomb.  

---

### 3. Profiladatok szerkesztése  
**Lépések:**  
1. A "Name" melletti "Edit" gombra kattintottunk.  
2. A "Name" mező szerkeszthetővé vált.  
3. Megváltoztattuk a nevet "John Doe"-ról "Jane Doe"-ra.  
4. A változtatás után rákattintottunk a "Save" gombra.  

**Ellenőrzés:**  
- A rendszer egy értesítést jelenített meg: "Name updated!"  
- A névmező frissült, és a módosított érték ("Jane Doe") láthatóvá vált.  

---

### 4. További adatok tesztelése  
**Lépések:**  
1. Az "Email" melletti "Edit" gombra kattintottunk.  
2. Az e-mail mező szerkeszthetővé vált.  
3. Módosítottuk az e-mail címet egy másik érvényes e-mail címre, majd a "Save" gombra kattintottunk.  

**Ellenőrzés:**  
- Az értesítés helyesen megjelent: "Email updated!"  
- Az új e-mail cím megjelent az oldalon.  

---

### Megjegyzés
Az oldal nem a felhasználó valódi adatait jeleníti meg, hanem mintaadatokat (például: John Doe, john.doe@example.com). Ez nem befolyásolja a profiloldal funkcionalitását.

---

### Tesztelés eredménye  
A profiloldal funkciói hibamentesen működnek:  
- Az "Edit" és "Save" gombok megfelelően reagálnak.  
- A rendszer értesítései egyértelműek és informatívak.  
- Az adatok módosítása azonnal frissül a felületen.  

**Talált hibák száma:** 0  