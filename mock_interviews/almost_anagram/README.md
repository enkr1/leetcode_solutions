# Almost Anagram Pair

Two words make an Almost Anagram Pair if you can transform one into the other by switching out one letter and rearranging the letters if needed.

Examples of Almost Anagram Pairs:
- dark, card
- plate, table
- lead, read

Examples of non-Almost Anagrams Pairs:
- care, free (2 different letters)
- stop, pots (no different letters)
- ply, play (different lengths)

Write a program that takes in the
i) number of words (N)
ii) list of N words
and outputs the same list where next to each word we have the number of Almost Anagram Pairs it can form with the other words in the list.

The first line of the input is the number of words (N) and the following N lines are the words in that list.

The number of words in the list range from 5 to 50000. You can assume that all the words are unique, lowercase and at least 2 letters long.

Sample Input:
```
10

race
beat
brass
grass
sabre
back
chat
cabs
saga
pack
```

Output:
```
race 0
beat 0
brass 2
grass 1
sabre 1
back 2
chat 0
cabs 1
saga 0
pack 1
```
