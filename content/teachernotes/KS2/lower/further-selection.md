+++
Categories = ["Fundmentals"]
Description = "These are the teacher notes for the variables lesson."
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-04-04T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "further-selection"
slides = "further-selection"
lessonplan = "further-selection"
subtitle = "Fix and Apply Teacher Notes"
title = "If and Else"
lessonnumber= "9"
+++
### Objective
To extend the pupil's knowledge of `if` selection statements by
introducing the closely related `if else` statement.

The lesson also introduces the concepts of boolean, negation and not equals to.

The class will learn the pattern for an `if else` statement in Go.

The class will practice using an `if else` statement and see the effect
with the `timesquestion` program.

Creating these program will require the class to use the text editor (either Atom
or LiteIDE) to create and save the source code file and the terminal/command line
to run their program.
<!--more-->

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program
* Understand that a boolean variable can only represent the values true
and false.
* Understand that the result of a comparison is a boolean value.
* Understand that Go has a boolean type, `bool`.
* Understand that a variable of type `bool` can be used to store the
result of a comparison
* Understand the idea of negation i.e. true is the opposite of false
* Understand the negation and not equals to operator
* Understand that selection can be used with strings
* Understand the `if else` patterns
* Understand that the program represents a sequence
* Understand that the selection can change the sequence order by causing
parts of the program to be skipped over

### Teaching prerequisites

The pupils must have encountered the comparison operators, <, > and = in
mathematics  Comparison is fundamental to selection to the pupils must be
already familiar with the idea from mathematics.

In addition to this the pupils need to have covered Lessons 1-8 in this series.

### Computing Links

Selection. The program demonstrates how to use selection and the effect of
using selection statements. The selection statements change the sequence order
by causing some parts to be skipped over. The program will no longer
execute every line in the program.

Variables. Variables and selection are used together. The condition part of the
selection will compare the value of a variable to the value of another variable
or to a fixed value.

Input and Output. The program asks the user to input the current temperature and
displays if the temperate is hotter or colder than other cities around the world.

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links
Maths. The example program,`timesquestion` will ask the pupils to solve
multiplications from the 1-12 times tables.

### Comparing Numbers
#### Notes for Slide 2

The symbols mean

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><code>==</code></td><td>equals to</td>
    </tr>
    <tr>
    <td><code><</code></td><td>less than</td>
    </tr>
    <tr>
    <td><code><=</code></td><td>less than or equal to</td>
    </tr>
    <tr>
    <td><code>></code></td><td>greater than</td>
    </tr>
    <tr>
    <td><code>>=</code></td><td>greater than or equal to</td>
    </tr>
</table>
</div>

Note that double equals sign, `==` is used for equals to. A single equals sign
is already used in Go for variable assignment.

A computer program can only answer true or false to a question. This means that
the programmer has to ask a very precise question.

The `if` statement

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if temperature = 100
    fmt.Println("The water is boiling.")
fmt.Println("The water is getting hotter.")
{{< /hilight >}}

has __three__ mistakes in it. The first two mistakes are the missing opening
and closing braces, the `{` and `}` that should surround the line

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("The water is boiling.")
{{< /hilight >}}

The last mistake is more subtle. The `if` statement does not contain a valid
condition, it contains a variable assignment. The single equals sign, `=` in

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if temperature = 100
{{< /hilight >}}

should be replaced with a double equals sign, `==`, to test for equivalence.

The corrected `if` statement would therefore be

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if temperature == 100 {
    fmt.Println("The water is boiling.")
}
fmt.Println("The water is getting hotter.")
{{< /hilight >}}

These are both very common mistakes that the pupils will make when learning.

### What is the Result of a Comparison
#### Notes for Slide 3
The expression

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 <= 34
{{< /hilight >}}

asks the question is 12 less than or equal to 34.

The answer can only be yes or no, or more correctly true or false.
The concept of true and false, or yes and no, or one and zero so common
in computing that it has its own type.

The type is known as a boolean type, named after the 19th century mathematician
George Boole. Who first described how addition could be described using
sets. This has a realisation in computer science as boolean algebra.

Go expresses the boolean type as a type called `bool`. Variables of type `bool`
can be created using the same variable declaration pattern as say other variables.
Likewise values can be assigned to variables of type bool using the variable
assignment pattern.

As an example consider

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var answer bool
answer = 12 <= 34
if answer == true {
    fmt.Println("12 is less than or equal to 34")
}
{{< /hilight >}}

The result of the comparison of `12 <= 34` is a boolean value and is assigned
to the variable `answer` in line 2. The `answer` variable is declared as a
`bool` type in line 1.

{{% defaultNote %}}
The `if` test can be collapsed into this

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var answer bool
answer = 12 <= 34
if answer {
    fmt.Println("12 is less than or equal to 34")
}
{{< /hilight >}}

The equivalence test of `answer` against the value `true` is unnecessary. The
`if` statement will test the condition. If the condition happens to be a boolean
variable then the test against true or false is implicit in the meaning of
the `if` statement itself. There is no need to write the test explicitly.
{{% /defaultNote %}}

But why would you want to do this? Sometimes it is necessary, or just simpler,
to calculate the value of a condition and store the result in a boolean variable
for later use. Examples of this approach would be used in repetition, which we
will show in later lessons, or to test the conditions necessary to exit the
program early.

### The Opposite of True is?
#### Notes for Slide 4
The challenge answers are:

False is the opposite of true
True is the opposite of false

In this case we are talking about the logical opposite. This is negation.
The symbol Go used to logically negate a boolean variable is `!`

For example

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var answer bool
var negatedAnswer bool
answer = true
negatedAnswer = !answer
{{< /hilight >}}

This can also be used in `if` statements. Like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var locked bool
locked = IsTheDoorLocked()
if !locked {
    fmt.Println("The door is open")
}
{{< /hilight >}}

If the programmer does not have a function called `IsTheDoorUnlocked()` available
to them then the only way to test if the door is open is to test if the door
is __not__ locked. To do this we need to use negation.

### Not Equals
#### Notes for Slide 5
The pupils can tell if two numbers are different by using a combination of
an equals test and negation. The question is not asking if the numbers are larger
or smaller relative to each other only that they are different.

If you want to tell if the numbers first-number and second-number are different
then you can first test them for equality, using a `==` operator.

If the numbers are different the result of the equality test is false.

But we want to test for difference. So when the numbers are different we want
the answer to be true. This can be achieved if we negate the answer of the
equality test i.e.

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
!(first_number == second_number)
{{< /hilight >}}

The brackets are required because we want to negate the answer of the equality
operator, the `==` so we need this to happen first. The negation operator, `!`
has a higher precedence then the `==` operator.

There is a better way. Go provides a 'not equals to' operator, typed `!=`. It
is more usual to use the 'not equals to' operator, the `!=` instead of the
bracketed expression.

If the number on the left of the `!=` operator is different from the number on the
right the result is true. Otherwise it is false.

### Comparing Strings
#### Notes for Slide 6
String comparison uses the same set of comparison operators as numbers.
The meaning of each operator, <, <=, ==, !=, >=, > is the same as for
numbers.

Strings are equal if they have the same sequence of runes (letters, punctuation
symbols etc.) and have the same number of runes. Otherwise the strings are not
equal.

The not equals, `!=`, operator also works for strings. If the strings are not the same length
or any letter in the strings is different the `!=` operator returns true.
Otherwise the result is false

Strings are ordered alphabetically i.e. dictionary order. Or more correctly order
lexicographically. Numbers in the string come before letters and upper
case letters come before lower case letters.

This is the ordering of the letters etc. in the [Unicode Table](http://unicode-table.com/en/).
Given that all characters are represented by a number in the Unicode table
this means that string comparison involves comparing one list of numbers against
a second list of numbers.


### Challenge
#### Notes for Slide 7
The challenge has two parts. Firstly, the pupils are asked to compare two strings
using the comparison operators. Secondly, the pupils have to think logically and
create two `if` statements. The pupils will have to come up with their own
names for variables to represent the height of The Shard and Nelson's Column.

{{% defaultNote %}}
You may have to explain that [The Shard](http://en.wikipedia.org/wiki/The_Shard)
is a tall building in London (actually the tallest in Europe) and
[Nelson's Column](http://en.wikipedia.org/wiki/Nelsons_Column) is the monument
in the centre of Trafalgar Square in London.  
{{% /defaultNote %}}

The answer to the first challenge is

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if "robin" < "blackbird" {
    fmt.Println("Blackbird comes before robin in the dictionary")
}
{{< /hilight >}}

the condition in the `if` statement is false so nothing is printed.
So the string "robin" is __not__ less than the string "blackbird" i.e.
it is considered bigger. This is correct based on the dictionary order.

{{% defaultNote %}}
This can be proved if your pupils look up both "robin" and "blackbird" in the
dictionary.
{{% /defaultNote %}}

The second `if` statement

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if "robin" > "blackbird" {
    fmt.Println("Blackbird comes before robin in the dictionary")
}
{{< /hilight >}}

Is true, so the output would be
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
"Blackbird comes before robin in the dictionary"
{{< /hilight >}}

The `if` tests required for the second part could be written as:

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if heightOfShard > heightOfNelsonsColumn {
    fmt.Println("The Shard is the tallest")
}
if heightOfNelsonsColumn > heightOfShard {
    fmt.Println("Nelsons Columns is tallest")
}
{{< /hilight >}}

The pupils can chose any variable names, but the variable names must be consistent.
The same variable names must be used in both `if` statements.

The pupils will need two distinct `if` statements to complete the challenge.

If the pupils also declare the variables, both should be declared as `int` types
to approximate the height to the nearest metre.

Clearly in reality The Shard is much taller.

### Let's Look at the Challenge Again
#### Notes for Slide 8

The challenge is also about two logically opposite statements.
If the height of The Shard is larger than the height of Nelson's Columns then
the height of Nelson's Columns cannot be higher then the height of The Shard.

Logically only one of the two statements can be true at any one time. If the
first statement is true the second statement must be false. The second statement
is true then the first statement must be false.

This situation can be solved using an `if else` statement.


### `if` and his friend `else`
#### Notes for Slide 9
In a situation where you have two statements but only one of them can be true
at any one time two `if` statements are not required. A single `if else` statement
will do.

The `if else` pattern is
````
if condition {
    true-statment-block
} else {
    false-statement-block
} // this is the last brace
````
This is a simple extension of the `if` pattern already introduced.

If the `condition` is true then the `if else` behaves like an `if` statement.
The `true-statement-block` is executed. Once executed the
next line to be executed is the line after the last `}`. The
`false-statement-block` is skipped over and not executed.

If the condition is false then the `false-statment-block` is
executed. Once executed the execution continues on the line after the last `}`.
The `true-statement-block` is skipped over and not executed.

Only one of the two statement blocks is executed. Which is executed depends on
the result of the condition.

`else` is another of Go's keywords.

### One `if else` Statement Solution
#### Notes for Slide 10
The challenge on Slide 7 can now be solved with a single `if else` statement
like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if height_of_shard > height_of_nelsons_column {
    fmt.Println("The Shard is tallest")
} else {
    fmt.Println("Nelsons Column is tallest")
}
{{< /hilight >}}

Only one of the `Println` statements will be executed. Never both.

### `if else` and `if` again
#### Notes for Slide 11
There is one slight tweak to the standard `if else` pattern

If the first statement in the `false-statement-block` is an `if` statement you
are allowed to write this

````
if first-condition {
    true-statement-block-for-first-condition
} else if second-condition {
    true-statement-block-for-second-condition
} else {
    statement-block-if-both-conditions-are-false
} // this is the last brace
````
So you are allowed to squeeze the extra `if` statement in after the `else`.
This is the usual practice so there is an example of this in example program.

The programmer can have as many `else if` lines as they require to solve the
problem. There is no limit.

### The `timesquestion` Program
#### Notes for Slide 12

The `timesquestion` program asks the pupils multiplications from the 1-12
times-tables. If the pupils answer correctly the program displays a congratulations
message. If the pupils are wrong the program tells them if their guess was
too large or too small and then prints out the correct answer.

At the heart of the program is an `if else` statement.

Lets look at the `timesquestion` program.
{{% codeFigure caption="Fig-1. The `timesquestion` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"

	"github.com/gophercoders/random"
	"github.com/gophercoders/simpleio"
)

func main() {

	var a int
	var b int
	var answer int

	fmt.Println("The timesquestion shows you how to use if and else.")
	fmt.Println("Can you remember your times tables?")
	fmt.Println("")

	a = random.GetRandomNumberInRange(1, 12)
	b = random.GetRandomNumberInRange(1, 12)

	fmt.Print("What is ")
	fmt.Print(a)
	fmt.Print(" * ")
	fmt.Print(b)
	fmt.Println("?")

	answer = simpleio.ReadNumberFromKeyboard()

	if answer == a*b {
		fmt.Println("Congratulations! You are correct! ")
	} else if answer > a*b {
		fmt.Println("Sorry, your guess was to big.")
		fmt.Print("The correct answer is ")
		fmt.Print(a)
		fmt.Print(" * ")
		fmt.Print(b)
		fmt.Print(" = ")
		fmt.Println(a * b)
	} else {
		fmt.Println("Sorry your guess was to small.")
		fmt.Print("The correct answer is ")
		fmt.Print(a)
		fmt.Print(" * ")
		fmt.Print(b)
		fmt.Print(" = ")
		fmt.Println(a * b)
	}
	fmt.Println("Run the program again to try another question.")
}
{{< /hilight >}}
{{% /codeFigure %}}

If the pupils answer correctly the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquestion shows you how to use if and else.
Can you remember your times tables?

What is 4 * 12?
48
Congratulations! You are correct!
Run the program again to try another question.
{{< /hilight >}}

If the pupils guess is to small the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquestion shows you how to use if and else.
Can you remember your times tables?

What is 12 * 10?
5
Sorry your guess was to small.
The correct answer is 12 * 10 = 120
Run the program again to try another question.
{{< /hilight >}}

If the pupils guess is to large the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquestion shows you how to use if and else.
Can you remember your times tables?

What is 3 * 8?
44
Sorry, your guess was to big.
The correct answer is 3 * 8 = 24
Run the program again to try another question.
{{< /hilight >}}

{{% panelWarningTitle title = "Important" %}}
Both numbers involved in the multiplication are chosen randomly. The
numbers the pupils see will be different each time the program is run.
Therefore the numbers will be unlikely to match those shown in the
sample output.
{{% /panelWarningTitle %}}

Lets look at the key points of the program. The first key line is line 29.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer = simpleio.ReadNumberFromKeyboard()
{{< /hilight >}}

This is a straight forward variable assignment statement. The value of `answer`
is assigned the result of the function `ReadNumberFromKeyboard` in the `simpleio`
package. So, the number that the user types is assigned to the `answer` variable.

The next key lines are lines 31 to 33.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if answer == a*b {
    fmt.Println("Congratulations! You are correct! ")
} else if answer > a*b {
{{< /hilight >}}

This is the `if else` pattern. Lets break this down. `a` and `b` are the
numbers picked by the program. The pupil is asked to solve `a * b`. Their answer
is held in `answer`.

If the pupil's answer is equal to `a * b` then the condition of the `if` statement
is true. If the condition is true then line 32 is executed and

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Congratulations! You are correct!
{{< /hilight >}}

appears in the output. The `else` block that extends between lines 33 and 49 is
skipped. The next line that is executed is therefore line 50, resulting in

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Congratulations! You are correct!
{{< /hilight >}}

appearing in the output.

But what happens if the answer is wrong? What happen when the condition is
false?

Lets look at the whole block from lines 31 to 49.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if answer == a*b {
    fmt.Println("Congratulations! You are correct! ")
} else if answer > a*b {
    fmt.Println("Sorry, your guess was to big.")
    fmt.Print("The correct answer is ")
    fmt.Print(a)
    fmt.Print(" * ")
    fmt.Print(b)
    fmt.Print(" = ")
    fmt.Println(a * b)
} else {
    fmt.Println("Sorry your guess was to small.")
    fmt.Print("The correct answer is ")
    fmt.Print(a)
    fmt.Print(" * ")
    fmt.Print(b)
    fmt.Print(" = ")
    fmt.Println(a * b)
}
{{< /hilight >}}

If the user types the wrong answer then the first condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if answer == a*b {
{{< /hilight >}}

is false. So the `else` on line 33 is executed.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
} else if answer > a*b {
{{< /hilight >}}

But the `else` block itself starts with another `if` statement.

If this second `if` test

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if answer > a*b {
{{< /hilight >}}

is true, then the user's guess is too large. In this case the next block
to be executed is from line 34 to 40


{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Sorry, your guess was to big.")
fmt.Print("The correct answer is ")
fmt.Print(a)
fmt.Print(" * ")
fmt.Print(b)
fmt.Print(" = ")
fmt.Println(a * b)
{{< /hilight >}}

which results in

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry, your guess was to big.
The correct answer is 3 * 8 = 24
{{< /hilight >}}

appearing in the output. So even though the `if` statement follows an `else`
it behaves in the same was as any other `if` statement. If this `if` test is
true the `else` block in lines 42 to 49 are skipped over.

If the `if` test on line 33 is false

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
} else if answer > a*b {
{{< /hilight >}}

then `answer` is less than `a * b` then the `else` block on lines 42 to 49

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Sorry your guess was to small.")
fmt.Print("The correct answer is ")
fmt.Print(a)
fmt.Print(" * ")
fmt.Print(b)
fmt.Print(" = ")
fmt.Println(a * b)
{{< /hilight >}}

which results in

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry your guess was to small.
The correct answer is 12 * 10 = 120
{{< /hilight >}}

appearing in the output.

{{% panelWarningTitle title="Important" %}}
Remember that lines 42 to 49 are only executed if __both__ `if` tests are false.
{{% /panelWarningTitle %}}


In __either__ case line 50 is always executed.

If you look closely at the program there are two `if else` blocks.
The fist one extends between lines 31 and 49. The second one is enclosed
within the first one, and extends between lines 33 and 49.

The `else` on line 33 matches the `if` on line 31. The `else` on line 41 matches
the `if` on line 33.


The only other significant lines are lines 20 and 21.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
a = random.GetRandomNumberInRange(1, 12)
b = random.GetRandomNumberInRange(1, 12)
{{< /hilight >}}

Both of these use the new `random` package we have developed. The function
`GetRandomNumberInRange` returns a random number in the range 1 to 12. 1 being
the bottom of the range and 12 being the top of the range.

The `random` package is imported on line 6

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
"github.com/gophercoders/random"
{{< /hilight >}}

The remainder of the program is a mixture of variable declarations, lines 12,
13, 14 and `Print` and `Println` statements.


### Plenary
#### Notes for Slide 13
The plenary is about repetition, the subject of the next lessons.

At the moment the pupils have to restart the program completely to re-run the
program. They don't yet know how to repeat just part of the program without
restarting it. But they might be able to guess this. You are looking for the
pupils such as repeat, or loop or phrases like "do that bit again", "keep doing
this bit", "over and over (again)".

Can the pupils work out that they need to repeat the part that asks the
question and then checks the answer?


If the program is run again numbers will be different. The
`GetRandomNumberInRange` guarantees this.
