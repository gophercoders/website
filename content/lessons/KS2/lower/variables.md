+++
Categories = ["Fundamentals"]
Description = "What is this post about??"
Tags = []
author = "Owen"
concepts = ["variables", "types"]
date = "2015-03-25T18:55:25Z"
keystage = ["KS2"]
keystagelevel = ["lower"]
subtitle = "and Types"
title = "Variables"
lessonnumber = "5"
notesfor = "variables"
lessonplan = "variables"
slides = "variables"
+++
### What You are Going to Learn
In this lesson we are going to introduce _variables_. Computer programs use
variables to remember things. Think of a word processor. The computer has to
remember the words that you type. The word processor program uses variables for
this.

We are going to show you the rules for variables and the patterns you need to
use them in your programs.
<!--more-->

### How to Remember Things
So far you have learned how program in Go to do [simple sums]({{< relref "lessons/KS2/lower/numbers.md" >}}) and print [strings]({{< relref "lessons/KS2/lower/words.md" >}}). But
both of these programs have been fixed. Each program executed its instructions in
sequence from the beginning to the end. You did not need to tell the program to
remember anything from one line to the next.

To tell a program to remember something you need a _variable_ - simply something that can vary. The variables are stored in the computers _memory_.

A variable in a program does not last forever. It only exists while your program
is running. Once your program ends the variable does not exist in the computers
memory anymore. So if you turn your computer off and on again the variable
will not exist in the computer's memory any more.

This is different from the programs, photos and music on your computer. They do
exist if you turn your computer off and on again. These are all called _files_
and they are stored on your computer's _hard disk_ or _memory card_ or _memory
stick_.

The difference is that the computer uses a different type of memory for variables
and files. The type of memory used for variables is called _random access
memory_ or _RAM_ for short.

Variables store the _data_ in your program.

{{% panelInfoTitle title="Different Memory Types" %}}
RAM is sometimes referred to as volatile memory. It is volatile, because when power
is removed from this type of memory, the data is lost. This type of memory is very
fast but is expensive to buy.

Non-volatile memory is slower, but remembers after the power is removed from it.
This type of memory is used in devices like flash memory cards for digital cameras
and USB memory sticks. These devices use non-volatile memory to store data, and
have to be formatted or prepared by the computer before they can be used.
A programmer would consider this memory as persistent storage, just like a hard
disk.
{{% /panelInfoTitle %}}

Variables are an essential part of programming. It is almost impossible to write
a program that does not use variables. Once you master variables you will be able
to write more powerful programs.

Let's see where the idea of a variable comes from.

### Variables in Mathematics
Variables are also used in mathematics, especially in algebra. Lets take a simple
example. If we look at the simple sum
````
3 + ? = 10
````
What number do you need to put where the `?` is to make the sum correct.
If you work this out, you find that `?` should be the number 7 to give you
````
3 + 7 = 10
````
Which is correct.

Now we need to take this one step further. Let us look at this simple sum
````
x = 20 - 9
````
What value should `x` be replaced by? If you do the sum `20 - 9` you get the
answer of `11`. So `x` should have the value `11`.

Remember that `x` has the value of `11`, what if we tried this sum
````
y = x + 1
````
Now what is the value of `y`? We work this out you have to remember that `x` is really the number `11`. So we can replace `x` in the
sum with the value of `11`. Like this
````
y = 11 + 1
````
Now can work out the value of `y`?

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#answers" aria-expanded="false" aria-controls="answers">
  Answer
</button>
<div class="collapse" id="answers">
  <div class="well">
  The answer is `12`
  </div>
</div>

Both `x` and `y` are variables. We are using a letter to represent a number.
We can use one of the letters, `x` or `y` where we need the values `11` or
`12` in the sums.

Variables in computer programs are very similar.

### Variables in Programming
A variable allows you the programmer to use a letter, or name, to refer to a value
that is stored in the computers memory.
So we can say something like this

{{< highlight go "linenos=false" >}}
a = 8
name = "Bob"
{{< /highlight >}}

We can now use `a` when we want to use the number 8. We can also use the word
`name` to mean "Bob". We could use them like this

{{% codeFigure caption="Fig-1. Part of the `hellobob` program." %}}
{{< highlight go "linenos=false" >}}
fmt.Print("Hello. My name is ")
fmt.Println(name)
fmt.Print("I am ")
fmt.Print(a)
fmt.Println(" years old.")
{{< /highlight >}}
{{% /codeFigure %}}

If we could run this (you cannot yet) what do you think would happen?

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#varoutput" aria-expanded="false" aria-controls="answers">
  Answer
</button>
<div class="collapse" id="varoutput">
    <p>If you could run the code you would see this:</p>
  <div class="well">
  {{< highlight text "linenos=false" >}}
  Hello. My name is Bob
I am 8 years old.
  {{< /highlight >}}
  </div>
  <p></p>
</div>

What do we have to do to make the `hellobob` program run? To that we need to show
you how to create a variable.

### Creating a Variable
To create a variable in Go you need three things

* A keyword
* A name for your variable
* A type for your variable

Let's look at the keyword first.

#### The Variable Keyword

You have to tell Go each time you want to create a variable. You do this by
using a __keyword__. The keyword is

{{< highlight go "linenos=false" >}}
var
{{< /highlight >}}

which is short for _variable_. A keyword is a word that has a special meaning
in a Go program. You __cannot__ use a keyword for anything else, so you __cannot__
give a variable the same name as a keyword.

You have already used a couple of keywords before in Go. We did not explain
their significance at the time. The keywords you have seen before are `package`,
`import` and `func`. We will explain what all three of these keywords mean
in later lessons.

Just so you know, the complete list of Go's keywords is
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td>break</td><td>default</td><td>func</td><td>interface</td><td>select</td>
    </tr>
    <tr>
    <td>case</td><td>defer</td><td>go</td><td>map</td><td>struct</td>
    </tr>
    <tr>
    <td>chan</td><td>else</td><td>goto</td><td>package</td><td>switch</td>
    </tr>
    <tr>
    <td>const</td><td>fallthrough</td><td>if</td><td>range</td><td>type</td>
    </tr>
    <tr>
    <td>continue</td><td>for</td><td>import</td><td>return</td><td>var</td>
    </tr>
</table>
</div>
Once you type `var` the next thing that Go expects, after a space, is the
name you want to use for your variable.

#### The Name of the Variable
Once you have told Go that you want to create a variable the next thing you need
to do is give your variable a name. You give your variable a name like this.

{{< highlight go "linenos=false" >}}
var age
{{< /highlight >}}

Now we have a variable called `age`. This leads to an obvious question. How did
we know that we wanted to call this variable `age`? We knew because we want
the variable to store your age. We made sure we picked a variable name that
had an obvious meaning when we read the program.

So what should you name your variables? You should name your variables after
the use they have in your program. It is __very important__ that this
name is meaningful. _Programs are read by programmers many times before they
are run by a computer._ The variable names you choose have to make sense
to you and to someone who has never seen your program run.

But, you cannot call your variables anything. You are only allowed to use
_legal_ variable names. A variable name is only legal if it follows the _rules_
for variable names. These rules are part of Go's syntax rules.

The rules for variable names are

* You cannot use a keyword as a variable name. You already know this rule.
* You cannot use spaces in your variables names, or any other symbols like `()`.
* You cannot use a package name for a variable name.
* You cannot start a variable name with a number.
* You cannot use the same name as another variable. Each variable name has
to be unique.
* You can only use the letters `a` to `z` or `A` to `Z` or the numbers `0` to
`9` or the __underscore__ character `_`.

If we show some examples this will be clear.
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td>Variable Name</td><td>Legal</td><td>Reason</td>
    </tr>
    <tr>
    <td>age</td><td>Yes</td><td>The name contains only lower case letters</td>
    </tr>
    <tr>
    <td>AGE</td><td>Yes</td><td>The name contains only upper case letters</td>
    </tr>
    <tr>
    <td>Age</td><td>Yes</td><td>The name contains only upper and lower case letters</td>
    </tr>
    <tr>
    <td>myAge</td><td>Yes</td><td>The name contains only upper and lower case letters</td>
    </tr>
    <tr>
    <td>my_age</td><td>Yes</td><td>The name contains only lower case letters and an underscore <code>_</code></td>
    </tr>
    <tr>
    <td>age1</td><td>Yes</td><td>The name contains only lower case letters and numbers</td>
    </tr>
    <tr>
    <td>2age</td><td>No</td><td>The name starts with a number</td>
    </tr>
    <tr>
    <td>my age</td><td>No</td><td>The name contains a space</td>
    </tr>
    <tr>
    <td>my-age</td><td>No</td><td>The name contains a minus sign, <code>-</code></td>
    </tr>
    <tr>
    <td>my+age</td><td>No</td><td>The name contains a plus sign, <code>+</code></td>
    </tr>
    <td>fmt</td><td>No</td><td>The <code>fmt</code> is a package name</td>
    </tr>
    </tr>
    <td>map</td><td>No</td><td><code>map</code> is a keyword</td>
    </tr>
</table>
</div>

Now we come to the last thing that you need for a variable its type.

#### Variable Type
The last thing you need to use a variable is the _type_ of the variable you want
to create.

But what is a type? To explain this think about the food you can buy in the
supermarket. You can buy meat like chicken, pork, beef or fish. You can buy vegetables like carrots or potatoes. You can buy fruit like oranges, bananas or apples. These are all different types of food.

Go has types too. You have already seen two of them, integer numbers and strings.

So what does that have to do with programming? Well just like you cannot make
carrot cake with bananas, you cannot do sums on a string. The type of a variable
limits where and how you can use the variable.

This is a good! It means that Go can help you find mistakes. If you tried to
subtract two strings for each other, Go will tell you that that does not make
sense before your program runs.

The type to use for a number is `int` and the type for a string is `string`.

#### Putting it all Together

If we put all three parts together, the `var` keyword, the variable name and the
variable type we can use variables in Go. Let's try it.

{{< highlight go "linenos=table" >}}
var age int
var your_name string
{{< /highlight >}}

You always read these lines from left to right. If we do that line 1 says "
This is a variable called age which is a number". Line 2 says "This is a
variable called your_name which is a string."

This is called _declaring a variable_ or just a _variable declaration.

#### Variable Type (again)

Now you know how to declare a variable, we can tell you what the computer does
with the variable declaration.

When you declare a variable the program tells the computer to reserve, or
_allocate_ some memory for the variable. The amount of memory that the computer
will allocate depends on the _type_ of the variable. This is why the type
is important. You are telling the computer how much memory you might need.

As the programmer you do not need to know exactly how the memory is allocated, or
even how much memory was allocated. Go is a _high level_ programming language.
This means that (most) of the details of the computer's memory and how it works
are handled by Go.

This is an example of _abstraction_. You as a programmer can
use variables and Go will take care of putting them in memory for you.

### Setting the Value of a Variable
Now you have seen how to create a variable the last thing to show you is how
to give a value to the variable. To do that you use the equals, `=` sign.

So if we want to set the value of age to `8` we would type

{{< highlight go "linenos=false" >}}
age = 8
{{< /highlight >}}

If we want to set `my_name` to Bob you would type

{{< highlight go "linenos=false" >}}
my_name = "Bob"
{{< /highlight >}}

There is a pattern you can use to remember how to set the value of a variable.
The pattern is
````
name-of-variable = new-value
````
First you use the name of the variable that you want to set, then an equals, `=`
sign and then the new value for the variable.

You can only set a variable to a value that makes sense according to the type of
the variable. If you tried to set the variable `age` to the string `"eight"` like
this

{{< highlight go "linenos=false" >}}
age = "eight"
{{< /highlight >}}

Your program will not run. Go will tell you that you are trying to set a variable
which is a number to a value that is a string.

Setting the value of a variable is called _assignment_. And used in this context, the equals
sign is in fact called the assignment operator.

### The Variable Program

You can now put this altogether in the `hellobob` program.

Open your terminal or command prompt.
We are going to put each Go program in its own directory. This is the recommended
practice for Go programs.
In your terminal you need to change to the location of your Go Workspace.
To do this type

{{% panelPrimaryTitle title="On Linux, Raspberry Pi and Mac OS X" %}}
{{< highlight sh "linenos=false" >}}
cd $GOPATH/src/
{{< /highlight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Windows" %}}
{{< highlight sh "linenos=false" >}}
cd %GOPATH%\src\
{{< /highlight >}}
{{% /panelSuccessTitle %}}

Now you need to make a new directory. We need to call this `hellobob` after the
program we will write. Then we need to change directory into the new new `hellobob`
directory.

{{< highlight sh "linenos=false" >}}
mkdir hellobob
cd hellobob
{{< /highlight >}}

Now you need to start your editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< highlight sh "linenos=false" >}}
atom hellobob.go
{{< /highlight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< highlight sh "linenos=false" >}}
liteide hellobob.go
{{< /highlight >}}
{{% /panelSuccessTitle %}}

The `hellobob.go` tells Atom or liteIDE start with the file `hellobob.go` open in
the editor. If the file does not exist the editor will create it for you.

{{% panelWarningTitle title="From now on" %}}
From now on when we want you to write a program we will just tell you to open
your text editor and type in the program. You have to remember to
open a terminal, create the directory and start the editor with the new file, ready for you to type.
{{% /panelWarningTitle %}}

Once your editor starts type in the `hellobob.go` program exactly as you see it.

{{% codeFigure caption="Fig-1. The `hellobob.go` code" %}}
{{< highlight go "linenos=table" >}}
package main

import (
	"fmt"
)

func main() {
	var name string
	var age int

	name = "Bob"
	age = 8

	fmt.Println("The hellobob program shows you how to use variables.")
	fmt.Println("")

	fmt.Print("Hello, my name is ")
	fmt.Print(name)
	fmt.Println(".")
	fmt.Print("I am ")
	fmt.Print(age)
	fmt.Println(" years old.")
}
{{< /highlight >}}
{{% /codeFigure %}}

Once you have typed the program in, you need to save it. Once you have saved it
you need go to your Terminal or Command Prompt window and type run it with:

{{< highlight sh "linenos=false" >}}
go run hellobob.go
{{< /highlight >}}

{{% panelWarningTitle title="From now on" %}}
From now on when we want you to run your program we will just tell you to run it.
You have to remember to use your terminal or command line window and
type
{{< highlight sh "linenos=false" >}}
go run
{{< /highlight >}}
followed by the name of the `.go` file you want to run. Just like the you have
done with `hellobob.go`
{{% /panelWarningTitle %}}

If you typed the program correctly you should see

{{< highlight text "linenos=false" >}}
The hellobob program shows you how to use variables.

Hello, my name is Bob.
I am 8 years old.
{{< /highlight >}}

The important parts of the `hellobob`progrm are lines 8 and 9, 11 and 12 and lines 18 and 21. The other lines are mostly `Println` lines that print out
the strings to the terminal. These are the same as the `Println` and `Print`
lines that you used in both the `stringfun` and `numbers` programs.

#### The Variable Declarations

Lines 8 and 9 and where you declare the variables that you used in the program.
Here they are again.

{{< highlight go "linenos=false" >}}
var name string
var age int
{{< /highlight >}}

In both lines you can see the three things you need to declare a variable.
There is a `var` keyword, a name for your variable, and then a type
for the variable.

The first variable that you declared is called `name`. The `name` variable is a
type of `string`. You can only remember words in this variable.

The second variable that you declared is called `age`. The `age` variable is of
type `int`, short for integer, which is a number. You can only store numbers
in `age`.

At this point in the program, lines 8 and 9, you have not assigned any values to
the variables.

#### The Variable Assignments

Lines 11 and 12 are where you assigned values to the variables. Here they are
again.

{{< highlight go "linenos=false" >}}
name = "Bob"
age = 8
{{< /highlight >}}

Both lines follow the same pattern. To the left of the equals, `=`, sign you
have typed the name of the variable you want to change. To the right of the
equals sign you have typed the new value for the variable.

The first line assigns, or sets, the new value of the `name` variable to the
string `Bob`. You have declared that the `name` variable is a string so you
can only change its value to another string.

The second line sets the value of `age` to the number `8`. Remember that you had
declared `age` to be an `int` (a number) type, so you can only change its value
to another number.

#### Using the Variable

Lines 18 and 21 are where you used the variables. Here they are again.

{{< highlight go "linenos=false" >}}
fmt.Print(name)
...
fmt.Print(age)
{{< /highlight >}}

{{% defaultNote %}}
The `...` means that we have removed one or more lines.
{{% /defaultNote %}}

These lines show you how to use your variables. As you can see it is really
easy to use a variable. You just type the name of the variable when you
want to use it. When the program reaches an instruction with the variable, its current
value will be used in place of the variable name.

In this case the values are used by the
`Print` function in the `fmt` package to print the values to the terminal.

You can see this in the output of the program

{{< highlight text "linenos=false" >}}
The hellobob program shows you how to use variables.

Hello, my name is Bob.
I am 8 years old.
{{< /highlight >}}

Where you have used the variable name `name` the program has printed `Bob`.
Where you used the variable name `age` the program has printed `8`.
