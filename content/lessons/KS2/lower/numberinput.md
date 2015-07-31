+++
Categories = ["Fundmentals"]
Description = "How to read numbers from the keyboard."
Tags = []
author = "Owen"
concepts = ["Input", "Variables"]
date = "2015-04-03T13:01:01+01:00"
keystage = ["KS2"]
subtitle = "from the keyboard"
title = "Reading Numbers"
lessonnumber = "7"
+++
### Reading Number for the Keyboard
So far your program can read in a name that the user types in. The program
reads in the name as a string. But what if you want to read in the user's
age? What if you want to read in a number?

You can only read character, or runes, from the keyboard. So if someone types a
1 they type the rune '1' not the number 1. If you remember that the
keyboard buffer only holds runes this makes sense. The scancodes that are
sent from the keyboard are converted to runes, even if the rune might be a
number.

So what do you do? To solve this you have to convert the string, the runes,
to a number. Remember that the number might be more than one digit long.
This means the conversion might involve converting more than one rune
to get the correct number.

The good news is that you don't have to do this. There is a standard _algorithm_
to do this. Go has a function that uses the algorithm it is called the
`atoi` function and is in the `strconv`, short for string conversion package.

Lets change the `hellostranger` program to ask the user to type in their age.
