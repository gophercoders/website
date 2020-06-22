+++
Categories = ["Fundamentals"]
Description = "Looping a fixed number of times"
Tags = []
author = "Owen"
concepts = ["repetition"]
date = "2015-11-06T22:37:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "for loops"
title = "Further Repetition"
lessonplan = "further-repetition"
notesfor = "further-repetition"
slides = "further-repetition"
lessonnumber = "11"
+++
### What You are Going to Learn
In the [last lesson]({{< ref "lessons/KS2/lower/repetition.md" >}}) we looked at how computers repeat a sequence of instructions.
Something that programmers more commonly call a __loop__.

Now we want to look at a extension of the loop pattern to show you a quick way
to loop a fixed number of times.

<!--more-->
### The Story So Far...
In the last lesson we looked at the how loops work and the pattern Go uses for
loops.

This is the pattern for a __while__ loop, a loop that repeats *while*
the condition at the top of the loop is *true*.

````
for condition {
    statements-to-repeat
} // last brace
````
Go uses the keyword `for` to indicate a loop, regardless of which type of
loop it is. Let's look at how this works again.

First the `condition` is tested before the loop starts. If the condition is false
then the `statements-to-repeat` are skipped over and execution continues after the
last brace.

Remember that loop statements contain an embedded `if` statement.

But, if the `condition` is true the `statements-to-repeat` are executed.
Once all of the `statements-to-repeat` have been executed we jump
back to the `for` line and test the condition again.

If the `condition` is still true the `statements-to-repeat` are executed again,
for a second time. Once the `statements-to-repeat` have been executed the
`condition` is tested yet again.

The process is repeated until the condition becomes false.

We call this a _while_ loop because the loop goes around while the condition is
true. The condition is tested before each time though the loop, including the
very first time.

### Looping a Fixed Number of Times

Now let's look at a very simple extension of this idea. A loop that loops a
fixed number of times.

Imagine we wanted to write a simple program that would print out the numbers
from 1 to 10. If you think about this you will realise that we can do this by
calling a `fmt.Println` function in a loop. Our program might look like this:

{{% codeFigure caption="Fig-1. Printing the numbers 1 to 10 using a _while_ loop pattern" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	var number int
	number = 1

	for number < 11 {
		fmt.Println(number)
		number = number + 1
	}
}
{{< /highlight >}}
{{% /codeFigure %}}

If you run it you'll see something like this:

{{< highlight text "linenos=false" >}}
1
2
3
4
5
6
7
8
9
10
{{< /highlight >}}

Line 11
{{< highlight go "linenos=false" >}}
number = number + 1
{{< /highlight >}}

just ensures that the value of the variable `number` increases by one each time
around the loop.

So far so good. But we can write the loop in a different a slightly shorter form.

### Type Less, Do the Same Thing

Go has a second, very closely related loop pattern. It still uses the `for` keyword
but we can provide some extra information on the `for` line.

Before we look at the pattern, lets show you an example. This is the same
program as the above, but this time written in the new form.

{{% codeFigure caption="Fig-2. Printing the numbers 1 to 10 using a _for_ loop pattern" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	var number int
	for number = 1; number < 11; number = number + 1 {
		fmt.Println(number)
	}
}
{{< /highlight >}}
{{% /codeFigure %}}

If you run this program you'll see the same output as before:

{{< highlight text "linenos=false" >}}
1
2
3
4
5
6
7
8
9
10
{{< /highlight >}}

It is important to say that both the output and the _logic_ of these two programs
is identical. But we've now manged to write the same program in 10 lines
compared to the original 13 lines.

### What's Going On
So what's going on? Saving three lines doesn't see like very much. The answer
is actually quite a bit!

The magic all happens in one line, the revised `for` line. So let's look at it
again. Here's the revised loop.

{{< highlight go "linenos=false" >}}
for number = 1; number < 11; number = number + 1 {
	fmt.Println(number)
}
{{< /highlight >}}

So lets start with the part you already know. The middle part. The `number < 11`
between the two semicolons, the `;` (typed <kbd>;</kbd>) is the condition part of
the for loop. This behaves as the exactly as before. So, the condition is tested
each time around the loop, including the first time. If the condition is true,
the loop executes. In this case we execute the `fmt.Println(number)` line
to print the value of the variable `number`. If the condition is false then the
loop stops and we don't print anything.

Now lets look at the bit on the end of the `for` line, the bit after the
last `;`. It's just `number = number + 1`. If you look back at the original
program, you can see we have just moved line 11 in the original program
up. This is called the __post statment__ in Go. The post statement is
executed each time though the loop, *after* the loop body, but *before* the
condition is tested again. So when the loop condition is true we we execute the
`fmt.Println(number)` line to print the value of the variable `number`. Then we
jump up to the __post statement__ and execute that to increase the value of number
by one. Only after the post statement has executed do we retest the condition.

This is exactly the same logic as the original program. The program behaves as if
the `number = number + 1` bit was within the loop body, as we had in the original
program.

This leaves us with the first part of the new `for` line, the `number = 1` bit.
Go calls this the __initialisation statement__. The initialisation statement
is executed just once, *before* the condition is first tested.

### The for loop Pattern

The pattern for a __for__ loop is:

````
for initialise-statement; condition; post-statement {
    statements-to-repeat
} // last brace
````

{{% panelWarningTitle title="Important" %}}
The semicolons, the `;` are *always required*, so you can't leave them out.
Also the entire for statement needs to be on one line.
{{% /panelWarningTitle%}}


The pattern works like this. First the `initialise-statment` is executed. Next
before the loop starts the `condition` is tested. If the condition is false
then the `statements-to-repeat` are skipped over and the `post-statement` is
never executed. Execution continues after the last brace.

If the `condition` is true the `statements-to-repeat` are executed.
Once all of the `statements-to-repeat` have been executed we jump
back to the `for` line.

We next execute the `post-statement` and then test the condition again.

If the `condition` is still true the `statements-to-repeat` are executed again,
for a second time. Once the `statements-to-repeat` have been executed the
`post-statement` is executed again before the `condition` is retested.

The process is repeated until the condition becomes false.

{{% panelInfoTitle title="Now it is your turn" %}}
Lets see if you can work out what this program does:

{{% codeFigure caption="Fig-3. What does this program do?" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	var counter int
	for counter = 0; counter < 21; counter = counter + 2 {
		fmt.Print(counter)
		fmt.Print(", ")
	}
	fmt.Println()
	fmt.Println("=======================================")
	for counter = 99; counter > 79; counter = counter - 2 {
		fmt.Print(counter)
		fmt.Print(", ")
	}
	fmt.Println()
}
{{< /highlight >}}
{{% /codeFigure %}}

See if you can also rewrite line 12, the
{{< highlight go "linenos=false" >}}
	fmt.Println("=======================================")
{{< /highlight >}}

line using a loop.

{{% expandingButton id="for-loop-example-answers" name="Answer" %}}
It's easy. The first loop, that starts at line 7 prints out all of the even
numbers from zero to 20. Notice how the value of `counter` increases by 2
each time around the loop. Computers consider zero as an even number.

Line 12 prints a row of `=`'s signs using a single `fmt.Println()` line.

The second loop, that starts at line 13 prints out all of the odd numbers for
99 down to 81, going backwards. Notice how this time `counter` gets smaller by
2 each time around the loop.
{{% /expandingButton %}}
{{% expandingButton id="for-loop-challenge-hint" name="Hint" %}}
Look at line 12 closely. How many `=` can you count in the `fmt.Println()`
statement? Now use this number to create a new loop to print out exactly
the number of `=`'s that you require. You need to copy the pattern of the `for`
loop in the program shown in Fig-2.
{{% /expandingButton %}}
{{% /panelInfoTitle %}}


### To Infinity and Beyond

Before we move on, lets take a quick look an __infinite__ loops.
An infinite loop is just that, a loop that goes on forever and ever. Once the
program enters the loop, it will never stop.

The pattern is simply:

````
for {
    statements-to-repeat
} // last brace
````

It is just a `for` statement without any `condition`, or `initialisation
statement`, or `post-statement`. It works like this.

As soon as the `for` statement is reached, the program executes the
`statements-to-repeat` block. Once it reaches the last brace, it jumps back up
to the `for` line and starts executing the `statements-to-repeat` for a second time

This process continues forever.

Just for fun let's write an infinite loop program.

{{% codeFigure caption="Fig-4. An infinite loop" %}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
	var lineNumber int
	lineNumber = 1
	for {
		fmt.Print("Line number: ")
		fmt.Println(lineNumber)
		lineNumber = lineNumber + 1
	}
}
{{< /highlight >}}
{{% /codeFigure %}}

When you run this program you will see something like this:

{{< highlight text "linenos=false" >}}
Line number: 1
Line number: 2
Line number: 3
Line number: 4
Line number: 5
Line number: 6
Line number: 7
Line number: 8
Line number: 9
Line number: 10
...
{{< /highlight >}}

The list will rapidly scroll of the top of the screen!

{{% panelDangerTitle title="Stopping the infinite loop program" %}}
The only way to stop the infinite loop program is to "break" it.
You can do this by typing <kbd>CRTL</kbd>+<kbd>c</kbd> in the
console window where the program is running.

The output will be something like this:

{{< highlight text "linenos=false" >}}
...
Line number: 196258
^CLine number: 196259
Line number: 196260
Line number: 196261
Line number: 196262
Line number: 196263
exit status 2
{{< /highlight >}}

The `^C` is where the <kbd>CRTL</kbd>+<kbd>c</kbd> was typed. It's not unusual
for the output to continue for a little bit after this point.
{{% /panelDangerTitle%}}

{{% panelWarningTitle title="Important" %}}
Programmers very rarely write infinite loops deliberately.
They are *almost always* a mistake in your program. This mistake is always in
the `condition` of the loop. The mistake is that for some reason the result of
the `condition` is always true so the loop never stops.
{{% /panelWarningTitle%}}

### Putting it Altogether - the `sieve` program
Time to put all of your new loops knowledge to good use. We are going to write
a program to find all of the [prime numbers](https://en.wikipedia.org/wiki/Prime_number) up to a maximum limit
in this case 10,000.

Remember that a prime number is a number greater than one that can only be
divided only be one or itself.

Why are we looking at prime numbers? Three reasons. Firstly, prime numbers are
important in computer science, especially in
[cryptography](https://en.wikipedia.org/wiki/Cryptography) to keep messages and
data private. People use this all of time, for example, when someone buys you
something on the internet.

Secondly, the approach we are going to use makes in interesting example of a for
loop.

Lastly, just because it's one of the Go example problems. See the information box
for more details.

{{% panelInfoTitle title="Information" %}}
A prime number generator is one of the famous Go examples. You can find the
original one on the [Go Playground](http://play.golang.org/p/9U22NfrXeq). You can
even run it on the website.

This program has a lot of interesting, and complex Go things happening in it.
We are going to write a much simpler version.
{{% /panelInfoTitle%}}

How are we going to do this? Well its not as hard as you think. First we need a
list of numbers starting at 2. Lets try between 2 and to 20

```
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
```

None of the even numbers can be primes, as they all divide by 2, apart from 2
itself. So we need to take those out of the list. This leaves

```
3 5 7 9 11 13 15 17 19
```

Now we need to take the next smallest number still in the list. That's 3 and
remove any multiples of 3 form the list. This leaves

```
3 5 7 11 13 17 19
```

Now we repeat the process. The next smallest number is 5, so we wnat to remove
any multiples of 5 form the list. But there are none to remove. The 10 and 15
have already been removed for by previous steps. This makes sense if you remember
that 5 * 5 = 25. And 25 is larger than the biggest number we had in the list at
the start. So we are finished and the final list of primes up to 20 is:

```
3 5 7 11 13 17 19
```

This approach is know as the [Sieve of Eratosthenes]( https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). You can see it in action by
looking at the animation.

{{% gcFigure class="text-center" src=src="//upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif"
title="Fig-5: An animation of the Sieve of Eratosthenes. Thanks to Wikipedia" %}}

#### The Program

Now you know what the idea is, lets look at the program.

{{% codeFigure caption="Fig-6. The `sieve.go` program." %}}
{{< highlight go "linenos=table" >}}
package main

import (
	"fmt"
	"math"

	"github.com/gophercoders/simpleio"
)

func main() {
	var upperLimit int
	upperLimit = 2
	fmt.Print("Enter a number between 2 and 10,000: ")
	upperLimit = simpleio.ReadNumberFromKeyboard()

	// This is the first trick
	// The || means OR. If the upper limit is > than 10000,
	// OR the upper limit is < 2 then the number is out of range.
	// If EITHER condition is true then user typed in a number that is out
	// within the range of valid numbers that we need. In this case we need
	// to ask them again until they do enter a number that is within
	// the range we need.
	for upperLimit < 2 || upperLimit > 10000 {
		fmt.Print("Enter a number between 2 and 10,000: ")
		upperLimit = simpleio.ReadNumberFromKeyboard()
	}
	var squareRootOfUpperLimit int
	squareRootOfUpperLimit = int(math.Sqrt(float64(upperLimit)))

	// This is the second trick
	// We need to create a BIG list of true and false values.
	// We use something called a slice to do this.
	// This creates the long list for us in memory.
	// When we create it every entry in the list is set to false for us.
	var factors []bool
	factors = make([]bool, upperLimit+1)

	fmt.Print("The prime numbers up to ")
	fmt.Print(upperLimit)
	fmt.Println(" are: ")
	var candidateNumber int
	for candidateNumber = 2; candidateNumber <= squareRootOfUpperLimit; candidateNumber = candidateNumber + 1 {
		if factors[candidateNumber] == false {
			fmt.Print(candidateNumber)
			fmt.Print(" ")
			var multiple int
			for multiple = candidateNumber * candidateNumber; multiple <= upperLimit; multiple = multiple + candidateNumber {
				factors[multiple] = true
			}
		}
	}

	for candidateNumber = squareRootOfUpperLimit; candidateNumber <= upperLimit; candidateNumber = candidateNumber + 1 {
		if factors[candidateNumber] == false {
			fmt.Print(candidateNumber)
			fmt.Print(" ")
		}
	}
	fmt.Println()
}
{{< /highlight >}}
{{% /codeFigure %}}

Before we talk about how this program works you need to run it.
When you do that you should see something like this

{{< highlight text "linenos=false" >}}
Enter a number between 2 and 10,000: 120
The prime numbers up to 120 are:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113
{{< /highlight >}}

If you look carefully at this list of prime numbers you'll see that it matches
the list of prime numbers in the animation.

If you look at the program you can see that it contains three loops. One __while__
loop pattern between lines 23 and 26 and three __for__ loop patterns between
lines 42 and 51, 47 and 49, and 53 and 58.

There also two new things in the program which we will describe as we go along.

#### First Ask the User for the Upper Limit

Lets start by looking at lines 11 to 14. Our first task is to ask the user
what the maximum number should be.

{{< highlight go "linenos=false" >}}
var upperLimit int
upperLimit = 2
fmt.Print("Enter a number between 2 and 10,000: ")
upperLimit = simpleio.ReadNumberFromKeyboard()
{{< /highlight >}}

We only want to know the prime numbers up to some maximum number.
This maximum number is stored in the `upperLimit` variable. Then we use
the _output_ pattern to ask the user what the number should be. Followed
by the _input_ pattern to read the maximum number that the user typed in.

Now we come to the first loop, the _while_ loop pattern. Lets look at lines
23 to 26 more closely.

{{< highlight go "linenos=false" >}}
for upperLimit < 2 || upperLimit > 10000 {
    fmt.Print("Enter a number between 2 and 10,000: ")
    upperLimit = simpleio.ReadNumberFromKeyboard()
}
{{< /highlight >}}

This is just _while_ loop pattern, but this time the `condition` part is
more complex. To explain this let's think about what we want the program to
do when the user enters a value for `upperLimit`.

We know from maths that zero and one are not prime numbers. So if the user typed
in 1 for the `upperLimit` we know this is a mistake. If the user does this we
know we have to ask the user to type in a new number. We want the same thing to
happen if the user types in zero.

We also know from maths that a prime number must be a positive number. So we also
have to reject any negative numbers that the user types in.

If you put all of this together you end up with a condition like this:

````
upperLimit < 2
````

This checks the lower limit that we asked the user to type a number between. But
we also have an upper limit that we need to check.

The upper limit that we asked the user to type in must not exceed 10,000.
We have to check this which gives us a condition like this:

````
upperLimit > 10000
````

Now comes the new part, the first trick. If __just one__ of these conditions is
true then we know the user must have typed a number that is outside of the
range of numbers we want. In this case we have to ask the user to type the number
in again.

We can do this by combining the results of each of the condition tests. To
do this we use a __logical OR__ operation. This is typed `||`, <kbd>SHIFT</kbd>+
<kbd>\\</kbd> typed twice. The __logoical OR__ works like this.

It tries the first condition, the `upperLimit < 2` part. If this is true, then
it executes the loop, which asks the user to type in the number again.

If the first condition, `upperLimit < 2` is false, then it tries the second
condition, the `upperLimit > 10000`. If this condition is true then it
executes the loop.

If the second condition is, `upperLimit > 10000` is also false, then __both__
conditions were false and the loop is skipped completely. If the loop
is skipped completely, then `upperLimit` must be within the range we need,
2-10,000 (inclusive).

Like any loop, the condition, or more correctly in this case, both conditions,
are checked again. Only when both conditions are false is the loop skipped.

The overall effect is to keep asking the user to type in a number until they they
type one in that is within the range, but only if the number they typed initially
was outside of the range.

{{% panelInfoTitle title="Don't Panic!" %}}
Don't panic, if you don't fully understand this. Just trust that it means
that the condition in the `for` is true, so the loop will run, if either of
the two tests is true.

We are going talk about logical operators and how to use them in a later lesson.
We'll explain things fully then.
{{% /panelInfoTitle%}}

#### Then We Add an Optimisation

The next lines of interest are lines 27 and 28
{{< highlight go "linenos=false" >}}
var squareRootOfUpperLimit int
squareRootOfUpperLimit = int(math.Sqrt(float64(upperLimit)))
{{< /highlight >}}

If we know what the square root of the `upperLimit` is we can use this to make
the program run faster by performing less calculations. This is called an
_optimization_.

The square root of number
is the number which when multiplied by itself gives you the original number back.
For example the square root of 9 is 3, because 3 &#215; 3 = 9. For 16 it's 4,
for 25 it's 5.

Line 42 uses the `Sqrt` function from the `math` package to work out the square
root for the upper limit. The `Sqrt` function expects a floating point number
to be passed to it. So, we have to convert the integer number to a floating
point number using a __type conversion__. The type conversion is the

{{< highlight go "linenos=false" >}}
float64(upperLimit)
{{< /highlight >}}

part. We are converting to a floating point type, a `float64` the value of
`upperLimit` which we defined earlier as an `int`, integer number type.

The answer of the `Sqrt` function is also a floating point, `float64` type.
But we only want the integer part of the answer. We want to throw away
everything after the decimal point. This is called __truncating__ the number.
We do this with another type conversion, this time converting to an `int` type.
This type conversion is the

{{< highlight go "linenos=false" >}}
int(math.Sqrt(...))
{{< /highlight >}}

part. Putting both conversions together in one line and adding the
variable assignment gives you the final from:

{{< highlight go "linenos=false" >}}
squareRootOfUpperLimit = int(math.Sqrt(float64(upperLimit)))
{{< /highlight >}}

We'll explain how we use the square root when we talk about the first for loop
pattern starting on line 42.

#### Then We Make a Long List

This takes us to the next trick on lines 35 and 36.
{{< highlight go "linenos=false" >}}
var factors []bool
factors = make([]bool, upperLimit+1)
{{< /highlight >}}

We need to have a list numbers that we can mark as prime or not prime. This
is how we achieve this. Except, we don't have a list of numbers. We use a list
were each element in the list is either true, meaning it has factors, so its not a
prime, or false meaning, it has not factors so it is not a prime number. Go has a
special type of these true or false values called __bool__. The numbers are
represented by the position in this list.

Lets take the numbers 0, 1, 2, 3 and 4 as the examples. The list always starts
at zero. We know that zero is not a prime number. So we want the list at position
zero to be true. We also know that one is not a prime number so we want the list
at position one to also be true. But two is different. It is a prime number so
we want the list at position 2 to be false. Three is also prime, so it's position
should be false. Four is a multiple of two, so it's position should be true.

If we use __T__ for true and __F__ for false we want the list to start like this:

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td>Position</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    <tr>
    <td>Has factors?</td><td><strong>T</strong></td><td><strong>T</strong></td><td><strong>F</strong></td><td><strong>F</strong></td><td><strong>T</strong></td>
    </tr>
</table>
</div>

{{% panelWarningTitle title="Be Careful" %}}
The list contains a list of all numbers up to the `upperLimit`. If a number has
factors, then its position in the list is marked as true. The number cannot be
prime. If the number has no factors then it is prime, so it is marked as false.

At the end of the process, any numbers, which are still marked false are the
prime numbers.
{{% /panelWarningTitle%}}


So how do we do this? Line 35 is the first part

{{< highlight go "linenos=false" >}}
var factors []bool
{{< /highlight >}}

It says to create a variable called `factors` that is a list, or as Go calls it a
_slice_, that can only hold the values true or false. We don't yet tell Go how
big we want to make this slice. The `[]` just means we want a slice and not
a single variable of type `bool`

Then on line 36

{{< highlight go "linenos=false" >}}
factors = make([]bool, upperLimit+1)
{{< /highlight >}}

we tell Go how large we want the slice to be using the special _make_ function.
We tell Go to make the slice one bigger than `upperLimit`. We need to be one
bigger because we have to count zero. So if `upperLimit` was 120 we want a
slice with 121 elements in it, numbered 0,1,2,3,4.... all the way up to
...119,120.

Make also needs to know what type we want to create because it can be used to
create different types. So we have to tell it that we want a slice of `bool` types
with the `[]bool` bit.

{{% panelInfoTitle title="Don't Panic!" %}}
Don't panic, if you don't fully understand this. Just think of `factors` as a
very long list, that can only contain true, or false at each position in the
list. Just like the table above, but bigger. This is all you need to understand
how the `sieve` program works.

We'll be talking more about slices, and how to use them in a later lesson.
We'll explain things fully then.
{{% /panelInfoTitle%}}

#### Then We Sieve The Numbers

Now that we have everything we need setup, we can start to look for the
prime numbers. This uses a _for_ loop pattern and happens on lines 41 to 51.

{{< highlight go "linenos=false" >}}
var candidateNumber int
for candidateNumber = 2; candidateNumber <= squareRootOfUpperLimit; candidateNumber = candidateNumber + 1 {
    if factors[candidateNumber] == false {
        fmt.Print(candidateNumber)
        fmt.Print(" ")
        var multiple int
        for multiple = candidateNumber * candidateNumber; multiple <= upperLimit; multiple = multiple + candidateNumber {
            factors[multiple] = true
        }
    }
}
{{< /highlight >}}

This is how we remove all of the numbers that are not primes from the list.
Let's walk through the code to explain it.

`candidateNumber` is the number we want to test to see if it is a prime. It is
also the position in the slice.

Let's imagine that the `upperLimit` was 16. So the square root of 16 is 4.

So we start with `candidateNumber = 2`, and we know 2 is less than 4. The test
`candidateNumber <= squareRootOfUpperLimit` is true so we start to execute
the loop.

We know that the slice intially contains false at every position. The `if`
statement condition, `factors[candidateNumber] == false` becomes
`factors[2] == false` and is true. The number inside the square brackets, `[`
and `]` just means give me the value in the slice at this position.
So, `[2]` means give me the value in the slice at position number 2.
This is really the third element in the slice if you look at the table above.

This condition is true. So we print out the `candidateNumber` because we know
it is prime.

#### The Nested Loop

Now we need to take out any multiples of the `candidateNumber`. These numbers
cannot be prime numbers because they are factors of the `candidateNumber`.

To do this we need another loop, inside, or nested, within this loop.
This nested loop uses a _for_ pattern and looks like this:

{{< highlight go "linenos=false" >}}
var multiple int
for multiple = candidateNumber * candidateNumber; multiple <= upperLimit; multiple = multiple + candidateNumber {
    factors[multiple] = true
}
{{< /highlight >}}

This is how we remove the multiples, the non prime, numbers from the slice.

The loop starts at the first multiple of the `candidateNumber` which is
the candidate number squared, `candidateNumber * candidateNumber`. This is
the initial value of `multiple`. If `candateNumber` was 2 then `multiple` starts
with the value 4.

The loop runs until the the value of `multiple` exceeds the `upperLimit`.
This means the loop will stop when we try to go beyond the end of the slice.

`multiple` is 4 and this is less than 16, the value of `upperLimit` so the loop
executes. Inside the loop we set the slice at position `multiple`, which is 4,
to true to indicate that the the number, 4, is _not_ prime.

Not we reach the for loops post statement. This increases the value of `multiple`
by the `candiateNumber` to give you the next multiple. So when `multiple` is 4
and `candidateNumber` is 2 the new value of `multiple` is 6.

The process then repeats.

If you continue to work this out for the following loop iterations, you will
see that this marks the numbers 4, 6, 8, 10, 12, 14 and 16 to true  

We are relying on this inner loop to mark all the multiples of the
`candidateNumber` all the way to the end of the slice. The condition
in the loop

````
multiple <= upperLimit
````

ensures that this is the case.

Once the inner loop has completed, all of the multiples of the `candidateNumber`
have been removed. This also completes a loop iteration of the outer loop.

#### Now Back To the Outer Loop

The program now jumps back to the top of the outer loop, on line 42, and
executes the for loops post statement:

````
candidateNumber = candidateNumber + 1
````

This increases the candidate number. The for loops condition of

````
candidateNumber <= squareRootOfUpperLimit
````

is then retested. If this is true, then the loop body runs and attempts to remove
multiples of the next `candidateNumber` which is not already marked as false.

#### Back to `squareRootOfUpperLimit` and the Optimisation

We use `squareRootOfUpperLimit` speed things up by reducing the number of times
the outer loop runs. Lets explain this with an example. If we assume that the
value of `upperLimit` was 100, the the square root of 100 is 10.

If we pretend that the outer for loop looked like this:

{{< highlight go "linenos=false" >}}
for candidateNumber = 2; candidateNumber <= upperLimit; candidateNumber = candidateNumber + 1 {
    // everything inside the loop is unchanged
}
{{< /highlight >}}

then this loop goes around 100 - 2 + 1, or 99 times. Remember there are 101
elements in the list because we need to count the zero.

But that 99 is much larger than the 10 - 2 + 1, or 9 times that we would
need if we used the square root of the upper limit.

So the computer has more work to do.

Now if we look at the test of the inner for loop

{{< highlight go "linenos=false" >}}
for multiple = candidateNumber * candidateNumber; multiple <= upperLimit; multiple = multiple + candidateNumber {
    // everything inside the loop is unchanged
}
{{< /highlight >}}

when `candidateNumber` reaches 11, the initial value of `multiple`, as
calculated by the loops initalise statement is 11 * 11, or 121.

But 121 is larger than the value of `upperLimit` which is 100. So the condition
in the for loop is _always_ false when `candidateNumber` is larger then 10, the
square root of 100. But the computer always has to do the multiplication and
assignment to `multiple` and then the test to find this out.

This all takes tiny amounts of time. But if we have to do this 99 times, the
number of times that the outer loop goes around this all adds up.

So the less things we ask the computer to do, in other words the less instructions
the computer has to execute, the faster the program runs.

In this case the optimised version, the version we have used, that uses the
`squareRootOfUpperLimit` is about three times faster! That's why we need to
work out and use the `squareRootOfUupperLimit`.

#### Finally We Just Print the Remaining Primes

The final part of the of the program is really easy. It's just the last for loop
on lines 53 - 58. This is another _for_ loop pattern.

{{< highlight go "linenos=false" >}}
for candidateNumber = squareRootOfUpperLimit; candidateNumber <= upperLimit; candidateNumber = candidateNumber + 1 {
    if factors[candidateNumber] == false {
        fmt.Print(candidateNumber)
        fmt.Print(" ")
    }
}
{{< /highlight >}}

This loop just looks at at every element in the slice from position `squareRootOfUpperLimit` until the end. If the element is marked as false
then the program prints out the position of the element, the `candidateNumber`,
followed by a space.

The loops initialise statement sets `candidateNumber` equal to
`squareRootOfUpperLimit`. The post statement in the loop increases the value
of `candidateNumber` by one on each iteration.
