# Rendszerspecifikáció – TastyGo weboldal

## 1. Rendszer leírása
Az elkészítendő rendszer egy ételrendelési platform, amely lehetővé teszi a felhasználók számára, hogy kényelmesen rendeljenek ételeket helyi éttermekből. A platform fő funkciói a következők:

- **Felhasználói autentikáció:** Bejelentkezés és regisztráció.
- **Felhasználói típusok:** A rendszer három fő felhasználói csoportot szolgál ki: vásárlók, éttermek és adminisztrátorok.
- **Főoldal:** Az éttermek kategória szerinti listázása.
- **Étlapok megjelenítése:** Az éttermek által kínált ételek áttekintése.
- **Rendelés leadása:** Kosárkezelés és rendelések leadása több éttermől is.
- **Rendelés visszaigazolása:** A leadott rendelések állapotának nyomon követése.

A rendszer egy webes platformot biztosít, amely elérhető mobilböngészőben és asztali gépeken keresztül.

## 2. Rendszer célja
Az ételrendelési rendszer célja, hogy:

- Megkönnyítse a felhasználók ételrendelési folyamatait.
- Támogassa az éttermeket az online rendelések kezelésében.
- Egyszerű és áttekinthető felületet biztosítson mind a felhasználók, mind az adminisztrátorok számára.
- **Ügyfélélmény javítása:** Egy egyszerű, gyors és intuitív platform biztosítása az ételrendeléshez.
- **Átlátható árak:** A rendszer biztosítja az árak, akciók és kedvezmények pontos megjelenítését.
- **Helyi közösség támogatása:** Lehetővé teszi kisebb éttermek számára az online jelenlét megerősítését.

## 3. Rendszerterv

### Technológiai alapok
- **Frontend:** React keretrendszer.
- **Backend:** Express.js.
- **Adatbázis:** MongoDB.

### Fő funkcionális modulok
- **Felhasználói autentikáció**
  - Regisztráció felhasználónév, email és jelszó alapján.
  - Bejelentkezés és kijelentkezés.
  - Felhasználói profilok kezelése.
- **Étterem kezelés**
  - Éttermek és kategóriáik megjelenítése a főoldalon.
  - Egyedi étlapok megtekintése.
- **Rendelés folyamat**
  - Kosárkezelés több éttermől.
  - Rendelés leadása.

## 4. Időpontok
- **Projektkezdet:** 2024. december 1.
- **Első működő verzió:** 2024. december 20.
- **Végleges bevezetés:** 2025. január 4.

## 5. Erőforrások
- **Csapat létszáma:** 4 fő.
- **Verziókövető rendszer:** GitHub
- **Projekt menedzsment:** Trello
- **Technológiai eszközök:** Ingyenes keretrendszerek és könyvtárak (React, Express.js, MongoDB).
- **Munkaidő:** Heti 40 óra / csapattag.

## 6. Jövőbeli fejlesztések
- **Mobilalkalmazás:** Natív mobilalkalmazás fejlesztése.
- **Többnyelvűség:** Támogatás több nyelven, kezdve angollal.
- **Globális piac:** Terjeszkedés nemzetközi piacokra.
- **Promóciók:** Akciók és kedvezmények kezelése.
- **Szupermarket kiszállítás:** Bővítés az élelmiszerboltok kínálatával.

## 7. Rendszerbiztonság és adatvédelem
- **Adatvédelem:** Az alkalmazás megfelel az Európai Unió Általános Adatvédelmi Rendeletének (GDPR).
- **Biztonsági intézkedések:**
  - HTTPS protokoll minden adatátvitelhez.
  - Felhasználói adatok titkosítása a MongoDB-ben.
  - Kétlépcsős hitelesítés opcionális lehetőségként.
  - Szerepköralapú hozzáférés-szabályozás.

## 8. Tesztelési stratégia
- **Egységtesztek:**
  - React komponensek egységtesztjei Jest és React Testing Library segítségével.
  - Backend API egységtesztjei Mocha vagy Jest keretrendszerrel.
- **Integrációs tesztek:**
  - Frontend és backend közötti kommunikáció ellenőrzése.
  - Kosárkezelés és rendelési folyamat tesztelése.
- **Felhasználói tesztek:**
  - Beta-tesztelés kiválasztott felhasználókkal.
  - Hibabejelentési és javítási folyamat.

## 9. Dokumentáció
- **Fejlesztői dokumentáció:** API végpontok és adatbázismodell leírása.
- **Felhasználói kézikönyv:** Útmutató képekkel és lépésekkel.
- **Adminisztrációs kézikönyv:** Adminisztrátori funkciók leírása.
