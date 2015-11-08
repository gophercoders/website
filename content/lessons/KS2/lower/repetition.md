+++
Categories = ["Fundamentals"]
Description = "An introduction to loop statements"
Tags = []
author = "Owen"
concepts = ["repetition"]
date = "2015-04-03T22:37:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "and loops"
title = "Repetition"
lessonplan = "repetition"
notesfor = "repetition"
slides = "repetition"
lessonnumber = "10"
+++
### What You are Going to Learn
In the last two lessons we have looked at how computers programs make decisions.

Now we want to investigate how and why we want computers to repeat small parts
of a computer program.

We will introduce the pattern for repetition or `loops` as they are more commonly
known.
<!--more-->
### How to do Something Again and Again...
In the last lesson we showed you how to use an `if else` statement to make
decisions. You used these to create the `timesquestion` program. But the
`timesquestion` program had a problem. You could only make one guess each
time you ran the program.

But what if you wanted to make more than one guess? What if you wanted to make
as may guesses as you liked? Well for that you need to use repetition or as
most programmers call them loops. That's what this lesson is all about.

Once you understand both selection and loops you will be able to write some
really useful programs.

{{% panelWarningTitle title="Important" %}}
Make sure you have completed the lesson about
[selections]({{< ref "lessons/KS2/lower/selection.md" >}}) before you try this lesson.
You will need to understand selection and `if` statements before you can
understand repetition.
{{% /panelWarningTitle%}}

### Repeating Things

Let's think about repeating patterns. Lets start with squares.
Think about the steps needed to draw a square. You could draw a square like this.

1. Draw one side
2. Turn 90 degrees clockwise
3. Draw another side
4. Turn 90 degrees clockwise
5. Draw another side
6. Turn 90 degrees clockwise
7. Draw another side
8. Turn 90 degrees clockwise

Think about multiplication too. A multiplication like this
````
2 * 4 = ?
````

{{% panelInfoTitle title="Now it is your turn" %}}
Can you see the pattern to draw a square? How many times do you have to repeat
this pattern to draw a square?

Think about the multiplication. How can you rewrite the multiplication to get
the same answer but only use addition?

{{% expandingButton id="repetition-answers" name="Answer" %}}

The pattern in the square drawing is:

1. Draw one side
2. Turn 90 degrees clockwise

This pattern draws one side and then turns so that the next side will go in the
correct direction. A square has four sides so we need to repeat this pattern
four times to draw a square.

The multiplication can be rewritten as
````
2 + 2 + 2 + 2
````
Now the pattern is `add 2` to the number. Starting with the number 2 you need to
do this three times.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### Repetition
These are both examples of repetition. If you can spot a pattern and know
how to make the pattern repeat, you can change how you write your programs. This is an
important idiom (part) of computer programming.

Repetition means that a small part of the program runs over and over again.
You are asking the computer to repeat a sequence of instructions.

Most programs are made up of repetition and selection statements.

### But Why?
So if that's what repetition is, why is it useful? Well repetition makes the program
both shorter - so less typing - and easier to understand. If you use repetition
it will make your program logic much clearer.  Both for you and
for anyone else who reads your program. Repetition also means
that the program more closely resembles the algorithms that it might use.
Some algorithms are described in terms of doing things over and over again.
For example algorithms that sort lists of numbers are all described by repeating
a small sequence of instructions.

Look at the square drawing algorithm. It is clearer to say repeat this four times
"Draw a line and then turn 90 degrees clockwise" instead of listing the
the pair of steps 4 times - which would be 8 lines in total.

The hard part is spotting a pattern that can be repeated! As you write more and
more programs you will get much better as spotting these patterns.

### Loops
Programmers normally talk about __loops__ instead of repetition.
We call repetition a loop because a sequence of instructions is looped over
and over again.

Programmers also talk about different types of loops. So there are loops that
repeat while a condition is true - called a __while__ loop. There are loops
that repeat for a fixed number of times - called a __for__ loop. There are loops that
run __forever__ - called an infinite loop.

The difference between the loops is the presence or absence of a condition
that controls how many times the loop goes around.
__For__ loops also have the additional property of specifying the step-size of
the loop.

We are going to look at __while__ loops first. __For__ loops are just a
simple extension to a __while__ loop. We will show you these after we have shown
you __while__ loops.

### The Loop Pattern
The loop pattern looks very similar to the `if` pattern. This is the pattern for
a loop that repeats while a condition is true is
````
for condition {
    statements-to-repeat
} // last brace
````
Go uses the keyword `for` to indicate a loop, regardless of which type of
loop it is.

So how does this work? Well it is actually pretty easy if you already understand
`if` statements.

The first thing to happen is that the `condition` is tested before the loop starts.
If the condition is false then
the `statements-to-repeat` are skipped over and execution continues after the
last brace. So a loop behaves in the same way as an `if` statement when the
condition is false. In fact there is an implicit `if` test in any while or for loop.

If the `condition` is true the `statements-to-repeat` are executed. This
is also the same as an `if` statement. The difference comes once all of the
`statements-to-repeat` have been executed. Once these
have been executed the condition is tested __again__. Think of the last brace causing
jump back to the `for` line.

If the `condition` is still true the `statements-to-repeat` are executed again,
for a second time. Once the `statements-to-repeat` have been executed the
`condition` is tested yet again.

When the condition becomes false the `statements-to-repeat` are skipped over.
Execution then continues at the last brace. This is similar to an `if` statement when its condition is false.

The condition is tested before each time though the loop. Each time though the
loop is called a __loop iteration__ so the condition is tested before each loop
iteration including the first one.

The loop example shows how to use a `for` loop to create a loop that repeats until
the condition is true.

Lets look at an example. Take a look at this bit of code.


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

{{% panelWarningTitle title="Important" %}}
This is not a complete program, so you won't be able to run it.
We wanted you to focus on how the loop works rather than look at the
rest of the program.

When you are trying to work out what this program does, just look at one line
at a time and work out what that line does. It might help you write down the
value of the `word` variable at each stage.

You don't need a computer to solve this, you just need to think and act like
the computer would.
{{% /panelWarningTitle %}}

{{% panelInfoTitle title="Now it is your turn" %}}
Look at the example loop and see if you can work out what happens

* If your first guess was Goldfish?
* If your first guess was Banana?
* If you had three guesses, first Octopus, then Shark, then Banana

Remember whatever you type in as your answer is read by the line

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
word = simpleio.ReadStringFromKeyboard()
{{< /hilight >}}

and is stored in the variable called `word`.

{{% expandingButton id="loop-example-answers" name="Answer" %}}

The trick to working out what happens is to look at the condition
at the top of the loop. If you don't guess the secret word then the loop
is executed. Inside the loop you are asked to guess again. If you guess correctly
then the whole loop is skipped.

So if you guess wrong the program asks you to guess again over and over again until
you guess the secret word.

Lets look at how this works.

If your first guess is "Goldfish" it reads it into the variable called `word`
on line 6. The condition on line 8

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
word != secretWord {
{{< /hilight >}}

Is true - "Goldfish" is not the same as the secret word "Banana" so the loop
statements between the `{` and `}` are executed. So the program executes lines
9 and 10 and prints out

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry that is not the secret word!
Try and guess again!
{{< /hilight >}}

and then waits for you to enter the next guess on line 11.

If you entered "Banana" as your first next guess, then `word` would contain
the value "Banana" and the condition would be false. Now that the condition is
false the loop is skipped over and the program prints out.

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Congratulations!
{{< /hilight >}}

If your first guess was "Octopus" it will be read into the variable called `word`
on line 6. The condition on line 8

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
word != secretWord {
{{< /hilight >}}

Is true - "Octopus" is not the same as the secret word "Banana" so the loop
statements between the `{` and `}` are executed. So he program executes lines
9 and 10 and prints out

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry that is not the secret word!
Try and guess again!
{{< /hilight >}}

and then waits for you to enter the next guess on line 11.

Now if your second guess was "Shark". The value in variable `word` is now `Shark`.
Now that program hits the closing brace, the `}` on line 12. The last brace forces
the program to jump back to line 8. Now the loop has gone around once.

Now that the program is back at line 8, the condition

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
word != secretWord {
{{< /hilight >}}

is tested again. This time the value in `word` is Shark but this is not the
same as the secret word. So the condition is false. So the next line to be
executed are lines 9 and 10 so the program prints out

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Sorry that is not the secret word!
Try and guess again!
{{< /hilight >}}

again.

Now if your last guess is Banana, the process is similar. Now the value in
`word` is `Banana`. The last brace forces the loop back to the top on line 8.

But now when loops condition is tested it is true. You have guessed the secret word.
Now the program skips over the whole loop and prints out the

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Congratulations!
{{< /hilight >}}

congratulations message.

{{% /expandingButton %}}
{{% /panelInfoTitle %}}

### The `timesquiz` Program

The `timesquiz` is an extension of the previous `timesquestion` program from the
`if else` [selection lesson]({{< ref "lessons/KS2/lower/further-selection.md" >}}).

Like the `timesquestion` program the `timesquiz` program asks you to
solve a multiplication question from the 1-12 times tables. Also like the
`timesquestion` program the `timesquiz` program tells you if your
guess is too large or too small. But unlike the `timesqestion` program the
`timesquiz` program will not exit until you guess the answer correctly. If your
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

If you type the program in and run it then you should see something like this.

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

{{% panelWarningTitle title="Important" %}}
Remember that the numbers for the multiplication are chosen randomly. When
you run the programs you will see different numbers.
{{% /panelWarningTitle %}}

The program is very similar to the previous `timesquestion` program.

Lets look at how it works.

Your guess is read on line 29 using the `ReadNumberFromKeybaord` from the
`simpleio` package. Their guess is stored in the variable `answer`.

The loop extends from lines 31 to 39. The loops condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer != a*b
{{< /hilight >}}

is on line 31. If you guess correctly on your first guess then this
condition is false. The loop is then skipped over and the next line to execute is
line 40

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Congratulations! You are correct.")
{{< /hilight >}}

so the complete output from the program wold be.

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
66
Congratulations! You are correct.
{{< /hilight >}}

So that's what happens if you are lucky enough to guess the correct answer on
your first attempt.

If you guess incorrectly, for example 45, then the condition on line 31
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
you to try another guess. Line 38 is identical to line 29 and stores your new
(new) guess in the answer variable.

If you had a guessed 89 the output would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The timesquiz shows you how to use loops.
Can you remember your times tables?

What is 11 * 6?
45
Sorry your guess was to small.
Try again
89
{{< /hilight >}}

At this point execution has reached line 39 which forces execution back to line
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

The `if else` statement is now completed so the remainder of the loop, lines 37
and 38 now execute. Line 37 asks you to try another guess. Line 38 is
identical to line 29 and stores your (new) guess in the answer variable.

If you now enter 66 as your next (3rd guess) the output would
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

This results in the complete output of

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






{{% panelInfoTitle title="Now it is your turn" %}}
The objective is to change the `timesquz` program so that
now if you guess incorrectly the program should ask you another new
multiplication with two new random numbers.

If you guess correctly the program should work as before.

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

Now you can try and solve it!

{{% expandingButton id="challenge-hint" name="Hint" %}}
The challenge is not a hard as it seems. There are two keys to solving the
challenge.

First you need to read the challenge __carefully__. It states that the
behaviour should only be different if the pupils guesses incorrectly.
This implies that program behaviour only needs to change when the condition

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
answer != a*b
{{< /hilight >}}

is true. This implies that the changes need to be made to the statements that
the loop will execute.

The challenge also tells them that the program should still tell them if their
guess was too large or small __before__ the new question is presented. This implies that the changes have to happen after the `if else` statement inside
the loop.

Secondly you already have the code to create
two new random numbers and to ask a multiplication question earlier in the
program. The code you are looking for is in lines 20-27 of the `timesquiz`
program.

Now you should be able to change the `timesquiz` program so that it solves
the challenge.
{{% /expandingButton %}}
{{% expandingButton id="challenge-answers" name="Answer" %}}
The solution is simply to copy lines 20-27 and to paste them in
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

Lines 39 and 40 generate two new random numbers and store them in the variables `a` and `b`.

Lines 42-46 print the question and line 48 reads your answer into the
variable `answer` as before.

Now that the value of the variables in `a` and `b` have changed then loop test
on line 31 will test the new answer against the new values of
`a` and `b` and __not__ the previous values.

The loop test itself is now dynamic. It changes each time the loop executes.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}
