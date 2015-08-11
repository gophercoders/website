+++
Categories = ["Fundamentals"]
Description = "Using variables to store keyboard input."
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-03-31T22:37:24+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "how to make decisions"
title = "Selection"
lessonplan = "selection"
notesfor = "selection"
slides = "selection"
lessonnumber = "8"
+++
### What You are Going to Learn
In the last lesson we introduced the concept of keyboard input and showed you
how the input can be stored in a variable.

But what if you wanted the computer to make a decision, based on what you had
typed? How do you do this?

In this lesson we are going to show you how you can tell a computer program to
make a decision. We will introduce the pattern for `if` statements as selection
is more commonly known.
<!--more-->
### Decisions, Decisions
So far all of the programs you have seen have not required the computer
to make a decision. We are going to show you how a computer program
can make a decision.

Once you understand how a program makes a decision you can use it to
write more interesting programs. You will then be able to test what a
user types so that your program can take different actions depending on
the user input.

{{% panelWarningTitle title="Important" %}}
Make sure you have completed the two lessons about variables before you try this lesson. You will need to understand variables first.

You will also need to have completed the [keyboard input]({{< ref "lessons/KS2/lower/keyboardinput.md" >}}) lesson.
{{% /panelWarningTitle%}}

### Decisions and Tests
Computers have to make choices. Think about this web page for a minute.
How does the computer know when to make this text <span
class="h3">bigger</span>? The answer is the web browser performs a test
and makes a decision. If the test is true then the we browser makes the
text bigger.

Think about a laptop or a mobile phone or a tablet computer. What
happens when the battery runs low? When the battery is low the
computer displays a low power warning message. But how does the
computer know when to do this? The answer is it __tests__ the battery level.
When the battery level falls below a certain, critical, level the
computer displays the low power warning message.

Computer programs make decision all of the time.

### Selection and Variables
When a computer makes a decision it has to answer a question and then
make a selection or a choice based on the result of the test.

The question has to be written by the programmer. The question is part
of the computer program. The computer will answer the question when the
program runs.

When the program runs the computer can __only__ answer true or false to
the question.

This means that you have to write a very precise question!

OK but what questions can you ask? The question is always a test and the
test involves variables. You can compare the value of two variables, or
you can compare a variable to a number. This is another use for
variables.

As we will show you, this is not a limiting as it seems. You can write
almost any question.

### Comparisons
If you wanted to compare two numbers in maths you would use the
less than, <,  or greater than, >, symbols. Remember the crocodile rule,
the larger number is the open end of the arrow.
The less than symbol is
typed <kbd>Shift</kbd>+<kbd>,</kbd>. The greater than symbol is typed
<kbd>Shift</kbd>+<kbd>.</kbd>.

So if you had

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 > 5
{{< /hilight >}}

you know that is true: 12 is greater than 5.

Or if you had

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
34 < 48
{{< /hilight >}}

you also know that that is true: thirty four is less than forth eight.

Go is exactly the same. You use the same less than or greater than
symbols to compare numbers and they mean the same as maths.
The only difference is that you can compare the value of variables
by using the variable name, like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var areaOfSquare int
var areaOfTriangle int

areaOfSquare = 16
areaOfSquare = 8

areaOfTriangle < areaOfSquare
{{< /hilight >}}

That's less than and greater than covered, what about equals?

Equals is slightly different. It means the same as maths but we use
a different symbol. The symbol Go uses is `==`, typed as two equals
signs. You can not use one equals sign, because we have already used
that for variable assignment.

Go has two more symbols that combine equals with less than or equals
with greater than.

The first one is less than or equal too, typed `<=`. This is true if
the number on the left if less than the number on the right. Just like
less than. But it is also true if the number on the left is equal to the
number on the right. Just like equals. It is false if the number on
the left is greater than the number on the right.

The second one is the greater than or equal to, typed `>=`. This is
true if the number on the left is greater than the number on the right.
Just like greater than. This is also true if the number on the left
is equal to the number on the right. Just like equals. It is false if
the number on the left is less than the number on the right.

Here's a summary of the comparison operators.

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

The result of each of these operators is either true or false.

### Selection in Go
Go calls selection an `if` statement. The selection statement starts
with the keyword `if`. The pattern for an `if` statement is
````
if condition {
	statement-block
}
````

The `condition` can be any expression that results in a true or false answer.
This can be an expression involving any of the comparison operators.
The condition can compare the value or two variables or the value of a variable
to a fixed number. Brackets are not required around the expression but may be used within as
required.

The `statement-block` is any sequence of Go statements. For example
`Println` statements, statements to read user input, or variable assignments
or further `if` statements. The `statement-block` must be surrounded by a pair
of braces, `{` and `}`. The opening brace, `{` must be on the same line as the
`if` keyword. The closing brace, `}` should be on a line on its own.

If the `condition` evaluates to true then the `statement-block`, between the
`{` and `}` is executed. Execution then continues with the next statement after
the closing `}`.

If the condition evaluates to false then the `statement-block`, between the
`{` and `}` is skipped and execution continues with the next statement after
the closing `}`.

The result of the condition determines which instructions will be executed next.
This is how selection varies the sequence within a program.

Lets look at an example of an `if` statement in Go.

{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
if temperature > 20 {
	fmt.Println("Today is hot!")
}
fmt.Print("Today the temperature was ")
fmt.Println(temperature)
{{< /hilight >}}

Where `temperature` is a variable that has previously been declared in the
program and is of type `int`.

The condition is an example of comparing the value of a variable to a fixed
number in this case 20.

If the value of temperature is less than 20 then the condition is false so
line 2 is skipped and only lines 4 and 5 are executed. For example if the
value of temperature was 15 the output would be:

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Today the temperature was 15
{{< /hilight >}}

If the value if temperature was greater than 20 then the condition is true
so line 2 is executed along with lines 4 and 5. If the value of temperature was
25 then the output would be

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Today is hot!
Today the temperature was 25
{{< /hilight >}}

If the value of temperature was exactly 20 then the condition is false, so
line 2 would be skipped and only lines 4 and 5 executed.

### The `worldtemperature` Program

Lets look at the `worldtemperature` program.

The `worldtemperature` program asks the user to input the current temperature
and then compares this to the temperature in various capital cities printing
out if the temperature is hotter or colder than the other city.

{{% defaultNote %}}
The temperatures in the capital cities was correct when the program was
written. These temperates will not update. The values are hard coded into the
program.

The intent of the program is to show the pattern of an `if` statement and what
happens when the condition is true or false.
{{% /defaultNote %}}

{{% codeFigure caption="Fig-1. The `worldtemperature` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"

	"github.com/gophercoders/simpleio"
)

func main() {
	var temperature int

	var temperatureInReykjavik int
	var temperatureInAthens int
	var temperatureInBeijing int
	var temperatureInCaracas int
	var temperatureInHelsinki int
	var temperatureInLondon int
	var temperatureInMadrid int
	var temperatureInWashingtonDC int
	var temperatureInPretoria int
	var temperatureInSantiago int
	var temperatureInMoscow int
	var temperatureInTokyo int

	temperatureInReykjavik = 1
	temperatureInAthens = 17
	temperatureInBeijing = 17
	temperatureInCaracas = 32
	temperatureInHelsinki = 7
	temperatureInLondon = 11
	temperatureInMadrid = 13
	temperatureInWashingtonDC = 16
	temperatureInPretoria = 15
	temperatureInSantiago = 25
	temperatureInMoscow = 12
	temperatureInTokyo = 16

	fmt.Println("The worldtemperature program tells you which cities are ")
	fmt.Println("hotter or colder than where you live.")

	fmt.Println("Enter the temperature in degrees Celsius today: ")
	temperature = simpleio.ReadNumberFromKeyboard()

	fmt.Println("European Cities")
	if temperature > temperatureInReykjavik {
		fmt.Println("Hotter than Reykjavik in Iceland which is ")
		fmt.Print(temperatureInReykjavik)
		fmt.Println(" degrees Celsius")
	}
	if temperature > temperatureInHelsinki {
		fmt.Println("Hotter than Helsinki in Finland which is ")
		fmt.Print(temperatureInHelsinki)
		fmt.Println(" degrees Celsius")
	}
	if temperature <= temperatureInAthens {
		fmt.Println("Colder than Athens in Greece which is ")
		fmt.Print(temperatureInAthens)
		fmt.Println(" degrees Celsius")
	}
	if temperature == temperatureInLondon {
		fmt.Println("Exactly the same as London in the UK which is also ")
		fmt.Print(temperatureInLondon)
		fmt.Println(" degrees Celsius")
	}
	if temperature < temperatureInMadrid {
		fmt.Println("Colder than Madrid in Spain which is ")
		fmt.Print(temperatureInMadrid)
		fmt.Println(" degrees Celsius")
	}
	if temperature > temperatureInMoscow {
		fmt.Println("Hotter than Moscow in Russia which is ")
		fmt.Print(temperatureInMoscow)
		fmt.Println(" degrees Celsius")
	}
	fmt.Println("Asian Cities")
	if temperature > temperatureInBeijing {
		fmt.Println("Hotter than Beijing in China which is ")
		fmt.Print(temperatureInBeijing)
		fmt.Println(" degrees Celsius")
	}
	if temperature <= temperatureInTokyo {
		fmt.Println("Colder or the same as Tokyo in Japan which is ")
		fmt.Print(temperatureInTokyo)
		fmt.Println(" degrees Celsius")
	}
	fmt.Println("North American Cities")
	if temperature >= temperatureInWashingtonDC {
		fmt.Println("Warmer or the same as Washington DC in the USA which is ")
		fmt.Print(temperatureInWashingtonDC)
		fmt.Println(" degrees Celsius")
	}
	fmt.Println("Cities in Africa")
	if temperature > temperatureInPretoria {
		fmt.Println("Hotter than Pretoria in South Africa which is ")
		fmt.Print(temperatureInPretoria)
		fmt.Println(" degrees Celsius")
	}
	fmt.Println("Cities in South America")
	if temperature < temperatureInCaracas {
		fmt.Println("Colder than Caracas in Venezuela which is ")
		fmt.Print(temperatureInCaracas)
		fmt.Println(" degrees Celsius")
	}
	if temperature > temperatureInSantiago {
		fmt.Println("Hotter than Santiago in Chile which is ")
		fmt.Print(temperatureInSantiago)
		fmt.Println(" degrees Celsius")
	}
}
{{< /hilight >}}
{{% /codeFigure %}}

The output from the program, if run with a temperature of 15, is

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
The worldtemperature program tells you which cities are
hotter or colder than where you live.
Enter the temperature in degrees Celsius today:
15
European Cities
Hotter than Reykjavik in Iceland which is
1 degrees Celsius
Hotter than Helsinki in Finland which is
7 degrees Celsius
Colder than Athens in Greece which is
17 degrees Celsius
Hotter than Moscow in Russia which is
12 degrees Celsius
Asian Cities
Colder or the same as Tokyo in Japan which is
16 degrees Celsius
North American Cities
Cities in Africa
Cities in South America
Colder than Caracas in Venezuela which is
32 degrees Celsius
{{< /hilight >}}

Lets look at the key points of the program.

Lines 10-23 are the variable declarations. The `temperature` variable is the
variable that the user will set when the program runs.

Lines 25-36 are the variable assignments that set the temperatures for each
city. Both sets of lines should now be recognisable as following the patterns for
variable declaration and variable assignment.

Line 42 is the user input line. The user is asked to enter the temperate via
the `Println` statement on line 41. Line 42 reads a number from the keyboard
and assigns the number to the temperature variable. The `simpleio` package
is used to read the number that the user types in. The `simpleio` package is
imported into the program on line 6. These lines follow the two part
pattern to read input from the user.

The first `if` statement spans lines 45-49, reproduced below.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if temperature > temperatureInReykjavik {
	fmt.Println("Hotter than Reykjavik in Iceland which is ")
	fmt.Print(temperatureInReykjavik)
	fmt.Println(" degrees Celsius")
}
{{< /hilight >}}

The `if` statement follows the  pattern for `if` statements.
Breaking the lines down the `condition` is

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
temperature > temperatureInReykjavik
{{< /hilight >}}

This condition is an example of comparing the value of two variables.
Both variables are of the same type, in this case they are both `int` types.

The `statement-block` is

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Hotter than Reykjavik in Iceland which is ")
fmt.Print(temperatureInReykjavik)
fmt.Println(" degrees Celsius")
{{< /hilight >}}

If the condition is true then these lines will be executed. If the
user inputs 15, as in the example, then the condition becomes

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
15 > temperatureInReykjavik
{{< /hilight >}}

which becomes

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
15 > 1
{{< /hilight >}}

because the value of the variable `temperatureInReykjavik` is 1. So the condition
is true and the `statement-block` is executed. As can be seen in the output

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Hotter than Reykjavik in Iceland which is
1 degrees Celsius
{{< /hilight >}}

Execution then continues at line 50 which is another `if` statement.

The remainder of the program is a similar series of `if` statements with
the condition varying each time.

Line 55 and 81 use a less than or equal to test, `<=`. Line 87 uses a
greater then or equal to test, `>=`. Line 60 uses an equals to test, `==`.

You need to enter a value of 11 for the temperature if you want to see
the equals test on line 60 working.
