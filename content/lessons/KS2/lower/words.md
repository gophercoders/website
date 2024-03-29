+++
Categories = ["Fundamentals"]
Description = "How to use strings"
Tags = []
author = "Owen"
concepts = ["Strings"]
date = "2015-03-23T12:29:49Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "and strings"
title = "Words"
notesfor = "words"
lessonplan = "words"
slides = "words"
lessonnumber = "3"
+++
### What You are Going to Learn?
In the last lesson we showed you how to use numbers in your programs. Now we
want to talk about letters and words.
<!--more-->
### Strings not words
In computer science the term _word_ relates to the
{{< abbr title="Central Processing Unit" >}}CPU{{< /abbr >}}.
A word is the number of __bits__ that the CPU can process in a single
operation.

A word like a word or a sentence in English is called a __string__ in
programming.

You use strings to print words letters, numbers and symbols to the screen.
A string contains the __data__ that the computer should print to the screen.
It does not tell the computer what size to print strings or which font to use.

### What is a Character?
Before we talk about stings we have to talk about __characters__. Characters
are the letters, numbers, punctuation and mathematical symbols on your keyboard
that a computer can print to the screen.

Each character is represented by a __number__ in a table. Each character in the
table has a unique number. The numbers are assigned by the _Unicode_ standards
committee.

The [Unicode table](http://unicode-table.com/en/) website contains the complete
table. Open the table in you web browser.

{{< defaultNote >}}
The table is very large so it may be slow to load.
{{< /defaultNote >}}

If you find the capital letter `A` and hover over it with your mouse you will
see `U+0041 | Dec: 65`. The important part is `Dec: 65` which tells you that
the capital letter `A` is number 65 in the table.
A capital letter `B` is 66. A number `1` is at number 49. An explanation mark,
`!`, is at number 33 in the table. A space is one before at number 32.

{{< panelInfoTitle title="Now it is your turn" >}}
Using the [Unicode table](http://unicode-table.com/en/), can you find the
numbers that are used to represent these letters?

X

Y

z

4

&

?

{{< expandingButton id="unicode-values" name="Answer" >}}
X is the number 88

Y is the number 89

z is the number 122

4 is the number 52

& is the number 38

? is the number 63
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

So when you type a letter `A` the computer knows you really mean number 65. If
you remember that computers can only process numbers. This is why we have to
convert what you see as a letter to a number. This is called an __encoding__.
The letters are encoded or represented by numbers.

You might be wondering why this table is so large. It is because the table has
to work for _all_ of the world's languages.

The Chinese language has around 3500 characters, actually called logograms, in
common use but has as many as 109,000 in total. These are all in the table. To
make these easy to find you need to [group the table by
"block"](http://unicode-table.com/en/blocks/). Once you do that you need to
find the block called ["CJK Unified
Ideographs"](http://unicode-table.com/en/blocks/cjk-unified-ideographs/) to see
just some of them.

The Japanese alphabet appears twice, once for each of the two native Japanese
writing systems of [Hiragana](http://unicode-table.com/en/blocks/hiragana/) and
[Katakana](http://unicode-table.com/en/blocks/katakana/).

There is also the [Arabic](http://unicode-table.com/en/blocks/arabic/),
[Hebrew](http://unicode-table.com/en/blocks/arabic/) and
[Russian](http://unicode-table.com/en/blocks/cyrillic/) alphabets along with
many more as well as all of the [mathematical
symbols](http://unicode-table.com/en/blocks/mathematical-operators/).

{{< panelInfoTitle title="Now it is your turn" >}}
Using the [Unicode table](http://unicode-table.com/en/) can you find the
numbers that are used to represent these letters from other languages?

 Ŋ

Ɣ

ɸ

{{< expandingButton id="unicode-foreign-values" name="Answer" >}}
 Ŋ is number 331

Ɣ is number 194

ɸ is number 632
{{< /expandingButton >}}
{{< /panelInfoTitle >}}


So a character might not be an English letter as you think of it. A character
could also be an logogram or a mathematical symbol.

To make things clear, Go uses the term __rune__ to represent any of the letters,
Iogograms and symbols in the Unicode table. Rune is the term used in the Go
documentation. This means that in Go a string is defined as a sequence of
__runes__ not a sequence of characters.

### What is a String?
By now you might be asking just what is a string? A string is a sequence of
__runes__. The __runes__ are strung together. This is why we call them
__strings__.

Unlike in English, a string can contain letters, numbers, spaces, and punctuation.
As string can contain any sequence of any length that can be typed on a
keyboard.

These are all valid strings

{{< highlight text "linenos=false" >}}
Bananaman and Danger Mouse
Numb3r5 and l3tt3r5
1+1 equals two
nonsense line this $)djkasdkjjadai)($£())
you@your.email.address.com
{{< /highlight >}}


### How to use strings in Go
If you have already tried the [Numbers]({{< relref "lessons/KS2/lower/numbers.md" >}}) you
have already been using stings!

The simplest way is to create a string use inverted commas, `"`, like this:

{{< highlight go "linenos=false" >}}
"This is a string!"
{{< /highlight >}}

This is the approach you have seen before. Do you notice that there is a
pattern? You must use inverted commas, `"` at the start and the end of the
string.

Strings also have to be typed on one line. This string is illegal because it
is typed across more than one line

{{< highlight go "linenos=false" >}}
"This is a string
is illegal because it is
typed one more than one line."
{{< /highlight >}}

This is another pattern. The string must be typed on one line.
These two patterns are some of the __syntax__ rules of Go. If a string
does not follow this pattern there is a __syntax error__.

{{< panelInfoTitle title="Now it is your turn" >}}
Now you know what a string should look like, which of these strings are correct?
Can you work find the mistakes?

{{< highlight text "linenos=false" >}}
"You know, that little droid is going to cause me a lot of trouble."

If you’re saying that coming here was a bad idea, I’m starting to agree with
you.”

"He is as clumsy as he is stupid!

"For over a thousand generations, the Jedi were the guardians of peace and
justice in the Old Republic — before the dark times. Before the Empire."
{{< /highlight >}}
{{< expandingButton id="badstring-answers" name="Answers" >}}
The first string

{{< highlight text "linenos=false" >}}
"You know, that little droid is going to cause me a lot of trouble."
{{< /highlight >}}

is correct. There are double quotes marks `"` at the start and end of the
string.

The second string

{{< highlight text "linenos=false" >}}
If you’re saying that coming here was a bad idea, I’m starting to agree with
you.”
{{< /highlight >}}

is wrong. There are inverted commas, `"` at the end of the string but
the inverted commas, `"`, at the start of the string is missing. The
string can contain commas and apostrophes.

The third string

{{< highlight text "linenos=false" >}}
"He is as clumsy as he is stupid!
{{< /highlight >}}

is also wrong. The double quote mark, `"`, at the end of the string is
missing.

The last one is tricky.

{{< highlight text "linenos=false" >}}
"For over a thousand generations, the Jedi were the guardians of peace and
justice in the Old Republic — before the dark times. Before the Empire."
{{< /highlight >}}

The string is wrong because it is typed over two lines. Strings can only
by typed in a single line.
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### How to Print a String

You can print a string on the computers terminal window using two
__functions__. The two functions are called `fmt.Print` and `fmt.Println`.

You use the functions like this

{{< highlight go "linenos=false" >}}
fmt.Println("This is a string!")
fmt.Print("and so is this.")
{{< /highlight >}}

These lines are called __statements__. All programs consist of a sequence
of statements. These are the Go instructions to the computer.

You need to tell both functions the string you want to print. Can you see
the pattern for this?

You have to type your string between the brackets, the `(` and `)`. You must
also type everything on one line. The line always starts with `fmt.Print`
or `fmt.Println`. This is the pattern for printing to the
screen.

{{< panelInfoTitle title="Now it is your turn" >}}
Now can you spot which of these lines is wrong? Can you explain your answers?

{{< highlight go "linenos=false" >}}
fmt.Println "You are a member of the rebel alliance, and a traitor.")
fmt Print("Would it help if I got out and pushed?!!")
fmt.Println("Try not. Do… or do not. There is no try."
fmt.Println "What have you done?! I’m BACKWARDS."
fmt.Println("The circle is now complete."
fmt-Print("You’ll find I’m full of surprises!)
fmt.Println(We seem to be made to suffer. It’s our lot in life.)
fmt.Print("It’s against my programming to impersonate a deity.")
{{< /highlight >}}
{{< expandingButton id="badprint-answers" name="Answers" >}}
The first line is wrong.
{{< highlight go "linenos=false" >}}
fmt.Println "You are a member of the rebel alliance, and a traitor.")
{{< /highlight >}}
It is missing the opening bracket, `(`.

The second line
{{< highlight go "linenos=false" >}}
fmt Print("Would it help if I got out and pushed?!!")
{{< /highlight >}}
is also wrong. It is missing the full stop between `fmt` and `Print`.
Instead it has a space.

The third line
{{< highlight go "linenos=false" >}}
fmt.Println("Try not. Do… or do not. There is no try."
{{< /highlight >}}
is also wrong. The closing bracket, `)`, at the end of the line is missing.

The fourth line
{{< highlight go "linenos=false" >}}
fmt.Println "What have you done?! I’m BACKWARDS."
{{< /highlight >}}
is also wrong. This line is missing both brackets, `()`.

The fifth line
{{< highlight go "linenos=false" >}}
fmt.Println"The circle is now complete.")
{{< /highlight >}}
is also wrong. It is also missing the opening bracket, `(` before the
double quote mark, `"`


The sixth line has two mistakes
{{< highlight go "linenos=false" >}}
fmt-Print("You’ll find I’m full of surprises!)
{{< /highlight >}}
The first mistake is that the full stop,`.` has been replaced by a minus sign,
`-`, between the `fmt` and `Print`. The second mistake is the closing
double quote, `"` is missing before the closing bracket, `)`

The seventh line also has two mistakes.
{{< highlight go "linenos=false" >}}
fmt.Println(We seem to be made to suffer. It’s our lot in life.)
{{< /highlight >}}
This line is missing both the opening and closing inverted commas
around the string. There should be a double quote mark after the
opening bracket, `(` and another one before the closing bracket, `)`

The last line
{{< highlight go "linenos=false" >}}
fmt.Print("It’s against my programming to impersonate a deity.")
{{< /highlight >}}
is the only one that is correct. It has the full stop between `fmt` and
`Print`, both brackets, `(` and `)` and the string is surrounded by double
quote marks, `"`.
{{< /expandingButton >}}
{{< /panelInfoTitle >}}


The `fmt.Println` and `fmt.Print` functions are not the same. The
`fmt.Print` prints the string that you put in between the brackets, the `(` and
`)`. The `fmt.Println` function also prints the string that you put in between
the brackets, the `(` and `)` but also takes a new line at the end. The next
string that you print with `fmt.Println` or `fmt.Print` will be on the next
line.

If you had typed this into a program

{{< highlight go "linenos=inline" >}}
fmt.Println("Printed on Line 1")
fmt.Print("Printed on Line 2")
fmt.Println(" also printed on Line 2")
fmt.Println("Printed on Line 3")
{{< /highlight >}}

The output would be this

{{< highlight text "linenos=inline" >}}
Printed on Line 1
Printed on Line 2 also printed on Line 2")
Printed on Line 3
{{< /highlight >}}

{{< defaultNote >}}
Ignore the line numbers in both the program and the output. We have added them
so we can talk about specific lines in the program.
{{< /defaultNote >}}

The `fmt.Print` function does not take a new line at the end, so lines 3 and 4
in the program produce line 3 in the output.

A string between `"` marks is called a __interpreted string literal__ in Go.

{{< panelInfoTitle title="Now it is your turn" >}}
What should these lines print out?
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
fmt.Println("away… to the future, to the horizon. Never his mind on where he")
fmt.Println("was. …Hmm? On what he was doing.")
{{< /highlight >}}
{{< expandingButton id="print-answers" name="Answers" >}}
{{< highlight text "linenos=false" >}}
Ready are you? What know you of ready? For eight hundred years
have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi
must have the deepest commitment,
 the most serious mind. This one, a long time have I watched.
All his life has he looked
away… to the future, to the horizon. Never his mind on where he
was. …Hmm? On what he was doing.
{{< /highlight >}}
Did you notice the space at the start of the fourth line?
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### The `stringfun` program
Let's write a Go program to put all of this string knowledge into practice.
Just as we did with the `numbers` program are going to put this program in its
own directory.

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

Now you need to make a new directory. We need to call this `stringfun` after
the program we will write. Then we need to change directory into the new
`stringfun` directory.

{{< highlight sh "linenos=false" >}}
mkdir stringfun
cd stringfun
{{< /highlight >}}

Now you need to start you editor, either Atom or LiteIDE

{{< panelPrimaryTitle title="On Linux, Windows and MacOS X" >}}
{{< highlight sh "linenos=false" >}}
atom stringfun.go
{{< /highlight >}}
{{< /panelPrimaryTitle >}}

{{< panelSuccessTitle title="On Raspberry Pi" >}}
{{< highlight sh "linenos=false" >}}
liteide stringfun.go
{{< /highlight >}}
{{< /panelSuccessTitle >}}

{{< codeFigure caption="Fig-1. The `stringfun.go` code" >}}
{{< highlight go "linenos=inline" >}}
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
	fmt.Println("Both lines are printed using the Println function.")
	fmt.Println("The Println function always take a new line at the end.")
	fmt.Println("")
}
{{< /highlight >}}
{{< /codeFigure >}}

Once you have typed the program in, you need to save it. Once you have saved it
you need to run it with:

{{< highlight sh "linenos=false" >}}
go run stringfun.go
{{< /highlight >}}

If you typed the program correctly you should see

{{< highlight text "linenos=false" >}}
The stringfun program shows you how to use strings.

An example of printing words with the Println function.
These words appear on one line, with a new line at the end.
These words appear on the next line because of the new line.
Both lines are printed using the Println function.
The Println function always take a new line at the end.
{{< /highlight >}}

Let's look at the important parts of the program. First is line 8.

{{< highlight go "linenos=false" >}}
fmt.Println("The stringfun program shows you how to use strings.")
{{< /highlight >}}

Line 8 prints the message

{{< highlight text "linenos=false" >}}
The stringfun program shows you how to use strings.
{{< /highlight >}}

to the screen. You can see that the line follows the pattern for
printing to the screen. It starts with `fmt.Println` and has and opening
bracket, `(` and a closing bracket `)`. The string that is printed is
enclosed in inverted commas, `"`.

We have used the `fmt.Println` function here, so the output of the next
`fmt.Println` or `fmt.Print` line will appear on the next line

Lines 10, 11, 12, 13 and 14 are similar. These lines
print different strings to the screen but the pattern is the same.

Next lets look at line 9.

{{< highlight go "linenos=false" >}}
fmt.Println("")
{{< /highlight >}}

You know that whatever you type between the inverted commas in printed out
to the terminal by the `Println` function followed by a new line. But what
happens here?

Look at what the program printed to the terminal when you ran it. This is
the __output__ of the program. If you look at the second line you can see that
nothing is printed. It is an empty line. Now look at the string in line 9;
there is nothing between the inverted commas. This is called an __empty
string__. The string exists but there are no runes in it to print out.
When you print an empty string nothing happens. There is no output.

But why is there an empty line? If you remember that the `Println` always takes
a new line after it has printed out a string. In this case it prints an empty
string before it takes a new line. The result is shown in the output.
The whole line is empty and the output is a blank line. Output will
continue on the line after the blank line.

If you want to print a blank line, this is the pattern you must use.
You have to use two `fmt.Println` functions one after the other. The first
`fmt.Println` function should print the string you want, the second
`fmt.Println` function should print an empty string. This combination
prints the blank line in the output.

You can see that we have printed another blank lines at lines 15. Notice the
`fmt.Println` on line 14.

{{< panelInfoTitle title="Now it is your turn" >}}

Now it is your turn to write a program to use strings.

You need to edit, the `stringfun.go` program so that the computer
prints out some new strings. Once you have changed the program, you will need
to run it again to make sure that it worked.

{{< panelWarningTitle title="Important" >}}
Before you run your program you must save your file again. If you do not, you
will run the same version of the program as before, so you will not see the
effect of your changes.

If you want to save your new program under a new name you can. But you can't
have any spaces in the new name and it still has to have a `.go` file
extension. If you do this you will need to remember the new name because you will
need that to run your program. For example. If you called your new program
`extra-strings.go` then you would run it like this

{{< highlight sh "linenos=false" >}}
go run extra-strings.go
{{< /highlight >}}
{{< /panelWarningTitle >}}

Change your program so that it prints this message at the end

{{< highlight text "linenos=false" >}}
Somewhere in that pad of stuffing is a toy who taught me that life's only worth
living if you're being loved by a kid. And I traveled all this way to rescue
that toy, because I believed him.
{{< /highlight >}}


{{< expandingButton id="hint" name="Hint" >}}
You need to use `fmt.Println` functions to print each of the lines
in the output.
{{< /expandingButton >}}
{{< /panelInfoTitle >}}
