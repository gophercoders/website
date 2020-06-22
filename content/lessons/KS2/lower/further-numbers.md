+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["numbers"]
date = "2015-03-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-numbers"
slides = "further-numbers"
subtitle = "and brackets too"
title = "More Numbers"
lessonnumber = "2"
+++
### What You are Going to Learn

You saw in the last lesson how to do simple sums using Go. Now we want to show you that sums in Go follow the same mathematical rules that you already understand.

Maths is a universal language, even for computers.

Lastly we are going to show you the pattern you need to print a sum and its answer to the screen.
<!--more-->
### Sums in Go

Sums in Go are pretty similar to the sums you use everyday in maths. You can do addition, subtraction, multiplication and division.

{{% panelInfoTitle title="Now it is your turn" %}}

Can you remember the symbols that Go uses for

* addition
* subtraction
* multiplication
* division

{{% expandingButton id="symbol-answers" name="Answers" %}}
The answers are

* addition is `+`
* subtraction is `-`
* multiplication is `*`
* division is `/`

{{% /expandingButton %}}
{{% /panelInfoTitle %}}

Remember that you type sums in Go just the same as you would write them normally, apart from using `*` for multiplication and `/` for division.

{{% panelInfoTitle title="Now it is your turn" %}}

How would you write these sums in Go?

{{< highlight text "linenos=false" >}}
three add four
six subtract one
five multiplied by six
ten divided by two
{{< /highlight >}}

{{% expandingButton id="sum-answers" name="Answers" %}}
The answers are

{{< highlight go "linenos=false" >}}
3 + 4
6 - 1
5 * 6
10 / 2
{{< /highlight >}}
{{% /expandingButton %}}
{{% /panelInfoTitle %}}


### Multiplication before Addition

Maths in Go behaves in exactly the same way as maths everywhere else. So if you see a sum like this

{{< highlight go "linenos=false" >}}
3 + 2 * 5
{{< /highlight >}}

You know that the answer is 13, not 15. You have to multiply the two and the five before you add the three. You have to do the multiplication before addition or subtraction.

So what about division? It's almost the same. You have to do division before subtraction or addition. So if you see a sum like this

{{< highlight go "linenos=false" >}}
25 - 20 / 4
{{< /highlight >}}

You know the answer is 20.

{{% panelInfoTitle title="Now it is your turn" %}}
See if you can solve these sums

{{< highlight go "linenos=false" >}}
4  * 4 + 2
30 / 2 + 5
4  * 5 / 2
{{< /highlight >}}

{{% expandingButton id="go-sum-answers" name="Answers" %}}
The answers are:

{{< highlight go "linenos=false" >}}
4 * 4 + 2 = 18
30 / 2 + 5 = 20
4 * 5 / 2 = 10
{{< /highlight >}}

In the last sum, the multiplication and division are considered equally important, so you need to work from the left to the right like this.

{{< highlight text "linenos=false" >}}
4 * 5 / 2 is 20 / 2 = 10
{{< /highlight >}}
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

Go calls these rules the rules of operator precedence. The rules can be summarised as, do any multiplication or division first, then any addition or subtraction.

### Brackets or How to Change the Operator Precedence

But what do you do if you really do want

{{< highlight go "linenos=false" >}}
3 + 2 * 5
{{< /highlight >}}

to equal 15 and not 18?

Well the answer is to use brackets, the `(` and `)` on your keyboard. They are typed <kbd>Shift</kbd>+<kbd>9</kbd> for `(` and <kbd>Shift</kbd>+<kbd>0</kbd> for `)`.

Brackets are used to group terms together. Think of terms a mini-sums. The rule for using brackets is simple. You have to solve the sum in the brackets first.

So we can rewrite

{{< highlight go "linenos=false" >}}
3 + 2 * 5
{{< /highlight >}}

with brackets like this

{{< highlight go "linenos=false" >}}
3 + (2 * 5)
{{< /highlight >}}

Which gives the answer 18. Or this

{{< highlight go "linenos=false" >}}
(3 + 2) * 5
{{< /highlight >}}

which gives the answer 15.

{{% panelInfoTitle title="Now it is your turn" %}}

See if you can solve these sums

{{< highlight go "linenos=false" >}}
4 * (4 + 2)
(28 - 20) / 4
30 / (2 + 5 + 3)
{{< /highlight >}}

{{% expandingButton id="bracket-sums-answers" name="Answers" %}}
The answers are

{{< highlight text "linenos=false" >}}
4 * 4 + 2 is (4 * 4) + 2 = 18
25 - 20 / 4 is 25 - (20 / 4) = 20
30 / 2 + 5 is (30 / 2) + 5 = 20
{{< /highlight >}}

{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### The Extra Numbers Program

Let's write a Go program to show you this.

Open your terminal or command prompt.
We are going to put each Go program in its own directory. This is the recommended
practice for Go programs.
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

Now you need to make a new directory. We need to call this `extra-numbers` after the
program we will write. Then we need to change directory into the new `extra-numbers`
directory.

{{< highlight sh "linenos=false" >}}
mkdir extra-numbers
cd extra-numbers
{{< /highlight >}}

Now you need to start you editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< highlight sh "linenos=false" >}}
atom numbers.go
{{< /highlight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< highlight sh "linenos=false" >}}
liteide numbers.go
{{< /highlight >}}
{{% /panelSuccessTitle %}}

The `extra-numbers.go` tells Atom or liteIDE start with the file `extra-numbers.go` open in
the editor. If the file does not exist the editor will create it for you.

Once your editor starts you can type in the `extra-numbers.go` program.

{{% panelWarningTitle title="Type carefully" %}}
Remember to type in `extra-numbers.go` exactly as we have it here.
{{% /panelWarningTitle %}}

{{% codeFigure caption="Fig-1. The `extra-numbers.go` code" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
    fmt.Println("The extra-numbers program shows you how to add, subtract")
    fmt.Println("multiply and divide numbers and how to use brackets.")
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

Once you have typed the program in, you need to save it. Once you have saved it you need to run it with:

{{< highlight sh "linenos=false" >}}
go run extra-numbers.go
{{< /highlight >}}

If you typed the program correctly you should see

{{< highlight text "linenos=false" >}}
The extra-numbers program shows you how to add, subtract
multiply and divide numbers and how to use brackets.

Sums without brackets.
3 + 2 * 5 = 13
4 * 4 + 2 = 18
25 - 20 / 4 = 20
30 / 2 + 5 = 20
Sums with brackets.
3 + (2 * 5) = 13
(3 + 2) * 5 = 25
4 * (4 + 2) = 24
(28 - 20) / 4 = 2
30 / (2 + 5 + 3) = 3
{{< /highlight >}}
The first thing to notice is that the extra-numbers program is very similar to the previous `numbers` program.

Both programs look similar, they have a similar structure.

The first interesting lines are the `fmt.Println` function is used in Lines 6, and 7.

{{< highlight go "linenos=false" >}}
fmt.Println("The numbers program shows you how to add, subtract")
fmt.Println("multiple and divide integer numbers.")
{{< /highlight >}}

This lines produce the following lines in the output.

{{< highlight text "linenos=false" >}}
The extra-numbers program shows you how to add, subtract
multiply and divide numbers and how to use brackets.
Sums without brackets.
{{< /highlight >}}

This is exactly the same behaviour as you saw in the numbers program. Whatever appears between the inverted commas is printed out in the terminal window. The only difference is the content of the lines that are printed.

The remaining lines all follow the same pattern of a `fmt.Print` line followed by a `fmt.Println` line. For example Lines 9 and 10 are

{{< highlight text "linenos=false" >}}
fmt.Print("3 + 2 * 5 = ")
fmt.Println(3 + 2*5)
{{< /highlight >}}

In this pattern the first `fmt.Print` line prints the sum that will be calculated. The second `fmt.Println` line prints the result of the sum.

{{% panelWarningTitle title="Important" %}}
Notice the lack of inverted commas in the `Println` line. This tells Go not to print the sum. Instead Go works out the result of the sum, more correctly called the expression, before printing the answer.

Like this

{{< highlight go "linenos=false" >}}
fmt.Println(3 + 2*5)
{{< /highlight >}}

prints the answer of `3 + 2 * 5` which is 13 and not `3 + 2 * 5`.
{{% /panelWarningTitle %}}

The rest of the program follows the same pattern. The sums change but the pattern is the same.

Both programs start with the same five lines.

{{< highlight go "linenos=false" >}}
package main

import "fmt"

func main() {
{{< /highlight >}}

As before these lines declare the main package, line 1, and a main function on line 5. The program also uses the `fmt` package, short for format. The `fmt` package provides the `Print` and `Println` functions that the program uses to display the sums and the answers in the terminal window when the program runs.

You will see lines like this at the start of every Go program. Don’t worry if you don’t understand these at the minute. You just need to know that you need them.
