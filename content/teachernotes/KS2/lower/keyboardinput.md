+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the variables lesson."
Tags = []
author = "Owen"
concepts = ["variables", "input"]
date = "2015-04-02T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "keyboardinput"
slides = "keyboardinput"
lessonplan = "keyboardinput"
subtitle = "Teach and Try Teacher Notes"
title = "Keyboard Input"
lessonnumber= "7"
+++
### Objective
To learn how to use variables to read input from the keyboard.

The class will learn one pattern for reading strings and numbers that have
been typed at the keyboard by the user.

The class will then practice these patterns with the `hellostranger` program.

Creating these program will require the class to use the text editor (either Atom
or LiteIDE) to create and save the source code file and the terminal/command line
to run their program.
<!--more-->
### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand what output is and think of some examples
* Understand what input is and think of some examples
* Understand one pattern for reading numbers and strings for the keyboard
* Understand how to store the user input in a variable
* Understand that it is the combination of variables and different input
that can cause a program to produce different output on each run
* Write a simple program that uses variables to store numbers and strings provided by the user
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The example program is sufficiently simple that the little or no additional teaching should be required beforehand.

* Basic keyboard/typing and mouse skills
* Lessons 1-6 in this series

### Computing Links

Variables. The programs demonstrate how to declare a variable, assign a
value to it and how to use the variable.
Variables are stored in the computers memory so there is a direct like to
computer hardware.

Input and Output. The pupils have already seen examples of simple output.
Specifically printing strings to the terminal window. This lesson lists
some of the other types of output that as possible as well as defining the
term. The lesson focuses on inout, specifically keyboard input from the
user. Other examples of input as listed and the term is defined.

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

There is a direct link to mathematics where the concept of a variable or an
unknown originates. There is a second link to mathematics through one of
the example programs to shapes and their properties.

Input itself is an abstract concept. The most direct analogy would be to
cooking. The ingredients used to create a meal are analogous to the input
that a program needs to run.

### Do Your Programs Change
#### Notes for Slide 2

If the `hellofriend` program is run again it will produce exactly the
same output as before. If the program is run a further 10 or 100 times
the output will still be the same.

The `hellofriend` program has _all_ of the information it needs to run
and produce the output before it runs. The pupils and their friend's names
and ages are typed into the source code of the `hellofriend` program. We
say that the values are _hard coded_ into the program.
Although the values are assigned to variables the same values are always
assigned to the same variables.

{{% defaultNote %}}
There is a simple way to prove this. Open one pupil's version of the
`hellofriend` program and ask them to point to their name and age in the
file. They will also be able to point to their age as well as their
friend's name and age.

All of the information needed by the program already exists within
the program itself. The user of the program does not need to supply
any further information to the program when it runs.
{{% /defaultNote %}}

If you want to tell a computer program something __after__ it has started
running then you need to use input. You also have to store the value of
the input somewhere. This is where variables are used.
Now the program does not have all of the information it needs when it
starts. Instead it gets the information from the user at the correct point
in the program. All the program has to do is refer to the information that
the user inputs via the variable name that stores the information, and the
program will work, without changes, for any input that the user gives.


### Output before Input
#### Notes for Slide 3
The pupils have used output many times in every program so far. The output
they have been using is printing words and numbers to the terminal window.
This is achieved using the `fmt.Println` and `fmt.Print` functions.

The challenge is simply to write down a single correct `fmt.Println` or
`fmt.Println` line. Any of the following would be fine

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print("Hello")
fmt.Println("World!")
fmt.Println(age)
fmt.Println(1+2)
{{< /hilight >}}

{{% panelWarningTitle title="Important" %}}
Any string can be used in the first two examples. The string is not
important, provided both sets of inverted commas are present and the
string is on one line.

The last examples i.e. without quotes, are __only__ valid of the pupil can
explain that either the value of a variable name e.g. `age` is being
printed or that it is printing the result of the sum e.g. `1+2`.

If the pupil believes that either of the last two examples print either
the string `age` or `1+2` then they should be reminded of the pattern used
to print strings.  
{{% /panelWarningTitle %}}


### Output
#### Notes for Slide 4
Output is anything that program (or the computer) sends to the outside
world. This could be to another physical device like a screen or a
printer, or to another program.

An abstract example is the web browser one. When a user types in a
website address the web browser fist has to convert the website address to
a number. To do this the web browser sends the website address to an DNS
server. This is the output. The web browser outputs the website address
and sends it via the Internet to an DNS server.

As you can see from this example the output does not have to be
physical.

In the case of the robot imagine a program that is controlling the robot.
The program will have to send commands such as left, right, forward or
stop to the robot. This would be the output.

It is common for a single program to use more than one form of output.
The web browser uses both the screen to display the web pages as well
as the network to request the web pages as well as file to save the
web pages.

### Input Output's Best Friend
#### Notes for Slide 5
Input is the exact opposite of output. Input is how a program (or a
computer) receives information from the real world or from another
program.

In the case of the web browser the input is the web page that the web server sent. In this case the input is read from the network.

A simple sensor example would be a program that reads the values from
a temperature sensor.

### Variables and Input
#### Notes for Slide 6
Input and variables combined are the key to changing the program's behaviour
when it runs. Think of a program that asks the pupils to type in their
name before printing it out. The programmer cannot possibly know that the
pupils name is beforehand (or even if this is their real name). All they can
do is store the value that the pupil types into a variable. The programmer
then has to use the variable everywhere they need the value for the pupil's
name in the program. In this way one program will work out all of the
pupils in the class. The output of the program - its behaviour - now
depends on what the user typed in.

{{% panelWarningTitle title="Important" %}}
You need __both__ variables and input for this to happen, but not
__selection__. We will use selection in a later lesson to examine what the
user has typed in to change the behaviour of the program again.
Selection is something quite distinct as you will see when it is
introduced.
{{% /panelWarningTitle %}}

The line

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
name = simpleio.ReadStringFromKeyboard()
{{< /hilight >}}

Assigned whatever the user types in to the variable `name`. The value for
name comes from the `ReadStringFromKeyboard` function in the new
`simpleio` package.

If the pupils read the line left to right (and possibly ignore the
`simpleio` bit) they should be able to deduce this.

If not then you can break the line down like this.

Look carefully at the line and you can see that it follows the pattern for
variable assignment
````
variable-name = new-value
````

The variable name is easy to work out, that is just `name`. The value is a
little harder, but not much.

Look carefully at these two lines

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
simpleio.ReadStringFromKeyboard()
fmt.Println("Please type in your name")
{{< /hilight >}}

There are two patterns in each line

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

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
name = simpleio.ReadStringFromKeyboard()
{{< /hilight >}}

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

For now the pupils just need to know that this is possible and that it
still follows the pattern for variable assignment. You just have a
function on the left hand side of the `=` instead of a value.
{{% /defaultNote %}}

So if the user types in `Bob` the value of `name` is also `Bob`. If the
user instead types `Alice` then the value of `name` is also `Alice`.

### The Keyboard Input Pattern
#### Notes for Slide 7
The pattern has two parts. First the `simpleio` package needs to be
imported into the program. Second the part shows how to use the
new functions to read the user input.

### The `import` Part
#### Notes for Slide 8
Every Go program has an `import` statement at the top of the program.
The `import` keyword imports one or more packages into the program.
A package is a collection of functions written by another programmer that
can be used in another program.

So far the `import` line has included one package, `fmt`. Now it must
include the `simpleio` package. The `import` block needs to change from

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import "fmt"
{{< /hilight >}}

to

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
	"fmt"

	"github.com/gophercoders/simpleio"
)
{{< /hilight >}}

The new lines include the full path to the new `simpleio` package within
the Go workspace. Once imported the functions will be available as
`simpleio.ReadStringFromKeyboard` and `simpleio.ReadNumberFormKeyboard`.

{{% panelWarningTitle title="Important" %}}
The `simpleio` package must first be installed on the pupils computers.
This can be performed beforehand by an IT coordinator or by the pupils.

To install the package the pupils or the it coordinator needs to open
a terminal window and type the following command

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
go get github.com/gophercoders/simpleio
{{< /hilight >}}

Go will then download and install the package.

Assuming that Go has been installed correctly, along with the git tool,
and that access to the `github.com` is not blocked by any network firewall
the package will install.
{{% /panelWarningTitle %}}

### The Using Part
#### Notes for Slide 9
Once the package has been imported into the program the functions within
the `simpleio` package can be used. The package contains two functions
`ReadStringFromKeyboard` and `ReadNumberFromKeyboard`.

The pattern to read a string is

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable-name = simpleio.ReadStringFromKeyboard()
{{< /hilight >}}

the variable that is being assigned to, `variable-name` must have been
declared as a `string` earlier in the program.

`ReadStringFromKeyboard` will read __any__ keyboard input up to the
<kbd>Return</kbd> key is pressed. The input is returned as a string.
Any leading or trailing spaces
will be removed. Remember that a string is anything that can by typed,
so this should be the expected behaviour. If <kbd>Return</kbd> is
pressed before anything else is typed it will result in an empty string.

The pattern to read a number is

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable-name = simpleio.ReadNumberFromKeyboard()
{{< /hilight >}}

the variable that is being assigned to, `variable-name` must have been
declared as an `int` earlier in the program.

`ReadNumberFromKeyboard` will read any interger/whole number until the
<kbd>Return</kbd> key is pressed. The input is returned as an
`int`. Similar to`ReadStringFromKeyboard` any leading or trailing spaces
will be stripped. `ReadNumberFromKeyboard` will reject any
input that is not solely made up of the characters 0, 1, 2, 3, 4, 5, 6,
7, 8, and 9. A valid number must be input by the user before program will
continue.

### The `hellostranger` Program
#### Notes for Slide 10

Lets look at the `hellostranger` program.

{{% codeFigure caption="Fig-1. The `hellostranger` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
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
{{< /hilight >}}
{{% /codeFigure %}}

The output from the program if run with a name of Rachel and an age of 10
is.

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The hello stranger program shows you how to use variables
to read input from the keyboard.

Please type in your name.
Rachel
Please tell me your age.
10
Hello Rachel
You are 10 years old.
{{< /hilight >}}

Notice that the program does not contain the string Rachel or the number
12.

Once the pupils have typed in the program in they should be encouraged to
run it several times, putting a different name and age in each time.

Lets look at the key points of the program.

Line 3-7, reproduced bellow, show the revised `import` statement showing
how to include the new `simpleio` package.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
	"fmt"

	"github.com/gophercoders/simpleio"
)
{{< /hilight >}}

Next lets look at how the pupils name is read from the keyboard.
The relevant lines are lines 10 and 18.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var strangersName
...
strangersName = simpleio.ReadStringFromKeyboard()
{{< /hilight >}}

Line 10 is a straight forward variable declaration. It declares a variable
names `strangersName` of type `string`. Line 18 is the variable assignment.
`strangersName` is assigned the result of the `simpleio.ReadStringFromKeyboard()`
function. In other words whatever the user typed in as their name, Rachel
in the above example.

The line is printed to the terminal with line 22

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(strangersName)
{{< /hilight >}}

Whatever the user entered as their name is printed to the terminal window.
Notice that the program does not know or care what this value of the
`strangersName` is.

Lines 11, 20 and 24 are similar. The only difference is that the variable
`strangersAge` is declared to be an `int` on line 11.
`strngersAge` is assigned the result of the `simpleio.ReadNumberFromKeyboard`
in line 20. Again the program does not know what value is assigned to
`strangersAge.` Line 24 prints the value the user entered for
`strangersAge` to the screen.

### Plenary
#### Notes for Slide 11

It will help if the pupils try each of these cases.

If the users type a number for their name (or anything else) the program
will display whatever the user types as the pupils name.

This is __not__ a bug. This is correct. Remember that a `string` is any
sequence of runes i.e. characters that can be typed. It is not
restricted to just the letters a to z.

If the pupils press <kbd>Return</kbd> instead of typing anything as
their name the program will again continue. Remember that
`simpleio.ReadStringFromKeyboard()` reads the user input until the
<kbd>Return</kbd> key is pressed. If the user only presses <kbd>Return</kbd>
they will enter an empty string - a string with no runes.

If the pupils try to enter a string instead of a number for their age they
will see something like this:

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
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
{{< /hilight >}}

The program will continue to ask for an age until the pupil enters
an age that is a number. This is the correct behaviour of
`simpleio.ReadNumberFromKeyboard()`. The function is defined to have
this behaviour.

The question is why? The pupils should realise that something special is
happening inside the `simpleio.ReadNumberFromKeyboard()`.

Ask then to look at the program and see if they can see where the
string "Sorry I don't think that was a number. Try again...". They will
not be able to find it. This is a trick question.

Can the pupils work out that inside `simpleio.ReadNumberFromKeyboard()`
there has to be some sort of test to see if the user typed a number?

Can the pupils work out that there must also be some sort of repetition
inside `simpleio.ReadNumberFromKeyboard()` that causes the program to
keep asking for a number until the user types one?

Selection will be the subject of the next lesson.
