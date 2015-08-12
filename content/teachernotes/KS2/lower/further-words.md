+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the Words lesson"
Tags = []
author = "Owen"
concepts = ["strings"]
date = "2015-03-25T23:04:58Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-words"
subtitle = "Fix and Adapt Teacher Notes"
title = "Further Words"
slides = "further-words"
lessonplan = "further-words"
lessonnumber = "4"
+++
### Objective
The objective is to reinforce the classes knowledge of strings and
how they are printed in Go. This is achieved by correcting a program that
will not run. This is used to introduce the concept of a syntax errors.
Syntax errors are a prelude to debugging.

The example program will again require the class to use the text editor (either
Atom or LiteIDE) to create and save the source code file and the
terminal/command line to run their program.
<!--more-->

### String Reinforcement

This lesson reinforces and extends the concepts introduced in the previous
[Words]({{< relref "lessons/KS2/lower/words.md" >}}) lesson using a
"Fix and Adapt" approach.

The pupils are introduced to a program that does not work and are challenged
to find the mistakes and correct them. This both reinforces the patterns
learned in the previous lesson and encourages their logical thinking.

This is used to introduce the concept of a __syntax error__ which is a prelude
to introducing debugging.

The logical thinking is further reinforced by challenging the pupils to update
the program given only the output.


### Learning outcome
The class should be able to:

* Develop their knowledge of the pattern used to print a string in Go
* Be able identify statements that do not follow the correct pattern
* Identify these lines as having syntax errors
* Be able to correct these lines so that the program runs
* Determine how to change a program given only the output. This starts to develop logical thinking and algorithms.
* Start their text editor
* Create a source code file
* Write a simple program to print strings
* Save a source code file
* Build and run their program
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The class _must_ have covered the [Words]({{< relref "lessons/KS2/lower/words.md" >}}) first.

The example program is sufficiently simple that the little or no additional
teaching should be required beforehand. However the class needs to have
covered.

* Basic keyboard/typing and mouse skills.
* The English alphabet

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are executed in order to print the results to the terminal window.

Logical thinking. The final challenge requires the pupils to think
logically and to work backwards for the desired output to make the required
changes to the program.

### Cross-Curricular links

The is a direct link to English language, both in terms of the letters and
pronunciation. There is also a indirect list to Foreign languages, though the
use of different non-latin writing systems. This can be further linked to
Geography.


### What is a String
##### Notes for slide 4
This is a summary of the key points of the [Words]({{< relref "lessons/KS2/lower/words.md" >}})
lesson.

Each letter, number or symbol on the keyboard is called a character. A string
is a sequence of these letters, numbers or symbols. Anything that the
pupils can type on a keyboard is considered a string.

Each character in every human language has a unique number. The number is
defined by the Unicode character encoding. The computer can only process
numbers so it works with these unique numbers, and not with the letters or
symbols themselves.

Because the concept of a character between languages can vary - for example Chinese uses
logograms - Go uses the term __rune__.

A string in Go is therefore a sequence of runes.

The letters A, z and the symbols %, * and # can all be represented by
numbers. Using The [Unicode Table](http://unicode-table.com/en/) you can find
out the numbers used for these letters and symbols. They are:

A is 65

z is 122

% is 37

\* is 42

\# is 35

Without any more context the numbers 65 and 81 can have _two_ meanings. They
could be the numbers used to represent the capital letter A and the capital
letter Q. Or they could just be the numbers 65 ad 81.

You should emphasise the use of the number to represent a letter though an
encoding.

### The string pattern
##### Notes for slide 5
A string in Go must be typed inside inverted commas, one at each end of the
string. Like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
"Strings, I see you now"
{{< /hilight >}}

The string must also be typed on one line. This string would be illegal.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
"My horse, my horse a
country for my horse"
{{< /hilight >}}

This is a pattern. All strings in Go must follow this pattern. If the string
does not it is a __syntax error__.

To turn the line

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
I have been chosen! Farewell, my friends. I go on to a better place.
{{< /hilight >}}

into a string, you simply need to enclose it in inverted commas. Like this

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
"I have been chosen! Farewell, my friends. I go on to a better place."
{{< /hilight >}}

There are two mistakes in the example string

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
I don't believe that man's
ever been to medical school!"
{{< /hilight >}}

The string is incorrectly written on two lines. Remember a string must be typed on
one line. Secondly, the string is a missing inverted commas at the start of the
string. It would be correctly written like this

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
"I don't believe that man's ever been to medical school!"
{{< /hilight >}}

### The Pattern to Print a String in Go
##### Notes for slide 6
Printing a string on the computer's terminal window as output requires
the use of one of two functions. The two functions are called `Print` and
`Println`. The functions are part of the `fmt` package, sort for format.
Printing to the screen is a form of output.

The functions are used like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("First string")
fmt.Print("and second string.")
{{< /hilight >}}

These lines are called _statements_.

The pattern to print to the screen is this: the statement always starts with
`fmt.Print` or `fmt.Println`. The case is significant, so the spelling must
be exactly as shown. There must be a period between the `fmt` and the `Println`
or `Print`. The string to be printed appears between the brackets, the `(`
and `)`.

The `fmt.Println` and `fmt.Print` functions are not the same. The
`fmt.Print` prints the string that you put in between the brackets. The next
`fmt.Print` or `fmt.Println` function will continue to print on the same line.

The `fmt.Println` function also prints the string that you put in between
the brackets but also takes a new line at the end. The next
string that you print with `fmt.Println` or `fmt.Print` will be on the next
line.

If you had typed this into a program (ignore the line numbers, they are for
illustration only)

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
fmt.Println("Printed on Line 1")
fmt.Print("Printed on Line 2")
fmt.Println(" also printed on Line 2")
fmt.Println("Printed on Line 3")
{{< /hilight >}}

The output would be this

{{< hilight lang="txt" style="edit-gedit" lineNumbers="y" >}}
Printed on Line 1
Printed on Line 2 also printed on Line 2")
Printed on Line 3
{{< /hilight >}}

The `fmt.Print` function does take a new line at the end, so lines 3 and 4
in the program produce line 3 in the output.

### Syntax Errors
##### Notes for slide 7

If a `fmt.Println` or `fmt.Print` statement does not follow the correct pattern
there is an error. This is called a syntax error. Go will __not__ run a program
that contains any syntax errors. The program must be free of syntax errors
first.

Following this pattern is akin to following correct spelling in English
writing. If the spelling is wrong the writing does not make sense.

There are a
couple of ways to find syntax errors. See how many of these
your class can find. They are

* The programmer looks closely at the program and finds then. This is
ultimately what is required. As the pupils learn various syntax patterns they
will begin to write statements correctly in the fist instance and they will
become better at spotting and correcting these mistakes.
* The programmer can notice that the syntax highlighting in their
editor is not correct. This is an attempt by the editor to show the programmer
that there is likely a syntax error. Obviously this only apply if the editor in
use supports syntax highlighting. Both atom and LiteIDE do.
* Code review - the programmer asks a friend to review his source code. A fresh pair of
eyes is often a valuable tool itself! This is really the same as the first method.
* The programmer can also try to run the program. In this case Go will find
the syntax errors for the programmer and report the line with the syntax error.
This approach is a double edged sword. It is very effective, but the error
reports snowball. The first syntax error will often cause further lines in the
program to contain syntax errors. The example `badstring` program demonstrates
this behaviour.

Fixing a syntax error is much simpler than finding it. The line in the source code file
that contains the error must be edited to remove the error. The source code
file then needs saving again. Another attempt to run the program can now be
made. If no syntax errors exist the program will run. Otherwise the cycle must
repeat.

{{% panelWarningTitle title="The Relationship to Debugging" %}}
Fixing a syntax error is __not__ debugging. But they are related. Strictly
debugging is the act of correcting the logic of program _once_ it runs. A
syntax error prevents the program form ever running. In this sense fixing a
syntax error is not debugging.

But this does act as a prelude to debugging. The edit, attempt to run, edit
again to fix the mistake cycle is the same.

This is one of the advantages of Go. If Go detects a single syntax error in the
program it will not attempt to run it. This is in contrast to Python which will
run the program successfully until it encounters the syntax error. The error
could of course be tens of thousands of lines into the program meaning the
program may have already performed some significant task up to the point of
the error.
{{% /panelWarningTitle %}}

### The `badstring` example program
##### Notes for slides 7 and 8
Lets look at the `badstring.go` program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `badstring.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
    fmt.Println("Lightning McQueen: I'm a very famous race car!")
    fmt.Println "Luigi: You are famous race car? A real race car?")
    fmt.Print("Lightning McQueen: Yes, I'm a real race car, ")
    fmt.Println(what do you think? Look at me.")
    fmt.PRINTLN("Luigi: I have followed racing my entire life, my whole life")
    fmt.Println(Lightning McQueen: Then you know who I am. I am Lightning McQueen.)
    FMT.Println("Luigi: Lightning McQueen!")
    fmt.Println("Lightning McQueen: Yes! Yes!)
    fmt.Print(Luigi: I must scream it to the world, my excitement from the ")
    fmt.Println("top of someplace very high. Do you know many Ferraris?")
    fmt.Print("Lightning McQueen: No, no, no, they race on the European circuit; ")
    fmt.Println("I'm in the Piston cup.")
    fmt.Println"Lightning McQueen: What?"
    Println("Luigi: Luigi follow only the Ferraris.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The program contains syntax errors and will not run until these are fixed.
The syntax highlighting is indicating that something is wrong. The strings
should be the only text highlighted in <span style="color:#ff00ff">pink</span>.
But this is not the case. <span style="color:#ff00ff">Pink</span> is also being
used to highlight the function's names, which should be black.

The syntax errors in this program are

Line 9 - the opening `(` is missing
Line 11 - the opening set of inverted commas is missing at the start of the string
Line 12 - `PRINTLN` is spelled incorrectly. It should be `Println`
Line 13 - Both sets of inverted commas are missing around the string
Line 14 - `FMT` is spelled incorrectly. It should be `fmt`
Line 15 - is missing a closing inverted commas at the end of the string
Line 16 - is missing an opening inverted commas at the start of the string
Line 20 - is missing both brackets, the `(` and `)`
Line 21 - is missing the `fmt.` before the `Println`

If you attempted to run the program without first correcting the errors
the result would be this:

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
./badstring.go:9: syntax error: unexpected string literal, expecting semicolon or newline or }
./badstring.go:11: syntax error: unexpected name, expecting )
./badstring.go:11: syntax error: unexpected ?
./badstring.go:11: newline in string
./badstring.go:13: syntax error: unexpected name, expecting )
./badstring.go:15: newline in string
./badstring.go:16: syntax error: unexpected name, expecting )
./badstring.go:16: newline in string
./badstring.go:20: syntax error: unexpected string literal, expecting semicolon or newline or }
{{< /hilight >}}

{{% defaultNote %}}

The lines read like this
````
filename:line number:error message
````
So the filename is the `./badstring.go` in this case. The filename includes the
path, in this case the `./`.
{{% /defaultNote %}}

If you look at the error messages it correctly tells you that line 9 has a
syntax error. However if you look at the error message it does not make
the error immediately apparent. Neither is the solution apparent.

Also notice that the errors snowball. There errors on line 9, 11, 13, 15, 16
and 20 are found, but the ones on lines 12, 14, and 21 are masked by the
earlier errors.

This output is typical of a program that contains syntax errors.

### How does Anyone Solve this?

The solution to this is threefold. Firstly, the class needs to learn the patterns.
The error messages tell the programmer where they __might__ have an error.
We say __might__ because this where Go detected the error. The cause may be
several lines before.

The second part is to be systematic and logical. The computer is not wrong;
there is a reason for the error somewhere in the program. The programmer's task
is to find it and correct the mistake. The programmer needs to look very
carefully at the line. A single character added, missed or a letter in the
wrong case is sufficient to trigger a syntax error. The programmer uses the
patterns to find these mistakes.

The last part is to work in stages. A programmer tackles one error at a time.
They start at the fist error and attempt to fix that first. They make a change
that they believe fixes the mistake, save the program, and then attempt to
run the program again. If the error they attempted to fix is no longer present
and in general the number of errors has reduced by one, then the programmer
knows the error is fixed. They then tackle the next error using the same
approach.

### The corrected `badstring` program

This is the corrected `badstring`program.

{{% codeFigure caption="Fig-2. The corrected `badstring.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Lightning McQueen: I'm a very famous race car!")
	fmt.Println("Luigi: You are famous race car? A real race car?")
	fmt.Print("Lightning McQueen: Yes, I'm a real race car, ")
	fmt.Println("what do you think? Look at me.")
	fmt.Println("Luigi: I have followed racing my entire life, my whole life")
	fmt.Println("Lightning McQueen: Then you know who I am. I am Lightning McQueen.")
	fmt.Println("Luigi: Lightning McQueen!")
	fmt.Println("Lightning McQueen: Yes! Yes!")
	fmt.Print("Luigi: I must scream it to the world, my excitement from the ")
	fmt.Println("top of someplace very high. Do you know many Ferraris?")
	fmt.Print("Lightning McQueen: No, no, no, they race on the European circuit; ")
	fmt.Println("I'm in the Piston cup.")
	fmt.Println("Lightning McQueen: What?")
	fmt.Println("Luigi: Luigi follow only the Ferraris.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The output of the program is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Lightning McQueen: I'm a very famous race car!
Luigi: You are famous race car? A real race car?
Lightning McQueen: Yes, I'm a real race car, what do you think? Look at me.
Luigi: I have followed racing my entire life, my whole life
Lightning McQueen: Then you know who I am. I am Lightning McQueen.
Luigi: Lightning McQueen!
Lightning McQueen: Yes! Yes!
Luigi: I must scream it to the world, my excitement from the top of someplace very high. Do you know many Ferraris?
Lightning McQueen: No, no, no, they race on the European circuit; I'm in the Piston cup.
Lightning McQueen: What?
Luigi: Luigi follow only the Ferraris.
{{< /hilight >}}

### The 2nd Programming Challenge
#### Notes for slide 9
In order to solve this the pupils have to work logically. The pupils are shown
the output and challenged to work out how to change the program to print
the message. The pupils are being asked to come up with an __algorithm__
to do this. This is a trivial example of an algorithm.

{{% defaultNote %}}
Later lessons will focus specifically on algorithms. At this stage the term should
only be used in passing. Once variables, input, selection and repetition are
introduced the pupils will have sufficient knowledge to tackle algorithms.
{{% /defaultNote %}}

The clue to solving the challenge is on the slide. The slide says

<blockquote>"Change the badstring program to print this at the end"</blockquote>

The pupils should realise that they need to use `fmt.Println` statements to
change the program. They need to add these to the end of the `badstrings`
program.

To achieve this the following statements need to be added to the end
of the program - between the last `fmt.Println` line and before the closing
brace, `}`

The lines that need to be added are:

{{< hilight lang="go" style="edit-gedit" lineNumbers="" >}}
fmt.Println("Lightning McQueen: Okay, here we go. Focus. Speed. I")
fmt.Println("am speed. One winner, forty-two losers. I eat losers")
fmt.Println("for breakfast. Breakfast? Maybe I should have had")
fmt.Println("breakfast? Brekkie could be good for me. No, no, no,")
fmt.Println("focus. Speed. Faster than fast, quicker than quick. I")
fmt.Println("am Lightning.")
{{< /hilight >}}

Resulting in the following revised `badstrngs` program

{{% codeFigure caption="Fig-3. The extended `badstring.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Lightning McQueen: I'm a very famous race car!")
	fmt.Println("Luigi: You are famous race car? A real race car?")
	fmt.Print("Lightning McQueen: Yes, I'm a real race car, ")
	fmt.Println("what do you think? Look at me.")
	fmt.Println("Luigi: I have followed racing my entire life, my whole life")
	fmt.Println("Lightning McQueen: Then you know who I am. I am Lightning McQueen.")
	fmt.Println("Luigi: Lightning McQueen!")
	fmt.Println("Lightning McQueen: Yes! Yes!")
	fmt.Print("Luigi: I must scream it to the world, my excitement from the ")
	fmt.Println("top of someplace very high. Do you know many Ferraris?")
	fmt.Print("Lightning McQueen: No, no, no, they race on the European circuit; ")
	fmt.Println("I'm in the Piston cup.")
	fmt.Println("Lightning McQueen: What?")
	fmt.Println("Luigi: Luigi follow only the Ferraris.")

	fmt.Println("Lightning McQueen: Okay, here we go. Focus. Speed. I")
	fmt.Println("am speed. One winner, forty-two losers. I eat losers")
	fmt.Println("for breakfast. Breakfast? Maybe I should have had")
	fmt.Println("breakfast? Brekkie could be good for me. No, no, no,")
	fmt.Println("focus. Speed. Faster than fast, quicker than quick. I")
	fmt.Println("am Lightning.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The output of the revised program is now

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Lightning McQueen: I'm a very famous race car!
Luigi: You are famous race car? A real race car?
Lightning McQueen: Yes, I'm a real race car, what do you think? Look at me.
Luigi: I have followed racing my entire life, my whole life
Lightning McQueen: Then you know who I am. I am Lightning McQueen.
Luigi: Lightning McQueen!
Lightning McQueen: Yes! Yes!
Luigi: I must scream it to the world, my excitement from the top of someplace very high. Do you know many Ferraris?
Lightning McQueen: No, no, no, they race on the European circuit; I'm in the Piston cup.
Lightning McQueen: What?
Luigi: Luigi follow only the Ferraris.
Lightning McQueen: Okay, here we go. Focus. Speed. I
am speed. One winner, forty-two losers. I eat losers
for breakfast. Breakfast? Maybe I should have had
breakfast? Brekkie could be good for me. No, no, no,
focus. Speed. Faster than fast, quicker than quick. I
am Lightning.
{{< /hilight >}}


### Plenary
##### Notes for slide 10

There are two syntax errors in the line

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("By the way, Penfold, your library books are overdue!
{{< /hilight >}}

The line is missing both the inverted comma at the end of the string and the
closing bracket, `)`. The corrected line would be

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("By the way, Penfold, your library books are overdue!")
{{< /hilight >}}

There is only one intended error in the second line

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
fmt.Print(Ah, that'll be Colonel K. Let's see what he wants, Penfold.)
{{< /hilight >}}

The intended error is that the inverted commas around the string are missing.
The unintended error is that the statement as it appears on the slide
is across two lines. The corrected line would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
fmt.Print("Ah, that'll be Colonel K. Let's see what he wants, Penfold.")
{{< /hilight >}}

The difference between `fmt.Println` and `fmt.Print` is this. `fmt.Println`
prints a string and then prints a new line. Further output will be one
a new line. `fmt.Print` prints the string and _does not_ take a new line.
Further output will be on the same line.

The output from the lines is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Will it be
Isaac Newton 1: Penfold nil? Tune in next time to find out!
{{< /hilight >}}

Remember that a the output continues on the same line after `fmt.Print` has
printed a string.
