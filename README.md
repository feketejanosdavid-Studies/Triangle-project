# Háromszög területszámító program.
<i>Szoftvertesztelés 2024 - a szoftver hibákat tartalmazhat</i>
## Letöltés, oldal indítása
adott parancsot add ki a kiválasztott mappába:
```cmd
git clone https://github.com/feketejanosdavid-Studies/Triangle-project.git
```
ha sikerült letölteni, akkor a letöltött mappában a Visual Studio Code-ot megnyitva az adott billentyűkombinációt kell lenyomni: <br>
Ctrl + J <br>

Ezután a cmd-be az alábbi két parancsot kell kiadni, és a program működőképes:
```cmd
npm install
npm start
```
Ezután a weboldal elindul.

## A weboldal tartalmazhat hibákat
A leírás dokumentumban szerepel a program működési elve, hogy hogyan kellene a jelen állapotában lefutnia. <br>
<b>Alábbiakban csatolom a leírás dokumentum tartalmát ide:</b> <br>

Ebben a feladatban csapatunk által létrehozott programot kell tesztelni. A program háromszögek
kerületét, illetve területét tudja kiszámolni a megfelelő képletek használatával, majd egy
gombnyomásra meg is adja a választ az egyenletre. <br>

Programunk egy HTML oldalon keresztül működik. Ott található egy főoldal, amelyről hozzáférhetünk
az oldalon található kerület, illetve területszámító felülethez. Programunk jelen fázisában még nincs
kidolgozva a kerület számító felület, így egy üres HTML oldalnak kell betöltődnie, ha rányomunk a
kerület számítás gombra. <br>

A területszámításnál használt képlet a következő (ezt használja a programunk is):
T = x(oldal) * xma(adott oldalhoz tartozó magasság) /2 <br>

Ahhoz, hogy ki tudjuk számítani egy háromszög területét vagy kerületét, be kell írnunk két számot az
adott mezőkbe. Ez lehet egész, illetve törtszám is. Amennyiben más karaktert írunk be, a programnak
nem szabad eredménnyel szolgálnia, valamint nem szabad, hogy értéket vegyen fel a táblázatba. <br>

Reszponzívitás szempontjából, minden nézetet tekintve látszódnia kell minden felületnek.
Működés szempontjából a bevitt adatok az eredménnyel együtt megjelenik a számító felület alatt,
sötét háttérrel, a programban láthatónak kell lennie az összes adatnak amit becittünk. <br>

## Tesztelendő feladatok
A programnak a fenti leírásnak megfelelően kell működnie, semmi jelenlegi hibának nem szabad lennie. A programak mint működésbeli, mint reszponzivitás alapján hibátlannak kell lennie. <br>
Kérjük, teszteljétek le, hogy a fenti leírás alapján a program lefut-e hiba nélkül!
