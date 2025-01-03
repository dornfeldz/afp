
# Tesztjegyzőkönyv

**Projekt**: API endpoint tesztelése – `/users`  
**Tesztelő**: Egri Milán  
**Operációs rendszer**: macOS  
**Eszközök**: Postman, Google Chrome, Safari, Firefox (MacBook Air)  
**Teszt dátuma**: 2025.01.02  
**Endpoint URL**: `/users`  
**HTTP metódus**: GET  

---

## Tesztelési forgatókönyv: `/users` API endpoint tesztelése  

### 1. Kezdőlépés: Környezet ellenőrzése  

**Lépések**:
1. Ellenőrizzük, hogy az adatbázis az elvárt állapotban van:  
   - Az adatbázis **üres** az üres adatbázis teszteléséhez.
   - Az adatbázis előzetesen feltöltött a megadott felhasználói adatokkal.  

**Ellenőrzés**:
- Az API kapcsolatot létesít az adatbázissal, és nincs hibajelentés a logban.  

---

### 2. Üres adatbázis tesztelése  

**Lépések**:
1. Üres adatbázis biztosítása.
2. Postman segítségével a `/users` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `501`.  
  - Válasz: `"Users not exist"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 3. Feltöltött adatbázis tesztelése  

**Lépések**:
1. Az adatbázist feltöltjük a következő felhasználói adatokkal:
   ```json
   [
     {
       "_id": "6730a34cd116e2c7d1edf66e",
       "first_name": "Zoltán",
       "last_name": "Dornfeld",
       "email": "dornfeldz@gmail.com",
       "picture": "https://lh3.googleusercontent.com/a/ACg8ocIP3i_oVp9l6cwDwHv97kxQfn_ZxEfyO7OhJRg78d300IAWCw4iXQ=s96-c",
       "__v": 0
     },
     {
       "_id": "670ebea6ab2949e3988b3f6a",
       "first_name": "John",
       "last_name": "Doe",
       "email": "john.doe@example.com",
       "password": "hashedpassword123",
       "telephone": 1234567890,
       "delivery_adress": {
         "street": "123 Main St",
         "city": "New York",
         "zipcode": 10001
       },
       "__v": 0
     },
     {
       "_id": "670ebee072078d08bd9ab913",
       "first_name": "Jane",
       "last_name": "Smith",
       "email": "jane.smith@example.com",
       "password": "hashedpassword456",
       "telephone": 9876543210,
       "delivery_adress": {
         "street": "456 Elm St",
         "city": "Los Angeles",
         "zipcode": 90001
       },
       "__v": 0
     }
   ]
   ```
2. Postman segítségével a `/users` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `200`.  
  - Válasz tartalma: A fent megadott felhasználói adatok JSON formátumban.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 4. Hibaállapot tesztelése  

**Lépések**:
1. A MongoDB kapcsolat megszakítása (hibás connection string beállítása).  
2. Postman segítségével a `/users` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `500`.  
  - Válasz: A hibaüzenet, például: `"Failed to connect to database"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

## Tesztelés eredménye  

| Teszteset              | Elvárt státuszkód | Elvárt válasz                            | Eredmény      |
|------------------------|-------------------|------------------------------------------|---------------|
| Üres adatbázis        | 501               | `"Users not exist"`                      | [✅] Sikeres   |
| Feltöltött adatbázis   | 200               | A megfelelő felhasználói adatok JSON-ban | [✅] Sikeres   |
| Hibaállapot           | 500               | A kapcsolódási hibaüzenet               | [✅] Sikeres   |

---

## Összegzés  

- **Tesztelési állapot**: [3] Sikeres / [0] Sikertelen.  
- **Talált hibák száma**: 0.  
- **Javaslatok**: -

---
