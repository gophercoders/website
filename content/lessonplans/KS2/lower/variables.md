+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-04-16T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "variables"
slides = "variables"
subtitle = "Teach and Try"
title = "Lesson Plan for Variables"
lessonnumber = "5"
lessonplan = "variables"

+++

### Lesson Objective

To introduce variables for integers and strings in Go.
<!--more-->

{{< panelWarningTitle title="More Teaching Time Required" >}}
Variables come in two parts that __cannot__ be separated. They are the
variable declaration and the variable assignment. These come as
a pair and are very closely related. Twice the teaching time may be
required for this lesson.

A variable has to be declared before a value can be assigned to it, and before it
can be used. In Go, a program that declares a variable, but does not
use it is actually illegal. Such a program will not run.
The concepts cannot therefore be split over two lessons.
{{< /panelWarningTitle>}}

### Success Criteria

* I understand what a variable is used for
* I understand that variables have a type
* I know how to create and use a variable
* I know the patterns to create and use a variable
* I can use variables for numbers and strings in a Go program

### Key Vocabulary

* variable
* type
* keyword
* var
* memory
* file
* declaration
* assignment

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

### SMSC


### Resources/Homework

The pupils will need to have Go installed on the school computers. They will
also need a text editor installed. For Windows/MacOS X and Linux they should
install Atom. For RaspberryPi they should install liteIDE. See the
[install guides]({{< relref "installing-go.md" >}}) on the website for more
details.

### Prerequisites

None - knowledge of algebra is not essential.
Lessons 1-4

### Starter Activity

Ask the students what happens if the computer is switched off?
* Is there anything in memory?
* What about when a program ends?

Ask the students how many types of memory a computer
might have?

Can the pupils explain the life time of the data in each memory type?

### Main teaching points

* Variables are used to remember results or input in a computer program
so that they can be used later
* Variables need the var keyword
* Variables are introduced with the `var` keyword
* Variables have a name and a type.
* The variable name must be legal
* Variables follow two patterns. The first to create a variable -
declaration. The second to assign a value to the variable - assignment.
* Explain the program task and ask the pupils to type in and run the program.

#### For High Achievers
The pupils should know that variables are used to remember results or
input in a computer program.

The pupils should know that the variables are stored in memory
and that the variables only exist while the program runs. Once the
program stops or the computer is turned off the variables do not exist.
The variables also do not exist before the program starts.

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

The pupils should be able to type in the `hellobob` program and run it
successfully largely without support.

#### For Middle Achievers
The pupils should know that variables are used to remember results or
input in a computer program.

The pupils should know that the variables are stored in memory
and that the variables only exist while the program runs. Once the
program stops or the computer is turned off the variables do not exist.
The variables also do not exist before the program starts.

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

The pupils should be able to open a terminal window, largely without
support.

The pupils should be able to open the text editor, create a source code
file and save it, largely without support.

The pupils should be able to type in the `hellobob` program and run it
successfully with support.

#### For Low Achievers
The pupils should know that variables are used to remember results or
input in a computer program.

The pupils should know that the variables are stored in memory
and that the variables only exist while the program runs.

The pupils should understand that variables are introduced using
the `var` keyword.

The pupils should understand that variables have a type, that tells the
computer what sort of data the variable can store, with support

The pupils should understand that variables have a name, with support

The pupils should understand the rules for variable names,
with considerable support.

The pupils should recognise the pattern for variable declaration,
with considerable support.

The pupils should recognise the pattern for variable assignment,
with considerable support.

The pupils should be able to open a terminal window, with
support.

The pupils should be able to open the text editor, create a source code
file and save it, with support.

The pupils should be able to type in the `hellobob` program and run it
successfully with considerable support.

### Plenary
How many things does a variable need to exist?

What are those things?

Ask the pupils how many keywords they can find in the `hellobob` program?
You will need to show them the list of keywords again to do this.

What do they think the value of `z` is at each line

{{< highlight go "linenos=false" >}}
var z int
z = 100
{{< /highlight >}}

Can they guess that variables have a default, Go calls this an empty,
value?
