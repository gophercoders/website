+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the Numbers page"
Tags = []
author = "Owen"
concepts = ["Numbers"]
date = "2015-03-17T20:19:28Z"
keystage = ["KS2"]
subtitle = "teacher notes"
title = "Numbers"
notesfor = "Numbers"
slides = "numbers"
lessonplan = "numbers"
keystagelevel = ["lower"]
lessonnumber = "1"
+++
### Before you begin
We are aware that Computing has been added to the National Curriculum but that
the majority of teachers have no background in Computing. These teacher notes
are intended as an addition to any CPD you may have or will be undertaking
through your school.

We strongly recommend that you read the lesson material and attempt
the exercises for [Numbers]({{< relref "lessons/KS2/lower/numbers.md" >}})
before you read these notes.

In doing so you may make the same mistakes as your class are likely to make.
Solving these problems will provide you with both the confidence and knowledge
to help your class with the material.

We will be taking a step by step approach that will build up your knowledge over time.

### Objective
The objective is to get the class to write a Go program to solve simple
mathematical problems. The program will only use addition (typed `+`), subtraction (typed `-`), multiplication (typed `*` not  &#215;) and division (typed `/` not `\` or &#247;).
Creating this program will require the class to use the text editor (either
Atom or LiteIDE) to create and save the source code file and the
terminal/command line to run their program.

Each subsequent lesson will require the class to use both the text
editor and the terminal.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand how to type simple mathematics in Go
* Reason about the result of mathematics in Go.
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The example program is sufficiently simple that little or no additional
teaching should be required beforehand. However the class needs to have
covered

* Basic keyboard/typing and mouse skills.
* The class needs to understand the four basic mathematics operators and how to
use them.
* The class needs to understand numbers and how to read and write them,
from units to thousands and ideally tens of thousands.
* The class need to understand that mathematics can be chained together. So
example 1 + 2 + 3 + 4 + 5 = 15

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

There is a direct link to mathematics, both in terms of number theory and
simple mathematics.

### How Fast are You?
#### Notes for slide 2

How long the pupils take is not important in this case.
The computer would be _billions_ of times faster.

If each sum can be calculated in a single cycle then the total time for
all 4 sums is

0.0000000005 * 4 = 0.000000002 seconds

0.0000000005 being the time in seconds for one cycle at 2Ghz.

Assuming there are no errors in the program, the computer will never make
a mistake. If there is a mistake in the program that is the fault of
the programmer not the computer.

This is why we use computers. They are faster and more reliable than people.

### Everything is a Number
#### Notes for slide 4
Numbers are the most fundamental concept in computer science. Computers can only
process numbers. So __everything__ - numbers, letters, pictures,
mp3 music files, word processor documents are lists of numbers.

Numbers also indicate the limit of a computer. A computer does not have an infinite
range, as the set of natural numbers (&#x2124;) does. _The range of a number is
fixed. It depends how many bits are used to represent the number and if the
number is also signed (or not)._ With 5 bits you can count to a maximum of 31.
With 10 bits you can count to maximum of 1024. 16 bits gives 65,534.

This helps dispel the notion that computers can do anything. They can't, there
are limits.

The concept of a number range also leads to the concept of a _type_. Numbers
with different ranges are of different types. Integer numbers are a distinct
type from natural (or real) numbers. Types are fundamental to Go and all other
computer languages at some level. Go makes the type explicit - it is a
statically types language. Python by contrast hides or masks the type - it is a
dynamically typed language. Both languages have types but they approach the
problem differently.

Numbers also have a direct relationship to both the logical as well as the
physical structure of a computer's memory.

The concept of type and range and binary and the link to computer memory will
be explored in later lessons.

The rainbow can be represented by numbers if a unique number is assigned to
each colour. For example

* Red = 1
* Orange = 2
* Yellow = 3
* Green = 4
* Blue = 5
* Indigo = 6
* Violet = 7

The sequence

3, 2, 1, 4, 7, 6, 5

would therefore represent the colour sequence

Yellow, Orange, Red, Green, Violet, Indigo, Blue

### Go Programs
#### Notes for Slide 4

Go is just one of about 400 computer languages - 99% of which are textual i.e.
the programmer has to type the commands in before the program can be run.
Scratch/Kudu/Alice etc are all graphical languages. The programmer connects
blocks which represent the logical structure together to create the program.
This is not typical.

Go programs are typed into a __text editor__. Once the commands have been typed
in the file needs to be saved. A file that contains the Go __instructions__ is
called a __source code__ file. Once the source code file has been saved an
attempt can be made to run the program.

### Numbers in Go
#### Notes for slide 5

The numbers are all whole numbers or more correctly __integer__ numbers.
There are no fractions or decimals in the list of numbers. For
the avoidance of doubt, zero is considered to be in the set of whole
numbers.

Go calls integer numbers `int` for short. The pupils will see this in
subsequent lessons

### Sums in Go
#### Notes for slide 6

Maths in Go is the same as maths anywhere else. The language of maths is
universal. The normal rules of maths therefore apply.

The only unusual point is that × is replaced with `*` for multiplication
and ÷ is replaced by `/` for division.

The answer is 7. 1 + 2 * 3 is 1 + 6 which is 7. Multiplication is done
before addition as per normal algerbra.

### How to Create a Go Program
#### Notes for slide 7

The pupils have to use a terminal window to make a new directory, and to
run the Go program.

The pupils use a text editor to type in the program, and save it, before it can
be run. The pupils are creating the source code file.

A Go source code file should be saved with a `.go` file extension.

How the pupils open a command prompt or terminal window varies with
the operating system. See the
[Windows]({{< relref "install/windows.md" >}}),
[MacOS X]({{< relref "install/macosx.md" >}}),
[Linux]({{< relref "install/linux.md" >}}) or
[Raspberry Pi]({{<relref "install/raspberry-pi.md" >}}) install guides for the
instructions

We are going to put each Go program in its own directory. This is the
recommended practice for Go programs.

In your terminal you need to change to the location of your Go Workspace.
To do this type

{{% panelPrimaryTitle title="On Linux, Raspberry Pi and Mac OS X" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd $GOPATH/src/
{{< /hilight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Windows" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd %GOPATH%\src\
{{< /hilight >}}
{{% /panelSuccessTitle %}}

Now you need to make a new directory. We need to call this `numbers` after the
program we will write. Then we need to change directory into the new
`numbers` directory.

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
mkdir numbers
cd numbers
{{< /hilight >}}

Now you need to start you editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
atom numbers.go
{{< /hilight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
liteide numbers.go
{{< /hilight >}}
{{% /panelSuccessTitle %}}

You must make sure that the source code file is saved as `numbers.go` in the
`numbers` directory in the Go workspace.

To run the program the pupils need to use the terminal window and type:

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run numbers.go
{{< /hilight >}}

Where `numbers.go` is the name of the source code file. The command must be run
from the `numbers` directory.

The pupils will need to repeat this process in each lesson, so they will
quickly become used to it.

### The numbers.go Program
#### Notes for slide 8

Let's look at the `numbers.go` program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `numbers.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import "fmt"

func main() {
	fmt.Println("The numbers program shows you how to add, subtract")
	fmt.Println("multiple and divide integer numbers.")
	fmt.Println("One plus one is typed: 1+1")
	fmt.Print("1+1=")
	fmt.Println(1 + 1)

	fmt.Println("Ten subtract three is typed: 10-3")
	fmt.Print("10-3=")
	fmt.Println(10 - 3)

	fmt.Println("Three multiplied by four is typed: 3*4")
	fmt.Print("3*4=")
	fmt.Println(3 * 4)

	fmt.Println("Six divided by two is typed: 6/2")
	fmt.Print("6/2=")
	fmt.Println(6 / 2)
}
{{< /hilight >}}
{{% /codeFigure %}}

{{% defaultNote %}}
Firstly, the line numbers are shown for illustration only. These are __never__
typed into a Go program. They simply provide an easy mechanism to discuss
specific parts of the program.

Secondly, the colours are also there for illustration only and again you should
not try to match the colours. This is an example of _syntax highlighting_. If
you have used either the Atom or LiteIDE editors in the Numbers exercise you
will have seen the editor automatically colour the programs our source code as
you typed it. Possibly with different colours.
{{% /defaultNote %}}

{{% panelInfoTitle title="Syntax highlighting" %}}
Syntax is the form of a computer program. It is the collection of rules that
define the valid combinations of symbols make up a valid i.e. syntactically
correct program. The symbols are the letters, numbers and other mathematical
symbols that the programmer types. Failure to meet these rules causes a
__syntax error__ when you attempt to run the program. This will be the most
common type of error that your pupils will make. However a syntactically valid
program does not imply that the program is bug free or solves the intended
problem. Only that it is valid in terms of the combinations of symbols used.
Syntax is to a programming language what spelling is to English. Each
programming language has its own syntax rules in the same way that English and
French spellings are different. We will explain more about syntax in later
lessons.  

Syntax highlighting is a way for an editor, or in this case a web page, to make
specific parts of a program syntax clearer by using colour and changing the
font.
It is intended to help a programmer notice syntax mistakes as they type and
to help them focus on the key aspects of the program. The syntax highlighting
serves no purpose for the computer.

{{% defaultNote %}}
#### How to Change the Syntax Highlighting
You can change the syntax highlighting if you wish or require to. For anyone
that is colour blind this may be a requirement.

To change the syntax colours in the Atom Editor use the keyboard shortcut of
<kbd>CTRL</kbd>+<kbd>,</kbd> or look for `Preferences` in the `Edit` menu or
`Settings` in the `File` menus. The menu varies depending on which operating
system you are on.

Once the settings window opens, click on `+ Install` in the left hand panel.
Type `theme` into the search box, and then click `Themes` on the right.
You will not see a list of themes that you can install. Once you see a theme
you think you like, just clink the `Install` button to download and install
it.

Once the new theme has installed, you need to activate it. To do this you
need to click on `Themes` in the left hand panel. When the Theme settings
window appears you can change the theme using the "Syntax Theme" drop down
menu. Simply select the theme you want to use to activate it.

To change the syntax colours on LiteIDE you need to use the `View` menu and
select `Options`. Once the options window opens you need to click on
`LiteEditor` on the left hand panel. Having done this you will now see in the
right hand panel a drop down menu with the title `Editor Color Scheme`. Simply
select a new colour scheme and click the `OK` button in the bottom right.
{{% /defaultNote %}}

In the case of the web page, language keywords appear like
<span style="color:#a52a35">this</span>, package names and operators appear
like <span style="color:#3a3935;">this</span>, function names like <span
style="color:#3a3935; font-weight:bold">this</span>, and quoted strings like
<span style="color:#ff00ff">this</span>.

We will explain these terms when we discuss syntax in a later lesson.
{{% /panelInfoTitle %}}

Back to the program. The first lines of interest are line 1 and line 5,
reproduced below.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
package main
....
func main() {
{{< /hilight >}}

These come as a pair. The `main` package on line 1 must contain the `main`
function on line 5. The `main` function on line 5 is where the program begins
execution - not line 1. Program execution then proceeds in sequence from this
point onwards i.e. down the screen as you look at it. There must be exactly one
`main` function in any program. There must also be exactly one `main` package
in any program. The `package main` line must also be the first line in the
source code file. No program code can appear before this line.

A function is a way to reuse a small piece of code that serves a very specific
and well defined purpose. It is used to avoid needless repetition in the
program. The `Println` function is an example of a function. The program
uses the `Println` function several times for example.

A package is Go's approach to grouping functions together into a __library__ or
as Go calls them __packages__. The functions in a package are all related to
each other. For example all of the shape drawing functions would be in the
same package, a drawing package. A __package__ can consist of one or more
source code files, provided the package line in each file is the same. This
provides the ability to reuse much larger blocks of source code in a structured
way. We will see this in the next interesting line, line 3.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import "fmt"
{{< /hilight >}}

Line 3 is a package import line. Before Go can use a package, it must first
import it to make the functions within it available to the program. If the
package does
not exist when the program is run, then the program will stop at that point.
The name of the package that is to be imported must be placed inside double
quotes. In this case, the program is importing the `fmt` package, short for
"Format", which contains the functions such as `Println` that prints text to
the terminal window.

Now we need to look at how the `Println` function is used in Lines 6 to 9
inclusive.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("The numbers program shows you how to add, subtract")
fmt.Println("multiple and divide integer numbers.")
fmt.Println("One plus one is typed: 1+1")
fmt.Print("1+1=")
{{< /hilight >}}

The first thing to notice is that all of these lines start `fmt.`. Before you
can use a function in another package, you first have to tell Go which package
the function is part of. To go this you type the package name, `fmt`, followed
by a period, `.`, followed by the name of the function you want to use, in this
case `Println`. The name of the package, must match the name of the package
that was imported earlier in the program, by an `import` line. If the function
does not exist within the package you specify this is an error and the program
will not run.

The second thing to notice is the use of inverted commas. The `Println` function
is defined such that anything that appears between inverted commas, between the
brackets or more correctly, parenthesis, will be printed to the screen
verbatim.

The `Print` function in line 9 is identical to the `Println` function except
that it does not take a new line in the terminal automatically when the
contents of the inverted commas have been printed.

The other `Println` and `Print` lines later in the program serve a similar
purpose, only the content that they display is different. We will therefore not
explain those lines.

This takes us to line 10; the line that actually does the calculation.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(1 + 1)
{{< /hilight >}}

Notice that line 10 has a lack of quote marks. The computer cannot print
this be verbatim. Instead it must __evaluate__ what is inside the
brackets and print the result.

This is exactly what happens. The computer works out the result of `1 +
1`, _before_ executing the `Println` function, with the result. It is as if the
line was written like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(2)
{{< /hilight >}}

Which with a little thought, you can see that this produces the same result as
this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("2")
{{< /hilight >}}

`1 + 1` is an example of an expression as in a _mathematical_ expression. The
expression has to be evaluated by the computer. The computer then replaces the
expression with its result before proceeding.

This is an example of a __constant expression__. It is constant because it does
not depend on the use of a variable quality i.e. a variable in programming
terms.
The expressions result is therefore fixed, `1 + 1` is always `2`. The
expression will yield the same result every time the program is run. In fact
the result of the expression can be calculated, and be known to be correct,
before the program is run.

{{% defaultNote %}}
In fact this is exactly what Go does. It works out the result before the
program is run. Specifically it works out the result when the program is
compiled. We will discuss compiling in a later lesson, so for now this is an
additional stage that the program has to go through before it can be run.
during this stage Go works out that `1 + 1` is `2` and replaces the `1 + 1` in
the expression with `2`. This means that when the program run it does
not in fact work out the sum. This has already occurred - at compile time.
This results in both
a program which executes faster. This is known as a __optimisation__.
{{% /defaultNote %}}

### Plenary
#### Notes for Slide 9

The answers are:
15 - 3 - 10 = 2
20 + 7 - 3 - 8 = 16
3 * 3 * 3 = 27
56 / 7 = 8

(1 + 2) * (9 - 5) = 12

In the last case the pupils may not understand the brackets.
