+++
Categories = ["Fundamentals"]
Description = "Using Integer Numbers"
Tags = []
author = "Owen"
concepts = ["Numbers"]
date = "2015-03-16T16:13:34Z"
keystage = ["KS2"]
subtitle = "and simple sums"
title = "Numbers"
featured = ["featured"]
+++
### What we are going to learn
Computers are used to process data. All data is made up of numbers. Yes, really!
Everything is just a bunch of numbers to a computer. These are the only things
they understand.

We are going to explain how a numbers are used in Go programs. Then we are
going to show you how to do type sums in Go. Finally you are going to write
a Go program to do your own sums.

### Before you begin
Before we begin we are going to assume that you have Go installed and it is working on our computer. If you have not installed Go yet then you need to read our [Go install guide](/installing-go/). We are also assuming that you have installed either Atom or LiteIDE of your computer. Again if you have not done this yet you need to go and read our [editor install guide](/installing-go/#editor-install).

Once you have Go installed it is time to start.

### Starting small
Go programs are programmed by typing. You type Go commands into your text editor and save the file as a Go __source code__ file. That's a file with a `.go` file extension, like the `helloworld.go` that we saw when you tested your Go
installation.

This is a different process compared to programming in [Scratch](https://scratch.mit.edu/). You program in Scratch by joining coloured
blocks together instead of typing commands. But this is not what professional
programmers do, we type instructions.

We are going to use Go to teach you what is inside the coloured blocks that
Scratch uses.

Starting with numbers.

### Numbers
We are going to start with whole numbers. These are numbers you use when you
count like 1, 2, 3, 10, 50 or 100 and 0. Go calls these numbers __integer__ numbers, or `int` for short. You can use numbers in Go the same way you use
them at school. You can add them, subtract them, multiply them and divide them.

Let's write a Go program to show you this.

Open your terminal or command prompt.
We are going to put each Go program in its own directory. This is the recommended
practice for Go programs.
In your terminal you need to change to the location of your Go Workspace.
To do this type

{{% panelPrimaryTitle title="On Linux, Raspberry Pi and Mac OS X" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd $GOPATH/src/
{{< /hilight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Windows" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd %GOPATH%\src\
{{< /hilight >}}
{{% /panelSuccessTitle %}}

Now you need to make a new directory. We need to call this `numbers` after the
program we will write. Then we need to change directory into the new new `numbers`
directory.

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
mkdir numbers
cd numbers
{{< /hilight >}}

Now you need to start you editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
atom numbers.go
{{< /hilight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
liteide numbers.go
{{< /hilight >}}
{{% /panelSuccessTitle %}}

The `numbers.go` tells Atom or liteIDE start with the file `number.go` open in
the editor. If the file does not exist the editor will create it for you.

Once you editor starts you can type in the `numbers.go` program.

{{% panelWarningTitle title="Type carefully" %}}
Remember to type in `numbers.go` exactly as we have it here.
{{% /panelWarningTitle %}}

{{% codeFigure caption="Fig-1. The `numbers.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import "fmt"

func main() {
	fmt.Println("The numbers program shows you how to add, subtract")
	fmt.Println("multiple and divide integer numbers.")
	fmt.Println("One plus one is typed: 1+1")
	fmt.Print("1+1=")
	fmt.Println(1 + 1)

	fmt.Println("Ten subtract three is typed: 10-3")
	fmt.Print("10-3=")
	fmt.Println(10 - 3)

	fmt.Println("Three multiplied by four is typed: 3*4")
	fmt.Print("3*4=")
	fmt.Println(3 * 4)

	fmt.Println("Six divided by two is typed: 6/2")
	fmt.Print("6/2=")
	fmt.Println(6 / 2)
}
{{< /hilight >}}
{{% /codeFigure %}}

Once you have typed the program in, you need to save it. Once you have saved it
you need to run it with:

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run numbers.go
{{< /hilight >}}

If you typed the program correctly you should see

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
The numbers program shows you how to add, subtract
multiple and divide integer numbers.
One plus one is typed: 1+1
1+1=2
Ten subtract three is typed: 10-3
10-3=7
Three multiplied by four is typed: 3*4
3*4=12
Six divided by two is typed: 6/2
6/2=3
{{< /hilight >}}

The important parts of the program are lines 9 and 10, and the similar lines 13 and 14, 17 and 18, and 21 and 22.

Lines 6, 7 and 8 use the `Println` function from the `fmt` (short for format) package to print what is between the "'s. You have used this function before
when you wrote Hello World to test your Go install.

Line 9 is very similar to the `Println` function used in line 8. The `Print` function from the `fmt` also prints what is between the "'s but does not take a new line at the end.

Line 10 is the key line. Let us look at it more closely.

{{% codeFigure caption="Fig-2. Line 10 from `numbers.go`" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
	fmt.Println(1 + 1)
{{< /hilight >}}
{{% /codeFigure %}}

The first part of line 10 used the `Println` function from the `fmt` package.
The question you now need to ask is what will this print? The answer is as simple
as `2`.

The next question to ask is why is it `2`? OK, well it is `2` because that
is the answer you would expect if you added one and one together.

But why does it not print `1+1`? Well, in simple terms it is because the `1+1` is
not inside "'s. We will see why this is important when we talk about words.

So what happens then? When you run the program the computer sees the `fmt.Println` and knows that you want to print something to the terminal window.
But at this point it does not what you want to print. To work that out it looks at what is inside the brackets, the `(...)`.

Inside the brackets it sees `1+1`. The computer has not seen any "'s so it knows
that it cannot print this. But because there are no "'s computer knows that
it has to work out the answer to `1+1` and then print the answer.

Which is why you see a `2`

If we look at the output

{{% codeFigure caption="Fig-3. The output of lines 9 and 10 from `numbers.go`" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
1          +            1     =            2
|<---- line 9 prints this ---->|<---- line 10 prints this ---->|
{{< /hilight >}}
{{% /codeFigure %}}

line 9 prints the first part, which is everything to up to and including the equals sign. Then line 10 prints the answer, which is 2, on the end and then takes a new line.

{{% panelInfoTitle title="Now it is your turn" %}}
Now it is you turn to program the computer to do some sums.

You need to change, we call it edit, the `number.go` program so that the computer
does the following sums. The easiest way to do this is to change the program
so that it does only the first new sum. Once you have changed the program, you will need to run it again to make sure that it worked.

{{% panelWarningTitle title="Important" %}}
Before you run your program you must save your file again. If you do not you will
run the same version of the program as before, so it will not do any of your
new sums.

If you want to save your new program under a new name you can. But you can't have any spaces in the new name and it still has to have a `.go` file extension. If you this you will need to remember the new name because you will need that to
run your program. For example. If you called your new program `extra-sums.go`
then you would run it like this

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run numbers.go
{{< /hilight >}}
{{% /panelWarningTitle %}}

You might have to do this a few times before the program works. When you have a working program again you can try and change the program to do the second sum.
````
32 + 96 = ???
65536 - 16384 = ???
4 * 256 = ???
16384 / 1024 = ???
65536 - 32768 = ???
16 * 16 = ???
````
Don't worry about the big numbers! The computer can do this even if you can't! Try it and see.

You can also do more than one thing at a time. So, try these sums out as well
````
4 + 4 = ???
2 * 2 * 2 * 2 = ????
1 * 8 * 2 = ???
8 + 0 = ???
8 + 0 - 4 = ???
8 * 0 = ???
8 * 8 = ???
256 / 2 = ???
256 / 8 / 2 = ???
````

You can check that your program gives you the right answers by clicking
on the button.

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#answers" aria-expanded="false" aria-controls="answers">
  Answers
</button>
<div class="collapse" id="answers">
  <div class="well">
    <pre>
	32 + 96 = 128
	65536 - 16384 = 49152
	4 * 256 = 1024
	16384 / 1024 = 16
	65536 - 32768 = 32768
	16 * 16 = 256
	4 + 4 = 8
	2 * 2 * 2 * 2 = 16
	1 * 8 * 2 = 16
	8 + 0 = 8
	8 + 0 - 4 = 4
	8 * 0 = 0
	8 * 8 = 64
	256 / 2 = 128
	256 / 8 / 2 = 26
	</pre>
  </div>
	<p> These numbers might look random but they are not. Can you work out what
they might have in common? Have you seen some of them before when you talked
about computers?
	</p>
</div>
{{% /panelInfoTitle %}}

That's enough numbers for now. There is still a lot to learn about about them but
this will get you started. Next we need want to talk about the world of words.

Next it is the world of words.
