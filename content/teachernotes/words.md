+++
Categories = []
Description = "These are the teacher notes for the Words lesson"
Tags = []
author = "Owen"
concepts = []
date = "2015-03-25T23:04:58Z"
keystage = []
notesfor = "words"
subtitle = "teacher notes"
title = "Words"
+++
### Why words second
After numbers words, or more correctly __strings__, are a fundamental concept in
computing. Computers need strings. Without them how could any information be conveyed between the computer and the user.

### Objective
The objective is to get the class to write a Go program to print strings to the terminal using the two different approaches that Go provides.

Creating this program will require the class to use the text editor (either Atom or LiteIDE) to create and save the source code file and the terminal/command line to run their program.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand the relationship between characters and numbers
* Understand what a string is
* Understand what an escape sequence is and why it is needed
* Write a simple program to print strings in using two different approaches
* Write a simple program that uses escape sequences in the string
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The example program is sufficiently simple that the little or no additional
teaching should be required beforehand. However the class needs to have covered.

* Basic keyboard/typing and mouse skills.
* The English alphabet
* Know the vowels of the English alphabet
* Know what a consonants is and recognize the ones in English alphabet

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are executed in order to print the results to the terminal window.

### Cross-Curricular links

The is a direct link to English language, both in terms of the letters and pronunciation. There is also a indirect list to Foreign languages, though the use of different non-latin writing systems. This can be further linked to Geography.

### Confusion between words and strings
We have used the term "word" initially because the class will be familiar with the
concept as used in English. However we have introduced the correct term of "string" as soon as possible. You should therefore use the term _string_ in your
teaching. The term string is universal across all programming languages. The Go documentation refers strictly to stings and runes. As such the terms need introduced as early as possible.

Strictly a _word_ in computer science is directly related to the hardware of the
computer and specifically to the CPU. A word in this context is a fixed number of
bits - now typically 32 or 64 bits. This is called the word size of the CPU. The
word size is the number of bits that the CPU will process as a single block. The
word size therefore matches the size, in bits, of the CPU's general purpose
registers.

CPU registers are small but fast to access memory elements within the CPU itself
rather than in the computers main memory. The registers are where all of the CPU's
instructions are carried out. Data must therefore be loaded from main memory into
the CPU registers, manipulated in the registers and stored back into main memory.
This is the called LOAD/STORE architecture.

The word size also determines the maximum amount of memory that the CPU can
physically access. A CPU with a 32 bit word size will have 32 so called address
lines - these are physical wires on the circuit board - connecting the CPU to the
memory. This limits the maximum about to memory to 2<sup>32</sup> bits or 4
gibibits (GiB).

### Unicode letter encoding
A computer can only process numbers. This restriction means that each letter must
be mapped to a unique number. The Unicode standard provides that mapping, for
every letter, symbol, and logograms for every written human language both modern and ancient.

The symbols for Greek (both modern an acient), Egyptian Hieroglyphs, cuneiform,
and musical notation are in the Unicode set. You class should be able to find
them using the [Unicode Table](http://unicode-table.com/en/) website.

When using the table the number along the horizontal and vertical access are
displayed in hexadecimal i.e. base 16. Hovering over any symbol in the full table
will display `U+0041 | Dec: 65`. The `U+0041` is the standard way to write a
unicode character, a capital `U` followed by a `+` followed by a number in
hexadecimal that represents the position in the table. The second part, the
`Dec: 65` is the decimal equivalent of the hexadecimal number.

This mapping via the Unicode table from letters of symbols used in writing to a
single unique number is an example of a character encoding. This is the key fact
that the pupils must grasp. Letters are represented by numbers through an
encoding.

{{% defaultNote %}}
You may see reference to other character encodings, notably ASCII, (American
Standard Code for Information Interchange), or a CodePage 1252 Windows LATIN 1.
These are alternative character encoding systems that have been superseded by
Unicode. These alternative systems only supported the Latin alphabet and where
limited to a maximum of 256 letters or symbols. Leaving non-Latin languages or
languages with much larger alphabets to devise their own incompatible encodings.
Unicode was created to unify this situation. The first 256 entries of the Unicode
table match (more or less) the Latin characters as defined in the ASCII set.
{{% /defaultNote %}}

### Escape sequences

Escape sequences are designed to solve a problem. If a string is defined as a
sequence or runes between double quote marks, `"..."` what do you do if the
string itself contains double quote marks? If we want to print this

<blockquote>She said "Hello".</blockquote>

We cannot create a string like this `"She said "Hello"."` because Go will
interpret the double quote before the H as the double quote mark that
marks the end of the string. Everything from the H until the last `"` will
then be treated as syntax error.

There is a similar problem with new lines, new lines cannot appear inside the
double quotes. The string must be written on a single line.

Escape sequences are the solution to this problem. They exist in almost all
programming languages. An escape sequence is a way to type a character that
would otherwise be illegal within the string.

Almost all strings are __interpreted string__ i.e. written between double quotes.
Go will scan these strings looking for escape sequences. If it finds one it will
replace the escape sequence with the correct rune when the program is run.

Raw strings are not as common, but are very useful if a large block of
pre-formatted text is to be displayed by a program.

In general you would expect your pupils to use a interpreted string in 99.9%
of all use cases.

### The example program

Lets look at the `stringfun.go` program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `stringfun.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("The stringfun program shows you how to use strings.")
	fmt.Println("")
	fmt.Println("This string appears on one line.")
	fmt.Println("This string is split across")
	fmt.Println("two lines using two PrintLn functions.")
	fmt.Println("You use the new line escape sequence to print on a new line like this.")
	fmt.Println("Line 1\nLine 2\nLine 3\nLine 4\n\n\nLine 5")
	fmt.Println("\tThis string uses a tab escape sequence at the start to indent the string.")
	fmt.Println("A new line escape sequence is typed \\n")
	fmt.Println("A backslash escape sequence is typed \\\\")
	fmt.Println("A double quote escape sequence is typed \\\" you have to combine the backslash")
	fmt.Println("and double quote escape sequences to print this.")
	fmt.Println(`This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.`)
fmt.Println("This string is joined" + " to this string")
}
{{< /hilight >}}
{{% /codeFigure %}}

You should largely be able to understand this program. The structure is identical
to the `numbers.go` program introduced in the [Numbers lesson]({{< relref "post/numbers.md" >}})
and the [Numbers teacher notes]({{< relref "teachernotes/numbers.md" >}}). The
program uses the same `Println` function from the `fmt` or format package as was
used previously to print to the screen. The only significant difference is
that the strings printed by each of the `Println` functions is different,
compared to the `numbers.go` program. The new strings also use escape sequences.

Lines 1 to Line 6 define the `main` package and imports the `fmt` package as
before.

Line 7 is again the `main` function. The program begins execution here.

Lines 8 to line 13 are example uses of the `Println` function, to print strings
without escape sequences to the terminal.

Line 14 is the first significant line.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Line 1\nLine 2\nLine 3\nLine 4\n\n\nLine 5")
{{< /hilight >}}

Here we are using an escape sequence `\n` to force the terminal to take a new
line after each of "Line 1" etc. is printed to the terminal. Any number of escape
sequences can be chained, as shown to force the terminal to take three
consecutive new lines before printing "Line 5".

Line 15 is similar , except it used the `\t` escape sequence to the print a tab
character at the start of the string. This indents the remaining text in the
output.

Lines 16, 17 and 18 show how to use the escape sequence for an backslash.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("A new line escape sequence is typed \\n")
fmt.Println("A backslash escape sequence is typed \\\\")
fmt.Println("A double quote escape sequence is typed \\\" you have to combine the backslash")
{{< /hilight >}}

In each case the escape sequence `\\` results in a single `\` being printed to
the terminal. Line 18 also demonstrates the escape sequence for a double
quote `\"`.

Lines 20, 21, 22, and 23 are an example of a raw string.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
    fmt.Println(`This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.`)
{{< /hilight >}}

Whatever is typed between the <code>&#96;</code> is printed verbatim, including
any new lines and any quotes or tabs without the need for any escape sequences.

The last line, Line 24 is an example of using the `+` operator to join strings
together. The example is not a typical use case of this. The typical use
case for string concatenation is to joint strings together where one or more
of the strings has been generated at runtime. However we won't be able to
demonstrate this until variables are introduced.

### The Strings Exercise

This is a simple extension to the existing `stringfun.go` program. The pupils
have all of the knowledge they need to do this in the `stringfun` program
apart form the last task where they will need to look back at the `numbers`
program to see how to use the `Print` function.

As before we recommend that the pupils make small changes to the existing
program by adding one line at a time. The pupils should ensure that they can
run the program after each line has been added. Advice for helping them do this
can be found in the [Numbers teacher notes]({{< relref "teachernotes/numbers.md#the-numbers-exercise" >}}) The exception is the
raw string, which must be added as a block i.e.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(`The consonants that are used most in the English alphabet are:
't'
'n'
's'
'h'
'r'`)
{{< /hilight >}}

Must be added as a single edit and saved before the program will run.

Again the exercise is about patterns. There are three patterns this time.
Firstly that an interpreted string is always typed between double quotes.
Secondly that an escape sequence always starts with a backslash `\` followed
by exactly one character - the `t`, `n`, `"`or `\\`.
Lastly that a raw string is enclosed in backticks, <code>&#96;</code>.

To print each of these they must also be in between the parentheses of the
`Println` or `Print` function like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("...")
fmt.Println("....\n...")
fmt.Println(`...`)
{{< /hilight >}}

A suggested solution the the exercise would be the `extra-strings.go` program shown below.

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("The stringfun program shows you how to use strings.")
	fmt.Println("")
	fmt.Println("This string appears on one line.")
	fmt.Println("This string is split across")
	fmt.Println("two lines using two PrintLn functions.")
	fmt.Println("You use the new line escape sequence to print on a new line like this.")
	fmt.Println("Line 1\nLine 2\nLine 3\nLine 4\n\n\nLine 5")
	fmt.Println("\tThis string uses a tab escape sequence at the start to indent the string.")
	fmt.Println("A new line escape sequence is typed \\n")
	fmt.Println("A backslash escape sequence is typed \\\\")
	fmt.Println("A double quote escape sequence is typed \\\" you have to combine the backslash")
	fmt.Println("and double quote escape sequences to print this.")
	fmt.Println(`This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.`)
	fmt.Println("This string is joined" + " to this string")

	fmt.Println("Extra strings....")
	fmt.Println("The vowels in the English alphabet are:")
	fmt.Println("a, e, i, o and u.")
	fmt.Println(`The consonants that are used most in the English alphabet are:
't'
'n'
's'
'h'
'r'`)
	fmt.Println("The letters that are used least in the English alphabet are:")
	fmt.Println("z\n\tq\n\t\tx")
	fmt.Println("Join these words together:")
	fmt.Print("\"summer\" and \"time\" to make ")
	fmt.Println("\"summer" + "time\"")
}
{{< /hilight >}}

This is not the only solution to the problems. Lines 27 and 28 can be combined
onto a single line with the use of an new line escape sequence,`\n` in line 27.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
	fmt.Println("The vowels in the English alphabet are:\na, e, i, o and u.")
{{< /hilight >}}

Similarly lines 35 and 36 and lines 37, 38 and 39.

Note the use of the double quotes escape sequences in lines 38 and 39 so that
the correct number of quotes appear in the output.

### Answers to supplementary questions
Letter frequency analysis is used in cryptography. If you have the encrypted
message but know that the original message was written in English, for simple
encryptions you can use the letter frequencies to break thw code. If the letter
"x" appears with roughly the same frequency as the letter "e" does in English,
then it suggests that "x" is really the letter "e".
