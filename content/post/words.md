+++
Categories = ["Fundamentals"]
Description = "How to use strings"
Tags = []
author = "Owen"
concepts = ["Strings"]
date = "2015-03-24T12:29:49Z"
keystage = ["KS2"]
subtitle = "and strings"
title = "Words"
+++
### What you are going to learn
In the last lesson we showed you how to use numbers in your programs. Now we want
to talk about letters and words.

### Strings not words
In computer science the term _word_ relates to the CPU. A word is the number of __bits__ that the CPU can process in a single operation.

A word like a word in English is called a __string__ in programming.

### What is a String?
By now you might be asking just what is a string? A string is a sequence of __characters__. Characters are the letters, numbers, punctuation and mathematical symbols on your keyboard that a computer can print to the screen.

Each character is represented by a __number__ in a table. Each character in the table has a unique number. The numbers are assigned by the _Unicode_ standards committee.

The [Unicode table](http://unicode-table.com/en/) website contains the complete table. Open the table in you web browser. The table has very large so it may be slow to load.

If you find the capital letter `A` and hover over it with your mouse you will see `U+0041 | Dec: 65`. The important part is `Dec: 65` which tells you that the capital letter `A` is number 65 in the table.
A capital letter `B` is 66. A number `1` is at number 49. A explanation mark, `!`, is at number 33 in the table. A space is one before at number 32.

So when you type a letter `A` the computer knows you really mean number 65. If you remember that computers can only process numbers. This is why we have to convert what you see as a letter to a number. This is called an __encoding__.
The letters are encoded or represented by numbers.

You might be wondering why this table is so large. It is because the table has to work for _all_ of the worlds languages.

The Chinese language has around 3500 characters, actually called logograms, in common use but has many as 109,000 in total. These are all in the table. To make these easy to find you need to [group the table by "block"](http://unicode-table.com/en/blocks/). Once you do that you need to find the block called ["CJK Unified Ideographs"](http://unicode-table.com/en/blocks/cjk-unified-ideographs/) to see just some of them.

The Japanese alphabet appears twice, once for each of the two native Japanese writing systems of [Hiragana](http://unicode-table.com/en/blocks/hiragana/) and [Katakana](http://unicode-table.com/en/blocks/katakana/).

There is also the [Arabic](http://unicode-table.com/en/blocks/arabic/), [Hebrew](http://unicode-table.com/en/blocks/arabic/) and [Russian](http://unicode-table.com/en/blocks/cyrillic/) alphabets along with many more as well as all of the [mathematical symbols](http://unicode-table.com/en/blocks/mathematical-operators/).

So a character might not be an English letter as you think of it. A character could also be an logogram or a mathematical symbol.

To make things clear Go uses the term __rune__ to represent any of the letters, Iogograms and symbols in the Unicode table. Rune is th eterm used in the Go
documentation. This means that in Go a strings is defined as a sequence of __runes__ not characters.

### How to use strings
If you have already tried the [Numbers]({{< relref "post/numbers.md" >}}) you have already been using stings!

There are two ways to create a string. The first way is to use double quote marks, `"`, like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
"This is a string!"
{{< /hilight >}}

This is the way you have seen before. Notice that you have to have quote marks are the start and the end of the string. Also notice that the string has to be typed on one line. Both of these rules are some of the syntax rules of Go.

Now when you see Go code that looks like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This is a string!")
fmt.Println("and so is this.")
{{< /hilight >}}

You know that between the `(...)` there there is a string. One on each line.

A string between `"` marks is called a __interpreted string literal__ in Go.

But now we have some problems. What if we wanted to print a `"` as part of
a string. You might think you can just type it between the other quote marks
like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(""")
{{< /hilight >}}

But it turns out that that will not work.

The next problem how do you print two lines and not one? Like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("First line
second line")
{{< /hilight >}}

But this also does not work.

The solution is called an __escape sequence__. These escape sequences are then
interpreted by Go.

### What if I want a new line? Or how to use escape sequences
We said that all strings have to be typed on one line. But what if you want a string to print across two lines? There are two ways to do this.

The first way is to use a `PrintLn` function twice and sprint the sting
you want to print in two. Like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This is printed on the first line")
fmt.Println("and this is printed on the second line.")
{{< /hilight >}}

The second way is to use an __escape sequence__. The escape sequence for a new line is typed `\n`. If you put this anywhere in a interrupted string literal
Go will take a new line at that point. So we can write the previous two lines
like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This is printed on the first line\nand this is printed on the second line.")
{{< /hilight >}}

We can use the same approach to solve the double quotes problem. The escape sequence for double quote is `\"`. So we can print a double quotes like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("\"")
{{< /hilight >}}

There are two more escape sequence which you will need to know. The first is `\t`
which prints a tab character - which is the typically the same as four spaces.
The last one is a backslash, `\` itself. To print this you need to type `\\`.

### The third way - raw strings
We said that if you wanted to print a new line there were to solutions. You could
use a `PrintLn` function twice or you could use the new line escape sequence `\n`.

But there is a third way. The third way is to create a __raw string literal__ instead of the interpreted string literal. You do this by surrounding the string
with a backtick character instead of the double quotes character. Like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This is a interpreted string literal")
fmt.Println(`This is a raw string literal`)
{{< /hilight >}}

Whatever you put inside the backticks will be printed, including any new lines. Like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println(`This is a raw string literal
this is the second line
    this is the third line
we can type " and \ without having to use the escape
sequences \" and \\`)
{{< /hilight >}}

The only character you cannot type in a raw string is the backtick character itself.

You might ask when or where would you use a raw string in your pogram?
They are useful if the string you are trying to print already contains
double quote marks and you need to keep the existing new lines. In these cases
it is often more work, and more likely to introduce a mistake, to add the escape sequences to the existing string

### Joining strings
If you need to join two or more strings together to form a longer string you can
do this using a plus sign, `+` between the strings, but outside of the quote marks.
Like this:

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This string is joined" + " to this string")
{{< /hilight >}}

This is called __string concatenation__.

### Runes
If you need just a single character, or rune, then you can create one by
typing it inside single quote marks like this

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
'A'
{{< /hilight >}}

You are only allowed to put one rune inside the single quote marks so this is
wrong

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
'Abcd'
{{< /hilight >}}

because there are two many letters. The one exception to this is single quote
mark itself. For this you must use the escape sequence `\'`

### The `stringfun` program
Let's write a Go program to put all of this string knowledge into practice. Just as we did with the `numbers` program are going to put this program in its own directory.

First open your Terminal program or Command Prompt. In your terminal you need to change to the location of your Go Workspace.
To do this you need to type

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

Now you need to make a new directory. We need to call this `stringfun` after the
program we will write. Then we need to change directory into the new `stringfun`
directory.

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
mkdir stringfun
cd stringfun
{{< /hilight >}}

Now you need to start you editor, either Atom or LiteIDE

{{% panelPrimaryTitle title="On Linux, Windows and MacOS X" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
atom stringfun.go
{{< /hilight >}}
{{% /panelPrimaryTitle %}}

{{% panelSuccessTitle title="On Raspberry Pi" %}}
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
liteide stringfun.go
{{< /hilight >}}
{{% /panelSuccessTitle %}}

{{% codeFigure caption="Fig-1. The `stringfun.go` code" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="y" >}}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("The stringfun program shows you how to use strings.")
	fmt.Println("")
	fmt.Println("This string appears on one line.")
	fmt.Println("This string is split across")
	fmt.Println("two lines using two PrintLn functions.")
	fmt.Println("You use the new line escape sequence to print on a new line like this.")
	fmt.Println("Line 1\nLine 2\nLine 3\nLine 4\n\n\nLine 5")
	fmt.Println("\tThis string uses a tab escape sequence at the start to indent the string.")
	fmt.Println("A new line escape sequence is typed \\n")
	fmt.Println("A backslash escape sequence is typed \\\\")
	fmt.Println("A double quote escape sequence is typed \\\" you have to combine the backslash")
	fmt.Println("and double quote escape sequences to print this.")
	fmt.Println(`This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.`)
fmt.Println("This string is joined" + " to this string")
}
{{< /hilight >}}
{{% /codeFigure %}}

Once you have typed the program in, you need to save it. Once you have saved it
you need to run it with:

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run stringfun.go
{{< /hilight >}}

If you typed the program correctly you should see

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
The stringfun program shows you how to use strings.

This string appears on one line.
This string is split across
two lines using two PrintLn functions.
You use the new line escape sequence to print on a new line like this.
Line 1
Line 2
Line 3
Line 4


Line 5
        This string uses a tab escape sequence at the start to indent the string.
A new line escape sequence is typed \n
A backslash escape sequence is typed \\
A double quote escape sequence is typed \" you have to combine the backslash
and double quote escape sequences to print this.
This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.
This string is joined to this string
{{< /hilight >}}

Let's look at the important parts of the program. First is line 9.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("")
{{< /hilight >}}

You know that whatever you type between the double quote marks in printed out
to the terminal by the `Println` function followed by a new line. But what happens here?

Look at the what the program printed to the terminal when you ran it. This is the __output__ of the program. If you look at the second line you can see that nothing is printed. Now look at the string in line 9, there is nothing between
the double quote marks. This is called an __empty string__. The string exists but there are no runes in it to print out. When you print an empty string nothing happens. There is no output.

Also remember that the `Println` always takes a new line after it has printed
out a string. In this case it prints an empty string before it takes a new line.

The next interesting line is line 14

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("Line 1\nLine 2\nLine 3\nLine 4\n\n\nLine 5")
{{< /hilight >}}

This is an example of a new line escape sequence. If you look at the output again
you can see that Line 1, Line 2, Line 3 and Line 4 all appear on different lines.
Line 5 is printed three lines below Line 4 because you types three new line
escape sequences. Notice that you do not need any spaces around the new line
escape sequence.

Line 15 uses a different escape sequence, the tab escape sequence.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("\tThis string uses a tab escape sequence at the start to indent the string.")
{{< /hilight >}}

If you look at the output from this line you can see that it is indented to the
right. This is the effect of printing the tab character.

Lines 16, 17 and 18 show you how to escape a backslash, so that you can print
the characters you need to type for the new line, backslash and double quote
escape sequences.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("A new line escape sequence is typed \\n")
{{< /hilight >}}

If we look at line 16 the result we want is

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
A new line escape sequence is typed \n
{{< /hilight >}}

But remember that we cannot type a backslash, `\` directly. We have to escape it
with another backslash. So what we need to type is two backslashes like this,
`\\`, so that the second one is printed to the terminal followed by the `n`

Line 18 is almost the same.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("A double quote escape sequence is typed \\\" you have to combine the backslash")
{{< /hilight >}}

Except we want to print out the double quote escape sequence `\"`. Remember we cannot type a double quote, `"` directly because they are used to tell Go where
the string starts and end. So we have to escape both the backslash with, `\\` and
then the double quote with `\"`.

Line 19 takes the one step further and prints the escape sequence for a backslash
itself. Now we need to type four backslash characters, `\\\\`.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("A backslash escape sequence is typed \\\\")
{{< /hilight >}}

The output of this is the `\\` that we require.

Lines 20, 21, 22, and 23 are an example of a raw string.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
    fmt.Println(`This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.`)
{{< /hilight >}}

If you look at the output again you can see that  what you type between the
single quote marks,<code>&#96;</code>, is exactly
what is printed. Now if you type a new line or a double quote mark it will
be printed out without requiring an escape sequence.

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
This is a raw string.
If you type a new line it will be printed
if you type a double quote, ", it will also be printed
without the need for an escape sequence.
{{< /hilight >}}

The last interesting line is line 24.

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
fmt.Println("This string is joined" + " to this string")
{{< /hilight >}}

This uses a `+` to join two stings together as you can see in the output.

{{< hilight lang="txt" style="neon" lineNumbers="n" >}}
This string is joined to this string
{{< /hilight >}}

The strings are joined into one larger string before being printed.

{{% panelInfoTitle title="Now it is your turn" %}}
Now it is you turn to write a program to use strings.

You need to edit, the `stringfun.go` program so that the computer
prints out some new strings. Once you have changed the program, you will need to run it again to make sure that it worked.

{{% panelWarningTitle title="Important" %}}
Before you run your program you must save your file again. If you do not you will
run the same version of the program as before, so it will not do any of your
new sums.

If you want to save your new program under a new name you can. But you can't have any spaces in the new name and it still has to have a `.go` file extension. If you this you will need to remember the new name because you will need that to
run your program. For example. If you called your new program `extra-strings.go`
then you would run it like this

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run extra-strings.go
{{< /hilight >}}
{{% /panelWarningTitle %}}

Change your program so that it prints these strings
````
The vowels in the English alphabet are:
a, e, i, o and u.
The consonants that are used most in the English alphabet are:
't'
'n'
's'
'h'
'r'
The letters that are used least in the English alphabet are:
z
    q
        x
Join these words together:
"summer" and "time" to make "summertime"
````
You should use a raw string to print out the list of constants, and
an escape sequence to print out the list of least used letters.

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#hint" aria-expanded="false" aria-controls="answers">
  Hint
</button>
<div class="collapse" id="hint">
  <div class="well">
    <p> You need to use a backtick <code>&#96;</code> to print the raw string, but you need to
    use a single quote `'` around each of the constants.
    You need to a tab escape sequence to indent the list of least
    used letters.
    You need to use the `Print` and `Println` functions to display
    "summertime" on the same line. Look back at the `Numbers.go` program
    to see how to do it.
    </p>
  </div>
	<p> Why do you think knowing how often a letter is used in English
    would be important?
	</p>
</div>
{{% /panelInfoTitle %}}

That is enough about strings for now. Next we are going to talk about __variables__.
