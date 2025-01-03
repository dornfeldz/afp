# TastyGo teszt jegyzőkönyv

Tesztelést végezte: Dornfeld Zoltán
Operációs rendszer: Windows 10
Böngésző: Google Chrome
Dátum: 2024.12.10.
Talált hibák száma: 0

## Kosárba helyezés funkció tesztelése

### Tesztelési célkitűzés  
Annak ellenőrzése, hogy a felhasználó képes egy étterem menüjéből kiválasztott tételt megfelelő mennyiségben a kosárba helyezni.  

### Tesztkörnyezet és feltételek  
1. Az étterem menüje legyen betöltve és elérhető.
2. Az étterem menüjében legyen kosárba helyezhető tétel.

### Tesztelés menete  
1. Nyissa meg az alkalmazást, és válasszon egy éttermet.  
2. Válasszon ki egy menüpontot a listából.
3. Változtassa meg a mennyiséget a "-" és "+" gombokkal.
3. Kattintson az „Add to cart” gombra.

### Elvárt eredmény  
A kiválasztott tétel hozzáadódik a kosárhoz, a kosárban lévő elemek száma helyesen jelenik meg a kosár ikon számlálóján.  

### Teszt eredménye  
**Pass**: A kiválasztott tétel helyesen hozzáadódik a kosárhoz.  
**Fail**: A tétel nem jelenik meg a kosárban, vagy hibás adatok láthatóak. 