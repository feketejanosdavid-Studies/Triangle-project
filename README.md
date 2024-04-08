# Olvasd el, ha segítség kell a feltöltéshez.

## Feltőltés módja az alábbi:

~ git remote add origin https://github.com/feketejanosdavid-Studies/Triangle-project.git <br>
~ git branch -M main              -- main helyett mondjuk a saját keresztnevedet add meg. <br>
~ git push -u origin main         -- ugyanaz igaz itt is. 

## Ha leszeretnéd tölteni a projekt változásait:

a, van már egy projekt mappád, amibe az előző verzió fent van:
git pll

b, nincs:
git clone https://github.com/feketejanosdavid-Studies/Triangle-project.git

## Commit létrehozása:

~ git init    --meghívod az adott projekthez a git funkciót <br>
~ git status -u   --státuszt megnézed <br>
~ git add .   --hozzá adod a mappában lévő fájlokat

<b>FONTOS - Hozzá ne merd adni a node_modules mappát!</b>

~ git commit -a -m "Commit neve"

utánna mehet:
    git branch -M main              -- main helyett mondjuk a saját keresztnevedet add meg. + ha nem lennél benne ebbe a branch-ben <br>
    git push -u origin main         -- ugyanaz igaz itt is.

