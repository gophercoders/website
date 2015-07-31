+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the variables lesson."
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-03-31T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "variables"
subtitle = "Teach and Try Teacher notes"
title = "Variables"
lessonnumber= "5"
lessonplan = "variables"
slides = "variables"
+++
### Why variables now?
Variables are a fundamental concept in computing. Without them it is almost impossible to write a useful computer program. Programmers use variables to
record the programs internal state and for user input.

Variables are the mechanism used to store _data_ in a program while it is
running.

The computing concepts of selection and repetition both depend on variables.
Variables therefore need to be introduced before the concepts of selection and
repetition and user input.


### Objective
The objective is to introduce the concept of a variable to the class.


The objective is to get the class to write a Go program to print strings to the terminal using the two different approaches that Go provides.

Creating this program will require the class to use the text editor (either Atom or LiteIDE) to create and save the source code file and the terminal/command line to run their program.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand what a variable in a computer program is
* Understand that the variable is stored in the computers memory
* Understand how to declare a variable
* Understand the naming rules for variables
* Understand that variables have different types - for numbers and strings initially.
* Understand how the type restricts the operations that can be carried out
on the variable.
* Understand how to assign a value to a variable
* Understand how to use a variable
* Write a simple program that uses variables to store numbers and strings.
* Understand that the program represents a sequence
* Understand that the sequence executes in order

### Teaching prerequisites

The example program is sufficiently simple that the little or no additional teaching should be required beforehand.

* Basic keyboard/typing and mouse skills
* Lessons 1-4 in this series

It may help if the class has been introduced to simple equations in mathematics.
For example
````
x = 1 + 5
````
or
````
10 - x = 7
````
as this will also introduce the concept of a variable from
another subject.
Alternatively variables could be introduced in English by asking the
pupils which words would complete a sentence. For example

Which word completes this sentence?

* The colour of a banana is ________.
* Raspberries are coloured ________.
* Apples are coloured _______ and ____.

### Computing Links

Variables. The programs demonstrate how to declare a variable, assign a
value to it and how to use the variable.
Variables are stored in the computer's memory so there is a direct likeness to
computer hardware.
Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

The is a direct link to mathematics/algebra where the concept of a variable or an
unknown originates. English comprehension could also be used to introduce
the concept.

### Where is Everything Kept?
#### Notes for Slide 2

The computers can remember information in two different places.

In first place is in the computers memory - the RAM. The second place is
saved as a file to the hard disk or some other persistent storage
medium e.g. SSD or Flash memory or DVD or magnetic tape.

The hard disk of course no longer needs to be physically in the machine. So the files could be saved in the  "cloud". In this context only the cloud is just a huge collection of storage.
Think of Apples iPhoto service, or Microsoft's OneDrive as examples of cloud storage services.

Persistence storage has the characteristic that it does not require
electricity to be continually flowing for the information be remembered.

Variable are stored in RAM. When the computer is switched off
the contents of the RAM is lost or forgotten. Volatile memory.

When a program is finished, or exits, the variables that the program
created are also destroyed or lost.

Only information saved as files and saved onto a hard disk will remain in
either case.

### Variables and Memory
#### Notes for Slide 3
Variables are stored in memory when the program runs. Variables are
stored in the computers RAM (Random Access Memory). A variable only
exists in memory while the program that created it is running. Once the
program ends, the variable is no longer in memory. Without introducing the
concept of _variable scope_ this is a first approximation to the lifetime
of a variable.

Similarly when the computer is switched off the variable is lost. This is
to be expected as the program is no longer running. For the same reason
the variables do not exist in RAM until the program that creates them is
running.

The pupils need to understand the clear distinction between this memory,
the RAM that is used when the program runs, and "memory" used to store
files like documents, programs, photos or music. Files are stored on the
computers hard disk, or memory (or USB) sticks or memory cards  -
typically used in digital cameras or smartphones. Strictly speaking these
are not a type of memory. Due to the characteristics (non-volatile memory) of the storage medium
this information is not lost when the computer is turned off.

More correctly they should be called persistence storage_ or just
_storage_.

The technologies used and the process by which the data is stored on a
hard disk or in a memory card is radically different from that used by
RAM.

When the pupils refer to memory they should mean to the computers RAM.
Likewise storage should mean the persistent storage of some kind.

### The 3 Things a Variable Needs
#### Notes for Slide 4
The line means that a variable named "super_hero_name" of type string has
been created. The line is read left to right.

The pupils stand a fair chance of just guessing this if they try to read
it.

The keyword, variable name and variable type will be explained in the
next slides.

Keywords are important. They carry a special meaning to Go? The keywords
convey instructions to the `go` program, invoked with the `go run`
command before the program is run. Their meaning is fixed so they cannot
be used for any other purpose i.e. as variables names.

### Keywords in Go
#### Notes for Slide 5
This is the complete list of keywords for Go. None of these words can
be used as a variable name.

The pupils will need to use this list in the plenary

### Variables have a Name
#### Notes for slide 6

Before a variable can be used in Go it must first be created.

The variable has to have a name so that the programmer can refer to the
variable later in the program.

The variable is introduced by using the `var` keyword.

### Rules for Variable Names
#### Notes for Slide 7
Although the programmer can choose the variable names they use ,they must
follow the rules for valid variable name. The rules are

* A keyword cannot be used as a variable name.
* Spaces in variables names, punctuation and mathematical symbols cannot be used
as in variable name.
* A variable name cannot be the same as a package name.
* A variable name cannot start with a number.
* Each variable name has to be unique.
* Variable names can only contain letters `a` to `z` or `A` to `Z` or the
numbers `0` to `9` or the _underscore_ character `_`.

Pupils should be encouraged to use meaningful variable names, that
reflect the content of data and the use that the variable will be put to.

Computer programs are read by other programmers _many_ times before
they are executed by a computer. Meaningful variable names, that
reflect the context of the data held by the variable will improve
readability of the program significantly.

While it is not illegal not to, the pupils should be encouraged to name
variables starting with a lower case letter. Variables starting with an
uppercase letter have a specific meaning in Go. Until packages are
introduced the difference will have no consequences. But the pupils
should develop the habit early.

Where a variable name consists of two or more words, it is both better and
more typical Go style to  use camelCase to join the words rather than an
underscore, `_`. This has not been enforced in the example program as it
may be easier for the pupils to read the version with the underscore.

### Variable Names Challenge
#### Notes for Slide 8
The answers are

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td>Variable Name</td><td>Legal</td><td>Reason</td>
    </tr>
    <tr>
    <td>age</td><td>Yes</td><td>The name contains only lower case letters</td>
    </tr>
    <tr>
    <td>AGE</td><td>Yes</td><td>The name contains only upper case letters</td>
    </tr>
    <tr>
    <td>Age</td><td>Yes</td><td>The name contains only upper and lower case letters</td>
    </tr>
    <tr>
    <td>myAge</td><td>Yes</td><td>The name contains only upper and lower case letters</td>
    </tr>
    <tr>
    <td>my_age</td><td>Yes</td><td>The name contains only lower case letters and an underscore <code>_</code></td>
    </tr>
    <tr>
    <td>age1</td><td>Yes</td><td>The name contains only lower case letters and numbers</td>
    </tr>
    <tr>
    <td>2age</td><td>No</td><td>The name starts with a number</td>
    </tr>
    <tr>
    <td>my age</td><td>No</td><td>The name contains a space</td>
    </tr>
    <tr>
    <td>my-age</td><td>No</td><td>The name contains a minus sign, <code>-</code></td>
    </tr>
    <tr>
    <td>my+age</td><td>No</td><td>The name contains a plus sign, <code>+</code></td>
    </tr>
    <td>fmt</td><td>No</td><td>The <code>fmt</code> is a package name</td>
    </tr>
    </tr>
    <td>map</td><td>No</td><td><code>map</code> is a keyword</td>
    </tr>
</table>
</div>

Only the first 6 are legal variable names according to the rules.

### The Type of the Variable
#### Notes for Slide 9
When a  variable is created, the program will cause the computer to
reserve, or _allocate_ a position in the computer's memory. The computer
will allocate just enough memory to store a variable. How much memory the
computer will allocate depends on the type of the variable.

This is the fundamental reason why knowing the type of the variable is so
important. It determines how much memory the computer will allocate.

The fact that the type of the variable can also be used to restrict the
possible operations on the variable is, to some extent, a by product of
this approach.

At this stage, pupils will only be introduced to two types. One type
called `int`, short for integer, that can only be used to store whole,
integer numbers. And another type that can be used to hold strings called
`string`.

Go has other types for real i.e. deciaml fraction, numbers complex
numbers, truth values (true and false), as well as more complex types
used to collect data into larger groups.

Some of these will gradually be introduced in later lessons.

A variable that has a type of `int` can only store integer numbers in it.
It would be illegal to attempt to set its value to the value of a string.
And vice versa, you cannot store integer number in variable which
can only hold strings.

### Variables Challenge
#### Notes for Slide 10

The answers are:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var super_hero_name string
{{< /hilight >}}

creates a variable called `super_hero_name` of type `string`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var number_of_webs int
{{< /hilight >}}

creates a variable called `number_of_webs` of type `int`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var appeared_in_comic string
{{< /hilight >}}

creates a variable called `apeared_in_comic` of type `string`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var toy_name string
{{< /hilight >}}

creates a variable called `toy_name` of type `string`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var jetPackSpeed int
{{< /hilight >}}

creates a variable called `jetPackSpeed` of type `int`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var appeared_in_cartoon_film string
{{< /hilight >}}

creates a variable called `apeared_in_cartoon_film` of type `string`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var number_of_wheels int
{{< /hilight >}}

creates a variable called `number_of_wheels` of type `int`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var numberOfFans int
{{< /hilight >}}

creates a variable called `number_of_fans` of type `int`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var Number_of_Piston_Cups_Wins int
{{< /hilight >}}

creates a variable called `Number_of_Piston_Cups_Wins` of type `int`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var nameOfRacer string
{{< /hilight >}}

creates a variable called `nameOfRacer` of type `string`

### Variable Creation Pattern
#### Notes for Slide 11

Go has three distinct ways to declare a variable. The approach shown in the
[lesson]({{< ref "lessons/KS2/lower/variables.md#putting-it-all-together" >}}) is
the most explicit syntax. Each part of the variable declaration must
be stated explicitly by the programmer.

The pattern for variable declaration is always
````
var name-of-variable type-of-variable
````
each part is separated by a space. The declaration must appear on a line
on its own.

`var` is the keyword for a variable declaration. It must be in lower case
and must be the first part of the variable declaration.

`type-of-variable` is the type to be used for the variable. At the moment
this can only be a number type, `int`, or a string type, `string`.

`name-of-variable` is the name to be used for the variable. The variable
name that is used must be legal one according to the rules for variable
names introduced earlier.

This is more commonly called __variable declaration__ rather than
variable creation.

### How to Set a Variables Value
#### Notes for Slide 12
The value of a variable is set using an equals sign, `=`. This should be
read as __the variable is assigned the value of__. After the line has
executed, the variable will contain the value that was to the right of the
equals sign.

The equals sign, `=` is just another operator in Go, in the same was as
`+`, `-`, `*` or `/` are.

In any expression, the assignment is performed last. Everything on the
right hand side of the `=` must be evaluated first. Variable assignment
is the operator with the lowest operator precedence.

{{% panelWarningTitle title="Important" %}}
The way to think of the equals operator is as the assignment operator.
Do not think of it as an equivalence operator i.e are the expressions on
each side of the `=` the same value? as it is in maths. In Go, a test for
equivalence, is written with a double equals, like this `==`.
{{% /panelWarningTitle %}}

The second line assigns the integer value `1001` to the variable named
`jetPackSpeed` which __must__ have been declared as an `int`, integer,
type earlier in the program. If not the line would be an error

### Second Variable Challenge
#### Notes for Slide 13
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var fish_name string
var number_of_stripes
fish_name = "Nemo"
{{< /hilight >}}

The variable `fish_name` is now is set to, or contains, the string `Nemo`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
number_of_stripes = 3
{{< /hilight >}}

The variable `number_of_strips` is now is set to, or contains, the int `3`

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fish_name = "Gill"
{{< /hilight >}}

The variable `fish_name` is now is set to a new value, the string `Gill`.
The previous value `Nemo` has been overwritten, it is lost and cannot be
recovered.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
number_of_strips = 5
{{< /hilight >}}

The variable `number_of_strips` is now is set to a new value, the `int`
`5`. The previous value `3` has been overwritten, it is lost and cannot
be recovered.

### Variable Assignment Pattern
#### Notes for Slide 14
Variable assignment sets the value of the variable. The value is stored
in memory and associated with the variable name.

The pattern for variable assignment is always
````
name-of-variable = new-value
````
Each part is generally separated by a space, though this is not a
requirement.

`name-of-variable` is the name of the variable as it was previously declared.
`new-value` is a new value _of the same type_ as the type the variable was
declared with. A string can only be assigned the value of another string.
A number can only be assigned the value of another number.

### How to Use a Variable
#### Notes for Slides 15 & 16

To use the value of the variable the programmer just has to use the
variable name instead. This is exactly the same as algebra. The computer
will replace the variable with the variables __current__ value when the
program runs.

The answer to the question is therefore the variable name
`super_hero_name` should replace the ???'s.

This will print the current value i.e. `Spider Man`

The solution is on slide 16

### The 'hellobob' Program
#### Notes for Slide 17

The pupils will need to start a terminal, open the text editor type
in the `hellobob` program and run it.

Lets look at the example program in more detail. Here it is again.

{{% codeFigure caption="Fig-1. The `hellobob.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	var name string
	var age int

	name = "Bob"
	age = 8

	fmt.Println("The hellobob program shows you how to use variables.")
	fmt.Println("")

	fmt.Print("Hello, my name is ")
	fmt.Print(name)
	fmt.Println(".")
	fmt.Print("I am ")
	fmt.Print(age)
	fmt.Println(" years old.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The important parts of the `hellobob`progrm are lines 8 and 9, 11 and 12 and
lines 18 and 21. The other lines are mostly `Println` lines that print out
the strings to the terminal which the pupils have used before in the`stringfun`
and `numbers` programs.

Lines 8 and 9 are the variable declarations. They follow the pattern outlined
previously. Both lines read left to right. Line 8 reads as, there is a variable
called `name` this is of type string. Line 9 reads as, there is a variable called
`age` of type integer.

Lines 11 and 12 are the variable assignments. They follow the pattern
for variable assignment outlined previously. Line 11 assigns the variable `name`
the value of `Bob`. Notice that the value `Bob` is a string, strictly an
interpreted string literal, as you can tell from the use of the double quote
marks. Line 12 assigns the variable `age` the value of the integer number
`8`.

Lines 18 and 21 show the pupils how to use the variable. They just need to use
the name of the variable wherever they want to use its value. In line 18
the value of `name`, `Bob`, will be printed. In line 21 the value of `age`, `8`,
will be printed.
