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

## 1.2 Projektszerepkörök és felelősségek

**Frontend fejlesztés:** Dornfeld Zoltán  
Felelős a felhasználói felület megtervezéséért és implementálásáért, beleértve a reszponzív design elemeinek kidolgozását.

**Tesztelés és bejelentkezési (login) funkciók:** Juhász Péter  
Feladata a rendszer funkcionális és nem funkcionális tesztjeinek elvégzése, valamint a biztonságos és felhasználóbarát bejelentkezési modul kidolgozása.

**Backend fejlesztés:** Egri Milán  
Felelős a szerveroldali logika, az API-k és az adatkezelési folyamatok implementálásáért.

**Adatbázis modell és adatbázis fejlesztés:** Haskó Sándor  
Felelős az adatbázis struktúrájának tervezéséért, az adatok tárolásáért, valamint a hatékony lekérdezések biztosításáért.

**Product Ownerek:** A csapat tagjai közösen (Dornfeld Zoltán, Juhász Péter, Egri Milán, Haskó Sándor)  
Feladatunk volt a Product Backlog összeállítása, a prioritások meghatározása és az üzleti értékkel rendelkező felhasználói sztorik kidolgozása.

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

## 10. Monitoring és karbantartás
- **Monitoring eszközök:**
  - New Relic teljesítmény monitorozására.
  - Logok gyűjtése és elemzése (pl. Elasticsearch és Kibana).
- **Karbantartási terv:**
  - Havonta egyszer tervezett karbantartás.
  - Vészhelyzeti hibajavítások SLA-val meghatározva

## 11. Ütemterv

| Funkció / Story          | Feladat / Task                | Prioritás | Becslés | Aktuális becslés | Eltelt idő | Hátralévő idő |
|--------------------------|-------------------------------|-----------|---------|------------------|------------|---------------|
| Követelmény specifikáció |                               | 0         | 12      | 12               | 12         | 0             |
| Funkcionális specifikáció|                               | 0         | 12      | 12               | 12         | 0             |
| Rendszerterv             |                               | 0         | 16      | 16               | 8          | 8             |
| Adattárolás              | Adatmodell megtervezése      | 0         | 4       | 4                | 4          | 0             |
| Adattárolás              | Adatbázis megvalósítása      | 1         | 1       | 1                | 0          | 1             |
| Website                  | Képernyőtervek elkészítése   | 2         | 8       | 8                | 0          | 8             |
| Website                  | Prototípus elkészítése       | 2         | 8       | 8                | 0          | 8             |
| Website                  | Adatbázis létrehozása        | 2         | 8       | 8                | 0          | 8             |
| Website                  | Menüstruktúra elkészítése    | 2         | 8       | 8                | 0          | 8             |
| Honlap                   | Kezdőlap funkciók elkészítése| 2         | 8       | 8                | 0          | 8             |
| Honlap                   | Login funkció megvalósítása  | 2         | 8       | 8                | 0          | 8             |
| Website                  | Tesztelés                   | 2         | 16      | 16               | 0          | 16            |
