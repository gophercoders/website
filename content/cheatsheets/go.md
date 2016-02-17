+++
Description = "A helpful list of Go patterns"
author = "Owen"
date = "2016-01-15T12:29:49Z"
subtitle = "with examples"
title = "Go Patterns Cheat Sheet"
+++
## Go Patterns Cheat Sheet
This is a cheat sheet of the Go patterns. You can use list list when you want
do something in Go but can't remember how to do it.

### Comments
{{% panelDangerTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
You want to write a note in your program that you want the computer to ignore.
{{% /panelDangerTitleWithGopher %}}

{{% panelSuccessTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
You need to use a __comment__ in the program. If you write your note as a comment
then go will ignore it.
{{% /panelSuccessTitleWithGopher %}}

{{% panelPrimaryTitleWithGopher title="Pattern - Creating a Variable" gopher="gopher-big-board" %}}
The pattern to create a comment is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// comment or the remainder of the line
{{< /hilight >}}

{{% panelInfoTitle title="Pattern Explanation" %}}
If a line includes the characters `//` then the `//` and everything after
it until the end of the line is ignored.
The _comment_ can include anything, including English or program code

The space after the `//` and before the comment is not required but is often
present.
If the `//` is the first (non-space) character on the line the whole line is
ignored. Otherwise only the part of the line after the `//` is ignored.
{{% /panelInfoTitle %}}
{{% /panelPrimaryTitleWithGopher %}}

{{% panelDefaultTitle title="Pattern Example" %}}
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// this whole line is ignored
var superHeroName string // the super hero's name
{{< /hilight >}}
{{% /panelDefaultTitle %}}


We will use comments to give you instructions in the example programs.
It is important that you read these comments, so that you know what to do.

You can use comments to write additional notes to explain what the program
does. If you do this it will help you remember what the program did if
you look at the program again later.

You can also use comments to remove code, if you are trying to debug a problem.
{{% panelWarningTitleWithGopher title="Warning" gopher="gopher-danger" %}}
If you do this you might create more problems that you solve, at least initially.
Use this approach with caution and only to help identify the problem.

Commenting out code is never the the solution to a problem. You still have to
fix the problem.
{{% /panelWarningTitleWithGopher %}}

### Variables
#### Problem
You want the computer to remember something so that you can use it later on
in the program.
#### Solution
You need to use a __variable__ for this. But, before you can use a variable you
have to create it. This is also called __declaring__ the variable.
#### Pattern
{{% panelPrimaryTitle title="Creating a Variable Pattern" %}}
The pattern to create or declare a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var variable_name variable_type
{{< /hilight >}}

{{% panelInfoTitle title="Pattern Explanation" %}}
The first part is the keyword __var__. All variable declarations must start with
this keyword.

The second part is _variable_name_ this is the name of the variable. You can
choose the name you want for the variable, but it must follow the naming rules.
See the "Variable Name Rules" panel for more information.
A good name reflects what you intend to use variable for in your program.

The third part is _variable_type_. This tells Go what sort of information you want
to keep in the variable. For example, do you want to keep an integer number or a
string in the variable? It also tells the computer how much memory it needs
for the variable. See the "Variable Types" panel for more information.

__Remember__: You need a space between each part of the pattern
{{% /panelInfoTitle %}}
{{% /panelPrimaryTitle %}}
#### Pattern Examples

{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var pupilsFullName string       // variable used to hold a pupils full name which can be more than one word and include spaces
var pageNumber int              // the page number in a text book. This can only be a whole number
var piePortion float64          // how much pie do you get? This will be a fraction between zero and 1
var distanceToLondonInKm float64 // the distance from here to London in Km. This is very likely to be a whole number.

{{< /hilight >}}

#### Pattern Notes
{{% panelInfoTitle title="Variable Name Rules" %}}
The variable name you pick must be legal. It must follow the rules. The rules
are:

* You can only use the letters a to z or A to Z or the numbers 0 to 9 or the underscore character _
* You cannot use spaces in your variables names, or any other symbols like (), %, £, $, *
* You cannot start a variable name with a number
* You cannot use a keyword as a variable name
* You cannot use the same name as another variable. Each variable name has to be unique
* You cannot use a package name for a variable name

If you can only remember one rule, remember that each variable name should start
with a letter and don't use any spaces or minus, -, signs. If you do this then
your variable name is likely, but not guaranteed, to be OK.

If Go tells you there is a problem with one of your variable names when you save
your program, or when you try to run it you need to go back and check the variable
name against all of the rules.
{{% /panelInfoTitle %}}

{{% panelInfoTitle title="Variable Types" %}}
There are many types of varibles in Go. These are just some of the common
ones that you will need to use in your programs. Don't worry if you haven't seen
all of these.

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
        <td>Type Name</td>
        <td>Meaning</td>
        <td>Example</td>
    </tr>
        <td>int</td>
        <td>Can be used to store whole numbers only, both positive and negative. If you need to do maths with the number you need to use this type.</td>
        <td>123 or -456</td>
    </tr>
        <td>float64</td>
        <td>Can be used to store decimal fractions and whole numbers, both positive and negative. Whole numbers will be stored with a point zero afterwards. If you need to do maths on the number you need to use this type.</td>
        <td>123.0 or 0.33333 or -456.789</td>
    </tr>
    <tr>
        <td>string</td>
        <td>Can be used to store "anything you can type, in any language." You need to use this type is you want to store words, letters and punctuation. You can also use this type to store numbers, but you cannot do any
        maths with the number if you do this. A string must be surrounded by inverted commas.</td>
        <td>"Hello World" or "123" or "123.456" or "Symbols: ?(£$%) or even ""简体中文网页"</td>
        </tr>
    <tr>
        <td>rune</td>
        <td>This is the type of a single letter, digit, symbol or logogram. You cannot do maths on the digits. A logogram is a Chinese character. Each rune represents a single codepoint in the Unicode standard. A rune must be surrounded by single inverted commas.</td>
        <td>'A' or 'b' or '4' or '$' or '简'</td>
    </tr>
    <tr>
        <td>[]rune</td>
        <td>A "slice of runes". This is used to if you need to
        access the letters in string one at a time.</td>
        <td>[]rune{'a', 'b', 'c', 'd'} or []rune{'1', '$', 'A', '文'}</td>
    </tr>
    <tr>
        <td>byte</td>
        <td>Is an 8 bit number that can hold the values 0 to 255. It is used
        to represent raw data rather than a number.</td>
        <td>0, 1, 128, 68, 250</td>
    </tr>
</table>
</div>
{{% /panelInfoTitle %}}

#### Problem
You want to give a variable a value, or you want to change the value of a variable.
#### Solution
You need to use an `=` to give the variable a new or different value. This is
called  __assignment__. It also called setting the value of the variable, or
storing a value in the variable.
#### Pattern
{{% panelPrimaryTitle title="Changing the value of a Variable" %}}
The pattern to change the value of a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable_name = new_value
{{< /hilight >}}

{{% panelInfoTitle title="Pattern Explanation" %}}
The _variable_name_ is the name of the variable whose value you want to change.
The _new_value_ is the new value for the variable. The variables current value
will be replaced by this new value.

The _new_value_ must be of the same type as the variable you are trying to change.
For example if the variable was a `int` type then you can only assign another
`int` to it. You __cannot__ assign an different type like a `string` or a
`flaot64` to the variable.

The _new_value_ can be one of four things.

* It could a fixed value
* It could be the value of another variable
* It could be the result of a sum
* It could be the value returned by a function.

There are examples of each in the Pattern Examples.

{{% /panelInfoTitle %}}
{{% /panelPrimaryTitle %}}
#### Pattern Examples
These examples use the variables declared in the previous section
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// These examples set the new value to a fixed value.
pupilsFullName = "Joe Blogs"
pageNumber = 56              
piePortion = 0.666666
distanceToLondonInKm = 52.3

// these examples set the new value to the value of another variable.
var myFriendsName string
myFriendsName= "Ben"
pupilsFullName = myFriendsName

var chapterThreeStartPage
chapterThreeStartPage = 27
pageNumber = chapterThreeStartPage              

// these examples set the new value to the result of a sum
piePortion = 1/8 // you only get 0.125 of the pie

var halfwayToLondonInKm float64
halfwayToLondonInKm = distanceToLondonInKm / 2

// The new value can also be the result of a function
// If you wanted to read the value from the keyboard you would do this.
pupilsFullName = simplio.ReadStringFromKeyboard()
pageNumber = simpleio.ReadNumberFromKeyabord()
distanceToLondonInKm = simpleio.ReadDecimalFractionFromKeyboard()
{{< /hilight >}}

#### Pattern Notes
_Remember_ that it is one equals sign, `=`, for assignment and not two. Two equals
signs, `==`, means _is equal to_.

If you are assigning the result of a function, remember that it can be any
function that returns a value. The only requirement is that the
value returned by the function is the same type as the variable.
The example uses some of the functions from the `simpleio` package only as an
example.

#### Problem
You want to use the value of a variable.
#### Solution
To use the value of a variable you just need to type the variable name.
The computer will then replace the variable name with the current value of the
variable when the program runs.
#### Pattern
{{% panelPrimaryTitle title="Using a Variable" %}}
The pattern to use a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable_name
{{< /hilight >}}

{{% panelInfoTitle title="Pattern Explanation" %}}
The _variable_name_ is the name of the variable whose value you want to use.
{{% /panelInfoTitle %}}
{{% /panelPrimaryTitle %}}
#### Pattern Examples
These examples use the variables declared in the previous sections
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// print out the value of pupilsFullName to the terminal
fmt.Print(pupilsFullname)

// work out twice the distance to London
distanceToLondonInKm + distanceToLondonInKm
 // or
distannceToLondon * 2
{{< /hilight >}}

#### Pattern Notes
_Remember_ the computer will replace the _variable_name_ with the variables
current value when the program runs.

### Output
#### Problem
You want to print information to the terminal.
#### Solution
You need to use the `Print` and `Println` functions from the `fmt` package.
#### Pattern
{{% panelPrimaryTitle title="Using a Variable" %}}
The pattern to use a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "fmt"
    )

fmt.Print("string_to_print")
fmt.Print(number_to_print)
fmt.Print(variable_name)

fmt.Println("string_to_print")
fmt.Print(number_to_print)
fmt.Print(variable_name)
{{< /hilight >}}

{{% panelInfoTitle title="Pattern Explanation" %}}
The _string_to_print_ is a string, not contained in a variable, that you want to
print. The _string_to_print_ __must__ be surrounded by inverted commas.

 The _number_to_print_ is a number, not contained in a variable, that you want
 to print. No inverted commas are required.

 To print a variale, put the _variable_name_ you want to print between the `()`
 of the `Print` or `Println` function.

 The `Print` and `Println` functions do the same thing, except, `Println` will
 take a new line once it has printed out what was between the `()`. The next time
 `Print` or `Println` is used the output will be start printing on the new line.

The `fmt` package has to be imported before you can use either `Print` or
`Println`. You need to make sure that `"fmt"` is between the `()` of the
`import` line at the top of the program.

__Remember__: You have to use type `fmt.` before `Print` or `Println`.
{{% /panelInfoTitle %}}
{{% /panelPrimaryTitle %}}
#### Pattern Examples
This example shows you how to print both fixed strings and variables containing
numbers and strings.
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// import the fmt package
import (
    "fmt"
    )

// create some variables
var destiationStation string
destiationStation = "Marylebone"
var platformNumber int
platformNumber = 3

// Print a fixed string
fmt.Print("The train now approaching platform ")
// now print a variable that is a number
fmt.Print(platformNumber)
// print another fixed string
fmt.Print(" is the 16:14 for ")
// finally print the varible, of type string, that holds the destination.
// Note that we want to print a new line at the end.
fmt.Println(destinationStation)

// Prints:
//The train now approaching platform 3 is the 16:14 for Marylebone
{{< /hilight >}}

#### Pattern Notes
If you are using Atom it will automatically put `"fmt"` in the `import` statement
for you.
