# TastyGo teszt jegyzőkönyv

Tesztelést végezte: Dornfeld Zoltán
Operációs rendszer: Windows 10
Böngésző: Google Chrome
Dátum: 2024.12.10.
Talált hibák száma: 0

## Étteremlista megjelenítése a kezdőlapon

### Tesztelési célkitűzés  
Annak ellenőrzése, hogy a bejelentkezett felhasználók számára az étteremlista megfelelően megjelenik a kezdőlapon.  

### Tesztkörnyezet és feltételek  
1. Az alkalmazás működő hálózati kapcsolat mellett legyen elérhető.  
2. A felhasználó legyen érvényesen bejelentkezve az alkalmazásba.  

### Tesztelés menete  
1. Indítsa el az alkalmazást a böngészőben.  
2. Jelentkezzen be.
3. Navigáljon a kezdőlapra.

### Elvárt eredmény  
Az étteremlista megjelenik a kezdőlapon, az éttermek nevei, címei, képei és kategóriái helyesen láthatóak.  

### Teszt eredménye  
**Pass**: Az éttermek helyesen megjelennek.  
**Fail**: Az étteremlista nem látható vagy hibásan jelenik meg.  
