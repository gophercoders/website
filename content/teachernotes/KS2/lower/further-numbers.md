+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the Numbers page"
Tags = []
author = "Owen"
concepts = ["numbers"]
date = "2015-03-17T20:19:28Z"
keystage = ["KS2"]
subtitle = "Fix and Apply Teacher Notes"
title = "More Numbers"
notesfor = "further-numbers"
lessonplan = "further-numbers"
slides = "further-numbers"
keystagelevel = ["lower"]
lessonnumber = "2"
+++
### Objective
The objective is to reinforce the class knowledge of numbers and simple
sums in Go and to reinforce the skills needed to create and run a Go
program.

The pupils are introduced to brackets and shown how to use them to group
terms. The pupils are also introduced to the idea of operator precedence.

Creating this program will require the class to use the text editor
(either Atom or LiteIDE) to create and save the source code file and the
terminal/command line to run their program.
<!--more-->

### Numbers Reinforcement

This lesson reinforces and extends the concepts introduced in the
previous [numbers]({{< relref "lessons/KS2/lower/numbers.md" >}}) lesson.
The lesson extends by introducing brackets to group terms and
operator precedence.

The lesson reinforces by asking the pupils to type in another program
bolstering the skills and approach needed to create and run a Go
program.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand how to type simple mathematics in Go including expression using brackets.
* Reason about the result of mathematics in Go including expression using brackets.
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The class needs to have covered.

* Basic keyboard/typing and mouse skills.
* The class needs to understand the four basic mathematics operators and
how to use them.
* The class needs to understand numbers and how to read and write them
them, from units to thousands and ideally tens of thousands.
* The class need to understand that mathematics can be chained together.
So example 1 + 2 + 3 + 4 + 5 = 15
* The class should have been introduced to brackets and the laws of
association and commutative for addition and multiplication.

### Computing Links

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

There is a direct link to mathematics, both in terms of number theory and
simple mathematics.

### Sums in Go
#### Notes for slide 2
This is a recap of the important points from the [numbers]({{< relref "lessons/KS2/lower/numbers.md" >}}) lesson.

The symbols are:

* addition is a `+`
* subtraction is a `-`
* multiplication is a `*`
* division is a `/`

The sums would be written as:

{{< highlight go "linenos=table" >}}
3 + 4
6 - 1
5 * 6
10 / 2
{{< /highlight >}}

in Go.

### Operator order
#### Notes for Slide 3

As per maths, in a sum without any brackets, multiplication occurs before
addition or subtraction and division occurs before subtraction or
addition. Go follows the same rules.

Therefore the answers to the sums are

{{< highlight text "linenos=false" >}}
3 + 2 * 5 is 3 + (2 * 5) = 13
4 * 4 + 2 is (4 * 4) + 2 = 18
25 - 20 / 4 is 25 - (20 / 4) = 20
30 / 2 + 5 is (30 / 2) + 5 = 20
{{< /highlight >}}

In the case where division and multiplication in the same expression
without brackets the evaluation order is left to right. As in

{{< highlight text "linenos=false" >}}
4 * 5 / 2 is (4 * 5) / 2 = 10
{{< /highlight >}}

These rules are called the rules of operator precedence.
Go have 5 levels of operator precedence. Multiplication and division are
some of the operators in the top level. Addition and subtraction are
some of the operators in the next level down. We will expand on the
other operators and the other three lower levels in time.

All programming languages have the concept of operator precedence.
However the number of levels and the number of operators in each level
varies with each programming language.

### How to use Brackets in Go
#### Notes for Slide 4

{{% panelWarningTitle title="Important" %}}
Brackets, `(` and `)` always come as a pair. It is illegal to have an
opening bracket, without a corresponding closing bracket and vice-versa.

However, it is a very common mistake for new programmers to forget to
type the brackets. Any emphasis placed on this point will help the
children avoid problems in the example program. The pupils should
consider this a pattern.

This point is also general. Inverted commas, single quotes, back ticks,
square brackets and braces also always come in pairs. Take any of the
example programs there are always one opening brace, `{`, at the top and
one closing brace, `}`, at the bottom.
{{% /panelWarningTitle %}}

Brackets are used to change the evaluation order or to make the order
explicit. As with maths the result of the expression between the brackets
must be calculated first. In this respect Go follows the expected rules
of maths.

The answers to the challenge questions are

{{< highlight text "linenos=false" >}}
3 + (2 * 5) = 13
(3 + 2) * 5 = 15
4 * (4 + 2) = 24
(28 - 20) / 4 = 2
30 / (2 + 5 + 3) = 3
{{< /highlight >}}

The first two answers are different because the use of the brackets
forces a different evaluation order in each case.

### How to Create and Run the Go Program
#### Notes for slide 5

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
{{< highlight sh "linenos=false" >}}
cd $GOPATH/src/
{{< /highlight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Windows" %}}
{{< highlight sh "linenos=false" >}}
cd %GOPATH%\src\
{{< /highlight >}}
{{% /panelSuccessTitle %}}

Now you need to make a new directory. We need to call this
`extra-numbers` after the
program we will write. Then we need to change directory into the new
`extra-numbers` directory.

{{< highlight sh "linenos=false" >}}
mkdir extra-numbers
cd extra-numbers
{{< /highlight >}}

Now you need to start you editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< highlight sh "linenos=false" >}}
atom extra-numbers.go
{{< /highlight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< highlight sh "linenos=false" >}}
liteide extra-numbers.go
{{< /highlight >}}
{{% /panelSuccessTitle %}}

You must make sure that the source code file is saved as `extra-numbers.go` in the
`extra-numbers` directory in the Go workspace.

To run the program the pupils need to use the terminal window and type:

{{< highlight sh "linenos=false" >}}
go run extra-numbers.go
{{< /highlight >}}

Where `extra-numbers.go` is the name of the source code file. The command must be run
from the `extra-numbers` directory.

The pupils will need to repeat this process in each lesson, so they will
quickly become used to it.


### The extra-numbers Program
#### Notes for Slide 6
Let's look at the `extra-numbers.go` program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `extra-numbers.go` code" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	fmt.Println("The extra-numbers program shows you how to add, subtract")
	fmt.Println("multiple and divide numbers and how to use brackets.")
	fmt.Println("Sums without brackets.")
	fmt.Print("3 + 2 * 5 = ")
	fmt.Println(3 + 2*5)

	fmt.Print("4 * 4 + 2 = ")
	fmt.Println(4*4 + 2)

	fmt.Print("25 - 20 / 4 = ")
	fmt.Println(25 - 20/4)

	fmt.Print("30 / 2 + 5 = ")
	fmt.Println(30/2 + 5)

	fmt.Println("Sums with brackets.")
	fmt.Print("3 + (2 * 5) = ")
	fmt.Println(3 + (2 * 5))

	fmt.Print("(3 + 2) * 5 = ")
	fmt.Println((3 + 2) * 5)

	fmt.Print("4 * (4 + 2) = ")
	fmt.Println(4 * (4 + 2))

	fmt.Print("(28 - 20) / 4 = ")
	fmt.Println((28 - 20) / 4)

	fmt.Print("30 / (2 + 5 + 3) = ")
	fmt.Println(30 / (2 + 5 + 3))
}
{{< /highlight >}}
{{% /codeFigure %}}

The first thing to notice is that the `extra-numbers` program is
very similar to the [previous]({{< relref
"lessons/KS2/lower/numbers.md#the-numbers-program" >}}) `numbers`
program.

Both programs have the same structure. Both porgrams start with the same
five lines.

{{< highlight go "linenos=false" >}}
package main

import "fmt"

func main() {
{{< /highlight >}}

As before these lines declare the `main` package, line 1, and a `main`
function on line 5. The program also uses the `fmt` package, short for
format. The `fmt` package provides the `Print` and `Println` functions
that the program uses to display the sums and the answers in the
terminal window when the program runs.

You can see an example of how the `Println` function is used in Lines 6,
7 and 8.

{{< highlight go "linenos=false" >}}
fmt.Println("The numbers program shows you how to add, subtract")
fmt.Println("multiple and divide integer numbers.")
{{< /highlight >}}

This lines produce the following lines in the output.

{{< highlight text "linenos=false" >}}
The extra-numbers program shows you how to add, subtract
multiple and divide numbers and how to use brackets.
Sums without brackets.
{{< /highlight >}}

This is exactly the same behaviour as you saw in the `numbers` program.
Whatever appears between the inverted commas appears verbatim
in the output.
The only difference is the content of the lines that are printed.

The remaining lines all follow the same pattern of a `Print` line
followed by a `Println` line. For example Lines 9 and 10 are

{{< highlight go "linenos=false" >}}
fmt.Print("3 + 2 * 5 = ")
fmt.Println(3 + 2*5)
{{< /highlight >}}

In this pattern the first `Print` line prints the sum that will
be calculated. The second `Println` line prints the result of the
sum.

{{% panelWarningTitle title="Important" %}}
Notice the lack of inverted commas in the `Println` line. This tells
Go not to print the line verbatim. Instead Go evaluates the result of the
sum, more correctly called the expression, before printing the result.

So taking the example above the line

{{< highlight go "linenos=false" >}}
fmt.Println(3 + 2*5)
{{< /highlight >}}

prints the result of `3 + 2 * 5` which is 13 and not `3 + 2 * 5`.
{{% /panelWarningTitle %}}

The remainder of the program follows the same pattern, changing the
sum to be printed and then evaluated with each pair.

### Plenary
#### Notes for slide 7

The answer to 15 / 2 is 7. So why 7, why not 7.5? Or why not 7 remainder
1?

We have only introduced __integer__ maths at this stage. So the pupils
have no idea how Go manages __real__ numbers i.e. numbers that can
include a fractional part. The pupils will be introduced to how
Go manages these numbers in upper KS2. The pupils will need to have been
introduced to fractions and decimal fractions before this idea can
be introduced in programming. The answer cannot be 7.5 because the sum
is an integer division sum. Neither number involved contains a decimal
point so cannot be a real number.

The answer cannot be 7 remainder 1 because integer division throws away
the remainder. The result of the sum is therefore a single number, 7, and
not two numbers a 7 and a 1. So the answer cannot be 7 remainder 1
because the remainder is never stored.

We could prompt just the remainder if we used the modulus operator, `%`,
and typed

`15 % 7`

To give the answer 1. NB: Obviously this has nothing to do with percentages,
despite the presence of the percentage sign.

The pupils can prove this by adding these two lines at the end of the
program like so:

{{% codeFigure caption="Fig-2. The `extra-numbers.go` code showing 15 divided by 2" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	fmt.Println("The extra-numbers program shows you how to add, subtract")
	fmt.Println("multiple and divide numbers and how to use brackets.")
	fmt.Println("Sums without brackets.")
	fmt.Print("3 + 2 * 5 = ")
	fmt.Println(3 + 2*5)

	fmt.Print("4 * 4 + 2 = ")
	fmt.Println(4*4 + 2)

	fmt.Print("25 - 20 / 4 = ")
	fmt.Println(25 - 20/4)

	fmt.Print("30 / 2 + 5 = ")
	fmt.Println(30/2 + 5)

	fmt.Println("Sums with brackets.")
	fmt.Print("3 + (2 * 5) = ")
	fmt.Println(3 + (2 * 5))

	fmt.Print("(3 + 2) * 5 = ")
	fmt.Println((3 + 2) * 5)

	fmt.Print("4 * (4 + 2) = ")
	fmt.Println(4 * (4 + 2))

	fmt.Print("(28 - 20) / 4 = ")
	fmt.Println((28 - 20) / 4)

	fmt.Print("30 / (2 + 5 + 3) = ")
	fmt.Println(30 / (2 + 5 + 3))

	fmt.Print("15 / 2 = ")
	fmt.Println(15 / 2
}
{{< /highlight >}}
{{% /codeFigure %}}

Lines 37 and 38 are the new lines. These lines __must__ be added before
the closing brace, the `}`, that terminates the program.

The pattern the pupils are tryign to spot is this:
{{< highlight go "linenos=false" >}}
fmt.Print( The sum in inverted commas )
fmt.Println( The sum NOT in inverted commas )
{{< /highlight >}}

The first line in the pattern prints the sum to the terminal verbatim. It
does not evaluate the expression. The second line contains the expression
and that expression is evaluated.

Like mathematics, patterns are fundamental to computer science. Being
able to spot, reuse and adapt patterns is a key part of programming.
We will be introducing more patterns with each lesson.
