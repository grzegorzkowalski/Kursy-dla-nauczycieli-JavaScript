## Zadanie 1
1. Napisz funkcję countWord(txt), która wymagać będzie tekstu. 
1. Funkcja powinna zwrócić liczbę słów z ilu składa się przekazany tekst. 
1. Następnie użyj jej do wypisania tekstu: "Tekst: 'tutaj twój przykładowy tekst' składa się z 4 wyrazów". 
1. Przykładowy tekst pobierz od użytkownika za pomocą funkcji prompt(). 
2. Jeżeli użytkownik nic nie wpisze, wypisz w konsoli tekst nie mam co liczyć.

```js
`input: "Koty to fajne zwierzaki"
wynik:
Tekst: "Koty to fajne zwierzaki" składa się z 4 wyrazów`
```

## Zadanie 2 

Stwórz funkcję `generateRandom(min, max)`, która będzie przyjmować dwie wartości - min i max.
Funkcja powinna zwrócić losową liczbę z podanego przedziału.
Do generowania losowej liczby możesz użyć wzoru: `Math.floor(Math.random()*(max-min+1)+min)`.

## Zadanie 3

Napisz funkcję `checkFemale(name)`, która sprawdza przekazane do niej imię. Funkcja powinna zwracać prawdę lub fałsz w zależności od tego czy przekazane imię kończy się na literę "a". Przykładowo:

```js
checkFemale("Ania") === true
checkFemale("Marcin") === false
```

## Zadanie 4

Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem. Przykładowo słowo kajak to palindrom, ale już pies nim nie jest.