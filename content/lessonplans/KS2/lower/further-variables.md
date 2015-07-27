+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-04-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-variables"
slides = "further-variables"
subtitle = "Fix and Apply"
title = "More Variables"
lessonnumber = "6"
+++

### Lesson Objective

To practice using the patterns for integer and string type variables in
Go.

### Success Criteria

* I know the patterns to create and use a variable
* I can spot mistakes involving variables
* I can use variables for numbers and strings in Go programs
* I can create a new Go program from just the expected output

### Key Vocabulary

* variable
* type
* keyword
* var
* syntax error
* variable declaration
* variable assignment

### Period of Study

KS2 Emerging

### NC Computing links

Co2/1.1    design, write and debug programs that accomplish specific goals,
including controlling or simulating physical systems; solve problems by
decomposing them into smaller parts

Co2/1.2    use sequence, selection, and repetition in programs; work with
variables and various forms of input and output

Co2/1.3    use logical reasoning to explain how some simple algorithms work and
to detect and correct errors in algorithms and programs

### Cross Curricular Links

Maths - The concept of a variable in a programming language is analogous
to an unknown quantity or variable in algebra

Science - the plenary example calculates the distance between two stars
in light years. An example of the type of real calculation that a computer
is used for in astronomy.

### SMSC

?????

### Resources/Homework

The pupils will need to have Go installed on the school computers. They will
also need a text editor installed. For Windows/MacOS X and Linux they should
install Atom. For RaspberryPi they should install liteIDE. See the
[install guides]({{< relref "installing-go.md" >}}) on the website for more
details.

### Prerequisites

None - knowledge of algebra is not essential.
Lessons 1-5

### Starter Activity

Ask the pupils what `var` is in Go? What is it used for?
Can the pupils remember the three things you need for a variable?
What is the name of the type used for a number? What about a string?


### Main teaching points

* Recap the variable declaration pattern
* Recap of the naming rules
* Recap the variable assignment pattern
* Explain that the pupils need to fix the `badvariable` program
* Explain the `hellome` programming task
* Explain the `hellofriends` programming task

#### For High Achievers
The pupils should understand that variables are introduced using
the `var` keyword.

The pupils should understand that variables have a type, that tells the
computer what sort of data the variable can store.

The pupils should understand that variables have a name.

The pupils should understand the rules for variable names,
largely without support.

The pupils should recognise the pattern for variable declaration, largely
without support.

The pupils should recognise the pattern for variable assignment, largely
without support.

The pupils should be able to open a terminal window, largely without
support.

The pupils should be able to open the text editor, create a source code
file and save it, largely without support.

The pupils should be able to find the errors and fix the `babvariable` program, largely without support

The pupils should be able to create the `hellome` program, largely without support

The pupils should be abel to change the `hellome` program to the `hellofriend` program, largely without support

#### For Middle Achievers
The pupils should understand that variables are introduced using
the `var` keyword.

The pupils should understand that variables have a type, that tells the
computer what sort of data the variable can store.

The pupils should understand that variables have a name.

The pupils should understand the rules for variable names,
largely without support.

The pupils should recognise the pattern for variable declaration, largely
without support.

The pupils should recognise the pattern for variable assignment, largely
without support.

The pupils should be able to open a terminal window, largely without
support.

The pupils should be able to open the text editor, create a source code
file and save it, largely without support.

The pupils should be able to find the errors and fix the `babvariable` program, with support

The pupils should be able to create the `hellome` program, with support

The pupils should be able to change the `hellome` program to the `hellofriend` program, with support

#### For Low Achievers
The pupils should understand that variables are introduced using
the `var` keyword.

The pupils should understand that variables have a type, that tells the
computer what sort of data the variable can store.

The pupils should understand that variables have a name.

The pupils should understand the rules for variable names,
with support.

The pupils should recognise the pattern for variable declaration,
with support.

The pupils should recognise the pattern for variable assignment,
with support.

The pupils should be able to open a terminal window, with
support.

The pupils should be able to open the text editor, create a source code
file and save it, with support.

The pupils should be able to find the errors and fix the `babvariable` program, with considerable support

The pupils should be able to create the `hellome` program, with
considerable support

The pupils should be able to change the `hellome` program to the `hellofriend` program, with considerable support

### Plenary
What does this do?

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

One light year is about 9 trillion kilometers.
The answer is 8 light years - 72 trillion kilometers

[You may need to explain a light year... and the distance are approximate. rounded down to the nearest light year.]
