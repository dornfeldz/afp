# TastyGo teszt jegyzőkönyv

Tesztelést végezte: Dornfeld Zoltán
Operációs rendszer: Windows 10
Böngésző: Google Chrome
Dátum: 2024.01.03.
Talált hibák száma: 0

## A kijelentkezés tesztelése

### Tesztelési célkitűzés  
Annak ellenőrzése, hogy a bejelentlezett felhasználó ki tud jelentkezni.

### Tesztkörnyezet és feltételek  
1. A felhasználó legyen bejelentkezve.

### Tesztelés menete  
1. A felhasználó kattintson a profilképére a navigációs sávon.
2. Kattintson a "Sign out" gombra.

### Elvárt eredmény  
A felhasználó kijelentkezik, a bejelentkezési képernyőre kerül.

### Teszt eredménye  
**Pass**: A felhasználó kijelentkezik, a bejelentkezési képernyőre kerül.
**Fail**: A felhasználó nem jelentkezik ki, vagy hibaüzenetet kap.