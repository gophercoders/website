+++
Categories = ["Fundamentals"]
Description = "Using variables to store keyboard input."
Tags = []
author = "Owen"
concepts = ["Input", "Variables"]
date = "2015-03-31T22:37:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "putting variables to work"
title = "Keyboard Input"
lessonplan = "keyboardinput"
notesfor = "keyboardinput"
slides = "keyboardinput"
lessonnumber = "7"
+++
### What You are Going to Learn
In the last two lessons we introduced variables. Now we are going to put
variables to work.

In this lesson we are going to show you how to use variables to remember what
you have typed at the keyboard. We will introduce the pattern for going this.
<!--more-->
### Reading What You Type
We introduced you to the idea of a [variables]({{< ref "lessons/KS2/lower/variables.md" >}}) in the [last two lessons]({{< ref "lessons/KS2/lower/further-variables.md" >}}).
But while we showed you how to declare a variable and
how to assign a value to it, we have not shown you what the variable can be
used for. We're going to show you that in this lesson.

{{% panelWarningTitle title="Important" %}}
Make sure you have completed the last two lessons about variables before you try this lesson. You will need to understand variables first.
{{% /panelWarningTitle%}}

We are going to start by showing how you can use variables to make the
program respond to the letters you type at the keyboard.

### Input has Many Forms
The keyboard of your computer is just one form of data input that the
computer can use. Another one is the mouse or trackpad or touchscreen.
Your computer program can read the data sent from these inputs and use it
within the program, for example to move the pointer on the screen.

Other forms of input are files, photos for example, saved on the computer's
hard disk. Or a network connection - your web browser reads web page data
from the network connection. Or sensors, like a temperature sensor,
connected to the computer, or a webcam.

### Keyboard Input and Variables
We are going to show you how to read numbers and strings from the
keyboard. We are going to change the `hellome` program too, so that you can
type in your name and your age. We need to use variables to do this.

So far you have used the `Println` function from the `fmt` package to
print strings and numbers to the screen. This is an example of the output
from the program. Another example out output would be printing a document
on paper using a printer. Or saving a new file to disk so that you can use
it later.

Input and variables combined are the key to changing the program's behaviour
when it runs. Think about the `hellome` program for a minute. The program
prints out your name when you run it. But what if you wanted to give the
program to you friends? How would you get the program to print their name
instead of yours?

You could change the program for each for your friends so that it printed
their name. But, if you have lots of friends this will take a long time.
You will to write a need a different program for each of your friends.

A better way would be to write just one program that asks your friends to
type in their name when they run the program. To do this you need to use
both variables and input.

### How to Read What the User Types
Imagine you had a line like this one in your program

{{< highlight go "linenos=false" >}}
name = simpleio.ReadStringFromKeyboard()
{{< /highlight >}}

{{% panelInfoTitle title="Now it is your turn" %}}
What do you think this line might do?

{{% expandingButton id="readline-answer" name="Answer" %}}
The line is a variable assignment pattern. It assigns whatever the user
types in to the variable `name`. The value for name comes from the
`ReadStringFromKeyboard` function in the new `simpleio` package.
{{% /expandingButton%}}
{{% /panelInfoTitle %}}

Lets break the line down to show you why. Look carefully at the line and you can see that it follows the pattern for
variable assignment
````
variable-name = new-value
````

The variable name is easy to work out, that is just `name`. The value is a
little harder, but not much.

Look carefully at these two lines

{{< highlight go "linenos=false" >}}
simpleio.ReadStringFromKeyboard()
fmt.Println("Please type in your name")
{{< /highlight >}}

Can you see the two patterns in each line?

Both lines call a function. The first line calls the `ReadStringFromKeyboard` function
and the second line calls the `Println` function.

The first pattern is at the start. It looks like this
````
package-name.name-of-function
````
In the first line the package name is `simpleio` and the function name is `ReadStringFromKeyboard`. In the second line the package name is `fmt` and the function
name is `Println`

The second pattern is at the end. It looks like this.
````
name-of-function(...)
````
The `...` could be anything, or nothing at all. But whatever it is we are
telling the function that we want the function to process the something.
In the case of the `Println` function the something is a `string` with the
value `Please type in your name`. In the case of the
`ReadStringFromKeyboard` function we don't need to supply any extra
information.

Now going back to the assignment of the `name` variable

{{< highlight go "linenos=false" >}}
name = simpleio.ReadStringFromKeyboard()
{{< /highlight >}}

You can now see that there is a variable called `name` on the left of
the `=` sign and a function from the `simpleio` package called `ReadStringFromKeyboard`
on the right of the `=` sign.

But what is being assigned to the `name` variable? The answer is the
result of the `ReadStringFromKeyboard` function. The result whatever the
user typed in at the keyboard.

{{% defaultNote %}}
A function can have a result when it is executed. This result can be
assigned to a variable. We will show you how to do this in a later lesson
when we talk about functions.
{{% /defaultNote %}}

{{% panelInfoTitle title="Now it is your turn" %}}
Then this line runs in a program what happens if the user
types in `Bob` or `Alice`? Can you work out what the type of the
`name` variable should be?

{{% expandingButton id="name-answers" name="Answers" %}}
If the user types in `Bob` the value of `name` is also `Bob`. If the
user instead types `Alice` then the value of `name` is also `Alice`.

`name` must be a variable of type string. The clue to the type returned
by the `ReadStringFromKeyboard` is in the name of the function.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### The Keyboard Input Pattern
The pattern has two parts. First the `simpleio` package needs to be
imported into the program. Second the part shows how to use the
new functions to read the user input.

Every Go program has an `import` statement at the top of the program.
The `import` keyword imports one or more packages into the program.
A package is a collection of functions written by another programmer that
can be used in another program.

So far the `import` line has included one package, `fmt`. Now it must
include the `simpleio` package. The `import` block needs to change from

{{< highlight go "linenos=false" >}}
import "fmt"
{{< /highlight >}}

to

{{< highlight go "linenos=false" >}}
import (
	"fmt"

	"github.com/gophercoders/simpleio"
)
{{< /highlight >}}

The new lines includes the full path to the new `simpleio` package within
the Go workspace.

Once the package has been imported into the program the functions within
the `simpleio` package can be used. The package contains two functions
`ReadStringFromKeyboard` and `ReadNumberFromKeyboard`.

The pattern to read a string is

{{< highlight go "linenos=false" >}}
variable-name = simpleio.ReadStringFromKeyboard()
{{< /highlight >}}

the variable that is being assigned to, `variable-name` must have been
declared as a `string` earlier in the program.

`ReadStringFromKeyboard` will read __any__ keyboard input up to the
<kbd>Return</kbd> key is pressed. The input is returned as a string.
Any leading or trailing spaces
will be removed. Remember that a string is anything that can by typed
so this should be the expected behaviour. If the <kbd>Return</kbd> key is
pressed before anything else is typed, this will result in an empty string.

The pattern to read a number is

{{< highlight go "linenos=false" >}}
variable-name = simpleio.ReadNumberFromKeyboard()
{{< /highlight >}}

the variable that is being assigned to, `variable-name` must have been
declared as an `int` earlier in the program.

`ReadNumberFromKeyboard` will read any integer (whole number) until the
<kbd>Return</kbd> key is pressed. The input is returned as an
`int`. Similar to`ReadStringFromKeyboard` any leading or trailing spaces
will be stripped. `ReadNumberFromKeyboard` will reject any
input that is not solely made up of the characters 0, 1, 2, 3, 4, 5, 6,
7, 8, and 9. A valid number must be input by the user before program will
continue.

### The `hellostranger` Program

OK lets look at how you can put all of this to use in the `hellostranger`
program. The `hellostranger` program will print out the name and age of the
user. The user has to type their name and age in when the program runs.

{{% panelDangerTitle title="Important" %}}
Before you can try this program you must first have the `simpleio` package
installed.

Installing the package is easy. You just need to open
a terminal window and type the following command

{{< highlight text "linenos=false" >}}
go get github.com/gophercoders/simpleio
{{< /highlight >}}

Go will then download and install the package into your Go workspace.
{{% /panelDangerTitle %}}

Now let's look at the `hellostranger` program. First type the program in
to your text editor and run the program a few
times. Remember to create a new directory for your program in your
Go Workspace. Once you have typed in the program try running the
program a few times with different names and ages.

Can you see what happens?

{{% codeFigure caption="Fig-1. The `hellostranger` code" %}}
{{< highlight go "linenos=table" >}}
package main

import (
	"fmt"

	"github.com/gophercoders/simpleio"
)

func main() {
	var strangersName string
	var strangersAge int

	fmt.Println("The hello stranger program shows you how to use variables ")
	fmt.Println("to read input from the keyboard.")
	fmt.Println("")

	fmt.Println("Please type in your name.")
	strangersName = simpleio.ReadStringFromKeyboard()
	fmt.Println("Please tell me your age.")
	strangersAge = simpleio.ReadNumberFromKeyboard()
	fmt.Print("Hello ")
	fmt.Println(strangersName)
	fmt.Print("You are ")
	fmt.Print(strangersAge)
	fmt.Println(" years old.")
}
{{< /highlight >}}
{{% /codeFigure %}}

The output from the program is run with a name of Rachel and an age of 10
is.

{{< highlight text "linenos=false" >}}
The hello stranger program shows you how to use variables
to read input from the keyboard.

Please type in your name.
Rachel
Please tell me your age.
10
Hello Rachel
You are 10 years old.
{{< /highlight >}}

If you look carefully at the program you won't be able to find the name
Rachel anywhere. Rachel was the name we typed when we ran the
program.

Lets look at the key points of the program.

Line 3-7, reproduced bellow, show the revised `import` statement showing
how to include the new `simpleio` package.

{{< highlight go "linenos=false" >}}
import (
	"fmt"

	"github.com/gophercoders/simpleio"
)
{{< /highlight >}}

Now lets look at how the user's name is read from the keyboard.
The relevant lines are lines 10 and 18.

{{< highlight go "linenos=false" >}}
var strangersName
...
strangersName = simpleio.ReadStringFromKeyboard()
{{< /highlight >}}

Line 10 is a straight forward variable declaration. It declares a variable
names `strangersName` of type `string`. Line 18 is the variable
assignment. `strangersName` is assigned the result of the
`simpleio.ReadStringFromKeyboard()`
function. In other words whatever the user typed in as their name.

The line is printed to the terminal with line 22

{{< highlight go "linenos=false" >}}
fmt.Println(strangersName)
{{< /highlight >}}

So whatever the user entered as their name is printed to the terminal window. The program does not care what this value of the
`strangersName` is.

Lines 11, 20 and 24 are similar. The only difference is that the variable
`strangersAge` is declared to be an `int` on line 11.
`strngersAge` is assigned the result of the `simpleio.ReadNumberFromKeyboard`
in line 20. Again the program does not know what value is assigned to
`strangersAge.` Line 24 prints the value the user entered for
`strangersAge` to the screen.

{{% panelInfoTitle title="Now it is your turn" %}}
Run the program again and try these cases. See if you can work out what the
 program does.

* What happens if you type in a number instead of your name?
* What happens if you just type <kbd>Return</kbd> instead of typing
your name?
* Do you think the result is correct?
* What happens if you try and type in your name when the program asks
you for your age?
* Can you guess how the program does this?

{{% expandingButton id="behaviour-answers" name="Answers" %}}
If you type a number for your name (or anything else) the program
will display whatever you typed in. The program does not care what
the value you typed in is.

If you pressed <kbd>Return</kbd> instead of typing your name the
program will continue. In the output the program will not print your name.
The program has nothing to print out! Remember that
`simpleio.ReadStringFromKeyboard()` reads the user input until the
<kbd>Return</kbd> key is pressed. If the user presses <kbd>Return</kbd>
they will enter an empty string - a string with no runes.

These are __not__ bugs. This is correct. Remember that a `string` is any
sequence of runes i.e. characters that can be typed. It is not
restricted to just the letters a to z.

If you tried to enter a string instead of a number for your age you
will see something like this:

{{< highlight text "linenos=false" >}}
The hello stranger program shows you how to use variables
to read input from the keyboard.

Please type in your name.
Rachel
Please tell me you age.
ten
Sorry I don't think that was a number. Try again...
eight
Sorry I don't think that was a number. Try again...
8 or 9
Sorry I don't think that was a number. Try again...
10
Hello Rachel
You are 10 years old.
{{< /highlight >}}

The program will continue to ask for an age until the user enters
an age that is a number. This is the correct behaviour of
`simpleio.ReadNumberFromKeyboard()`. The function is defined to have
this behaviour.

The question is why? It is because something special is
happening inside the `simpleio.ReadNumberFromKeyboard()` function.

If you look at the program you won't see the
string `Sorry I don't think that was a number. Try again.` anywhere in the program.

Inside `simpleio.ReadNumberFromKeyboard()` two things are happening.
Firstly the letters that the user types are being tested to see if they
are numbers. This uses a __selection__ statement. Secondly the program
keeps repeating until the user does type in a number. This uses
__repetition__.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}
