+++
Categories = ["Fundamentals"]
Description = "Lower KS2 Lesson plan for words/strings 1/2"
Tags = []
author = "Owen"
concepts = ["strings"]
date = "2015-04-03T17:12:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "Teach and Try"
title = "Lesson Plan for Words"
slides = "words"
notesfor = "words"
lessonnumber = "3"
+++
### Lesson Objective

To learn that each character is represented by a number and that a string
is a sequence of characters.

### Success Criteria

* I can understand that different languages have different characters
* I can understand that a character is represented by an number
* I can understand that Unicode is a character encoding
* I can understand that a string is a sequence of characters strung together
* I can create and print a string using Go

### Key Vocabulary

* character
* string
* rune
* Unicode
* encoding
* output
* symbol
* statement

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

Foreign languages - different writing systems -
Japanese/Chinese/Arabic/Russian.

### SMSC

Cultural: Children develop their understanding of language systems used in
other cultures.

### Resources/Homework

[Unicode Table website](http://unicode-table.com/en/) can display
all of the printable Unicode characters.

### Starter Activity

The letters, numbers and symbols on the keyboard are called characters.
A character is something that can be typed at the keyboard and displayed
on the screen by the computer.

Ask the pupils to count the characters on the keyboard.
Remember that the <kbd>Return</kbd>, <kbd>Tab</kbd>, <kbd>Space</kbd> all count as
characters. <kbd>Del</kbd>, <kbd>Backspace</kbd>, <kbd>Shift</kbd> do not
count. They do not print anything.

For a UK keyboard the answer is 74 (26 letters, 10 digits, 35 symbols, 3 white
space)

### Main teaching points

* Ask the pupils to use the Unicode table to find the decimal numbers
for A, Z, a, b, c, d, 0, 9, space, + and $.
* Ask them to find the characters the decimal numbers 79, 61, 55, 100.
* Show them that a string is any sequence of characters - including letters
numbers symbols and spaces.
* Show them a string in Go. See if they can spot the inverted commass
that enclose the string. This is the pattern for a string literal.
* Show the pupils valid and invalid strings. Ask then to identify the invalid
strings. Ask then to identify why.
* Show them how to print a string in Go. Ask if they can see the pattern?
The pattern starts `fmt.Print` or `fmt.Println`. The pattern always has
two brackets. The string is always between the brackets.
* Show the pupils valid and invalid print lines. As them to identify the
invalid lines. Can then explain why?
* Explain the program and task. Ensure that the pupils can start the editor
and create a new source code file.

### Main Activity

#### For High Achievers
The pupils should understand that a character is represented as a number. The
mapping is called an encoding. Unicode is mapping.

The pupils should be able to find the decimal numbers of all of the letters,
numbers and symbols.

The pupils should be able to find most of the letters given the decimal
numbers.

The pupils should identify that a string in Go must be enclosed in double
quotes, without support.

The pupils should identify the pattern to print a string in Go. With or
without a new line, without support.

The pupils should be able to type in the stringfun program and run it
successfully, largely without support.

#### For Middle Achievers
The pupils should understand that a character is represented as a number. The
mapping is called an encoding.

The pupils should be able to find the decimal numbers for letters and numbers.

The pupils should be able to find some of the letters given the decimal
numbers.

The pupils should identify that a string in Go must be enclosed in double
quotes with support.

The pupils should identify the pattern to print a string in Go. With or
without a new line with support

The pupils should be able to type in the stringfun program and run it
successfully, with support.

#### For Low Achievers
The pupils should understand that a character is represented as a number.

The pupils should be able to find the decimal numbers for letters.

The pupils should be able to find one of the letters given the decimal
numbers.

The pupils should identify that a string in Go must be enclosed in double
quotes with considerable support.

The pupils should identify the pattern to print a string in Go. With or
without a new line with considerable support

The pupils should be able to type in the stringfun program and run it
successfully, with considerable support.

### Plenary
Can the pupils work out if a sting is valid or not. Can they work out if a
`Println` line is valid or not? Can then explain what a `Println` does?
Can then write a new `Println` line to say "In a galaxy far far away..."?
Can they add this to the program?
