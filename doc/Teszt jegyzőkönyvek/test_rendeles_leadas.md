# TastyGo teszt jegyzőkönyv

Tesztelést végezte: Dornfeld Zoltán
Operációs rendszer: Windows 10
Böngésző: Google Chrome
Dátum: 2024.12.10.
Talált hibák száma: 0

## A rendelés leadásának tesztelése

### Tesztelési célkitűzés  
Annak ellenőrzése, hogy a kosárba helyezett elemeket meg tudjuk rendelni.

### Tesztkörnyezet és feltételek  
1. A felhasználó legyen bejelentkezve.
2. Tételek legyenek hozzáadva a kosárhoz.

### Tesztelés menete  
1. Nyissa meg a kosár menüt.
2. Kattintson a "Place order" gombra, navigáljon a rendelés leadása oldalra.
3. Írja be a kiszállítási címet és a borravalót.
4. Adja le a rendelést a "Place order" gombra kattintva.

### Elvárt eredmény  
A kosárban megjelenő tételek, végösszeg és visszaigazoló szöveg megjelenik.

### Teszt eredménye  
**Pass**: A visszaigazoló képernyő helyesen jelenik meg.
**Fail**: A visszaigazoló képernyő helytelenül vagy nem jelenik meg.