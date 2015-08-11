+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-04-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "selection"
slides = "selection"
subtitle = "Teach and Try"
title = "If Only"
lessonnumber = "8"
+++
### Lesson Objective

To learn how to use `if` statements to make decisions
<!--more-->
### Success Criteria

* I know what selection is for
* I know about true and false
* I know the comparison operators
* I know about the if pattern
* I know how to use the if pattern in a Go program


### Key Vocabulary

* if
* selection
* true
* false
* boolean
* operator
* comparison
* variable assignment
* equality
* equivalence
* program flow

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

Maths - The pupils must have covered less than, less than or equal to,
greater than, greater than or equal to, equal to and not equal to for
numeric values. This is a prelude to full blown boolean algebra.

History of Secience/Maths - See the
[wikipedia](http://en.wikipedia.org/wiki/George_Boole) entry for George
Boole, who invented boolean algebra. See also the [Wikipedia](http://en.wikipedia.org/wiki/Claude_Shannon) entry for
Claude Shannon, the father of information theory: Shannon's master's
thesis showed how Boole's idea from 100 years before could be put to
practical use to solve any numeric or logical question, a discovery
which opened the field of digital electronics.

### SMSC

?????

### Resources/Homework

The pupils will need to have Go installed on the school computers. They will
also need a text editor installed. For Windows/MacOS X and Linux they should
install Atom. For RaspberryPi they should install liteIDE. See the
[install guides]({{< relref "installing-go.md" >}}) on the website for more
details.

The `simpleio` package needs to be downloaded and installed on the pupils
computers.

### Prerequisites

The example program uses the times tables up to 12, so the pupils
must be familiar with these.

The lesson builds on earlier lessons so the pupils should have
covered Lessons 1-8 in the series

### Starter Activity
Show the pupils some numbers and ask them to compare them to various
quantities. Can they group them correctly into less than, greater than
or equal to?

Can they do the same with groups of expressions?

### Main teaching points

* Selection is how a computer makes decisions
* Selection involves testing the value of variables
* It controls the flow of the program.
* Selection is about boolean values - true or false
* Go calls selection an `if` statement
* Show the comparison operators
* Show the `if` statement pattern
* Explain the `worldtemperature` program

#### For High Achievers
The pupils should understand that selection is mechanism used by a
computer to make decision

The pupils should understand that a computer can make decision by
testing the value of variables.

The pupils should understand that selection controls the program's flow
when the program runs.

The pupils should understand that selection depends on the truth of an
expression.

The pupils should know that in Go selection happens with an `if`
statement.

The pupils should know the comparison operators, <, >, <=, >=, == and
what they mean largely without support.

The pupils should know the pattern for an `if` statement largely without
support

The pupils should be able to enter the `worldtemperature` program and
run it without support.

#### For Middle Achievers
The pupils should understand that selection is mechanism used by a
computer to make decision

The pupils should understand that a computer can make decision by
testing the value of variables.

The pupils should understand that selection controls the program's flow
when the program runs.

The pupils should understand that selection depends on the truth of an
expression.

The pupils should know that in Go selection happens with an `if`
statement.

The pupils should know the comparison operators, <, >, <=, >=, == and
what they mean with support.

The pupils should know the pattern for an `if` statement with support

The pupils should be able to enter the `worldtemperature` program and
run it with out support.

#### For Low Achievers

The pupils should understand that selection is mechanism used by a
computer to make decision.

The pupils should understand that a computer can make decision by
testing the value of variables.

The pupils should understand that selection controls the program's flow
when the program runs.

The pupils should understand that selection depends on the truth of an
expression.

The pupils should know that in Go selection happens with an `if`
statement.

The pupils should know the comparison operators, <, >, <=, >=, == and
what they mean with support

The pupils should know the pattern for an `if` statement with support

The pupils should be able to enter the `worldtemperature` program and
run it with out support.

### Plenary
The comparison operators also work for strings. This means that `if`
statements can compare strings in the condition part. The comparison
operators have the same meaning when used with strings.

Strings are compared in “dictionary” order - with capital letters coming
before lower case letters. The pupils should be able to guess this.
