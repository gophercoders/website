+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["numbers"]
date = "2015-04-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-numbers"
slides = "further-numbers"
subtitle = "Fix and Apply"
title = "Further Numbers"
lessonnumber = "2"
+++
### Lesson Objective

To introduce brackets and the evaluation order in Go.
<!--more-->
### Success Criteria

* I understand how to do simple sums in Go
* I understand the order of the maths operators
* I can use the brackets in sums in Go
* I can create and run a new Go program

### Key Vocabulary

* Programming Language
* Text Editor
* Command Prompt
* Terminal Window
* Source code
* Bracket
* Operator
* Operator precedence

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

Maths - interger/whole numbers, simple addition, subtraction, multiplication
and division. The associative and commutative properties of addition and multiplication


### SMSC


### Resources/Homework

The pupils will need to have Go installed on the school computers. They will
also need a text editor installed. For Windows/MacOS X and Linux they should
install Atom. For RaspberryPi they should install liteIDE. See the
[install guides]({{< relref "installing-go.md" >}}) on the website for more
details.

### Prerequisites

Maths - the pupils should have been introduced to brackets and the laws of
association and commutative for addition and multiplication.

### Starter Activity

Ask the students what symbols are used for
* addition
* subtraction
* multiplication
* division

How do you write

* 3 add 4
* 6 subtract 1
* five times 6
* 10 divided by 2

in Go?

### Main teaching points

* Maths works as the pupils should expect. \* is used for multiplication
/ for division.
* Without brackets evaluation is left to right - as per algebra.
* Multiplication and division are carried out before addition and
subtraction. Multiplication and division have a higher operator precedence.
* Brackets can be used to group terms. Brackets are used to make the
evaluation order clear.
* Addition and multiplication are both associative
* Addition and multiplication are both commutative
* Explain the program task and ask the pupils to type in and run the program.


#### For High Achievers
The pupils should know the symbols used for addition, subtraction,
multiplication and division in Go.

The pupils should understand that maths in Go is also evaluated left to right.

The pupils should know that multiplication and division are carried out before
addition and subtraction.

The pupils should understand that multiplication and division have a higher
precedence that addition and subtraction.

The pupils should understand that brackets can be used in maths in Go to
group terms.

The pupils should understand that both addition and multiplication are
associative.

The pupils should understand that both addition and multiplication are
commutative.

The pupils should be able to open a terminal window, largely without support.

The pupils should be able to open the text editor, create a source code file
and save it, largely without support.

The pupils should be able to type in the numbers program and run it
successfully, largely without support.

#### For Middle Achievers
The pupils should know the symbols used for addition, subtraction,
multiplication and division in Go.

The pupils should understand that maths in Go is also evaluated left to right.

The pupils should know that multiplication and division are carried out before
addition and subtraction.

The pupils should understand that brackets can be used in maths in Go to
group terms.

The pupils should understand that both addition and multiplication are
associative.

The pupils should understand that both addition and multiplication are
commutative.

The pupils should be able to open a terminal window, with support.

The pupils should be able to open the text editor, create a source code file
and save it, with support.

The pupils should be able to type in the numbers program and run it
successfully, with support.

#### For Low Achievers
The pupils should know the symbols used for addition, subtraction,
multiplication and division in Go.

The pupils should understand that maths in Go is also evaluated left to right.

The pupils should know that multiplication and division are carried out before
addition and subtraction.

The pupils should understand that brackets can be used in maths in Go to
group terms.

The pupils should understand that both addition and multiplication are
associative.

The pupils should understand that both addition and multiplication are
commutative.

The pupils should understand that a computer can only process numbers.

The pupils should be able to open a terminal window, with considerable support.

The pupils should be able to open the text editor, create a source code file
and save it, with considerable support.

The pupils should be able to type in the numbers program and run it
successfully, with considerable support.

### Plenary

Show the pupils this
15 / 2
and ask them what the answer is? (7 - this is integer division only. Any
remainder is discarded.)

Get the pupils to add these lines to the program to prove it
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print("15 / 2 = ")
fmt.Println(15 / 2)
{{< /hilight >}}

Can they spot the pattern to print a sum and its result?
The pattern is:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Print( The sum in inverted commas )
fmt.Println( The sum NOT in inverted commas )
{{< /hilight >}}
