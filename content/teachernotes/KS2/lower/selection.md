+++
Categories = ["Fundmentals"]
Description = "These are the teacher notes for the variables lesson."
Tags = []
author = "Owen"
concepts = ["selection"]
date = "2015-03-31T13:09:09+01:00"
keystage = ["KS2"]
keystagelevel = ["lower"]
notesfor = "selection"
slides = "selection"
lessonplan = "selection"
subtitle = "Teach and Try teacher notes"
title = "Selection"
lessonnumber= "8"
+++
### Objective
To learn what selection statements are and how to use them.

The class will learn that selection statements are how computer programs
make decisions.

The class will learn the pattern for an `if` statement in Go.

The class will practice using an `if` statement and see the effect with the
`worldtemperature` program.

Creating these program will require the class to use the text editor (either Atom or LiteIDE) to create and save the source code file and the terminal/command line to run their program.

### Learning outcome
The class should be able to:

* Start their text editor
* Create a source code file
* Save a source code file
* Build and run their program

* Understand why selection is required and what it is used for
* Understand that selection requires a condition
* Understand that the answer to the condition can only be true or false
* Understand that the condition uses the comparison operators
* Understand that Go calls section an `if` statement
* Understand the pattern for an `if` statement
* Understand how to use the `if` pattern in a Go program
* Understand that the program represents a sequence
* Understand that the selection can change the sequence order by causing
parts of the program to be skipped over

### Teaching prerequisites

The pupils must have encountered the comparison operators, <, > and = in
mathematics. Comparison is fundamental to selection, so the pupils must be
already familiar with the idea from mathematics.

In addition to this the pupils need to have covered Lessons 1-7 in this series.

### Computing Links

Selection. The program demonstrates how to use selection and the effect of
using selection statements. The selection statements change the sequence order
by causing some parts to be skipped over. The program will no longer
execute every line in the program.

Variables. Variables and selection are used together. The conditional part of the
selection will compare the value of a variable to the value of another variable
or to a fixed value.

Input and Output. The program asks the user to input the current temperature and
displays if the temperate is hotter or colder than other cities around the world.

Sequences. The program demonstrates a sequence of instructions that are
executed in order to print the results to the terminal window.

### Cross-Curricular links

Geography. The example program compares the current temperature to that of other
capital cities. The pupils may wish to find these cities on the globe.

Science. The capital cities are in both the norther and southern hemispheres. The
pupils may wish to question why the seasons are reversed in each hemisphere.

### Bigger or Smaller
#### Notes for Slide 2

Comparisons are fundamental to selection. Each selection is a comparison
between two or more values. The result of the comparison must be true or
false. The pupils therefore need to very familiar with the idea.

The symbols >, < and = have their usual meaning. Except in Go `=` is used
for assignment. Equals is written differently.

The answers to the questions

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 ? 20
34 ? 18
19 ? 19
{{< /hilight >}}

are

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 < 20
34 > 18
19 = 19
{{< /hilight >}}

and to

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
6 + 4 < 5 * 8
10 * 7 > 9 * 4
{{< /hilight >}}

are

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
6 + 4 < 5 * 8 is 10 < 40 which is true
10 * 7 > 9 * 4 is 70 > 36 which is true
{{< /hilight >}}

Notice that the comparison operators are performed last. They have a lower
precedence than multiplication, division, addition and subtraction.

### What is Selection?
#### Notes for Slide 3
Selection is the method used by a computer program to make a decision.
So the example when a laptop runs low on battery the computer will display
a message to saying that the battery is low and the user should plug the laptop
into the mains. One of the first steps in this process is a decision - is the
level of the battery low? If it is then the warning needs to be displayed. If not then
no addition action is required. This is selection.

The answer to the challenge is ambiguous. What does blue mean? What shade of
blue does the question imply? How much cloud cover is allowed before the sky
is no longer blue? Even, where are we? The sky on Mars is actually pink due to the
dust and the different atmospheric composition.

The pupils will be able to adjust their answer to cope with the ambiguity
of the question. So they may say, yes the sky is blue apart from the clouds. Or
the sky is mostly cloudy and not blue etc.

But a computer cannot do this. The computers answer is precise. It can only be
yes or no, true or false. This precision requires that the question is formed
in a way so that the answer is either yes or no.

### Tests and More Tests
#### Notes for Slide 4
A computer makes a decision by answering a question. The program has to write
the question as part of the program. The computer can only answer yes or no when
the program runs. The question must be unambiguous.

The test will compare the value of two variables, or compare a variable
to a fixed value. In the later case the fixed value is dependent on the context
of the question. E.g. to compare if the value of a variable is less than
10 then the fixed value would also be 10.

The test is known as the condition of the selection statement.

The condition is another use for variables in addition to storing user input.

### True or False
#### Notes for Slide 5
The challenge shows some questions that are unambiguous. The answers are obvious,
but the questions are precise.

Challenge the pupils to come up with their own questions. Questions that are
precise. We want to encourage the pupils to think in a precise way. They
will need to use this skill in programming in general and with selection in
particular. This precision is one part of computational thinking.

### What Can You Test?
#### Notes for Slide 6
Although we introduce the idea of a condition by testing the value of numbers,
the idea is more general. If you remember that everything in a computer must be
represented by a number then __anything__ can be tested provided it is
represented by a number. Clever pupils may realise this independently.

The value of two variables can be compared with less than, <, and greater
than, >, in exactly the same ways as in mathematics. The crocodile rule still
applies, the larger number is at the open end of the arrow.

Equals is slightly different. The meaning of equals is the same, but the symbol
used is `==` i.e. a double equals sign and __not__ a single equals sign.
A single equals is already used in variable assignment so cannot be used
again to mean an equals comparison.

The challenge answers are

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
12 < 5 is false
67 > 23 is true
45 == 54 is false
51 == 51 is true
{{< /hilight >}}


### Two Tests in One
#### Notes for Slide 7 & 8
Go, and most other programming languages, combine two common tests.

The first new test is the less than or equal to test, typed `<=`. This test
is true if the number on the left is less than __or__ equal to the number on the
right. The test is false is the number on the left if greater than than
the number on the right.

The second new test is the greater than or equal to test, typed, `>=`. This test
is true if the number on the left is greater then __or__ equal to the number on the
right. The test is false if the number on the left is less than the number on the
right.

The full list of comparison operators is therefore

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


### Selection in Go
#### Notes for Slide 9
Go calls selection an `if` statement. The keyword `if` is used to introduce
the selection statement.

The `if` pattern is

````
if condition {
	statement-block
}
````

The `condition` can be any expression that results in a true or false answer.
This can be an expression involving any of the comparison operators but is not
limited to these. The expression can also be the result of a logical expression,
or the result of a function if the function returns a true or false answer.
The condition can compare the value or two variables or the value of a variable
to a fixed number.

Brackets are not required around the expression but may be used within as
required.

The `statement-block` is _any_ sequence of Go statements. For example
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
This is how selection varies the __sequence__ within a program.

### Example `if` Statement
#### Notes for Slide 10
An example of an `if` statement would be

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
#### Notes for Slide 11

Lets look at the `worldtemperature` program.
The `worldtemperature` program asks the user to input the current temperature
and then compares this to the temperature in various capital cities printing
out if the temperature is hotter or colder then the other city.

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

The output from the program if run with a temperature of 15 is

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
user input 15 as in the example then the condition becomes

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

The pupils need to enter a value of 11 for the temperature if they want to see
the equals test on line 60 working.

### Plenary
#### Notes for Slide 12
The operators mean

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

The operators also works for strings. This is not a major leap forward.
Remember that strings are a sequence of runes, and every rune is a number in
the Unicode table. String comparison therefore compares the rune i.e. the number
at each position in the string starting with the first rune.

However it is easier to explain `if` statements using numbers because
the operators, <, > and = will already have a familiar meaning.

The comparison is lexicographic or as it would be in a dictionary with upper case
letters appearing before lower case letters. This is also the ordering of the
Unicode table.

So given the examples

{{< hilight lang="txt" style="edit-gedit" lineNumbers="n" >}}
Aardvark < Boat is true, because A comes before B in the dictionary
zoo > zebra is false because "zo" comes after "ze" in the dictionary.
{{< /hilight >}}

The pupils stand a fair chance of just guessing this if you remind them what
a string is. Or ask them to think about the dictionary order.
