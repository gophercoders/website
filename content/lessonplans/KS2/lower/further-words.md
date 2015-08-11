+++
Categories = ["Fundamentals"]
Description = "Lower KS2 Lesson plan for words/strings 2/2"
Tags = []
author = "Owen"
concepts = ["strings"]
date = "2015-04-03T17:12:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-words"
subtitle = "Fix and Apply"
title = "Lesson Plan for Words"
slides = "further-words"
lessonnumber = "4"
+++
### Lesson Objective

To learn what a syntax error is and how to correct them.
<!--more-->
### Success Criteria

* I can understand that a character is represented by a number
* I can understand that a string is a sequence of characters strung together
* I can understand the patterns to create and print a string using Go
* I can understand what a syntax error is and how to fix it
* I can find and correct mistakes in `fmt.Println` and `fmt.Print` statements in
Go

### Key Vocabulary

* character
* string
* rune
* Unicode
* encoding
* output
* symbol
* statement
* edit
* syntax error

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

English - writing and reading.

### SMSC

???

### Resources/Homework

[Unicode Table website](http://unicode-table.com/en/) can display
all of the printable Unicode characters.

### Starter Activity

* Recap that every letter in every language is given a unique number. The computer works with these numbers not the letters.
* Show the pupils a letter. Can then guess the number?
* Show the pupils a number. Can they guess that the number might represent a
letter? Can they guess that it might just be a number too?
* Can they remember what a rune is?
* Use the Unicode table website as required.

### Main teaching points

* Show the pupils the pattern for a string literal in Go. A string enclosed in
inverted commas.
* Show the pupils the pattern for a `Print` and `Println` statement in Go.
The pattern starts `fmt.Print` or `fmt.Println`. The pattern always has
two brackets. The string is always between the brackets.
* Explain that when the patterns are not followed that Go produces a
syntax error. A program that contains syntax errors will not run until all of
the syntax errors are fixed.
* Challenge the class to count and correct the syntax errors in the badstring
program. First on paper then on the computer.
* Challenge the class to extend the corrected program to add both `Print` and
`Println` lines, working backwards from the expected output.

### Main Activity

#### For High Achievers
The pupils should understand that a character is represented as a number.

The pupils should recognise the pattern used for a string in Go without
support.

The pupils should recognise the pattern to print a string in Go. With or
without a new line, without support.

The pupils should understand what a syntax error, what the cause of the error
is and how to correct it.

The pupils should understand that the program will not run until all syntax
errors are fixed.

The pupils may be able to use the error messages displayed by Go to help
them find and correct the syntax errors.

The pupils should be able to find and correct the syntax errors in the
badstring largely without support.

The pupils should be able to extend the badstring program to match the
example output by adding `Print` and `Println` statements, largely without
support.

#### For Middle Achievers
The pupils should understand that a character is represented as a number.

The pupils should recognise the pattern used for a string in Go without
support.

The pupils should recognise the pattern to print a string in Go. With or
without a new line, without support.

The pupils should understand what a syntax error is, and perhaps what the cause
of the error is and how to correct it.

The pupils should understand that the program will not run until all syntax
errors are fixed.


The pupils should be able to find and correct the syntax errors in the
badstring with support.

The pupils should be able to extend the badstring program to match the
example output by adding `Print` and `Println` statements, with
support.

#### For Low Achievers
The pupils should understand that a character is represented as a number.

The pupils should recognise the pattern used for a string in Go with
support.

The pupils should recognise the pattern to print a string in Go. With or
without a new line, with support.

The pupils should understand what a syntax error is and that a program
that contains syntax errors will not run.

The pupils should be able to find and correct the syntax errors in the
badstring with considerable support.

The pupils should be able to extend the badstring program to match the
example output by adding `Print` and `Println` statements, with
considerable support.

### Plenary
Can the pupils spot syntax errors when using `fmt.Print` and `fmt.Println`?
Can they explain the difference bwtween `fmt.Print` and `fmt.Println`?
Can the pupils write down the output of a sequence of `fmt.Print` and
`fmt.Println` lines?
