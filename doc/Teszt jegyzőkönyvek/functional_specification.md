
# Funkcionális Specifikáció a TastyGo Online Food Ordering Platform számára

---

## Jelenlegi helyzet leírása
A modern fogyasztók elvárják, hogy ételeiket gyorsan, kényelmesen és online rendelés útján érjék el. A piacon több ételrendelési platform található, azonban ezek gyakran nem teszik lehetővé az egyidejű rendelést több étteremből. Továbbá a felhasználói élmény nem mindig intuitív, és a megrendelés követése sem átlátható. Jelenleg a vállalat nem rendelkezik saját online platformmal, amely megfelelne ezeknek az igényeknek.

---

## Vágyálom rendszer leírása
A TastyGo platform egy modern, gyors és felhasználóbarát online ételrendelő rendszer lesz, amely lehetővé teszi a felhasználók számára, hogy:
- Regisztráljanak és bejelentkezzenek saját profiljukba.
- Böngésszék a különféle éttermek listáját kategóriák szerint.
- Rendeléseket adjanak le egyszerre több étteremből.
- Rendeléseiket valós időben nyomon követhessék.
- Használati feltételeket és adatvédelmi irányelveket átláthatóan érjenek el.
- Részletes információkat kapjanak az éttermekről, beleértve az étlapokat és képeket.

---

## A rendszerre vonatkozó törvények, szabályozások és szabványok
- GDPR (General Data Protection Regulation): Az adatvédelmi szabályok betartása.
- E-kereskedelmi törvények: Online tranzakciók és vásárlói jogok szabályozása.
- Webes szabványok (W3C): A weboldal elérhetőségének biztosítása minden eszközön.

---

## Jelenlegi üzleti folyamatok modellje
Jelenleg a rendeléseket telefonon vagy személyesen fogadják, ami:
- Lassú és manuális adatfeldolgozást igényel.
- Növeli a hibák kockázatát.
- Limitálja az elérhetőséget csak az éttermek nyitvatartási idejére.

---

## Igényelt üzleti folyamatok modellje
- **Automatizált rendelésfeldolgozás**: A rendszer automatikusan összegyűjti és továbbítja a rendeléseket az érintett éttermeknek.
- **Felhasználói profilok kezelése**: Minden felhasználó nyomon követheti rendeléseit és elérheti korábbi rendeléseit.
- **Valós idejű rendeléskövetés**: A felhasználók tájékozódhatnak rendelésük státuszáról.

---

## Követelménylista
1. **Felhasználói regisztráció és bejelentkezés** (Google hitelesítéssel is).
2. **Éttermek listázása** kategóriák szerint.
3. **Éttermek adatlapjának megtekintése** (részletek, menük, képek).
4. **Kosár kezelése**: Több étterem ételeinek összegyűjtése egy rendelésben.
5. **Rendelés leadása**: Egyedi azonosító generálása.
6. **Rendelés nyomon követése**.
7. **Adatvédelmi irányelvek és felhasználási feltételek oldalak elérése**.

---

## Használati esetek

### Use Case 1: Felhasználói regisztráció
**Szereplők**: Felhasználó  
**Leírás**: A felhasználó regisztrál a platformra, megadva nevét, email címét és jelszavát, vagy használja Google hitelesítését.  
**Forgatókönyv**:
1. A felhasználó megnyitja a regisztrációs oldalt.
2. Kitölti az űrlapot, vagy Google-fiókjával jelentkezik be.
3. A rendszer ellenőrzi az adatokat és elmenti azokat az adatbázisban.

### Use Case 2: Éttermek böngészése
**Szereplők**: Felhasználó  
**Leírás**: A felhasználó böngészi az éttermek listáját kategóriák szerint.  
**Forgatókönyv**:
1. A felhasználó rákattint az "Étterem keresése" menüpontra.
2. Kategóriák alapján szűr vagy kulcsszóval keres.
3. Az éttermek listája megjelenik a kívánt szűrő szerint.

---

## Képernyőtervek
1. **Bejelentkezési képernyő**: Egyszerű űrlap email/jelszó mezőkkel és Google hitelesítési opcióval.
2. **Főoldal**: Éttermek listája, kategóriák és keresősáv.
3. **Kosár oldala**: A felhasználó által kiválasztott ételek megjelenítése.
4. **Rendelés státusz oldala**: Valós idejű információ a rendelés állapotáról.

---

## Forgatókönyvek

### Forgatókönyv 1: Sikeres rendelés leadása
1. A felhasználó hozzáadja az ételeket a kosárhoz.
2. Rákattint a "Rendelés leadása" gombra.
3. A rendszer feldolgozza a rendelést és egyedi azonosítót generál.
4. A felhasználó értesítést kap a sikeres rendelésről.

---

## Funkció – követelmény megfeleltetés

| Követelmény                | Funkció                                       |
|----------------------------|-----------------------------------------------|
| Felhasználói regisztráció  | Regisztrációs oldal, Google hitelesítés       |
| Éttermek listázása         | Főoldali étteremlista, szűrők és keresőmező   |
| Kosár kezelése             | Kosár funkció, ételek hozzáadása és eltávolítása |
| Rendelés leadása           | Egyedi rendelésazonosító generálása          |

---

## Fogalomszótár
- **Kosár**: A felhasználó által kiválasztott ételek gyűjtőhelye.
- **Rendelésazonosító**: Egyedi azonosító, amely az egyes rendelések nyomon követésére szolgál.
- **Kategóriák**: Az éttermek csoportosítása (pl. pizzériák, sushi éttermek).

---
