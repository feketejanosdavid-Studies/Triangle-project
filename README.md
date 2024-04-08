# Olvasd el, ha segítség kell a feltöltéshez.

## Feltőltés módja az alábbi:

git remote add origin https://github.com/feketejanosdavid-Studies/Triangle-project.git
git branch -M main              -- main helyett mondjuk a saját keresztnevedet add meg.
git push -u origin main         -- ugyanaz igaz itt is.

## Ha leszeretnéd tölteni a projekt változásait:

a, van már egy projekt mappád, amibe az előző verzió fent van:
git pll

b, nincs:
git clone https://github.com/feketejanosdavid-Studies/Triangle-project.git

##Commit létrehozása:

git init    --meghívod az adott projekthez a git funkciót
git status -u   --státuszt megnézed
git add .   --hozzá adod a mappában lévő fájlokat

## FONTOS - Hozzá ne merd adni a node_modules mappát!

git commit -a -m "Commit neve"

utánna mehet:
    git branch -M main              -- main helyett mondjuk a saját keresztnevedet add meg. + ha nem lennél benne ebbe a branch-ben
    git push -u origin main         -- ugyanaz igaz itt is.

