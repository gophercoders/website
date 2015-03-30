+++
Categories = []
Description = "These are the teacher notes for the Numbers page"
Tags = []
author = "Owen"
concepts = []
date = "2015-03-17T20:19:28Z"
keystage = []
subtitle = "teacher notes"
title = "Numbers"
notesfor = "Numbers"
+++
### Before you begin
We are aware that Computing has been added to the National Curriculum but that
the majority of teachers have no back ground in Computing. These teacher notes
are intended to an addition to any CPD you may have or be undertaking through
your school.

We strongly recommend that you read the lesson material and attempt the exercises
for [Numbers]({{< relref "post/numbers.md" >}}) before you read these notes.
In doing so you will make the same mistakes as you class are likely to make.
Solving these problems will provide you with both the confidence and knowledge
to help your class with this material.

We will be taking a step by step approach that will build up your knowledge over time.

### Why numbers first
Numbers are the most fundamental concept computer science. Computers can only process numbers in binary form. So __everything__- numbers, letters, pictures,
mp3 music files, word processor documents are lists of numbers.

Numbers also show the limit of a computer. A computer does not have an infinite range, as the set of natural numbers (&#x2124;). _The range of a number is fixed.
It depends how many bits are used to represent the number and if the
number is also signed (or not)._ This helps dispel the notion that computers can
do anything. They can't, there are limits.

The concept of a number range also leads to the concept of a _type_. Numbers with different ranges are of different types. Integer numbers are a distinct type from natural (or real) numbers. Types are fundamental to Go and all other computer languages at some level. Go makes the type explicit - it is a statically types language. Python by contrast hides or masks the type - it is a dynamically typed language. Both languages have types but they approach the problem differently.

Numbers also have a direct relationship to both the logical as well as the
physical structure of a computers memory.

The concept of type and range and the link to computer memory will be explored in
later lessons.

Lastly, until strings i.e. words, variables (and types) and at least one of
selection, or repetition is introduced it is almost impossible to write any
form of useful program. Consequently the example program is highly constrained.

### Objective
The objective is to get the class to write a Go program to solve simple
mathematics. The program will only use addition (typed `+`), subtraction (typed `-`), multiplication (typed `*` not `x`) and division (typed `/` not `\` or `-`).

Creating this program will require the class to use the text editor (either Atom or LiteIDE) to create and save the source code file and the terminal/command line to run their program.

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

The example program is sufficiently simple that the little or no additional
teaching should be required beforehand. However the class needs to have covered.

* Basic keyboard/typing and mouse skills.
* The class needs to understand the four basic mathematics operators and how to use them.
* The class needs to understand numbers and how to read and write them them, from units to tens of thousands. Several of the examples use the number 65384 so the
class needs to understand how to read this number. This number is significant in
computer science as will see later.
* The class need to understand that mathematics can be chained together. So example
1 + 2 + 3 + 4 + 5 = 15

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are executed in order to print the results to the terminal window.

### Cross-Curricular links

There is a direct link to mathematics, both in terms of number theory and simple mathematics.

### The Example Program
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
Firstly the line numbers are shown for illustration only. These are __never__ typed into a Go program. They simply provide an easy mechanism to discuss
specific parts of the program.

Secondly the colours are also there for illustration only and again you should
not try to match the colours. This is an example of _syntax highlighting_. If you have used either the Atom or LiteIDE editors in the Numbers exercise you will have seen the editor automatically colour the programs our source code as you typed it. Possibly with different colours.
{{% /defaultNote %}}

{{% panelInfoTitle title="Syntax highlighting" %}}
Syntax is the form of a computer program. It is the collection of rules that define the valid combinations of symbols make up a valid i.e. syntactically correct program. The symbols are the letters, numbers and other mathematical symbols that the programmer types. Failure to meet these rules causes a __syntax error__ when you attempt to run the program. This will be the most common type of error that your pupils will make. However a syntactically valid program does not imply that the program is bug free or solves the intended problem. Only that it is valid in terms of the combinations of symbols used. Syntax is to programming
language what spelling is to English. Each programming language has its own
syntax rules in the same way that English and French spellings are different. We will explain more about syntax in later lessons.  

Syntax highlighting is a way for an editor, or in this case a web page, to make specific parts of a program syntax clearer by using colour and changing the font.
It is intended to help a programmer notice syntax mistakes as they type and
to help them focus on the key aspects of the program. The syntax highlighing serves no purpose for the computer.

{{% defaultNote %}}
You can change the syntax highlighting if you wish or require to. For anyone that
is colour blind this may be a requirement.

To change the syntax colours in the Atom Editor use the keyboard shortcut of <kbd>CTRL</kbd>+<kbd>,</kbd> or look for `Preferences` in the `Edit` menu or
`Settings` in the `File` menus. The menu varies depending on which operating system you are on.

Once the settings window opens, click on `+ Install` in the left hand panel.
Type `theme` into the search box, and then click `Themes` on the right.
You will not see a list of themes that you can install. Once you see a theme you
think you you like, just clink the `Install` button to download and install it.

Once the new theme has installed you need to to activate it. To do this you need
to click on `Themes` in the left hand panel. When the Theme settings window appears you can change the theme using the "Syntax Theme" drop down menu. Simply
select the theme you want to use to activate it.

To change the syntax colurs on LiteIDE you need to use the `View` menu and select `Options`. Once the options window opens you need to click on `LiteEditor` on the
left hand panel. Having done this you will now see in the right hand panel a
drop down menu with the title `Editor Color Scheme`. Simply selected a new
colour scheme and click the `OK` button in the bottom right.
{{% /defaultNote %}}

In the case of the web page, language keywords appear like
<span style="color:#a52a35">this</span>, package names and operators appear like <span style="color:#3a3935;">this</span>, function names like <span style="color:#3a3935; font-weight:bold">this</span>, and quoted strings like <span style="color:#ff00ff">this</span>.

We will explain these terms when we discuss syntax in a later lesson.
{{% /panelInfoTitle %}}

Back to the program. The first lines of interest are line 1 and line 5, reproduced below.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
package main
....
func main() {
{{< /hilight >}}

These come as a pair. The `main` package on line 1 must contain the `main` function on line 5. The `main` function on line 5 is where the program begins
execution - not line 1. Program execution then proceeds in sequence from this point onwards i.e. down the screen as you look at it. There must be exactly one
`main` function in any program. There must also be exactly one `main` package
in any program. The `package main` line must also be the first line in the
source code file. No program code can appear before this line.

A function is way to reuse a small piece of code that servers a very specific
and well defined purpose. It is used to avoid needless repetition in the
program. The `Println` function is an example of a function. The program
uses the `Println` function several times for example.

A package is Go's approach to grouping functions together into a __library__ or
as Go calls them __packages__. The functions in a package are all related to
each other. For example all of the shape drawing functions would be in the
same package, a drawing package. A __package__ can consist of one or more source
code files, provided the package line in each file is the same. This provides the ability to reuse much larger blocks of source code in a structured way. We will see this in the next interesting line, line 3.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import "fmt"
{{< /hilight >}}

Line 3 is a package import line. Before Go can use a package, it must first import it to make the functions within it available to the program. If the package does
not exist when the program is run, then the program will stop and that point.
The name of the package that is to be imported must be places inside double quotes. In this case the program is importing he `fmt` package, short for "Format", which contains the functions such as `Println` that prints text to the
terminal window.

Now we need to look at how the `Println` function is used in Lines 6 to 9 inclusive.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("The numbers program shows you how to add, subtract")
fmt.Println("multiple and divide integer numbers.")
fmt.Println("One plus one is typed: 1+1")
fmt.Print("1+1=")
{{< /hilight >}}

The first thing to notice is that all of these lines start `fmt.`. Before you can use a function in another package, you first have to tell Go which package the
function is part of. To go this you type the package name, `fmt`, followed by a period, `.`, followed by the name of the function you want to use, in this case `Println`. The name of the package, must match the name of the package that was
imported earlier in the program, by an `import` line. If the function does not exist within the package you specify then is and error and the program will not run.

The second thing to notice is the use of double quotes. The `Println` function is defined such that anything that appears between double quotes, between the brackets or more correctly, parenthesis, will be printed to the screen verbatim.

The `Print` function in line 9 is identical to the `Println` function except that it does not take a new line in the terminal automatically when the contents of the
double quotes have been printed.

The other `Println` and `Print` lines later in the program server a similar purpose, only the content that they display is different. We will therefore not explain those lines.

This takes is to line 10, the line that actually does the mathematics.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(1 + 1)
{{< /hilight >}}

Notice that line 10 has a the lack of quote marks. The computer cannot print this be verbatim. Instead it must __evaluate__ what is inside the
brackets and print the result.

This is exactly what happens. The coputer works works out the result of `1 + 1`, _before_ executing the `Println` function, with the result. It is as if the line
was written line this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(2)
{{< /hilight >}}

Which with a little thought, you can see that this produces the same result as this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("2")
{{< /hilight >}}

`1 + 1` is an example of an expression as in a _mathematical_ expression. The expression has to be evaluated by the computer. The computer then replaces the
expression with its result before proceeding.

This is an example of a __constant expression__. It is constant because it does not depend on the use of a variable quality i.e. a variable in programming terms.
The expressions result is therefore fixed, `1 + 1` is always `2`. The expression will yield the same result every time the program is run. In fact the result of the expression can be calculated, and be known to be correct, before the program is run.

{{% defaultNote %}}
In fact this is exactly what Go does. It works out the result before the
program is run. Specifically it works out the result when the program is
compiled. We will discuss compiling in a later lesson, so for now this is an
addition stage that the program has to go through before it can be run.
during this stage Go works out that `1 + 1` is `2` and replaces the `1 + 1` in
the expression with `2`. This means that the when the program run it does
not in fact work out the sum. This has already occurred. This results in both
a program which executes faster. This is known as a __optimisation__.
{{% /defaultNote %}}

### The Numbers Exercise

The numbers exercise involves changing the existing program and extending it
so that it performs additional mathematics. We want the pupils to become familiar with the edit/run/debug cycle. We also want the pupils to understand that they
can change a program to add functionality.

We have taken this approach so that pupils become familiar with the work-flow of editing an existing program, saving the program, attempting to run the program and editing it again if necessary until the program runs. This will be the work-flow for each exercise. The pupils need to be comfortable using the editor to change the program and typing commands into the terminal window to run the program.

The pupils have all of the information they need in the first program to extend it. The key to realizing this to spot a _pattern_ in the existing program.
The pattern is:
````
fmt.Print( The sum in quotes )
fmt.Println( The sum NOT in quotes )
````
The first line in the pattern prints the sum to the terminal verbatim. It does not evaluate the expression. The second line contains the expression and that expression is evaluated.

Like mathematics, patterns are fundamental to computer science. Being able to spot, reuse and adapt patterns is a key part of programming.

To complete the exercise the pupils need to add this pattern once for each new
sum that the exercise requires. If the pupils have followed the advice in the
exercise they will add two new lines to the program each time they save and then run it.

If the program was previously working, then any problems __must__ be in one of these two lines. It will help the pupils who cannot resolve any problems if you tell then to look closely at the lines they have just added.

{{% panelInfoTitle title="If all else fails..." %}}
If a pupil has become stuck and cannot resolve their problems you need to get them back to a working program. The best way to do this is to remove one line at a time, starting with the last line - that is the line before the `}`. The `}` itself is required.

After each line is removed attempt to run the program again. If the program still fails remove the last line again. Continue to do this until the program runs successfully.

This is a typical approach to debugging problems, based on a divide a conquer approach.

But if all else fails you will need to keep a copy of the original `numbers.go` program. If required you can copy over the pupils `numbers.go` with your original copy.
{{% /panelInfoTitle %}}

Once the pupils have a running program they can confirm the answers from the
mathematics by checking against the answers.

A suggested solution the the exercise would be the `extra-sums.go` program shown below.

{{% codeFigure caption="Fig-2. The `extra-sums.go` code" %}}
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

	fmt.Println("Extra sums...")
	fmt.Print("32 + 96 = ")
	fmt.Println(32 + 96)

	fmt.Print("65536 - 16384 = ")
	fmt.Println(65536 - 16384)

	fmt.Print("4 * 256 = ")
	fmt.Println(4 * 256)

	fmt.Print("16384 / 1024 = ")
	fmt.Println(16384 / 1024)

	fmt.Print("65536 - 32768 = ")
	fmt.Println(65536 - 32768)

	fmt.Print("16 * 16 = ")
	fmt.Println(16 * 16)

	fmt.Print("4 + 4 = ")
	fmt.Println(4 + 4)

	fmt.Print("2 * 2 * 2 * 2 = ")
	fmt.Println(2 * 2 * 2 * 2)

	fmt.Print("1 * 8 * 2 = ")
	fmt.Println(1 * 8 * 2)

	fmt.Print("8 + 0 = ")
	fmt.Println(8 + 0)

	fmt.Print("8 + 0 - 4 = ")
	fmt.Println(8 + 0 - 4)

	fmt.Print("8 * 0 = ")
	fmt.Println(8 * 0)

	fmt.Print("8 * 8 = ")
	fmt.Println(8 * 8)

	fmt.Print("256 / 2 = ")
	fmt.Println(256 / 2)

	fmt.Print("256 / 8 / 2 = ")
	fmt.Println(256 / 8 / 2)
}
{{< /hilight >}}
{{% /codeFigure %}}

{{% defaultNote %}}
This is only a suggested solution. The pupils solution could be different. For
example line 25 could print a different message. Provided the messages are reasonable and indicate what is happening and the results of the sums are correct
then the program itself is correct.
{{% /defaultNote %}}

### Answers to the supplementary questions

The numbers and their answers in the exercise are not random. We chose them deliberately. The first thing to notice is that all of the numbers are even. We will consider zero even for now. The second think to notice is that (almost) all of the numbers are powers of 2. We have 2<sup>0</sup>, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup>, 2<sup>7</sup>, 2<sup>8</sup>, 2<sup>14</sup>, 2<sup>15</sup>, 2<sup>16</sup>. The exceptions are <span>96 = 2<sup>6</sup>+2<sup>5</sup></span> and <span>49152 = 2<sup>15</sup>+2<sup>14</sup></span>.

The pupils might have heard of some of them before in the phrases "32 bit", "64 bit", "16 bit" or "8 bit".
