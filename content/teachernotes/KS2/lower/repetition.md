+++
Categories = ["Fundamentals"]
Description = "These are the teacher notes for the repetition lesson."
Tags = []
author = "Owen"
concepts = ["repetition"]
date = "2015-04-05T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "repetition"
slides = "repetition"
lessonplan = "repetition"
subtitle = "Teach and Try Teacher Notes"
title = "Repetition and Loops"
lessonnumber= "10"
+++
### Objective
To introduce the concept of repetition and show how this can be used in
computer programs.

To learn that repetition is more commonly called a loop.

To learn the different types of loops; to introduce the pattern for a
loop that repeats while a condition is true.

The class will practice loops by adapting the previous `timesquestion`
program.

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
* Understand what repetition is
* Understand what repetition is used for
* Understand that repetition is more commonly called a loop
* Understand that there are different kinds of loops
* Understand the loop pattern to loop while a condition is true
* Understand when the condition is tested in such a loop
* Adapt the `timesquestion` program to create the `timesquiz` program


### Teaching prerequisites

The pupils must have encountered the comparison operators, <, > and = in
mathematics. Comparison is fundamental to loops as well as selection so
the pupils must be already familiar with the idea from mathematics.

In addition to this, the pupils need to have covered Lessons 1-9 in this series.

### Computing Links

Repetition. The program demonstrates the use of repetition to
continually ask the pupil a multiplication until they answer correctly.

Selection. The loop in the program is controlled by a selection.

Variables. The program uses variables for user input and the variables
are used again within the condition that controls the loop as well
as within the loop itself.

Input and Output. The program asks the user to input their answer and
outputs if they are correct.

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links
Maths. The example program,`timesquiz` will ask the pupils to solve
multiplications from the 1-12 times-tables.

### Drawing Squares
#### Notes for Slide 2
The first challenge asks pupils to draw or think about shapes.

Ask the pupils to draw a square, an equilateral triangle and a regular pentagon
or select these shapes from a set of irregular shapes.
Ask the pupils how they drew (or would draw) these shapes? What steps did they
take? How many steps did they need for each shape?

Obviously a square has 4 sides with 90 degree internal angles. An equilateral
triangle has 3 sides with 60 degree internal angles and pentagon has 5 sides
with 108 degree internal angles

You can draw all of these shapes be repeating a pair of steps.

The second challenge is about multiplication. So

2 + 2 + 2 + 2 = 2 * 4 = 8

So multiplication is the same as repeated addition.
The pattern is of the form
````
3 * n
````
Where `n` varies from 1 to 12.

So a times-table is generated be repeating (almost) the same sum.

### Repeating Lines
#### Notes for Slide 3
You can draw a square by repeatedly drawing a line and then turning 90 degrees
at the end to give you the direction of the next line.

The pattern is the repeated pair of steps to draw the side and then rotate.

If you repeat this 4 times you will draw a square. It doesn't matter what the
initial orientation of the first line is. Repeating the steps still draws a
square. This is an algorithm for drawing a square.

Both the triangle and the pentagon can be drawn using a similar approach.
The only differences are the number of repetitions required and the size
of the angle to rotate by.

### Drawing Squares
#### Notes for Slides 4, 5, 6, 7
These slides show the square as it is drawn, after each pair of steps.

### Repeating Numbers
#### Notes for Slide 8
The pattern in
````
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
````
is
````
3 * n
````
where `n` has the values 1 to 4 and increases by one at each step.

The pattern in
````
4 * 3 = 12
5 * 4 = 20
6 * 5 = 30
7 * 6 = 42
````
is
````
m * n
````
where `m` has the values 4 to 7 and increases by one at each step.
And `n` has the vales 3 to 6 and increases by one at each step.

Both patterns can be repeated to generate the tables.

### Repetition
#### Notes for Slide 9
Both the pattern for drawing squares (and equilateral triangles and regular
pentagons) and the pattern for multiplication as repeated addition and the pattern
to create the times tables are all examples of repetition.

Repetition means to repeat a sequence of instructions - i.e, just part of the
program - over and over again. Either for a fixed number of times or until some
condition becomes false.

Programs can have many repetition statements in them.

Repetition makes the program both shorter - so less typing - and easier to
understand. Repetition makes the program logic clearer. Repetition also means
that the program more closely resembles the algorithm that it claims to
implement. Look at the square drawing algorithm. It is clearer to say
"Repeat this pair of steps 4 times" instead of listing the pair of steps 4 times.

The hard part is spotting a pattern that can be repeated. This will only come
with practice.

### Loops
#### Notes for Slide 10
Programmers call repetition loops. A sequence of instructions is looped over
a number of times.

Programmers also talk about different types of loops. So there are loops that
repeat while a condition is true - called a while loop. There are loops
that repeat a fixed number of times - called a for loop. There are loops that
run forever - called an infinite loop.

The difference between the loops is presence or absence of the condition.
For loops also have the additional property of specifying the step-size of
the loop.

The lesson is going to look at while loops. The next lesson will look at for
loops. These are a simple extension to a while loop.

### The Loop Pattern
#### Notes for Slide 11
Go uses the keyword `for` to introduce a loop, regardless of which type of
loop it is.

The pattern for a loop that repeats while a condition is true is
````
for condition {
    statements-to-repeat
} // last brace
````
The `condition` is tested before the loop starts. If the condition is true
then the `statements-to-repeat` are executed. If the condition is false then
the `statements-to-repeat` are skipped over and execution continues after the
last brace. In this respect, a loop behaves in a similar way to an `if` statement.
In fact there is an implicit `if` test in any while or for loop.

If the `condition` is true the `statements-to-repeat` are executed. Once these
are executed the condition is tested __again__. Think of the last brace causing
jump back to the `for` line.

If the `condition` is again true the `statements-to-repeat` are executed again,
for a second time. Once the `statements-to-repeat` have been executed, the
`condition` is tested again.

This process repeats until the condition is false.

The condition is tested before each time though the loop. Each time though the
loop is called a loop iteration so the condition is tested before each loop
iteration including the first one.

### Loop Example
#### Notes for Slide 12
The loop example show how to use a for loop to create a loop that repeats until
the condition is true.

The example continually asks the user to have a guess at the secret word until
the user guesses the correct answer (Banana).

The pupils should be able to use logical reasoning to work out what the program
does when the user types "Goldfish" or "Banana" on their first guess. They
should also be able to work out what happens if they type "Goldfish", "Shark" and
"Banana" on successive guesses.

Ask the pupils to write down the programs output for each guess.

{{% codeFigure caption="Fig-1. The loop example code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
var word string
var secretWord string
secretWord = "Banana"

fmt.Println("Guess the secret word.")
word = simpleio.ReadStringFromKeyboard()

for word != secretWord {
    fmt.Println("Sorry that is not the secret word!")
    fmt.Println("Try and guess again!")
    word = simpleio.ReadStringFromKeyboard()
}

fmt.Println("Congratulations!")
{{< /hilight >}}
{{% /codeFigure %}}

If the pupils first guess is "Goldfish" it reads "Goldfish" into the variable called `word`
on line 6. The condition on line 8

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
word != secretWord {
{{< /hilight >}}

Is true - "Goldfish" is not the same as the secret word "Banana" so the loop
statements between the `{` and `}` are executed. So he program executes lines
9 and 10 and prints out

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry that is not the secret word!
Try and guess again!
{{< /hilight >}}

and then waits for the pupil to enter the next guess on line 11.

If the pupils then enters "Shark" the process repeats. "Shark" is stored in the
variable called `word`. Now the condition is checked again. The condition is
still true because "Shark" is not the same as the secret word "Banana".

The loop is therefore executed again and again, prints

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry that is not the secret word!
Try and guess again!
{{< /hilight >}}

Now if the pupil enters "Banana" as their next guess, then `word` would contain
the value "Banana" and the condition ("Banana" is not equal to "Banana") would be false. Now that the condition is
false the loop is skipped over and the program prints out.

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Congratulations!
{{< /hilight >}}

If the pupil had guessed "Banana" as their first guess this would also have
been the result.

### The `timesquiz` Program
#### Notes for Slide 13
The `timesquiz` is an extension of the previous `timesquestion` program from the
`if else` [selection lesson]({{< ref "lessons/KS2/lower/further-selection.md" >}}).

Like the `timesquestion` program the `timesquiz` program asks the pupil to
solve a multiplication question from the 1-12 times tables. Also like the
`timesquestion` program the `timesquiz` program tells the user if their
guess in to large to small. But unlike the `timesqestion` program the
`timesquiz` program will not exit until the pupil answers correctly. If the pupil
guess is wrong the program asks for anther guess. The only way to exit the
program is to enter the correct answer.

The `timesquiz` program looks like this

{{% codeFigure caption="Fig-2. The `timesquiz` code" %}}
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

	fmt.Println("The timesquiz shows you how to use loops.")
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

	for answer != a*b {
		if answer > a*b {
			fmt.Println("Sorry, your guess was to big.")
		} else {
			fmt.Println("Sorry your guess was to small.")
		}
		fmt.Println("Try again ")
		answer = simpleio.ReadNumberFromKeyboard()
	}
	fmt.Println("Congratulations! You are correct.")
}
{{< /hilight >}}
{{% /codeFigure %}}

The pupils run the program and guess incorrectly twice, then the output is
similar to

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
Sorry, your guess was to big.
Try again
66
Congratulations! You are correct.
{{< /hilight >}}

{{% defaultNote %}}
Remember that the numbers for the multiplication are chosen randomly. When the
pupils run the programs they will see different numbers.
{{% /defaultNote %}}

The program is very similar to the previous `timesquestion` program.

The pupils guess is read on line 29 using the `ReadNumberFromKeybaord` from the
`simpleio` package. Their guess is stored in the variable `answer`.

The loop extends from lines 31 to 39. The loops condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer != a*b
{{< /hilight >}}

is on line 31. If the pupil guess correctly on their first guess then this
condition is false. The loop is then skipped over and the next line to execute is
line 40

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Congratulations! You are correct.")
{{< /hilight >}}

so the complete output from the program would be.

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
66
Congratulations! You are correct.
{{< /hilight >}}

If the pupil guesses incorrectly, for example 45, then the condition on line 31
is true so the loop is executed.

The first line in the loop is an `if else` statement. The condition in the
`if else` statement is

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer > a*b
{{< /hilight >}}

This is false (45 < 66 in this case) so the next line to be executed is
line 35

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Sorry, your guess was to small.")
{{< /hilight >}}

The output at this point would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
{{< /hilight >}}

The remainder of the loop lines 37 and 38 now execute. Line 37 asks the
user to try another guess. Line 38 is identical to line 29 and stores the pupil's
(new) guess in the answer variable.

If the user now has a guess of 89 the output would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
{{< /hilight >}}

At this point, execution has reached line 39 which forces execution back to line
31 to repeat the loop.

The condition on line 31 is evaluated again and again is true (89 != 66). The
loop is therefore executed for a second time.

This time the condition in the `if else` statement on line 32 is true (89 > 66)

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer > a*b
{{< /hilight >}}

so the next line to be executed is line 33

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Sorry, your guess was to big.")
{{< /hilight >}}

The output at this point would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
Sorry, your guess was to big.
{{< /hilight >}}

The `if else` statement is now completed so the remainder of the loop lines 37
and 38 now execute. Line 37 asks the user to try another guess. Line 38 is
identical to line 29 and stores the pupils (new) guess in the answer variable.

If the pupil now enters 66 as their next (3rd guess) the output would
look like this:

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
Sorry, your guess was to big.
Try again
66
{{< /hilight >}}

Again the execution hits line 39 the last brace in the `for` loop which forces
the execution back to line 31.

Now the answer is correct, the value of answer is 66 which is 6 * 11.
So the loops condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer != a*b
{{< /hilight >}}

is now false. This breaks the loop. The entire loop body is skipped, lines 32
to 39, and the next line to be executed is line 40

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Congratulations! You are correct.")
{{< /hilight >}}

Which results in the complete output of

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
Sorry, your guess was to big.
Try again
66
Congratulations! You are correct.
{{< /hilight >}}

Having printed the congratulations messaged the program terminates.


### Plenary
#### Notes for Slide 14
This can be carried out with the class as a whole or the pupils can do it
themselves.

The objective is to change the `timesquz` program so.
Now if the user guesses incorrectly the program should ask them another new
multiplication with two new random numbers.

If the user guesses correctly the program should work as before.

The output of the revised program would be similar to

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 12 * 9?
34
Sorry your guess was to small.
Try again
What is 10 * 11?
100
Sorry your guess was to small.
Try again
What is 9 * 5?
95
Sorry, your guess was to big.
Try again
What is 12 * 7?
84
Congratulations! You are correct.
{{< /hilight >}}

The challenge is not a hard as it seems. There are two keys to solving the
challenge.

First, the pupils need to read the challenge __carefully__. It states that the
behaviour should only be different if the pupils guesses incorrectly.
This implies that program behaviour needs to change only when the condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer != a*b
{{< /hilight >}}

is true. This implies that the changes need to be made to the statements that
the loop will execute.

The challenge also tells them that the program should still tell then if their
guess was to large or small __before__ the new question is presented.

This implies that the changes have to happen after the `if else` statement inside
the loop.

Secondly, the pupils need to realise that they already have the code to create
two new random numbers and to ask the multiplication question earlier in the
program. The code they are looking for is in lines 20-27 of the `timesquiz`
program.

So the solution is simply to copy lines 20-27 and to paste them in
between lines 37 and 38.

This gives the complete solution


{{% codeFigure caption="Fig-3. The revised `timesquiz` code" %}}
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

	fmt.Println("The revised timesquiz shows you how to use loops.")
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

	for answer != a*b {
		if answer > a*b {
			fmt.Println("Sorry, your guess was to big.")
		} else {
			fmt.Println("Sorry your guess was to small.")
		}
		fmt.Println("Try again ")

        a = random.GetRandomNumberInRange(1, 12)
        b = random.GetRandomNumberInRange(1, 12)

        fmt.Print("What is ")
        fmt.Print(a)
        fmt.Print(" * ")
        fmt.Print(b)
        fmt.Println("?")

		answer = simpleio.ReadNumberFromKeyboard()
	}
	fmt.Println("Congratulations! You are correct.")
}
{{< /hilight >}}
{{% /codeFigure %}}

Lines 39-47 are the new lines.

Lines 39 and 40 generate to new random numbers and store them in the variables `a` and `b`.

Lines 42-46 print the question and line 48 reads the pupils answer into the
variable `answer` as before.

Now that the value of the variables in `a` and `b` have changed then loop test
on line 31 will test the pupils answer against the new values of
`a` and `b` and __not__ the previous values.

The loop test itself is now dynamic. It changes each time the loop executes.
