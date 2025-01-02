# Tesztjegyzőkönyv

**Projekt**: API endpoint tesztelése – `/restaurant/:id`  
**Tesztelő**: Egri Milán  
**Operációs rendszer**: macOS  
**Eszközök**: Postman, Google Chrome, Safari, Firefox (MacBook Air)  
**Teszt dátuma**: 2025.01.02  
**Endpoint URL**: `/restaurant/:id`  
**HTTP metódus**: GET  

---

## Tesztelési forgatókönyv: `/restaurant/:id` API endpoint tesztelése  

### 1. Kezdőlépés: Környezet ellenőrzése  

**Lépések**:
1. Ellenőrizzük, hogy az adatbázis tartalmaz előre definiált adatokat.
2. Győződjünk meg arról, hogy az adott `:id` paraméterhez tartozik vagy nem tartozik adat.  

**Ellenőrzés**:
- Az API kapcsolatot létesít az adatbázissal, és nincs hibajelentés a logban.  

---

### 2. Létező `:id` paraméter tesztelése  

**Lépések**:
1. Adatbázisból kiválasztunk egy létező `id`-t (`RestaurantModel.findOne({})`).  
2. Postman segítségével a `/restaurant/:id` endpoint hívása az adott `id`-vel (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `200`.  
  - Válasz tartalma: A kért étterem JSON formátumban, például:  
    ```json
    {
      "_id": "67041a88418096c864f1bb50",
      "name": "Taco Fiesta",
      "bio": "Authentic Mexican street tacos and margaritas",
      "location": {
        "type": "Point",
        "coordinates": [-122.4194, 37.7749]
      }
    }
    ```  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 3. Nem létező `:id` paraméter tesztelése  

**Lépések**:
1. Olyan `id`-vel hívjuk meg az endpointot, amely nem található meg az adatbázisban.  
2. Példa `id`: `"000000000000000000000000"`.  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `501`.  
  - Válasz: `"Restaurant not exist"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 4. Hibás `:id` formátum tesztelése  

**Lépések**:
1. Olyan `id`-t küldünk, amely nem felel meg a MongoDB ObjectId formátumának, például: `"invalid-id"`.  
2. Postman segítségével a `/restaurant/:id` endpoint hívása a hibás `id`-vel (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `500`.  
  - Válasz: A hibával kapcsolatos üzenet, például: `"Cast to ObjectId failed"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

## Tesztelés eredménye  

| Teszteset                | Elvárt státuszkód | Elvárt válasz                            | Eredmény      |
|--------------------------|-------------------|------------------------------------------|---------------|
| Létező `id`             | 200               | A megfelelő étterem JSON formátumban     | [✅] Sikeres   |
| Nem létező `id`         | 501               | `"Restaurant not exist"`                 | [✅] Sikeres   |
| Hibás formátumú `id`    | 500               | `"Cast to ObjectId failed"` vagy hasonló | [✅] Sikeres   |

---

## Összegzés  

- **Tesztelési állapot**: [3] Sikeres / [0] Sikertelen.  
- **Talált hibák száma**: 0.  
- **Javaslatok**: -

---
