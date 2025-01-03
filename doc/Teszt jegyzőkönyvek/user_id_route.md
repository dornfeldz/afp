# Tesztjegyzőkönyv

**Projekt**: API endpoint tesztelése – `/user/:id`  
**Tesztelő**: Egri Milán  
**Operációs rendszer**: macOS  
**Eszközök**: Postman, Google Chrome, Safari, Firefox (MacBook Air)  
**Teszt dátuma**: 2025.01.02  
**Endpoint URL**: `/user/:id`  
**HTTP metódus**: GET  

---

## Tesztelési forgatókönyv: `/user/:id` API endpoint tesztelése  

### 1. Kezdőlépés: Környezet ellenőrzése  

**Lépések**:
1. Ellenőrizzük, hogy az adatbázis tartalmazza a teszteléshez szükséges felhasználói adatokat.  
2. Győződjünk meg arról, hogy léteznek érvényes és nem létező `_id` értékek a teszteléshez.  

**Ellenőrzés**:
- Az API kapcsolatot létesít az adatbázissal, és nincs hibajelentés a logban.  

---

### 2. Létező `:id` paraméter tesztelése  

**Lépések**:
1. Válasszunk ki egy létező felhasználói `_id`-t az adatbázisból. Példa `_id`: `"6730a34cd116e2c7d1edf66e"`.  
2. Postman segítségével hívjuk meg az `/user/:id` endpointot a kiválasztott `id`-vel.  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `200`.  
  - Válasz tartalma: Az adott felhasználó adatai JSON formátumban, például:  
    ```json
    {
      "_id": "6730a34cd116e2c7d1edf66e",
      "first_name": "Zoltán",
      "last_name": "Dornfeld",
      "email": "dornfeldz@gmail.com",
      "picture": "https://lh3.googleusercontent.com/a/ACg8ocIP3i_oVp9l6cwDwHv97kxQfn_ZxEfyO7OhJRg78d300IAWCw4iXQ=s96-c",
      "__v": 0
    }
    ```  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 3. Nem létező `:id` paraméter tesztelése  

**Lépések**:
1. Használjunk egy érvényes, de nem létező `_id`-t a teszthez, például: `"000000000000000000000000"`.  
2. Postman segítségével hívjuk meg az `/user/:id` endpointot a nem létező `id`-vel.  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `501`.  
  - Válasz: `"User not exist"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 4. Hibás `:id` formátum tesztelése  

**Lépések**:
1. Használjunk egy hibás `_id`-t, amely nem felel meg a MongoDB ObjectId formátumnak, például: `"invalid-id"`.  
2. Postman segítségével hívjuk meg az `/user/:id` endpointot a hibás `id`-vel.  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `500`.  
  - Válasz: A hibával kapcsolatos üzenet, például: `"Cast to ObjectId failed"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

## Tesztelés eredménye  

| Teszteset              | Elvárt státuszkód | Elvárt válasz                            | Eredmény      |
|------------------------|-------------------|------------------------------------------|---------------|
| Létező `id`           | 200               | A megfelelő felhasználó adatai JSON-ban  | [✅] Sikeres   |
| Nem létező `id`       | 501               | `"User not exist"`                       | [✅] Sikeres   |
| Hibás formátumú `id`  | 500               | `"Cast to ObjectId failed"` vagy hasonló | [✅] Sikeres   |

---

## Összegzés  

- **Tesztelési állapot**: [3] Sikeres / [0] Sikertelen.  
- **Talált hibák száma**: 0.  
- **Javaslatok**: -

---
