## Zadanie 1

Zdefiniuj tablicę w zmiennej users zawierającą kolejne imiona:

Anna

Maria

Tomasz

Piotr

Paweł

Na koniec wypisz w terminalu w kolejnych liniach:

pierwszy element 

drugi element

czwarty element

ostatni element

długość tablicy

## Zadanie 2
Zdefiniuj pustą tablicę w zmiennej studenci, a następnie pojedynczo (jedno po drugim) dodaj do niej następujące imiona:

Jan

Marian

Marcin

Michał

Jerzy

Na koniec wypisz w terminalu:

pierwszy element

trzeci element

długość tablicy

## Zadanie 3

1. Stwórz tablicę z 6 losowymi zwierzakami. 
1. Napisz funkcję showArray(arr), która wypisze kolejne elementy przekazanej tablicy. 
1. Zrób to na trzy sposoby za pomocą pętli for, for of oraz metody forEach. 
1. Dodatkowo wypisz długość każdego słowa a na końcu sumę wszystkich liter występujących w tablicy.

## Zadanie 4

W pliku `main.js` znajduje się tablica `numbers` i funkcja `compareNumbers`.

- Za pomocą metody sort i przekazanej jako parametr powyższej funkcji posortuj i wyświetl w konsoli tablicę `numbers`.

## Zadanie 5

Stwórz dwie tablice.

- Jedna `vegetables` niech zawiera twoje ulubione warzywa, druga `fruits` twoje ulubione owoce.
- Stwórz zmienną `salad`.
- Do zmiennej `salad` przypisz nową tablicę, która będzie połączeniem dwóch powyższych tablic. Do łaczenia użyj metody concat.

## Zadanie 6

W pliku `main.js` masz utworzoną tablicę pizzas. Wypisz w konsoli elementy tablicy za pomocą funkcji for i metody forEach.

## Zadanie 7

W pliku `main.js` jest utworzona tablica z największymi miastami świata. Napisz funkcję, która odnajdzie w przekazanej tablicy, która nazwa stolicy jest najdłuższa i zwróci jej nazwę i długość(ilość znaków);



## Zadanie 8

Napisz funkcję ```distFromAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie wartości bezwzględne z różnicy pomiędzy liczbą z danej komórki a średnią wartością tablicy.  
Np.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

## Zadanie 9

Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```

## Zadanie 10

Napisz funkcję ```getEvenAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.

```JavaScript
getEvenAverage([1,2,3,4,5,6,7]) => 4
getEvenAverage([1,1,1,1]) => null
getEvenAverage([2,8,3,7,4]) => 4.666


