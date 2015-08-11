+++
Categories = ["Fundmentals"]
Description = "These are the teacher notes for the variables lesson."
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-03-31T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-variables"
slides = "further-variables"
lessonplan = "further-variables"
subtitle = "teacher notes"
title = "More Variables"
lessonnumber= "6"
+++
### Objective
To practice using the patterns for integer and string type variables in
Go.

The objective is to get the class to write a Go program that use
variables.

Creating these program will require the class to use the text editor (either Atom
or LiteIDE) to create and save the source code file and the terminal/command line
to run their program.
<!--more-->

### Variable Reinforcement
The lesson reinforces the patterns used for both variable declaration
and variable assignment. The pupils practice these patterns by
correcting a program that does not follow the rules and changing the
`hellobob` program to produce two new programs.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
** Understand how to declare a variable
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
* Maths - Shapes. The pupils need to know the properties or squares and rectangles
* Math - The pupils need to know how to calculate the perimeter and area of a rectangle.
* Science -  Astronomy. The plenary calculates the distance between two
"nearby" stars.

### Computing Links

Variables. The programs demonstrate how to declare a variable, assign a
value to it and how to use the variable.
Variables are stored in the computer's memory so there is a direct link to
computer hardware.
Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

There is a direct link to mathematics where the concept of a variable or an
unknown originates. There is a second link to mathematics through one of
the example programs to shapes and their properties. There is also a link
to science/astronomy in the plenary.

### Variable Declaration pattern
#### Notes for Slide 2
The three things that a variable declaration requires are

* The `var` keyword that is used to introduce a variable.
* The variable name, so that the programmer can refer to it later
* The variable type which describes the type of data that the variable can hold.

They are required in this order.

The programmer can choose the name of the variable, and the variable's
type. The variable name can be anything, provided the variable name
follows the rules. The programmer chooses between `int` for a number type
and `string` for a string type.

The variable declarations would be:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var distance_to_London int
var capitalOfScotland string
{{< /hilight >}}


### The Pattern for Variable Declaration
#### Notes for Slide 3
Each part of the variable declaration must be stated explicitly by the programmer.

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

### The Rules for Variable Names
#### Notes for Slide 4
Although the programmer can choose the variable names they use they must
follow the rules for valid variable name. The rules are

* A keyword cannot be used as a variable name.
* Spaces in variables names, punctuation and mathematical symbols cannot be used.
* A variable name cannot be the same as a package name.
* A variable name cannot start with a number.
* Each variable name has to be unique.
* Variable names can only contain letters `a` to `z` or `A` to `Z` or the
numbers `0` to `9` or the _underscore_ character `_`.

Pupils should be encouraged to use meaningful variable names, that
reflect the content of data and the use that the variable will be put to.

Computer program are read by other programmers _many_ times before
they are executed by a programmer. Meaningful variable names, that
reflect the context of the data held by the variable will improve
readability of the program significantly.

### Variable Assignment
#### Notes for Slide 5
The value of a variable is changed when a new value is assigned to it. The
symbol for this is an equals sign, `=`.

You cannot assign a value of one type to a variable of another type. So
you cannot assign a string value to variable that is declared to hold a number
and vice-versa.

When a new value is assigned to a variable, the old value is lost. The new
value overwrites the old value. The old value cannot be recovered.

### The Variable Assignment Pattern
#### Notes for Slide 6
Variable assignment sets the value of the variable.

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

The previous value of the variable is replaced by the new value.

### The `badvariables` Program
#### Notes for Slide 7 and 8
The `badvariable` program is

{{% codeFigure caption="Fig-1. The uncorrected `badvariable` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import "fmt"

func main() {
	var short_side int
	var long side int
	perimeter int
	var area string

	short_side = 3
	long_side % 8

	fmt.Println("What shape am I?")
	fmt.Print("Two of my sides are ")
	fmt.Print(shortside)
	fmt.Println( meters long.")
	fmt.Print("Two of my sides are )
	fmt.Print(long_side)
	fmt.Println(" meters long.")
	perimeter = 2*short_side + 2*long_side
	fmt.Print("My area perimeter is ")
	fmt.Print(perimeter)
	fmt.Println(" meters.")
	area = short_side * long_side
	fmt.Print("My area is ")
	fmt.Print(area)
	fmt.Println(" meters square.")
}
{{< /hilight >}}
{{% /codeFigure %}}

There are 7 mistakes in this program. The mistakes are:

* Line 7 - the variable name `long side` is illegal because it contains a space.
Lines 19, 21 and 25 use the correct and intended spelling
* Line 8 - the line is missing the `var` keyword
* Line 12 - the wrong symbol is used for variable assignment. A `%` symbol has
been used instead of the correct equals sign, `=`
* Line 16 - the variable name `shortside` has not been defined. This is a miss
typing of the variable name `short_side`
* Line 17 - the string in the `fmt.Println` is missing an
opening inverted commas.
* Line 18 - The string in the `fmt.Print` on is missing a closing inverted commas.
* line 25 - The variable `area` is a declared on line 9 to be a string. But the
value of the expression `short_side * long_side` is an integer number. The mistake
is actually on line 9. `area` should have been declared as an `int` number type
not a `string`type.

The corrected program is

{{% codeFigure caption="Fig-2. The corrected `badvariable` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import "fmt"

func main() {
	var short_side int
	var long_side int
	var perimeter int
	var area int

	short_side = 3
	long_side = 8

	fmt.Println("What shape am I?")
	fmt.Print("Two of my sides are ")
	fmt.Print(short_side)
	fmt.Println( meters long.")
	fmt.Print("Two of my sides are "")
	fmt.Print("long_side)
	fmt.Println(" meters long.")
	perimeter = 2*short_side + 2*long_side
	fmt.Print("My area perimeter is ")
	fmt.Print(perimeter)
	fmt.Println(" meters.")
	area = short_side * long_side
	fmt.Print("My area is ")
	fmt.Print(area)
	fmt.Println(" meters square.")
}
{{< /hilight >}}
{{% /codeFigure %}}
The shape being described is obviously a rectangle.

{{% panelWarningTitle title="Important" %}}
There are two things that you and the pupils should notice in attempting to
correct the `badvariables` program.

The first is that the program has to be correct, the syntax has to be correct
everywhere. The incorrect syntax in the two strings on lines 17 and 18 alone
would have prevented the program from running.

The second is that the line that needs to be fixed, may not be the line
where the error occurs. This was the case with the `area` variable. The problem
is on line 25 but the solution is in line 9. The programmer's intention and the
expression of their intention do not match in this case. Line 25 implies that
`area` should be a number - `int` type. But line 9 states that `area` is a `string`
type. One of these lines is wrong. There should be a logical alignment between the
the type of the value to be assigned to the variable and the type of the variable.

The number of patterns in programming and how they continually reappear in
different programs should start to become apparent to the pupils.

There are many more patterns to learn and master.
{{% /panelWarningTitle %}}

### The `hellome` Program
#### Notes for Slide 9
The variables exercise involves changing the `hellobob` program to create the
`hellome` program. The pupils have to change the variable values to create the
`hellome` program.

This shows the pupils how to change the variables and the effect this has
when the program is run. It demonstrates that a change in one place, where the
variables are assigned, effects the program's behaviour in another place, where
the variables are used in another

The pupils need to start with the `hellobob` program from the
[previous lesson]({{< ref "lessons/KS2/lower/variables.md#the-variable-program" >}}).
Here it is again

{{% codeFigure caption="Fig-3. The `hellobob.go` code" %}}
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

The pupils need to change two lines to effect the change.
Assuming the pupil's name is Alice and she is 7 years old these are the
changes that the pupils need to make.

The first change is at line 11. The pupils need to replace the string `"Bob"` with
their name, in this case Alice.

The second change is at line 12. The pupils need to change the value of the age
variable to match their age. In this case the `age` variable should be assigned
the value 7.

The changed lines 11 and 12 are therefore.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
name = "Alice"
age = 7
{{< /hilight >}}

These are the only two lines that must be changed to turn the `hellobob`
program into the `hellome` program.

The hinted at third change is very subtle.
Line 14 is currently

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("The hellobob program shows you how to use variables.")
{{< /hilight >}}

Except this is no longer the `hellobob` program. This is now the `hellome`
program. This line is now misleading, especially when the program is run.

This is a trivial example of a bad user interface. The user interface to the
program needs to be both clear and accurate. This is no longer accurate. So it
should be changed. Just think about how much confusion this could cause to pupils if they
look at this program again in a few weeks.

The `hellome` program should look like this.

{{% codeFigure caption="Fig-4. The `hellome.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	var name string
	var age int

	name = "Alice"
	age = 7

	fmt.Println("The hellome program shows you how to use variables.")
	fmt.Println("")

	fmt.Print("Hello, my name is ")
	fmt.Print(my_name)
	fmt.Println(".")
	fmt.Print("I am ")
	fmt.Print(my_age)
	fmt.Println(" years old.")
}  
{{< /hilight >}}
{{% /codeFigure %}}

Which produces the following output

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
The hellome program shows you how to use variables.

Hello, my name is Alice.
I am 7 years old.
{{< /hilight >}}


### The `hellofriend` Program
#### Notes for slide 10
The `hellofriend` program takes this one step further. Now the pupils have to
pick the names and the correct types of the additional variables for themselves.
They also need to edit the `Println` lines to print the correct output. The pupils
have only the expected output to work from. They have to work backwards to work
out which lines to add to match the output.

The example shown in the slide is for Bob who is 8 and his friend Paul who is 9.
The use of Bob as a pupil name again is coincidental.

The pupils should start with the `hellome` program. To solve this the pupils need
to realise they need to add two variables to the program. One variable
to store their friend's name and one to store their friend's age.

Do do this we need two new variables. We have called them `myFirendsName` and
`myFriendsAge` respectively. The pupils may choose different names. Their variable
names do not need to match ours.

The variable `myFriendsName` is intended to hold a person's name which is an English word so
this variable has to be of type `string`.

The variable `myFriendsAge` is intended to hold a whole number so this has to be
of type `int`. The pupils have to use the correct types for their variables.

The following lines need to be added to the program

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var myFriendsName string
var myFriendsAge int
{{< /hilight >}}

Immediately after the existing variable declarations for `name` and `age`.

Having declared the new variables the pupils need to set their values like so:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
myFriendsName = "Paul"
myFriendsAge = 9
{{< /hilight >}}

Ideally after the existing variable declarations.

Now the pupils need to work backwards to produce the additional lines of output
that are required. This will require them to build the output up incrementally.

The first new line in the output is
{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
My friends name is Paul
{{< /hilight >}}

This requires one `fmt.Print` line to be added to print everything up to and
including the space after "is". Like so:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print("My friends name is ")
{{< /hilight >}}

Their friend's name is printed using a `fmt.Println` line by passing the
variable `myFriendsName` to the `fmt.Println` function. Like so

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(myFriendsName)
{{< /hilight >}}

The second new line in the output is:

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
Paul is 9 years old.
{{< /hilight >}}

This line has 4 parts. First the name of the friend, next the " is ", next the
friend's age and lastly the " years old". It needs to be created incrementally
using a combination of `fmt.Print` and `fmt.Println` functions like so:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print(myFriendsName)
fmt.Print(" is ")
fmt.Print(myFriendsAge)
fmt.Println(" years old.")
{{< /hilight >}}

All of the `fmt.Print` and `fmt.Println` lines need to be added after the last
`fmt.Println` lien in the existing `hellome` program.

{{% panelWarningTitle title="Important" %}}
There is an alternative solution to producing the same output. A pupil
could have written these two lines instead.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print("My friends name is Paul")
fmt.Println("Paul  is 9 years old.")
{{< /hilight >}}

While this is correct in that it produces the same output, this is not the intent
or what the program is attempting to demonstrate.

If a pupil does this let them complete the exercise. Then ask them to change
the assignment of their friends name to something else. In other words change
the line that looks like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
myFriendsName = "Paul"
{{< /hilight >}}

to this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
myFriendsName = "Rachel"
{{< /hilight >}}

Now ask them to run the program again. When the output does not change ask the
pupil why? Direct them to think about using the values of the `myFriendsName`
and `myFriendsAge` variables in the program instead of tying their
friends name and age as part of the string that will be displayed.

If a pupil does this, the effect could be shown and discussed with the class.
{{% /panelWarningTitle %}}

The only remaining change is to change `hellome` in the first `fmt.Println` line
in the program to `hellofriend`.

The final program should look like this

{{% codeFigure caption="Fig-5. The `hellofriend.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
    var name string
    var age int
    var myFriendsName string
    var myFriendsAge int

    name = "Bob"
    age = 8
    myFriendsName = "Paul"
    myFriendsAge = 9

    fmt.Println("The hellofriend program prints my name and age")
    fmt.Println("and my friends name and age.")
    fmt.Println("")

    fmt.Print("Hello, my name is ")
    fmt.Print(name)
    fmt.Println(".")
    fmt.Print("I am ")
    fmt.Print(age)
    fmt.Println(" years old.")
    fmt.Print("My friends name is ")
    fmt.Println(myFriendsName)
    fmt.Print(myFriendsName)
    fmt.Print(" is ")
    fmt.Print(myFriendsAge)
    fmt.Println(" years old.")
}
{{< /hilight >}}
{{% /codeFigure %}}


#### Alternative Solution

There is a valid alternative solution which advanced pupils may spot directly, or
accidentally fall into. The alternative solution is correct but it does not
require the creation of any additional variables.

The pupils may realise that the existing `name` and `age` variables can be
__reused__ later in the program simply by assigning them a different value late
in the program. This is OK because the original values of the variables are
never used again.

The alternative solution is this

{{% codeFigure caption="Fig-6. The `hellofriend.go` alternative solution" %}}
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

    fmt.Println("The hellofriend program prints my name and age")
    fmt.Println("and my friends name and age.")
    fmt.Println("")

    fmt.Print("Hello, my name is ")
    fmt.Print(name)
    fmt.Println(".")
    fmt.Print("I am ")
    fmt.Print(age)
    fmt.Println(" years old.")
    fmt.Print("My friends name is ")
    name = "Paul"
    fmt.Println(name)
    fmt.Print(name)
    fmt.Print(" is ")
    age = 9
    fmt.Print(Age)
    fmt.Println(" years old.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The last point the `name` variable needs to have the value `Bob` is on line 19.
The last point the `age` variable needs to have the value 8 is on line 22.
After these lines the values can be changed to the name and age of the
pupil's friend. The original values are no longer required. The values are
changed in lines 25 and 29.

### Plenary
#### Notes for Slide 11
The code

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var distance_to_Van_Maanens_Star int
var distance_to_Alpha_Centauri int
var distance_from_Alpha_Centauri_to_Van_Maanens_Star int

distance_to_Van_Maanens_Star = 12
distance_to_Alpha_Centauri = 4

distance_from_Alpha_Centauri_to_Van_Maanens_Star = distance_to_Van_Maanens_Star - distance_to_Alpha_Centauri

fmt.Print("The distance between Alpha Centauri and Van Maanens Start is ")
fmt.Print(distance_from_Alpha_Centauri_to_Van_Maanens_Star)
fmt.Println(" light years. This is a very long way away!")
{{< /hilight >}}

is a slightly more realistic example of how variables are used in practice.
The fraction calculates the distance in
[light years](http://en.wikipedia.org/wiki/Light-year)
between two stars. The distances are held as integers and the units
is assumed to be light years.

The variable name are more realistic which may throw the pupils off.

The key part is the variable assignment

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
distance_from_Alpha_Centauri_to_Van_Maanens_Star = distance_to_Van_Maanens_Star - distance_to_Alpha_Centauri
{{< /hilight >}}

This line has been typed across two lines on the slide only to fit the line
on the slide. It would be typed on a single line in the program.

Which amounts to

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
distance_from_Alpha_Centauri_to_Van_Maanens_Star = 12 - 4
{{< /hilight >}}

The answer is 8 light years - about 8 * 9 trillion = 72 trillion kilometers
