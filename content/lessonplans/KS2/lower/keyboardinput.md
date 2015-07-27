+++
Categories = ["Fundamentals"]
Description = "Which lesson plan is this??"
Tags = []
author = "Owen"
concepts = ["variables", "input"]
date = "2015-04-15T11:58:03+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "keyboardinput"
slides = "keyboardinput"
subtitle = "Teach and Try"
title = "Keyboard Input"
lessonnumber = "7"
+++
### Note - There is more than one way to do this

The approach shown in this lesson is only one way to read keyboard input
in Go. There are two alternative approaches. At this stage no approach is
perfect for two reasons.

Firstly until error handling is introduced no approach will be robust and
reliable. Error handling requires the use of selection which the pupils
have not been introduced to at this stage.

Secondly, any approach requires introducing the pupils to concepts beyond
the core idea of input that we are trying to teach. Either, further
ideas about the logical structure of memory or more advanced types and
their use.

We do not want to introduce any of these ideas at this stage.

We have therefore taken an alternative approach. The lesson focus on
the concept of input and how input and variables are used together.
To achieve this we have provided a package, the `simpleio` package
that the pupils can use to read numbers and strings. We will show the
pupils how to use the package. We will not explain how the package works.

### Lesson Objective

To learn how to use variables to read input from the keyboard

### Success Criteria

* I know what input and output are
* I know a pattern to read input from the keyboard
* I know how assign input to a variable
* I know how to use keyboard input in Go programs

### Key Vocabulary

* variable
* input
* output
* package
* error
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

Input itself is an abstract concept. The most direct analogy would be to
cooking. The ingredients used to create a meal are analogous to the input
that a program needs to run.

### SMSC

?????

### Resources/Homework

The pupils will need to have Go installed on the school computers. They will
also need a text editor installed. For Windows/MacOS X and Linux they should
install Atom. For RaspberryPi they should install liteIDE. See the
[install guides]({{< relref "installing-go.md" >}}) on the website for more
details.

The `simpleio` package needs to be downloaded and installed on the pupils
computers. This will require network access, specifically to github.com

The `simpleio` package contains the additional source code we have
written to simplify the process of keyboard input for the pupils.

This task can be performed by an IT coordinator before hand, or by the
pupils themselves in the lesson.

### Prerequisites

Lessons 1-6

### Starter Activity

Ask the pupils if they ran the `hellofriend` program again what would
happen?
Ask the pupils what would happen if they ran the program 10 times
in a row. Would the output change?
Does the `hellofriend` program know everything before it runs?
Can the pupils work out what would be required to make the program
print a different names each time?

### Main teaching points

* Input from keyboard and Output to screen
* The keyboard input pattern
* How to use the keyboard input pattern to assign a value to a variable
* Explain how to get the `simpleio` package
* Explain the `hellostranger` program.

#### For High Achievers
The pupils should understand input and output and be able to give
examples of each.

The pupils should be able to recognise the keyboard input pattern.

The pupils should be able to use the keyboard input pattern to
store both strings and numbers entered at the keyboard, largely without
support.

The pupils should be able to run the `hellostranger` program,
largely without support.

#### For Middle Achievers
The pupils should understand input and output and be able to give
examples of each.

The pupils should be able to recognise the keyboard input pattern.

The pupils should be able to use the keyboard input pattern to
store both strings and numbers entered at the keyboard, with
support.

The pupils should be able to run the `hellostranger` program,
with support.

#### For Low Achievers
The pupils should understand input and output and be able to give
examples of each.

The pupils should be able to recognise the keyboard input pattern.

The pupils should be able to use the keyboard input pattern to
store both strings and numbers entered at the keyboard, with
considerable support.

The pupils should be able to run the `hellostranger` program,
with considerable support.

### Plenary
Ask the pupils to type in number instead of their name. What happens?
Is this correct?
Now ask them to type in a word for their age. What happens? Is this
correct? Can they guess why this happens?
