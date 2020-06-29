+++
Categories = ["Fundamentals"]
Description = "What is this post about??"
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-03-26T18:55:25Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "more practice"
title = "More Variables"
lessonnumber = "6"
notesfor = "further-variables"
lessonplan = "further-variables"
slides = "further-variables"
+++
### What You are Going to Learn?
You are going to practice declaring and assigning values to variables
in this lesson. This will help you learn the patterns for variable
declaration and variable assignment.
<!--more-->
{{< panelWarningTitle title="Important" >}}
You must have completed the [Variables]({{< relref "lessons/KS2/lower/variables.md">}})
lesson before you will be able to complete this lesson.
{{< /panelWarningTitle >}}


### Declaring a Variable
To declare or create a variable you need three pieces of information. They
are

* The `var` keyword that is used to introduce a variable.
* The variable name, so that you can refer to it later
* The variable type which describes the type of data that the variable can hold.

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
name that is used must be a legal one according to the rules for variable
names.

The programmer can choose the name of the variable, and the variable's
type. The variable name can be anything, provided the variable name
follows the rules. The programmer chooses between `int` for a number type
and `string` for a string type.

{{< panelInfoTitle title="Now it is your turn">}}
How would you write a variable declaration for

* A number variable named `distance_to_London`
* A string variable called `capitalOfScotland`

{{< expandingButton id="declaration-answers" name="Answers" >}}
The variable declarations would be:
{{< highlight go "linenos=false" >}}
var distance_to_London int
var capitalOfScotland string
{{< /highlight >}}
{{< /expandingButton >}}
{{< /panelInfoTitle >}}

### The Rules for Variable Names
When we say that a variable name is legal we mean that it must
follow these rules. These rules are part of Go's syntax rules.

Remember, the rules for variable names are

* You cannot use a keyword as a variable name.
* You cannot use spaces in your variables names, or any other symbols like `()`.
* You cannot use a package name for a variable name.
* You cannot start a variable name with a number.
* You cannot use the same name as another variable. Each variable name has
to be unique.
* You can only use the letters `a` to `z` or `A` to `Z` or the numbers `0` to
`9` or the __underscore__ character `_`.

If a variable name does not follow these rules it is illegal and Go will
not let you use it.

### Assigning a New Value To a Variable
To assign or set, or change the value of a variable you need
to use an equals `=` sign like this

{{< highlight go "linenos=false" >}}
age = 8
{{< /highlight >}}

Which sets the value of `age` to `8`. `age` must have been declared as

{{< highlight go "linenos=false" >}}
var age int
{{< /highlight >}}

before the assignment can happen.

There is a pattern you can use to remember how to set the value of a
variable. The pattern is
````
name-of-variable = new-value
````
First you use the name of the variable that you want to set, then an
equals, `=` sign and then the new value for the variable.

You can only set a variable to a value that makes sense according to the
type of the variable. If you tried to set the variable `age` to the string
`"eight"` like this

{{< highlight go "linenos=false" >}}
age = "eight"
{{< /highlight >}}

it will not work.

If a variable was declared as an `int` type then you can only store
numbers in it. If the variable was declared as a `string` type you can
only store strings in it.

{{< panelWarningTitle title="Important">}}
When you change the value of a variable the old value is lost, forever.
You can not get it back, the new value will overwrite the old one.
{{< /panelWarningTitle >}}

### The `badvariables` Program
Look at the `badvariables` program

{{< codeFigure caption="Fig-1. The uncorrected `badvariable` code" >}}
{{< highlight go "linenos=inline" >}}
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
{{< /highlight >}}
{{< /codeFigure >}}

The `badvariables` program has lots of mistakes in it, so many it won't run.

{{< panelInfoTitle title="Now it is your turn" >}}
How many mistakes can you find in the `badvariabels` program?

Can you work out what the mistakes are and fix them so that the program runs?

{{< expandingButton id="badvariables-answers" name="Answers" >}}
There are 7 mistakes in this program. The mistakes are:

* Line 7 - the variable name `long side` in the variable declaration is illegal because it contains a space.
Lines 19, 21 and 25 use the correct and intended spelling
* Line 8 - the variable declaration is missing the `var` keyword
* Line 12 - the wrong symbol is used for variable assignment. A
percentage, `%`, symbol has been used instead of the correct equals sign, `=`
* Line 16 - the variable name `shortside` has not been defined. This is a typing error of the correct variable name `short_side`
* Line 17 - the string in the `fmt.Println` is missing the
opening inverted commas.
* Line 18 - The string in the `fmt.Print` is missing the closing inverted commas.
* line 25 - The variable `area` is declared on line 9 to be a string. But the
value of the expression `short_side * long_side` is an integer number. The mistake
is actually on line 9. `area` should have been declared as an `int` number type
not a `string`type.

We were sneaky and also put some mistakes in the `fmt.Println` lines.
The last mistake, the one on line 25, is hard to find, but easy to fix once you understand what is happening. The program is trying to assign
a number, an `int`, to a variable that has been declared as a `string`.
So either line 25 is wrong, or the declaration on line 9 is wrong. You
have to work out which is the case. In this example, it is line 9, the declaration,
that is wrong. You want `area` to be an `int` type because you are trying
to store the answer of a sum in it.
So you just have to apply the fix at the top of program not the bottom

{{< /expandingButton >}}
{{< /panelInfoTitle >}}

The corrected program is

{{< codeFigure caption="Fig-2. The corrected `badvariable` code" >}}
{{< highlight go "linenos=inline" >}}
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
{{< /highlight >}}
{{< /codeFigure >}}
The shape being described is obviously a rectangle.

### The `hellome` Program
This is the `hellobob` program from the [last lesson]({{< ref "lessons/KS2/lower/variables.md#the-variable-program" >}})

{{< codeFigure caption="Fig-3. The `hellobob.go` code" >}}
{{< highlight go "linenos=inline" >}}
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
{{< /highlight >}}
{{< /codeFigure >}}

You are going to change it to create two new programs.

#### The `hellome` Program

{{< panelInfoTitle title="Now it is your turn" >}}
Now it is your turn to write a program to display your name and your age.
We will call this program `hellome.go`

You will need to start your text editor and edit the program yourself. Remember to
save it as `hellome.go` in a new `hellome` directory.

Can you change the program to print your name and your age and make it
run?

To do this you need to change the values assigned to the variables
called `age` and `name`. Look at lines 11 and 12.

Remember to change the first `fmt.Println` line on line 14 so that it
says `hellome` and not `hellobob`.

If you get stuck look at the `hellobob` program. It will show you how to declare
variables, assign values to them and print them out.

Remember to make little changes to your program. Then save and run the program
after each change to make sure that you have no errors.
{{< /panelInfoTitle >}}

#### The `hellofriend` Program
{{< panelInfoTitle title="Now it is your turn" >}}
Once you have the `hellome.go` program working we want you to write another
program called `hellofriend.go`.

We want `hellofriend` to print out your name and age and the name and age
of one of your friends.

To do this you need to save your working `hellome` program as `hellofriend.go` in a `hellofriend` directory.

Now you need to edit `hellofriend.go` so that when you run it, it prints
out something like this.

{{< highlight text "linenos=false" >}}
The hellofriend program prints my name and age
and my friend's name and age.

Hello, my name is Bob.
I am 8 years old.
My friend's name is Paul
Paul is 9 years old.
{{< /highlight >}}

This output is for Bob whose friend is called Paul. Paul is 9 years old.
If you get stuck look at the hint.

{{< expandingButton id="hellofrient-hint" name="Hint" >}}
You need to create two more variables. One for your friend's name
and one for your friend's age. Just like you did for your name in the
`hellome` program.

You also need to change the `Println` and `Print` lines to print their
name and age as well as your name and age.

You also need to change the `Println` lines at the start of the program.
{{< /expandingButton >}}
{{< /panelInfoTitle >}}
