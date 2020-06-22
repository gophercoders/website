+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the Words lesson"
Tags = []
author = "Owen"
concepts = ["strings"]
date = "2015-03-25T23:04:58Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "words"
subtitle = "Teach and Try Teacher Notes"
title = "Words"
slides = "words"
lessonplan = "words"
lessonnumber = "3"
+++
### Objective
The objective is to get the class to write a Go program to print strings to the
terminal.

Creating this program will require the class to use the text editor (either
Atom or LiteIDE) to create and save the source code file and the
terminal/command line to run their program.
<!--more-->

### Why words second?
After numbers, words, or more correctly __strings__, are a fundamental concept
in computing. Computers need strings. Without them how could any information be
conveyed between the computer and the user.

Strings are used as a form of both output, to the screen and input, from
the keyboard, to the computer program.


### Learning outcome
The class should be able to:

* Understand the relationship between characters and numbers
* Understand what a string is
* Start their text editor
* Create a source code file
* Write a simple program to print strings
* Save a source code file
* Build and run their program
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The example program is sufficiently simple that the little or no additional
teaching should be required beforehand. However the class needs to have
covered

* Basic keyboard/typing and mouse skills.
* The latin alphabet

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are executed in order to print the results to the terminal window.

### Cross-Curricular links

The is a direct link to English language, both in terms of the letters and
pronunciation. There is also an indirect list to Foreign languages, though the
use of different non-latin writing systems. This can be further linked to
Geography.

### Confusion between words and strings

We have used the term "word" initially because the class will be familiar with
the concept as used in English. However we have introduced the correct term of
"string" as soon as possible. You should therefore use the term _string_ in
your teaching. The term string is universal across all programming languages.
The Go documentation refers strictly to stings and runes. As such the terms
need introduced as early as possible.

Strictly a _word_ in computer science is directly related to the hardware of
the computer and specifically to the CPU. A word in this context is a fixed
number of bits - now typically 32 or 64 bits. This is called the word size of
the CPU. The word size is the number of bits that the CPU will process as a
single block. The word size therefore matches the size, in bits, of the CPU's
general purpose registers.

CPU registers are small, but its faster to access memory elements within the CPU
itself rather than in the computers main memory. The registers are where all of
the CPU's instructions are carried out. Data must therefore be loaded from main
memory into the CPU registers, manipulated in the registers and stored back
into main memory. This is the called LOAD/STORE architecture.

The word size also determines the maximum amount of memory that the CPU can
physically access. A CPU with a 32 bit word size will have 32 so called address
lines - these are physical wires on the circuit board - connecting the CPU to
the memory. This limits the maximum about to memory to 2<sup>32</sup> bits or 4
gibibits (GiB).

### What is a character?
##### Notes for slide 4
A computer can only process numbers. This restriction means that each letter
must be mapped to a unique number. The Unicode standard provides that mapping,
for every letter, symbol, and logograms, for every written human language.

Go uses the term _rune_ to denote the unique number used to represent a single
letter, symbol or logograms.

### Unicode letter encoding
##### Notes for slide 5
The [Unicode Table](http://unicode-table.com/en/) website can show you the
whole Unicode set. Your class should be able to use this table to find the
number that represents each number.

To find the number used for a letter you need to hover over the each letter
in the table. The number used for the letter will then be displayed.

When using the table, the number along the horizontal and vertical access are
displayed in hexadecimal i.e. base 16. Hovering over any symbol in the full
table will display `U+0041 | Dec: 65`. The `U+0041` is the standard way to
write a unicode character, a capital `U` followed by a `+` followed by a number
in hexadecimal that represents the position in the table. The second part, the
`Dec: 65` is the decimal equivalent of the hexadecimal number.

The number 65 represents the capital letter A.

The answers to the questions are:

A is 65

Z is 90

a is 97

b is 98

c is 99

d is 100

0 is 48

9 is 57

space is 32 - this is the blank tile to the left of ! in the table

\+ is 43

$ is 36

Æ is 198

Ə is 399

ξ is 958

79 is the capital letter O

61 is an equals sign, =

55 is the number 7

101 is the lower case letter e

This mapping via the Unicode table from letters or symbols used in writing to a
single unique number is an example of a character encoding. This is the key
fact that the pupils must grasp. Letters are represented by numbers through an
encoding.

{{% defaultNote %}}
You may see reference to other character encodings, notably ASCII, (American
Standard Code for Information Interchange), or a CodePage 1252 Windows LATIN 1.
These are alternative character encoding systems that have been superseded by
Unicode. These alternative systems only supported the Latin alphabet and where
limited to a maximum of 256 letters or symbols. Leaving non-Latin languages or
languages with much larger alphabets to devise their own incompatible
encodings. Unicode was created to unify this situation. The first 256 entries
of the Unicode table match (more or less) the Latin characters as defined in
the ASCII set.
{{% /defaultNote %}}

### A string is a Sequence of Characters
##### Notes for slide 6
A string is like a sentence in English. But, it can contain anything that
can by typed at the keyboard. The string is _not_ restricted to contain only
letters and punctuation. The following are all valid strings.

{{< highlight text "linenos=false" >}}
Hello World!
L3tt3r5 and Numb3r5 can be M1x3d
You can type maths as well 1+1=2
Or you can have nonsense like this !"£$%^&*())*+}{~@:?><¬|}\"
{{< /highlight >}}

Any sequence or any length you can type on a keyboard is s string.

Go has strict definition of a string. Go defines a string as a sequence or
runes.

### Strings in Go
##### Notes for slide 7
A string is Go must be typed inside inverted commas, one at each end of the
string. Like this

{{< highlight go "linenos=false" >}}
"This is a string!"
{{< /highlight >}}

The string must also be typed on one line. This string would be illegal.

{{< highlight go "linenos=false" >}}
"This is a string
is illegal because it is
typed one more than one line."
{{< /highlight >}}

This is a pattern. All strings in Go must follow this pattern. If the string
does not it is a syntax error.

To turn the lines

{{< highlight text "linenos=false" >}}
That wasn't flying. That was falling with style!
You are a sad, strange little man, and you have my pity.
{{< /highlight >}}

into strings, you simply need to enclose them in inverted commas. Like this

{{< highlight text "linenos=false" >}}
"That wasn't flying. That was falling with style!"
"You are a sad, strange little man, and you have my pity."
{{< /highlight >}}

The mistake in the example string

{{< highlight text "linenos=false" >}}
"To infinity... and beyond!
{{< /highlight >}}

is a missing inverted commas at the end of the string. It is correctly
written as

{{< highlight text "linenos=false" >}}
"To infinity... and beyond!"
{{< /highlight >}}

{{% panelInfoTitle title="Additional Class Exercise" %}}
Can the class identify which of these strings are correct? Can they find the
mistakes?

{{< highlight text "linenos=false" >}}
"You know, that little droid is going to cause me a lot of trouble."

If you're saying that coming here was a bad idea, I'm starting to agree with
you."

"He is as clumsy as he is stupid!

"For over a thousand generations, the Jedi were the guardians of peace and
justice in the Old Republic - before the dark times. Before the Empire."
{{< /highlight >}}
{{% expandingButton id="badstring-answers" name="Answers" %}}
The first string

{{< highlight text "linenos=false" >}}
"You know, that little droid is going to cause me a lot of trouble."
{{< /highlight >}}

is correct. There are inverted commas `"` at the start and end of the
string.

The second string

{{< highlight text "linenos=false" >}}
If you're saying that coming here was a bad idea, I'm starting to agree with
you."
{{< /highlight >}}

is wrong. There are inverted commas, `"` at the end of the string but
the inverted commas, `"`, at the start of the string as missing. The
string can contain commas and apostrophes.

The third string

{{< highlight text "linenos=false" >}}
"He is as clumsy as he is stupid!
{{< /highlight >}}

is also wrong. The inverted commas, `"`, at the end of the string is
missing.

The last one is tricky.

{{< highlight text "linenos=false" >}}
"For over a thousand generations, the Jedi were the guardians of peace and
justice in the Old Republic - before the dark times. Before the Empire."
{{< /highlight >}}

The string is wrong because it is typed over two lines. Strings can only
by typed in a single line.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### How to Print a String
##### Notes for slide 8
Printing a string on the computers terminal window as output requires
the use of one of two functions. The two functions are called `Print` and
`Println`. The functions are part of the `fmt` package, sort for format.

The functions are used like this

{{< highlight go "linenos=false" >}}
fmt.Println("This is a string!")
fmt.Print("and so is this.")
{{< /highlight >}}

These lines are called _statements_. Go programs consist of a sequence of
statements. The statements are the Go instructions to the computer.

The string to be printed appears between the brackets, the `(` and `)`. This
string must be correct. You must
also type everything one line. The line always starts with `fmt.Print`
or `fmt.Println`. Notice that this is the package name, `fmt` followed by a
period, followed by the function name. This is the pattern for printing to the
screen.

We have not explained packages yet, so the pupils can consider the functions
to be named `fmt.Println` and `fmt.Print` at this stage.

The `fmt.Println` and `fmt.Print` functions are not the same. The
`fmt.Print` prints the string that you put in between the brackets. The next
`fmt.Print` or `fmt.Println` function will continue to print on the same line.
 The `fmt.Println` function also prints the string that you put in between
the brackets but also takes a new line at the end. The next
string that you print with `fmt.Println` or `fmt.Print` will be on the next
line.

If you had typed this into a program (ignore the line numbers, they are for
illustration only)

{{< highlight go "linenos=table" >}}
fmt.Println("Printed on Line 1")
fmt.Print("Printed on Line 2")
fmt.Println(" also printed on Line 2")
fmt.Println("Printed on Line 3")
{{< /highlight >}}

The output would be this

{{< highlight text "linenos=table" >}}
Printed on Line 1
Printed on Line 2 also printed on Line 2
Printed on Line 3
{{< /highlight >}}

The `fmt.Print` function does take a new line at the end, so lines 3 and 4
in the program produce line 3 in the output.

The string on slide 8

{{< highlight text "linenos=false" >}}
And there seems to be no sign of intelligent life anywhere.
{{< /highlight >}}

Would be printed using `fmt.Println` and `fmt.Print` like this

{{< highlight go "linenos=false" >}}
fmt.Println("And there seems to be no sign of intelligent life anywhere.")
fmt.Print("And there seems to be no sign of intelligent life anywhere.")
{{< /highlight >}}

The mistakes in the `fmt.Println` and `fmt.Print` statements

{{< highlight text "linenos=false" >}}
fmt.Println"Who invited that kid?")
fmt Print("So play nice!")
{{< /highlight >}}

are. The first example is missing an opening bracket before the
opening inverted comma. The second example is missing the period between
`fmt` and `Print`. It has been replaced with a space. The correct statements
would be

{{< highlight go "linenos=false" >}}
fmt.Println("Who invited that kid?")
fmt.Print("So play nice!")
{{< /highlight >}}


{{% panelInfoTitle title="Additional Class Exercise" %}}
Can the class spot which of these statements is wrong?
Can they explain their answers?

{{< highlight text "linenos=false" >}}
fmt.Println "You are a member of the rebel alliance, and a traitor.")
fmt Print("Would it help if I got out and pushed?!!")
fmt.Println("Try not. Do... or do not. There is no try."
fmt.Println "What have you done?! I’m BACKWARDS."
fmt.Println("The circle is now complete."
fmt-Print("You'll find I'm full of surprises!)
fmt.Println(We seem to be made to suffer. It's our lot in life.)
fmt.Print("It's against my programming to impersonate a deity.")
{{< /highlight >}}
{{% expandingButton id="badprint-answers" name="Answers" %}}
The first line is wrong.
{{< highlight text "linenos=false" >}}
fmt.Println "You are a member of the rebel alliance, and a traitor.")
{{< /highlight >}}
It is missing the opening bracket, `(`.

The second line
{{< highlight text "linenos=false" >}}
fmt Print("Would it help if I got out and pushed?!!")
{{< /highlight >}}
is also wrong. It is missing the full stop between `fmt` and `Print`.
Instead it has a space.

The third line
{{< highlight text "linenos=false" >}}
fmt.Println("Try not. Do... or do not. There is no try."
{{< /highlight >}}
is also wrong. The closing bracket, `)`, at the end of the line is missing.

The fourth line
{{< highlight text "linenos=false" >}}
fmt.Println "What have you done?! I'm BACKWARDS."
{{< /highlight >}}
is also wrong. This line is missing both brackets, `()`.

The fifth line
{{< highlight text "linenos=false" >}}
fmt.Println"The circle is now complete.")
is also wrong. It is also missing the opening bracket, `(` before the
double quote mark, `"`
{{< /highlight >}}

The sixth line has two mistakes
{{< highlight text "linenos=false" >}}
fmt-Print("You'll find I'm full of surprises!)
{{< /highlight >}}
The first mistake is that the full stop,`.` has been replaced by a minus sign,
`-`, between the `fmt` and `Print`. The second mistake is the closing
double quote, `"` is missing before the closing bracket, `)`

The seventh line also has two mistakes.
{{< highlight text "linenos=false" >}}
fmt.Println(We seem to be made to suffer. It's our lot in life.)
{{< /highlight >}}
This line is missing both the opening and closing double quote marks
around the string. There should be a double quote mark after the
opening bracket, `(` and another one before the closing bracket, `)`

The last line
{{< highlight text "linenos=false" >}}
fmt.Print("It's against my programming to impersonate a deity.")
{{< /highlight >}}
is the only one that is correct. It has the full stop between `fmt` and
`Print`, both brackets, `(` and `)` and the string is surrounded by double
quote marks, `"`.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

A string between `"` marks is called a __interpreted string literal__ in Go.

{{% panelInfoTitle title="Advanced Class Exercise" %}}
Ask the class to write down the output of these `fmt.Println` and `fmt.Print`
statements.
{{< highlight text "linenos=false" >}}
fmt.Println("Ready are you? What know you of ready? For eight hundred years")
fmt.Print("have I trained Jedi. ")
fmt.Print("My own counsel will I keep on who is to be trained. ")
fmt.Println("A Jedi ")
fmt.Println("must have the deepest commitment,")
fmt.Print(" the most serious mind. ")
fmt.Print("This one, a long time")
fmt.Println(" have I watched. ")
fmt.Println("All his life has he looked")
fmt.Println("away... to the future, to the horizon. Never his mind on where he")
fmt.Println("was. ...Hmm? On what he was doing.")
{{< /highlight >}}
{{% expandingButton id="print-answers" name="Answers" %}}
{{< highlight text "linenos=false" >}}
Ready are you? What know you of ready? For eight hundred years
have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi
must have the deepest commitment,
 the most serious mind. This one, a long time have I watched.
All his life has he looked
away... to the future, to the horizon. Never his mind on where he
was. ...Hmm? On what he was doing.
{{< /highlight >}}
Notice the space at the start of the fourth line.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### The `stringfun` example program
##### Notes for slides 9 and 10
Lets look at the `stringfun.go` program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `stringfun.go` code" %}}
{{< highlight go "linenos=table" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("The stringfun program shows you how to use strings.")
	fmt.Println("")
	fmt.Println("An example of printing words with the Println function.")
	fmt.Println("These words appears on one line, with a new line at the end.")
	fmt.Println("These words appear on the next line because of the the new line.")
	fmt.Println("Both lines are printed using the Println fuunction.")
	fmt.Println("The Println function always take a new line at the end.")
	fmt.Println("")
}
{{< /highlight >}}
{{% /codeFigure %}}

You should largely be able to understand this program. The structure is
identical to the `numbers.go` program introduced in the [Numbers lesson]({{< relref "lessons/KS2/lower/numbers.md" >}})
and the [Numbers teacher notes]({{< relref "teachernotes/KS2/lower/numbers.md" >}}). The
program uses the same `Println` function from the `fmt` or format package as
was used previously to print to the screen. The only significant difference is
that the strings printed by each of the `Println` functions is different,
compared to the `numbers.go` program.

Lines 1 to Line 6 define the `main` package and imports the `fmt` package as
before.

Line 7 is again the `main` function. The program begins execution here.

Lines 8 to line 15 are example uses of the `fmt.Println` function to print
strings to the terminal. The `fmt.Println` statements all follow the same
pattern.

The expected output of the program is

{{< highlight text "linenos=false" >}}
The stringfun program shows you how to use strings.

An example of printing words with the Println function.
These words appear on one line, with a new line at the end.
These words appear on the next line because of the new line.
Both lines are printed using the Println function.
The Println function always take a new line at the end.

{{< /highlight >}}

### Plenary
#### Notes for slide 11

Yes the string

{{< highlight text "linenos=false" >}}
"The word I’m searching for, I can’t say, because there’s preschool toys present."
{{< /highlight >}}

is correct.

No, the `fmt.Println` statement

{{< highlight text "linenos=false" >}}
fmt Println "How did I get stuck with you as a moving buddy?)
{{< /highlight >}}

is incorrect. The statement is missing a period between `fmt` and `Println`.
The statement is missing the opening bracket, `(`. The statement is missing
the closing inverted commas. The correct statement would be

{{< highlight text "linenos=false" >}}
fmt.Println("How did I get stuck with you as a moving buddy?")
{{< /highlight >}}

`fmt.Println` prints a string and then prints a newline. Further output
will appear on the new line.

The example string would be printed with a `fmt.Println` statement  like this
{{< highlight text "linenos=false" >}}
fmt.Println("In a galaxy far far away...")
{{< /highlight >}}
