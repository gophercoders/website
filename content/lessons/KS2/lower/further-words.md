+++
Categories = ["Fundamentals"]
Description = "How to use strings"
Tags = []
author = "Owen"
concepts = ["Strings"]
date = "2015-03-24T12:29:49Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "and strings"
title = "More Words"
notesfor = "further-words"
lessonplan = "further-words"
slides = "further-words"
lessonnumber = "4"
+++
### What You are Going to Learn?
In the [last]({{< relref "lessons/KS2/lower/words.md">}}) lesson you learned
what a string was and the pattern that all strings must follow in Go.

In this lesson you are going to practice fixing some mistakes in programs that
use strings. You will also learn an approach to fixing syntax errors.
<!--more-->
{{< panelWarningTitle title="Important" >}}
You must have completed the [Words]({{< relref "lessons/KS2/lower/words.md">}})
lesson before you will be able to complete this lesson.
{{< /panelWarningTitle >}}

### What is a String?
Each letter, number or symbol on the keyboard is called a character. A string
is a sequence of these letters, numbers or symbols. Anything that can
by typed on a keyboard is considered a string.

Each character in every human language has a unique number. The number is
defined by the Unicode character encoding. The computer can only process
numbers so it works with these unique numbers, and not with the letters or
symbols themselves. This means that a string is also a sequence of numbers.

Because the concept of a character is different for different
languages, for example Chinese uses logograms, Go uses the term __rune__
instead of character.

A string in Go is therefore a sequence of runes.

{{< panelInfoTitle title="Now it is your turn" >}}
The letters A, z and the symbols %, * and # can all be represented by
numbers. Using The [Unicode Table](http://unicode-table.com/en/) you can find
out the numbers used for these letters and symbols.

{{< expandingButton id="unicode-answers" name="Answer" >}}
They are:

A is 65

z is 122

% is 37

\* is 42

\# is 35
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### The Pattern to Create a String in Go
A string in Go must be typed inside inverted commas, one at each end of the
string. Like this

{{< highlight go "linenos=false" >}}
"Strings, I see you now"
{{< /highlight >}}

The string must also be typed on one line. This string would be illegal.

{{< highlight go "linenos=false" >}}
"A horse, a horse,
my kingdom for a horse"
{{< /highlight >}}

This is a pattern. All strings in Go must follow this pattern. If the string
does not, it is a __syntax error__.

To turn the line

{{< highlight text "linenos=false" >}}
I have been chosen! Farewell, my friends. I go on to a better place.
{{< /highlight >}}

into a string, you need to surround it in inverted commas. Like this

{{< highlight text "linenos=false" >}}
"I have been chosen! Farewell, my friends. I go on to a better place."
{{< /highlight >}}

{{< panelInfoTitle title="Now it is your turn" >}}
There are two mistakes in this example string

{{< highlight text "linenos=false" >}}
I don't believe that man's
ever been to medical school!"
{{< /highlight >}}

Can you find them?

{{< expandingButton id="string-answers" name="Answer" >}}
The first mistake is the string is incorrectly written on two lines.
Remember a string must be typed on one line only.
The second mistake is the string is missing an inverted comma at the start
of the string. It would be correctly written like this

{{< highlight text "linenos=false" >}}
"I don't believe that man's ever been to medical school!"
{{< /highlight >}}
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### The Pattern to Print a String in Go
Printing a string requires
the use of one of two functions. The two functions are called `fmt.Print` and
`fmt.Println`. Printing to the screen is a type of __output__.

The functions are used like this

{{< highlight go "linenos=false" >}}
fmt.Println("First string")
fmt.Print("and second string.")
{{< /highlight >}}

These lines are called __statements__.

The pattern to print to the screen is this. The statement always starts with
`fmt.Print` or `fmt.Println`. The case is significant, so the spelling must
be exactly as shown. There must be a full stop between the `fmt` and the
`Println` or `Print`. The string you want to print is in between the brackets,
the `(` and `)`.

Remember, the `fmt.Println` and `fmt.Print` functions are not the same. The
`fmt.Print` prints the string that you put in between the brackets. The next
`fmt.Print` or `fmt.Println` function will continue to print on the same line.

The `fmt.Println` function also prints the string that you put in between
the brackets but also takes a new line at the end. The next
string that you print with `fmt.Println` or `fmt.Print` will be printed
on the next line.

{{< panelInfoTitle title="Now it is your turn" >}}
If you had typed this into a program (ignore the line numbers, they are for
illustration only)

{{< highlight go "linenos=table" >}}
fmt.Println("Printed on Line 1")
fmt.Print("Printed on Line 2")
fmt.Println(" also printed on Line 2")
fmt.Println("Printed on Line 3")
{{< /highlight >}}

What do you think the output would be? Can you explain why?

{{< expandingButton id="print-answers" name="Answer" >}}
The output would be:

{{< highlight text "linenos=table" >}}
Printed on Line 1
Printed on Line 2 also printed on Line 2")
Printed on Line 3
{{< /highlight >}}

The `fmt.Print` function does take a new line at the end, so lines 3 and 4
in the program produce line 3 in the output.
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### Syntax Errors
If a `fmt.Println` or `fmt.Print` statement does not follow the correct pattern
there is an error. This is called a syntax error. Go will __not__ run a program
that contains any syntax errors. Your program must be free of syntax errors
first.

Following this pattern is like following the correct spelling in English
writing. If the spelling is wrong the writing will not make sense.

Here are couple of ways to find syntax errors.

* The programmer looks closely at the program and finds then. This is
ultimately what is required. You will become better at spotting and correcting
these mistakes with practice.
* The programmer can notice that the syntax highlighting in their
editor is not correct. This is an attempt by the editor to show the programmer
that there is likely a syntax error.
* Code review - the programmer asks a friend to review his source code. A fresh pair of
eyes is often a valuable tool itself!
* The programmer can also try to run the program. In this case Go will find
the syntax errors for the programmer and report the line with the syntax error.
This approach is a double edged sword. It is very effective, but there can be
many error reports. The first syntax error will often cause further lines in
the program to contain syntax errors. We are going to show you an example of
this in a minute.

Fixing a syntax error is much simpler than finding it. The line in the source code file
that contains the error must be found and edited to remove the error.
The source code file then needs saving again. Another attempt to run the program
can now be made. If no more syntax errors exist the program will run. Otherwise you
have to repeat the process with the next error.

{{< panelInfoTitle title="The Relationship to Debugging" >}}
Fixing a syntax error is __not__ debugging. But they are related. Debugging is
the act of correcting the logic of program only when it runs. A
syntax error completely prevents the program from running.
So fixing a syntax error is not debugging.
{{< /panelWarningTitle >}}

### The `badstring` program

This is the `badstring.go` program. The program contains syntax errors and will
not run until these are fixed.


{{< codeFigure caption="Fig-1. The `badstring.go` code" >}}
{{< highlight go "linenos=table" >}}
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
{{< /highlight >}}
{{< /codeFigure >}}

{{< panelInfoTitle title="Now it is your turn" >}}
The `badstring` program will not run because it contains syntax errors.
Can you find them all?

{{< expandingButton id="badstring-hint" name="Hint" >}}
The syntax highlighting is indicating that something is wrong. The strings
should be the only text highligted in <span style="color:#ff00ff">pink</span>.
But this is not the case. <span style="color:#ff00ff">Pink</span> is also being
used to highlight the function's names, which should be black.
{{< /expandingButton >}}

{{< expandingButton id="badstring-answers" name="Answer" >}}
There are nine syntax errors in the `badstring` program. The errors are

1. Line 9 - the opening `(` is missing
2. Line 11 - the opening set of inverted commas is missing at the start of the string
3. Line 12 - `PRINTLN` is spelled incorrectly. It should be `Println`
4. Line 13 - Both sets of inverted commas are missing around the string
5. Line 14 - `FMT` is spelled incorrectly. It should be `fmt`
6. Line 15 - is missing closing inverted commas at the end of the string
7. Line 16 - is missing opening inverted commas at the start of the string
8. Line 20 - is missing both brackets, the `(` and `)`
9. Line 21 - is missing the `fmt.` before the `Println`
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

#### What would Go do?

But what would Go do if we tried to run the `badstring` without correcting the
errors? Lets find out.

First open your Terminal program or Command Prompt. In your terminal you need
to change to the location of your Go Workspace.
To do this you need to type

{{< panelPrimaryTitle title="On Linux, Raspberry Pi and Mac OS X" >}}
{{< highlight sh "linenos=false" >}}
cd $GOPATH/src/
{{< /highlight >}}
{{< /panelPrimaryTitle >}}

{{< panelSuccessTitle title="On Windows" >}}
{{< highlight sh "linenos=false" >}}
cd %GOPATH%\src\
{{< /highlight >}}
{{< /panelSuccessTitle >}}

Now you need to make a new directory. We need to call this `badstring` after
the program we will write. Then we need to change directory into the new
`badstring` directory.

{{< highlight sh "linenos=false" >}}
mkdir badstring
cd badstring
{{< /highlight >}}

Now you need to start your editor, either Atom or LiteIDE

{{< panelPrimaryTitle title="On Linux, Windows and MacOS X" >}}
{{< highlight sh "linenos=false" >}}
atom badstring.go
{{< /highlight >}}
{{< /panelPrimaryTitle >}}

{{< panelSuccessTitle title="On Raspberry Pi" >}}
{{< highlight sh "linenos=false" >}}
liteide badstring.go
{{< /highlight >}}
{{< /panelSuccessTitle >}}

Once you have typed the program in, you need to save it. Once you have saved it
you need to run it with:

{{< highlight sh "linenos=false" >}}
go run badstring.go
{{< /highlight >}}

When you attempt to run the program you should see this.

{{< codeFigure caption="Fig-2. The output from the uncorrected `badstring.go` program" >}}
{{< highlight text "linenos=false" >}}
./badstring.go:9: syntax error: unexpected string literal, expecting semicolon or newline or }
./badstring.go:11: syntax error: unexpected name, expecting )
./badstring.go:11: syntax error: unexpected ?
./badstring.go:11: newline in string
./badstring.go:13: syntax error: unexpected name, expecting )
./badstring.go:15: newline in string
./badstring.go:16: syntax error: unexpected name, expecting )
./badstring.go:16: newline in string
./badstring.go:20: syntax error: unexpected string literal, expecting semicolon or newline or }
{{< /highlight >}}
{{< /codeFigure >}}

{{< defaultNote >}}

You read the lines like this
````
filename:line number:error message
````
So the filename is the `./badstring.go` in this case. The filename includes the
path, in this case the `./`.
{{< /defaultNote >}}

If you look at the error messages it correctly tells you that line 9 has a
syntax error. However if you look at the error message it does not make
the error immediately apparent. Neither is the solution apparent.

Also notice that the errors snowball. There errors on line 9, 11, 13, 15, 16
and 20 are found, but the ones on lines 12, 14, and 21 are masked by the
earlier errors.

This output is typical of a program that contains syntax errors.

### How does Anyone Solve this?

First don't panic! You can learn how to use this output to help you find
the errors. You just need to take three steps.

The first step is to learn the patterns. The error messages tell you
where you __might__ have an error. We say __might__ because this where Go
detected the error. The cause may be several lines before.

The second part is to be systematic and logical. The computer is _not_ wrong,
there is a reason for the error somewhere in the program. Your task
is to find it and correct the mistake. You need to look very
carefully at the line. A single character added, missed or a letter in the
wrong case is sufficient to trigger a syntax error. You use the
patterns to find these mistakes.

The last part is to work in stages. You should try to solve one error at a
time. Start at the fist error and attempt to fix that. When you make a change
that you think fixes the mistake, save the program, and try to
run the program again. If you have fixed the error then there should
be one less the number of errors in the output. You know the error has been
fixed. Then you have to tackle the next error using the same
approach.

### The corrected `badstring` program

This is the corrected `badstring`program.

{{< codeFigure caption="Fig-3. The corrected `badstring.go` code" >}}
{{< highlight go "linenos=table" >}}
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
{{< /highlight >}}
{{< /codeFigure >}}

The output of the program is

{{< highlight text "linenos=false" >}}
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
{{< /highlight >}}

### The Programming Challenge
Now you know enough about strings to make your own changes. Are you ready
for your challenge?

{{< panelInfoTitle title="Now it is your turn" >}}

This is the output we want you to add to the end of the
`badstring` program. Start with the corrected version of the
`badstring` program and edit to so that it prints this at the end.

{{< highlight text "linenos=false" >}}
Lightning McQueen: Okay, here we go. Focus. Speed. I
am speed. One winner, forty-two losers. I eat losers
for breakfast. Breakfast? Maybe I should have had
breakfast? Brekkie could be good for me. No, no, no,
focus. Speed. Faster than fast, quicker than quick. I
am Lightning.
{{< /highlight >}}

That's it! We're not going to show you the solution you have to
work it out for yourself!

Good luck!
{{< /panelInfoTitle >}}
