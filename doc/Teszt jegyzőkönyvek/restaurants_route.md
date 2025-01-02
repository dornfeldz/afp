
# Tesztjegyzőkönyv

**Projekt**: API endpoint tesztelése – `/restaurants`  
**Tesztelő**: Egri Milán
**Operációs rendszer**: macOS  
**Eszközök**: Postman, Google Chrome, Safari, Firefox (MacBook Air)  
**Teszt dátuma**: 2025.01.02  
**Endpoint URL**: `/restaurants`  
**HTTP metódus**: GET  

---

## Tesztelési forgatókönyv: `/restaurants` API endpoint tesztelése  

### 1. Kezdőlépés: Környezet ellenőrzése  

**Lépések**:
1. Ellenőrizzük, hogy az adatbázis az elvárt állapotban van:  
   - Az adatbázis **üres** az üres adatbázis teszteléséhez.
   - Az adatbázis előzetesen feltöltött a teljes adatbázis teszteléséhez.  

**Ellenőrzés**:
- Az API kapcsolatot létesít az adatbázissal, és nincs hibajelentés a logban.  

---

### 2. Üres adatbázis tesztelése  

**Lépések**:
1. Az adatbázisban ellenőrizzük, hogy nincs adat (`RestaurantModel.find({})` üres listát ad vissza).  
2. Postman segítségével a `/restaurants` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `501`.  
  - Válasz: `"Restaurants not exist"`.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 3. Feltöltött adatbázis tesztelése  

**Lépések**:
1. Az adatbázis állapotának ellenőrzése: biztosítjuk, hogy tartalmazza az előre definiált tesztadatokat:  
   ```json
   [
     {"_id":{"$oid":"67041a88418096c864f1bb4f"},"name":"Pizzeria Perfection","bio":"Wood-fired pizzas with artisanal toppings","profilePicture":"https://example.com/pizzeria-perfection-profile.jpg","cover":"https://i.imgur.com/XLf3Pdf.jpeg","email":"info@pizzeriaperfection.com","telephone":{"$numberDouble":"5553456789.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e3456"},"adress":{"street":"789 Elm St","city":"Little Italy","zipcode":{"$numberInt":"54321"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-87.6298"},{"$numberDouble":"41.8781"}]},"menu":[{"$oid":"6724b99e6216f5c00564e370"},{"$oid":"6724b99e6216f5c00564e371"},{"$oid":"6724b99e6216f5c00564e372"},{"$oid":"6724b99e6216f5c00564e373"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb50"},"name":"Taco Fiesta","bio":"Authentic Mexican street tacos and margaritas","profilePicture":"https://example.com/taco-fiesta-profile.jpg","cover":"https://i.imgur.com/BTEdC1K.jpeg","email":"hola@tacofiesta.com","telephone":{"$numberDouble":"5554567890.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e4567"},"adress":{"street":"101 Fiesta Blvd","city":"Sunnyville","zipcode":{"$numberInt":"98765"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-122.4194"},{"$numberDouble":"37.7749"}]},"menu":[{"$oid":"6724b99e6216f5c00564e350"},{"$oid":"6724b99e6216f5c00564e351"},{"$oid":"6724b99e6216f5c00564e352"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb51"},"name":"Cafe Parisienne","bio":"Charming French cafe with fresh pastries","profilePicture":"https://example.com/cafe-parisienne-profile.jpg","cover":"https://i.imgur.com/Huiqp4I.jpeg","email":"bonjour@cafeparisienne.com","telephone":{"$numberDouble":"5555678901.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e5678"},"adress":{"street":"202 Rue de la Croissant","city":"New Paris","zipcode":{"$numberInt":"13579"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-74.006"},{"$numberDouble":"40.7128"}]},"menu":[{"$oid":"6724b99e6216f5c00564e353"},{"$oid":"6724b99e6216f5c00564e354"},{"$oid":"6724b99e6216f5c00564e355"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb52"},"name":"BBQ Pit Stop","bio":"Slow-cooked, smoky barbecue delights","profilePicture":"https://example.com/bbq-pit-stop-profile.jpg","cover":"https://i.imgur.com/VLfMtqm.jpeg","email":"smoke@bbqpitstop.com","telephone":{"$numberDouble":"5556789012.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e6789"},"adress":{"street":"303 Smokey Lane","city":"Grill City","zipcode":{"$numberInt":"24680"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-97.7431"},{"$numberDouble":"30.2672"}]},"menu":[{"$oid":"6724b99e6216f5c00564e356"},{"$oid":"6724b99e6216f5c00564e357"},{"$oid":"6724b99e6216f5c00564e358"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb4e"},"name":"Sushi Sensation","bio":"Authentic Japanese sushi and sashimi","profilePicture":"https://example.com/sushi-sensation-profile.jpg","cover":"https://i.imgur.com/rNAI8d3.jpeg","email":"info@sushisensation.com","telephone":{"$numberDouble":"5552345678.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e2345"},"adress":{"street":"456 Oak Ave","city":"Metropolis","zipcode":{"$numberInt":"67890"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-118.2437"},{"$numberDouble":"34.0522"}]},"menu":[{"$oid":"6724b99e6216f5c00564e359"},{"$oid":"6724b99e6216f5c00564e35a"},{"$oid":"6724b99e6216f5c00564e35b"},{"$oid":"6724b99e6216f5c00564e361"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb4d"},"name":"The Rustic Spoon","bio":"Farm-to-table cuisine in a cozy atmosphere","profilePicture":"https://example.com/rustic-spoon-profile.jpg","cover":"https://i.imgur.com/oQqeC0X.jpeg","email":"info@rusticspoon.com","telephone":{"$numberDouble":"5551234567.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e1234"},"adress":{"street":"123 Main St","city":"Anytown","zipcode":{"$numberInt":"12345"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-73.9857"},{"$numberDouble":"40.7484"}]},"menu":[{"$oid":"6724b99e6216f5c00564e35c"},{"$oid":"6724b99e6216f5c00564e35d"},{"$oid":"6724b99e6216f5c00564e35e"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb55"},"name":"Seafood Harbor","bio":"Fresh catch of the day and ocean views","profilePicture":"https://example.com/seafood-harbor-profile.jpg","cover":"https://i.imgur.com/0Ky3V7z.jpeg","email":"ahoy@seafoodharbor.com","telephone":{"$numberDouble":"5559012345.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e9012"},"adress":{"street":"606 Harbor Dr","city":"Coastal City","zipcode":{"$numberInt":"80246"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-117.1611"},{"$numberDouble":"32.7157"}]},"menu":[{"$oid":"6724b99e6216f5c00564e35f"},{"$oid":"6724b99e6216f5c00564e360"},{"$oid":"6724b99e6216f5c00564e362"},{"$oid":"6724b99e6216f5c00564e363"},{"$oid":"6724b99e6216f5c00564e364"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb56"},"name":"Steakhouse 66","bio":"Premium cuts and classic cocktails","profilePicture":"https://example.com/steakhouse-66-profile.jpg","cover":"https://i.imgur.com/thB262t.jpeg","email":"meat@steakhouse66.com","telephone":{"$numberDouble":"5550123456.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e0123"},"adress":{"street":"707 Beef Blvd","city":"Meatropolis","zipcode":{"$numberInt":"66666"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-104.9903"},{"$numberDouble":"39.7392"}]},"menu":[{"$oid":"6724b99e6216f5c00564e365"},{"$oid":"6724b99e6216f5c00564e366"},{"$oid":"6724b99e6216f5c00564e367"},{"$oid":"6724b99e6216f5c00564e368"},{"$oid":"6724b99e6216f5c00564e369"},{"$oid":"6724b99e6216f5c00564e36a"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb57"},"name":"Curry Palace","bio":"Aromatic Indian curries and tandoori specials","profilePicture":"https://example.com/curry-palace-profile.jpg","cover":"https://i.imgur.com/GJxnfG3.jpeg","email":"spicy@currypalace.com","telephone":{"$numberDouble":"5551234567.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e1234"},"adress":{"street":"808 Spice Road","city":"Flavorville","zipcode":{"$numberInt":"45678"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-84.388"},{"$numberDouble":"33.749"}]},"menu":[{"$oid":"6724b99e6216f5c00564e36b"},{"$oid":"6724b99e6216f5c00564e36c"},{"$oid":"6724b99e6216f5c00564e36d"},{"$oid":"6724b99e6216f5c00564e36e"},{"$oid":"6724b99e6216f5c00564e36f"}],"createdAt":{"$date":{"$numberLong":"1728322184762"}},"updatedAt":{"$date":{"$numberLong":"1728322184762"}},"__v":{"$numberInt":"0"}},
   ]
   ```
2. Postman segítségével a `/restaurants` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `200`.  
  - Válasz tartalma:  
    ```json
    [
     {"_id":{"$oid":"67041a88418096c864f1bb4f"},"name":"Pizzeria Perfection","bio":"Wood-fired pizzas with artisanal toppings","profilePicture":"https://example.com/pizzeria-perfection-profile.jpg","cover":"https://i.imgur.com/XLf3Pdf.jpeg","email":"info@pizzeriaperfection.com","telephone":{"$numberDouble":"5553456789.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e3456"},"adress":{"street":"789 Elm St","city":"Little Italy","zipcode":{"$numberInt":"54321"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-87.6298"},{"$numberDouble":"41.8781"}]},"menu":[{"$oid":"6724b99e6216f5c00564e370"},{"$oid":"6724b99e6216f5c00564e371"},{"$oid":"6724b99e6216f5c00564e372"},{"$oid":"6724b99e6216f5c00564e373"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb50"},"name":"Taco Fiesta","bio":"Authentic Mexican street tacos and margaritas","profilePicture":"https://example.com/taco-fiesta-profile.jpg","cover":"https://i.imgur.com/BTEdC1K.jpeg","email":"hola@tacofiesta.com","telephone":{"$numberDouble":"5554567890.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e4567"},"adress":{"street":"101 Fiesta Blvd","city":"Sunnyville","zipcode":{"$numberInt":"98765"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-122.4194"},{"$numberDouble":"37.7749"}]},"menu":[{"$oid":"6724b99e6216f5c00564e350"},{"$oid":"6724b99e6216f5c00564e351"},{"$oid":"6724b99e6216f5c00564e352"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb51"},"name":"Cafe Parisienne","bio":"Charming French cafe with fresh pastries","profilePicture":"https://example.com/cafe-parisienne-profile.jpg","cover":"https://i.imgur.com/Huiqp4I.jpeg","email":"bonjour@cafeparisienne.com","telephone":{"$numberDouble":"5555678901.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e5678"},"adress":{"street":"202 Rue de la Croissant","city":"New Paris","zipcode":{"$numberInt":"13579"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-74.006"},{"$numberDouble":"40.7128"}]},"menu":[{"$oid":"6724b99e6216f5c00564e353"},{"$oid":"6724b99e6216f5c00564e354"},{"$oid":"6724b99e6216f5c00564e355"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb52"},"name":"BBQ Pit Stop","bio":"Slow-cooked, smoky barbecue delights","profilePicture":"https://example.com/bbq-pit-stop-profile.jpg","cover":"https://i.imgur.com/VLfMtqm.jpeg","email":"smoke@bbqpitstop.com","telephone":{"$numberDouble":"5556789012.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e6789"},"adress":{"street":"303 Smokey Lane","city":"Grill City","zipcode":{"$numberInt":"24680"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-97.7431"},{"$numberDouble":"30.2672"}]},"menu":[{"$oid":"6724b99e6216f5c00564e356"},{"$oid":"6724b99e6216f5c00564e357"},{"$oid":"6724b99e6216f5c00564e358"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb4e"},"name":"Sushi Sensation","bio":"Authentic Japanese sushi and sashimi","profilePicture":"https://example.com/sushi-sensation-profile.jpg","cover":"https://i.imgur.com/rNAI8d3.jpeg","email":"info@sushisensation.com","telephone":{"$numberDouble":"5552345678.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e2345"},"adress":{"street":"456 Oak Ave","city":"Metropolis","zipcode":{"$numberInt":"67890"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-118.2437"},{"$numberDouble":"34.0522"}]},"menu":[{"$oid":"6724b99e6216f5c00564e359"},{"$oid":"6724b99e6216f5c00564e35a"},{"$oid":"6724b99e6216f5c00564e35b"},{"$oid":"6724b99e6216f5c00564e361"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb4d"},"name":"The Rustic Spoon","bio":"Farm-to-table cuisine in a cozy atmosphere","profilePicture":"https://example.com/rustic-spoon-profile.jpg","cover":"https://i.imgur.com/oQqeC0X.jpeg","email":"info@rusticspoon.com","telephone":{"$numberDouble":"5551234567.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e1234"},"adress":{"street":"123 Main St","city":"Anytown","zipcode":{"$numberInt":"12345"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-73.9857"},{"$numberDouble":"40.7484"}]},"menu":[{"$oid":"6724b99e6216f5c00564e35c"},{"$oid":"6724b99e6216f5c00564e35d"},{"$oid":"6724b99e6216f5c00564e35e"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb55"},"name":"Seafood Harbor","bio":"Fresh catch of the day and ocean views","profilePicture":"https://example.com/seafood-harbor-profile.jpg","cover":"https://i.imgur.com/0Ky3V7z.jpeg","email":"ahoy@seafoodharbor.com","telephone":{"$numberDouble":"5559012345.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e9012"},"adress":{"street":"606 Harbor Dr","city":"Coastal City","zipcode":{"$numberInt":"80246"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-117.1611"},{"$numberDouble":"32.7157"}]},"menu":[{"$oid":"6724b99e6216f5c00564e35f"},{"$oid":"6724b99e6216f5c00564e360"},{"$oid":"6724b99e6216f5c00564e362"},{"$oid":"6724b99e6216f5c00564e363"},{"$oid":"6724b99e6216f5c00564e364"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb56"},"name":"Steakhouse 66","bio":"Premium cuts and classic cocktails","profilePicture":"https://example.com/steakhouse-66-profile.jpg","cover":"https://i.imgur.com/thB262t.jpeg","email":"meat@steakhouse66.com","telephone":{"$numberDouble":"5550123456.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e0123"},"adress":{"street":"707 Beef Blvd","city":"Meatropolis","zipcode":{"$numberInt":"66666"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-104.9903"},{"$numberDouble":"39.7392"}]},"menu":[{"$oid":"6724b99e6216f5c00564e365"},{"$oid":"6724b99e6216f5c00564e366"},{"$oid":"6724b99e6216f5c00564e367"},{"$oid":"6724b99e6216f5c00564e368"},{"$oid":"6724b99e6216f5c00564e369"},{"$oid":"6724b99e6216f5c00564e36a"}],"createdAt":{"$date":{"$numberLong":"1728322184761"}},"updatedAt":{"$date":{"$numberLong":"1728322184761"}},"__v":{"$numberInt":"0"}},
     {"_id":{"$oid":"67041a88418096c864f1bb57"},"name":"Curry Palace","bio":"Aromatic Indian curries and tandoori specials","profilePicture":"https://example.com/curry-palace-profile.jpg","cover":"https://i.imgur.com/GJxnfG3.jpeg","email":"spicy@currypalace.com","telephone":{"$numberDouble":"5551234567.0"},"product":{"$oid":"60d5ecb8b392f8a9b45e1234"},"adress":{"street":"808 Spice Road","city":"Flavorville","zipcode":{"$numberInt":"45678"}},"location":{"type":"Point","coordinates":[{"$numberDouble":"-84.388"},{"$numberDouble":"33.749"}]},"menu":[{"$oid":"6724b99e6216f5c00564e36b"},{"$oid":"6724b99e6216f5c00564e36c"},{"$oid":"6724b99e6216f5c00564e36d"},{"$oid":"6724b99e6216f5c00564e36e"},{"$oid":"6724b99e6216f5c00564e36f"}],"createdAt":{"$date":{"$numberLong":"1728322184762"}},"updatedAt":{"$date":{"$numberLong":"1728322184762"}},"__v":{"$numberInt":"0"}},
    ]
    ```  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

### 4. Hibaállapot tesztelése  

**Lépések**:
1. A MongoDB kapcsolat megszakítása (hibás connection string beállítása).  
2. Postman segítségével a `/restaurants` endpoint hívása (GET metódus).  

**Ellenőrzés**:
- **Elvárt eredmény**:  
  - HTTP státuszkód: `500`.  
  - Válasz: Az adatbázis hibájával kapcsolatos üzenet.  

**Eredmény**:
- [✅] A válasz megfelel az elvártnak.  

---

## Tesztelés eredménye  

| Teszteset          | Elvárt státuszkód | Elvárt válasz                          | Eredmény      |
|---------------------|-------------------|----------------------------------------|---------------|
| Üres adatbázis     | 501               | `"Restaurants not exist"`             | [✅] Sikeres   |
| Feltöltött adatbázis | 200               | A tesztadatok JSON formátuma           | [✅] Sikeres   |
| Hibaállapot        | 500               | Az adatbázishoz kapcsolódó hibaüzenet | [✅] Sikeres   |

---

## Összegzés  

- **Tesztelési állapot**: [3] Sikeres / [0] Sikertelen.  
- **Talált hibák száma**: 0.  
- **Javaslatok**: -

---
