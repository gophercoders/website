+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-04-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-selection"
slides = "further-selection"
subtitle = "Teach and Try"
title = "If and Else"
lessonnumber = "9"
+++
### Lesson Objective

To learn how to use `if else` statements to make alternative decisions

### Success Criteria

* I know about booleans
* I know about negation
* I know about 'not equal to'
* I know how to use selection for strings
* I know about the `if else` patterns
* I know how to use the `if else` pattern in a Go program

### Key Vocabulary

* if
* else
* else if
* selection
* true
* false
* boolean
* negation
* negate
* bool
* comparison
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

History of Science/Maths - See the
[wikipedia](http://en.wikipedia.org/wiki/George_Boole) entry for George
Boole, who invented boolean algebra. See also the [Wikipedia](http://en.wikipedia.org/wiki/Claude_Shannon) entry for
Claude Shannon, the father of information theory: Shannon's master's
thesis showed how Boole's idea from 100 years before could be put to
practical use to solve any numeric or logical question, a discovery which
opened the field of digital electronics.

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

The `random` package needs to be downloaded and installed on the pupils computers.

Both packages are required to run the `timesquestion` program.

### Prerequisites

The example program uses the times tables up to 12, so the pupils
must be familiar with these.

The lesson builds on earlier lessons so the pupils should have
covered Lessons 1-8 in the series

### Starter Activity
Show the pupils the compassion operators. Can they remember what
each operator does?
Can the pupils remember what is special about the question that an
`if` statement asks?
Can the pupils remember the rules for the `if` pattern?

### Main teaching points

* Introduce booleans and show that the result of an comparison can be
assigned to a boolean type.
* Introduce the idea of negation i.e. true is the opposite of false
* Introduce the negation and not equals to operator
* Show selection used with strings
* Show the `if else` patterns
* Explain the `timesquestion` Go program

#### For High Achievers
The pupils should understand that a boolean value represents
true and false.

The pupils should understand that the result of a comparison operator
is a boolean and can be assigned to a variable.

The pupils should understand that negation reverses the value
of a boolean -> true becomes false and false becomes true.

The pupils should recognise and understand the negation and not
equals operators.

The pupils should be able to use all if comparison operators with
strings.

The pupils should recognise and understand the `if else` pattern.

The pupils should be able to enter the `timesquestion` program and
run it without support.

#### For Middle Achievers
The pupils should understand that a boolean value represents
true and false.

The pupils should understand that the result of a comparison operator
is a boolean and can be assigned to a variable.

The pupils should understand that negation reverses the value
of a boolean -> true becomes false and false becomes true with support.

The pupils should recognise and understand the negation and not
equals operators with support.

The pupils should be able to use all if the comparison operators with
strings with support.

The pupils should recognise and understand the `if else` pattern with support.

The pupils should be able to enter the `timesquestion` program and
run it without support.

#### For Low Achievers
The pupils should understand that a boolean value represents
true and false.

The pupils should understand that the result of a comparison operator
is a boolean and can be assigned to a variable.

The pupils should understand that negation reverses the value
of a boolean -> true becomes false and false becomes true with considerable support.

The pupils should recognise and understand the negation and not
equals operators with considerable support.

The pupils should be able to use all if the comparison operators with
strings with considerable support.

The pupils should recognise and understand the `if else` pattern with considerable
support.

The pupils should be able to enter the `timesquestion` program and
run it with support.

### Plenary
The plenary asks the pupils to think (or guess) at what repetition is used for.
Repetition is the subject of the next lesson.
At the minute, the only way to run the program again is to run it from the start.
There is no way to repeat just part of the program - the part that asks the
question and then checks the answer. We will show them how to do this next.
