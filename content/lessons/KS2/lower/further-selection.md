+++
Categories = ["Fundamentals"]
Description = "An introduction to if else statements"
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-04-02T22:37:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "if and else"
title = "More Selection"
lessonplan = "further-selection"
notesfor = "further-selection"
slides = "further-selection"
lessonnumber = "9"
+++
### What You are Going to Learn
In the last lesson we introduced the concept of selection. Selection is how a
computer program makes a decision.

In this lesson we want to extend the concept to selection to show you how a
computer program can make a choice between two or more alternatives.
<!--more-->

### How to do Something `else`
So far we have showed you how to use selection statements to make
decision in your programs. Go calls selection statements `if`
statements. But this is only part of the story of
selection.

You can achieve a huge amount with just `if` statements and variables.
But sometimes you want something more. Sometimes you want to do one
thing if the condition in the `if` statement is true, but a completely
different thing if the condition is false.

You can do this already, you just need to use two `if` statements like
this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if number > 10 {
    fmt.Println("The number is greater than 10")
}
if number <= 10 {
    fmt.Println("The number is less than or equal to 10")
}
{{< /hilight >}}

{{% panelInfoTitle title="Now it is your turn" %}}
Think about this carefully for a minute. Can you work out what happens
if number had the values 5, 10, 15? Is it possible for both of the
conditions to be true at the same time?

{{% expandingButton id="if-test-answers" name="Answer" %}}
If the value of number is 5 or 10 then only the second condition is
true. So the output would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The number is less than or equal to 10
{{< /hilight >}}

If number is 15 then only the first condition is true and the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The number is greater than 10
{{< /hilight >}}

Both conditions cannot be true at the same time. The conditions are the
opposite of each other.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

There is an easier way to do this. It's called an `if else` statement
and that is what you are going to learn about in this lesson.

{{% panelWarningTitle title="Important" %}}
Make sure you have completed the last lesson about
[selection]{{< ref "lessons/KS2/lower/selection.md" >}} before you try this lesson. You will need to understand selection and `if`
statements first.
{{% /panelWarningTitle%}}

### Selection
Before we get to `if else` statements lets look back at selection and
`if` statements. The `if else` statement is an extension of the `if`
statement so you need to know how `if` statements work first.

{{% panelInfoTitle title="Now it is your turn" %}}
Can you remember what these operators mean?

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><code>==</code></td><td></td>
    </tr>
    <tr>
    <td><code><</code></td><td><=</td>
    </tr>
    <td><code>></code></td><td>>=</td>
    </tr>
</table>
</div>

If you type an `if` statement in a computer program what will the
answers be?

Look at this `if` statement

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if temperature = 100
    fmt.Println("The water is boiling.")
fmt.Println("The water is getting hotter.")
{{< /hilight >}}

How many mistakes can you find?

{{% expandingButton id="operator-answers" name="Answer" %}}
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

A computer program can only answer true or false to an `if` statement. This means that
you have to ask a very precise question.

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

{{% panelPrimaryTitle title="Tip" %}}
Remember that you always need the braces, the `{` and `}` in the `if` statement.
They are important to Go because they mark a __block__ of statements that
Go should execute if the condition is true.

Remember that you have to type `==` to mean equals to!
{{% /panelPrimaryTitle %}}
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### What is the answer when you compare values?
Let's start with something simple. What is the answer to this?

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 <= 34
{{< /hilight >}}

{{% expandingButton id="compare-answer" name="Answer" %}}
Well the question is 12 less than or equal to 34. But the answer can only be yes
or no, or more correctly true or false.
{{% /expandingButton %}}

The concept of true and false, or yes and no, or one and zero so common
in computing that it has its own type. The type is known as a boolean type,
named after the 19th century mathematician
[George Boole](http://en.wikipedia.org/wiki/George_Boole). Who first described
how addition could be described using sets. This has its realisation in computer
science as boolean algebra.

Go expresses the boolean type as a type called `bool`. Variables of type `bool`
can be created using the same variable declaration pattern as other variables.
Likewise values can be assigned to variables of type `bool` using the variable
assignment pattern. You can only assign the values `true` or `false` or the result
of a comparison to a variable of type `bool`.

To show you what we mean look at this

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

But, there is a slightly simpler way to write this: the `if` test can be reduced
to this

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

Okay, but 'so what?' you might be thinking: why would you want to do this?
Sometimes it's necessary, or just simpler, to calculate the value of a
condition and store the result in a boolean variable
for later use. Examples of this approach would be used in repetition, which we
will show in later lessons, or to test the conditions necessary to exit a
program early.

### Logical Opposites
What is the opposite of `true`? What is the opposite of `false`?

{{% expandingButton id="opposite-answers" name="Answer" %}}
The answer is

False is the opposite of true
True is the opposite of false
{{% /expandingButton %}}

These are the logical opposites of each other. This is called negation.

The symbol Go used to logically negate a boolean variable is `!` You can use
this symbol in front of variables or expressions. If the value of the variable
or expression was `true` then the `!` makes it `false`. If the value was `true`
then `!` makes it `false`.

For example

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var answer bool
var negatedAnswer bool
answer = true
negatedAnswer = !answer
{{< /hilight >}}

This can also be used in `if` statements. This is typically how you would use
negation.

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var locked bool
locked = IsTheDoorLocked()
if !locked {
    fmt.Println("The door is open")
}
{{< /hilight >}}

If you do not have a function called `IsTheDoorUnlocked()` available then
you can work this out by negating the answer that `IsTheDoorLocked()` returns.
So you don't need a function called `IsTheDoorUnlocked` at all!

### What if you want to tell if things are unequal?
Negation has another use. You can use it to tell if two numbers are different.
This won't tell you which number is bigger or smaller only that the numbers
are different.

To do this you need to use a combination of an equals test and negation. Like
this.

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
!(first_number == second_number)
{{< /hilight >}}


If you want to tell if the numbers first-number and second-number are different
then you can first test them for equality, using a `==` operator. If the numbers
are different the result of the equality test is false.

But we want to test for difference. So when the numbers are different we want
the answer to be true. This can be achieved if we negate the answer of the
equality test with the `!` symbol at the start of the expression.

{{% panelWarningTitle title="Important" %}}
The brackets are required because we want to negate the answer of the equality
operator, the `==` so we need this to happen first. The negation operator, `!`
has a higher precedence then the `==` operator.
{{% /panelWarningTitle %}}

It works, but it is a lot to type! The good news is Go provides a better way
to do this. It is called the not equals to operator, typed `!=`.

If the number on the left of the `!=` operator is different from the number on the
right the result is true. Otherwise it is false.

### Comparing Strings
One last thing before we get back to `if else` statements and that is
comparing strings. The good news is that if you can compare numbers
you can already compare strings. It is exactly the same.

String comparison uses the same set of comparison operators as numbers.
The meaning of each operator, <, <=, ==, !=, >=, > is the same as for
numbers.

Strings are equal if they have the same sequence of runes (letters, punctuation
symbols etc. ) and have the same number of runes. Otherwise the strings are not
equal.

The not equals, `!=`, operator also works when comparing two strings. If the strings
are not the same length or any letter in the two strings is different the `!=` operator
returns true. Otherwise the result is false

Strings are ordered alphabetically i.e. dictionary order. Or more correctly ordered
lexicographically. Numbers in the string come before letters and upper
case letters come before lower case letters.

This is the ordering of the letters etc. in the [Unicode Table](http://unicode-table.com/en/).
If you remember that all characters are represented by a number in the Unicode table
this means that string comparison involves comparing one list of numbers against
a second list of numbers.

Lets look at a quick example.

{{% panelInfoTitle title="Now it is your turn" %}}
Can you work out what these two `if` statements do?

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if "robin" < "blackbird" {
    fmt.Println("Blackbird comes before robin in the dictionary")
}

if "robin" > "blackbird" {
    fmt.Println("Blackbird comes before robin in the dictionary")
}
{{< /hilight >}}

{{% expandingButton id="string-answers" name="Answers" %}}
Lets look at the first `if` statement first

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if "robin" < "blackbird" {
    fmt.Println("Blackbird comes before robin in the dictionary")
}
{{< /hilight >}}

the condition in the `if` statement is false so nothing is printed.
So the string "robin" is __not__ less than the string "blackbird" i.e.
it is considered bigger. This is correct based on the dictionary order.

{{% defaultNote %}}
You can prove this is you look up both "robin" and "blackbird" in the
dictionary. "Robin" comes after "blackbird" so "robin" must be greater than
"blackbird"
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

String comparison really is as easy as that.

{{% /panelInfoTitle %}}

### Back to `if else`
{{% panelInfoTitle title="Now it is your turn" %}}
Lets start by looking at `if` statements again. Try to write some
`if` statements that solve this.

If the population of China is greater than the population of the UK then
print out `There are more people in China!`.

If the population of the UK is greater than the population of China then
print out `There are more people in the UK!`.

You'll need to create to new variables, but you won't need to assign any value
to them.

How many `if` tests do you need to do this?

Can all of the `if` statements be true at once?

{{% expandingButton id="population-answers" name="Answer" %}}
You could write the `if` tests like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var populationOfChina int
var populationOfUK int

if populationOfChina > populationOfUK {
    fmt.Println("There are more people in China!")
}
if popualtionOfUK > populationOfChina {
    fmt.Println("There are more people in the UK!")
}
{{< /hilight >}}

But you need to use two `if` statements. But only one of these `if` statements
can be true.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### The `if else` pattern
If you have a situation where you want one action to happen when the condition
is true and another action to happen when the same condition is false then you
should use the `if else` pattern.

The pattern is an extension to the `if` pattern and uses the new `else` keyword.
The pattern is

````
if condition {
    true-statement-block
} else {
    false-statement-block
} // this is the last brace
````

If the `condition` is true then the `if else` behaves like an ordinary `if`
statement and the `true-statement-block` is executed. The `false-statement-block`
is skipped over and not executed. Execution continues after the last brace.

If the `condition` is false then whatever follows the `else` is executed.
In this case the `false-statement-block` is executed. The `true-statement-block`
is ignored and skipped over. Once the `false-statement-block` has executed
program execution continues after the last brace.

As you can see the `if else` statement executes only one of the blocks. Either
the `true-statement-block` is executed or the `false-statement-block` is
executed and never both blocks.

Now you know about `if else` statements you can write the two `if` statements
you needed to work out which country had a bigger population using a single
`if else` statement like this.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var populationOfChina int
var populationOfUK int

if populationOfChina > populationOfUK {
    fmt.Println("There are more people in China!")
} else {
    fmt.Println("There are more people in the UK!")
}
{{< /hilight >}}

{{% panelWarningTitle title="Important" %}}
Remember only one of the `fmt.Prinln` lines will be executed.
The output is either

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
There are more people in China!
{{< /hilight >}}

or this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
There are more people in the UK!
{{< /hilight >}}
{{% /panelWarningTitle %}}

There is one slight tweak left.

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
We will show you an example of this in program.


### The `times question` Program

The `timesquestion` program tests your multiplication for the 1-12
times tables. If you answer correctly the program displays a congratulations
message. If you are wrong the program tells you if your guess was
to large or to small and then prints out the correct answer.

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

Type the program into your text editor and try to run it. Remember that you will
also need to create a new directory in your Go workspace.

If the program runs correctly the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquestion shows you how to use if and else.
Can you remember your times tables?

What is 4 * 12?
48
Congratulations! You are correct!
Run the program again to try another question.
{{< /hilight >}}

If the guess is to small the output is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquestion shows you how to use if and else.
Can you remember your times tables?

What is 12 * 10?
5
Sorry your guess was to small.
The correct answer is 12 * 10 = 120
Run the program again to try another question.
{{< /hilight >}}

If the guess is to large the output is

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
Both numbers involved in the multiplication are chosen randomly. These are
the number we had when we ran the program. The numbers you see will be different
and they will be different each time the program is run.
{{% /panelWarningTitle %}}

Lets look at the key points of the program. The first key line is line 29.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer = simpleio.ReadNumberFromKeyboard()
{{< /hilight >}}

This is a straight forward variable assignment statement. The value of `answer`
is assigned the result of the function `ReadNumberFromKeyboard` in the `simpleio`
package. So, the number that you type is assigned to the `answer` variable.

The next key lines are lines 31 to 33.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if answer == a*b {
    fmt.Println("Congratulations! You are correct! ")
} else if answer > a*b {
{{< /hilight >}}

This is the `if else` pattern. Lets break this down. `a` and `b` are the
numbers picked by the program. Then you are asked to solve `a * b` and your answer
is held in `answer`.

If your answer is equal to `a * b` then the condition of the `if` statement
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

But what happens if the the answer is wrong? What happen when the condition is
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

is true, then the users guess is too large. In this case the next block
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

appearing in the output. So even though the `if` statement follows and `else`
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

In __either__ case the line 50 is always executed.

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
