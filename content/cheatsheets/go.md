+++
Description = "A helpful list of Go patterns"
author = "Owen"
date = "2016-01-15T12:29:49Z"
subtitle = "with examples"
title = "Go Patterns Cheat Sheet"
+++
## Go Patterns Cheat Sheet
This is a cheat sheet for the Go patterns. You can use this list when you want
do something in Go but can't remember how to do it.

### Comments
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to write a note in your program that you want the computer to ignore.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use a __comment__ in the program. If you write your note as a comment
then Go will ignore it.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Pattern - Creating a Variable" gopher="gopher-big-board" %}}
#### Pattern
The pattern to create a comment is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// comment out the remainder of the line
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
If a line includes the characters `//` then the `//` and everything after it
until the end of the line is ignored. The _comment_ can include anything,
including English or program code

The space after the `//` and before the comment is not required but is often
present.

If the `//` is the first (non-space) character on the line the whole line is
ignored. Otherwise only the part of the line after the `//` is ignored.
{{% /primaryBarTitleWithGopher %}}

{{% primaryBarTitle title="Pattern Example" %}}
#### Pattern Example
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// this whole line is ignored
var superHeroName string // only this bit is ignored
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
We will use comments to give you instructions in the example programs.
It is important that you read these comments, so that you know what to do.

You can use comments to write additional notes to explain what the program
does. If you do this it will help you remember what the program did if
you look at the program again later.

You can also use comments to remove code, if you are trying to debug a problem.
{{% panelWarningTitleWithGopher title="Warning" gopher="gopher-danger" %}}
If you you comments to ignore code you might create more problems that you solve,
at least initially.
Use this approach with caution and only to help identify the problem.

Commenting out code is never the the solution to a problem. You still have to
fix the problem.
{{% /panelWarningTitleWithGopher %}}

### Variables
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want the computer to remember something so that you can use it later on
in the program.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use a __variable__ for this. But, before you can use a variable you
have to create it. This is also called __declaring__ the variable.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Creating a Variable Pattern" gopher="gopher-big-board" %}}
#### Pattern
The pattern to create or declare a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var variable-name variable-type
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The first part is the keyword __var__. All variable declarations must start with
this keyword.

The second part is _variable-name_ this is the name of the variable. You can
choose the name you want for the variable, but it must follow the naming rules.
See the "Variable Name Rules" panel for more information.
A good name reflects what you intend to use variable for in your program.

The third part is _variable-type_. This tells Go what sort of information you want
to keep in the variable. For example, do you want to keep an integer number or a
string in the variable? It also tells the computer how much memory it needs
for the variable. See the "Variable Types" panel for more information.

__Remember__: You need a space between each part of the pattern

{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var pupilsFullName string       // variable used to hold a pupils full name which can be more than one word and include spaces
var pageNumber int              // the page number in a text book. This can only be a whole number
var piePortion float64          // how much pie do you get? This will be a fraction between zero and 1
var distanceToLondonInKm float64 // the distance from here to London in Km. This is very likely to be a whole number.
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
{{% infoBarTitle title="Variable Name Rules" %}}
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

{{% infoBarTitle title="Variable Types" %}}
There are many types of variables in Go. These are just some of the common
ones that you will need to use in your programs. Don't worry if you haven't seen
all of these.

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
        <td>Type Name</td>
        <td>Meaning</td>
        <td>Example</td>
    </tr>
        <td><code>int</code></td>
        <td>Can be used to store whole numbers only, both positive and negative. If you need to do maths with the number you need to use this type.</td>
        <td>123 or -456</td>
    </tr>
        <td><code>float64</code></td>
        <td>Can be used to store decimal fractions and whole numbers, both positive and negative. Whole numbers will be stored with a point zero afterwards. If you need to do maths on the number you need to use this type.</td>
        <td>123.0 or 0.33333 or -456.789</td>
    </tr>
    <tr>
        <td><code>string</code></td>
        <td>Can be used to store "anything you can type, in any language." You need to use this type is you want to store words, letters and punctuation. You can also use this type to store numbers, but you cannot do any
        maths with the number if you do this. A string must be surrounded by inverted commas.</td>
        <td>"Hello World" or "123" or "123.456" or "Symbols: ?(£$%)"" or even "简体中文网页"</td>
        </tr>
    <tr>
        <td><code>rune</code></td>
        <td>This is the type of a single letter, digit, symbol or logogram. You cannot do maths on the digits. A logogram is a Chinese character. Each rune represents a single codepoint in the Unicode standard. A rune must be surrounded by single inverted commas.</td>
        <td>'A' or 'b' or '4' or '$' or '简'</td>
    </tr>
    <tr>
        <td><code>[]rune</code></td>
        <td>A "slice of runes". This is used to if you need to
        access the letters in string one at a time.</td>
        <td>[]rune{'a', 'b', 'c', 'd'} or []rune{'1', '$', 'A', '文'}</td>
    </tr>
    <tr>
        <td><code>byte</code></td>
        <td>Is an 8 bit number that can hold the values 0 to 255. It is used
        to represent raw data rather than a number.</td>
        <td>0, 1, 128, 68, 250</td>
    </tr>
</table>
</div>

{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to give a variable a value, or you want to change the value of a variable.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use an `=` to give the variable a new or different value. This is
called  __assignment__. It also called setting the value of the variable, or
storing a value in the variable.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Pattern - Changing the value of a Variable" gopher="gopher-big-board" %}}
#### Pattern
The pattern to change the value of a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable-name = new-value
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The _variable-name_ is the name of the variable whose value you want to change.
The _new-value_ is the new value for the variable. The variables current value
will be replaced by this new value.

The _new-value_ must be of the same type as the variable you are trying to change.
For example if the variable was a `int` type then you can only assign another
`int` to it. You __cannot__ assign an different type like a `string` or a
`float64` to the variable.

The _new-value_ can be one of four things.

* It could a fixed value
* It could be the value of another variable
* It could be the result of a sum
* It could be the value returned by a function.

There are examples of each in the Pattern Examples.
{{% /primaryBarTitleWithGopher %}}

{{% primaryBarTitle title="Pattern Examples" %}}
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
pageNumber = simpleio.ReadNumberFromKeyboard()
distanceToLondonInKm = simpleio.ReadDecimalFractionFromKeyboard()
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
_Remember_ that it is one equals sign, `=`, for assignment and not two. Two equals
signs, `==`, means _is equal to_.

If you are assigning the result of a function, remember that it can be any
function that returns a value. The only requirement is that the
value returned by the function is the same type as the variable.
The example uses some of the functions from the `simpleio` package only as an
example.

{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to use the value of a variable.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
To use the value of a variable you just need to type the variable name.
The computer will then replace the variable name with the current value of the
variable when the program runs.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Pattern - Using a Variable" gopher="gopher-big-board" %}}
#### Pattern
The pattern to use a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
variable-name
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The _variable-name_ is the name of the variable whose value you want to use.
{{% /primaryBarTitleWithGopher %}}

{{% primaryBarTitle title="Pattern Examples" %}}
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

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
_Remember_ the computer will replace the _variable-name_ with the variables
current value when the program runs.

### Output
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to print information to the terminal.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use the `Print` and `Println` functions from the `fmt` package.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Output Pattern" gopher="gopher-big-board" %}}
#### Pattern
The pattern to use a variable is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "fmt"
    )

fmt.Print("Print Me")
fmt.Print(number_to_print)
fmt.Print(variable_name)

fmt.Println("Print Me")
fmt.Println(number_to_print)
fmt.Println(variable_name)
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The _Print_Me_ is a string, not contained in a variable, that you want to
print. The _Print_Me_ __must__ be surrounded by inverted commas. The string
must and the inverted commas must be between the `()`.

 The _number_to_print_ is a number, not contained in a variable, that you want
 to print. No inverted commas are required. The number must be between the `()`.

 To print a variable, put the _variable-name_ you want to print between the `()`
 of the `Print` or `Println` function.

 The `Print` and `Println` functions do the same thing, except, `Println` will
 take a new line once it has printed out what was between the `()`. The next time
 `Print` or `Println` is used the output will be start printing on the new line.

The `fmt` package has to be imported before you can use either `Print` or
`Println`. You need to make sure that `"fmt"` is between the `()` of the
`import` line at the top of the program.

__Remember__: You have to use type `fmt.` before `Print` or `Println`.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
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
// The train now approaching platform 3 is the 16:14 for Marylebone
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
If you are using Atom it will automatically put `"fmt"` in the `import` statement
for you.

### Input
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want the user to type information into the terminal.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use the `ReadStringFromKeyboard`, `ReadNumberFromKeyboard` and
`ReadDecimalFractionFromKeyboard` functions in the `simpleio` package.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Input Pattern" gopher="gopher-big-board" %}}
#### Pattern
The pattern for input is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "github.com/gophercoders/simpleio"
    )

variable-of-type-string = simpleio.ReadStringFromKeyboard()
variable-of-type-int = simpleio.ReadNumberFromKeyboard()
variable-of-type-float64 = simpleio.ReadDecimalFractionFromKeyboard()
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
To read a string or any sequence of characters or symbols you need to use the
`ReadStringFromKeyboard` function. The function remembers everything that the user
types into the terminal until they press return (or enter). Once they press
return the variable _variable-of-type-string_ will be assigned whatever the user
typed. You can only assign the result of `ReadStringFromKeyboard` to a variable
of type string.

To read a whole number you need to use the
`ReadNumberFromKeyboard` function. The function remembers the number the user
types into the terminal. Once they press
return the variable _variable-of-type-int_ will be assigned the number the user
typed. You can only assign the result of `ReadNumberFromKeyboard` to a variable
of type int. `ReadNumberFromKeybard` guarantees that only a valid whole number
will be read from the keyboard.

To read a (decimal) fractional number you need to use the
`ReadDecimalFractionFromKeyboard` function.
The function remembers the number the user
types into the terminal. Once they press
return the variable _variable-of-type-float64_ will be assigned the number the user
typed. If the user types in a whole number e.g. 23 then the value stored in the
_variable-of-type-float64_ will be 23.0. You can only assign the result of
`ReadDecimalFromKeyboard` to a variable of type float64. Like
`ReadNumberFromKeyboard`, `ReadDecimalFractionFromKeyboard` also guarantees
that only a valid decimal fraction number will be read from the keyboard.

__Remember__: You have to use type `simpleio.` before `ReadStringFromKeyboard`, `ReadNumberFromKeyboard` and
`ReadDecimalFractionFromKeyboard`. Also the `()` after the function names
are required.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
This example shows how to read a string, whole number and decimal fraction
from the keybaord.
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// import the fmt package
import (
    "fmt"
    "github.com/gophercoders/simpleio"
    )

// We want to read all of these from the keyboard.
var message string
var age int
var distanceToLondonInKm float64

// Print instructions to the user first
fmt.Println("Type in a message: ")
// now read in the message that the user types.
message = simpleio.ReadStringFromKeyboard()

fmt.Println("Tell me your age:")
age = simpleio.ReadNumberFromKeyboard()

fmt.Println("Guess the distance in Km to London?")
distanceToLondonInKm = simpleio.ReadDecimalFractionFromKeyboard()
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
You must make sure that the line `github.com/gophercoders/simpleio` is in the
`import` statement at the top of the program. Atom will __not__ do this for you.

You can use `ReadStringFromKeyboard()` to read a whole or decimal number. But the
number will be stored as a `string` type. This means you cannot use the number
in any maths.

### If Statements
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want the computer to do something different, depending on the value of a
variable.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use an `if` statement
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="If Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if condition {
    statement-block
}
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The first part is the `if` keyword. This must come first.

The second part is the _condition_. The _condition_ is similar to a condition in
maths. You can compare the values of variables.  

The _condition_ is the test that you want the computer to perform.
The test is special. It can __only__ return the answer _true_ or _false_.

The _statement-block_ is the group of statements that you want the computer
to run if the condition is _true_. The _statement-block_ can contain further `if`
and `for` statements if required.

Both braces, the `{}` are required. The `{` brace must also be on the same
line as the `if` keyword. The `}` must be on the next line after the
_statement-block_
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// test if the variable number is greater then 10
if number > 10 {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is greater then 10")
}
fmt.Println("Test complete")

// if number has the value 11 the example prints out
// The value of number, 11 is greater then 10
// Test complete

// if number had the value 0 the example prints
// Test complete
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
##### Numbers
The crocodile rule still applies. The crocodile always eats the larger number

The result of each operator is either true or false.

You can only compare two variables if they are the same type. You can only compare
`int` with `int` or `float64` with `float64`. You can't compare `int` with a
`float64`.

#### Strings
You can compare variables of type `string` using the same operators.
Two strings are equal if they contain exactly the same sequence of letters,
numbers, symbols, or logograms. The strings must be the same length.

Otherwise, the strings are compared as using dictionary like order. The order is:
numbers before capital letters and capital letters before lowercase letters.
 So `A < a` is __true__ and `9 < A` is also __true__.

The exact ordering is the same as the ordering of the [Unicode table](http://unicode-table.com/en/).

The table below gives the list of valid comparison operations and
how to type them. You can use these in the _condition_ part of an `if`
statement. You can also group them using brackets.

The table uses the following variables:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
var one int
one = 1
var two int
two = 2
var gopherName string
gopherName = "He's just he Gopher"
var bunnyName string
bunnyName = "Glenda"
{{< /hilight >}}

{{% panelInfoTitle title="Comparison Operations" %}}
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
        <td>Operator</td>
        <td>Meaning</td>
        <td>Example</td>
    </tr>
    <tr>
        <td><code>==</code></td>
        <td>Is equal to</td>
        <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one == two // is false
// compare to a fixed number
one == 1 // is true
// or
1 == one // is true

// compare to strings
gopherName == bunnyName // is false
// compare a to a fixed string
gopherName == "Duke" // is false. Duke is the name of the Java mascot
{{< /hilight >}}
        </td>
    </tr>
    <tr>
    <td><code>!=<code></td>
    <td>Not equal to</td>
    <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one != two // is true
// compare to a fixed number
one != 1 // is false
// or
1 != one // is flase

// compare to strings
gopherName != bunnyName // is true
// compare a to a fixed string
gopherName != "Duke" // is true
{{< /hilight >}}    
    </td>
    </tr>
    <tr>
    <td><code><<code></td>
    <td>Less than</td>
    <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one < two // is true
// compare to a fixed number
one < 1 // is false
// or
1 < one // is false

// compare to strings
gopherName < bunnyName // is false
// compare a to a fixed string
gopherName < "Duke" // is false
{{< /hilight >}}    
    </td>
    </tr>
    <tr>
    <td><code><=</code></td>
    <td>Less than or equal to</td>
    <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one <= two // is true
// compare to a fixed number
one <= 1 // is true
// or
1 <= one // is true

// compare to strings
gopherName <= bunnyName // is false
// compare a to a fixed string
gopherName <= "Duke" // is false
{{< /hilight >}}    
    </td>
    </tr>
    <tr>
    <td><code>></code></td>
    <td>Greater than</td>
    <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one > two // is false
// compare to a fixed number
one > 1 // is false
// or
1 > one // is false

// compare to strings
gopherName > bunnyName // is true
// compare a to a fixed string
gopherName > "Duke" // is true
{{< /hilight >}}    
    </td>
    </tr>
    <tr>
    <td><code>>=</code></td>
    <td>Greater than or equal to</td>
    <td>
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// compare two int variables
one >= two // is false
// compare to a fixed number
one >= 1 // is true
// or
1 >= one // is true

// compare to strings
gopherName >= bunnyName // is true
// compare a to a fixed string
gopherName >= "Duke" // is true
{{< /hilight >}}    
    </td>
    </tr>
</table>
</div>
{{% /panelInfoTitle %}}

### If Else Statement
#### Problem
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
You want the computer to do one action if a condition is true. But, a
completely different action if the condition is false.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use an `if else` statement
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="If Else Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if condition {
    true-statement-block
} else {
    false-statement-block
}
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The first part is the `if` keyword. This must come first.

The second part is the _condition_. The _condition_ is the same as the
condition used in an `if` statement.

Next comes the _true-statement-block_. This is the group of statements that you
want the computer to run _only_ if the condition is _true_.

Next comes the `else` keyword.

This is followed by the group of statements, the _false-statement-block_,
that you want the computer to execute _only_ if the condition is _false_.
If the _condition_ is false the computer jumps over the _true-statement-block_
and runs the _false_statement_block_ instead.

Only __one__ of the two statement blocks will be run.

All the braces, the `{}`, are required. The first `{` brace must also be on the
same line as the `if` keyword. The first `}` must be on the next line after the
_true-statement-block_ and on the same line as the `else`. The next `{` must
also be on the same line as the else. The last `}` must be on a line after the
_false-statement-block_.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// test if the variable number is greater then or less than or equal to 10
if number > 10 {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is greater then 10")
} else {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is less than or equal to 10")
}
fmt.Println("Test complete")

// if number has the value 11 the example prints out
// The value of number, 11 is greater then 10
// Test complete

// if number had the value 0 the example prints
// The value of number, 0 is less than or equal to 10
// Test complete
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
The _condition_ is exactly the same as the _condition_ in a `if` statement.
All of the comparison operators can be used.

### If Else If
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want the computer to choose between lots of conditions, but you only want it
to choose one.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use an `if else if` statement.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="If Else If Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
if 1st-condition {
    1st-statement-block
} else if 2nd-condition {
    2nd-statement-block
} else if 3rd-condition {
    3rd-statement-block
} ... {
    ...
} else {
    else-statement-block
}

{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The first part is the `if` keyword. This must come first.

The second part is the _1st-condition_. The _1st-condition_ and all of the
other conditions are the same as the condition used in an `if` statement.

If the _1st-condition_ is __true__, then the computer runs the
_1st-statement-block_.
It then jumps over all of the other conditions and the `else` part if it exists.

If the _1st-condition_ is __false__, then the computer skips over the
_1st-statement-block_ and tests the _2nd-condition_.

If the _2nd-condition_ is __true__, then the computer runs the
_2nd-statement-block_. It then jumps over all of the other conditions and the
`else` part if it exists.

If the _2nd-condition_ is __false__, then the computer skips over the
_2nd-statement-block_ and tests the _3rd-condition_.

The computer then tests the _3rd-condition_ in the same way.

Any further conditions and statement blocks, marked by the `...`,
work in the same way.

The `else` part is __optional__. If the `else` part is present, the
`else-statement-block` will __only__ be run if __all of the preceding conditions
were false__.

Only __one__ of the statement blocks in a `if else if` statement will be run.

All the braces, the `{}`, are required and must be laid out as shown in the
pattern.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// test if the variable number is greater then, less than or equal to 10
if number > 10 {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is greater then 10")
} else if number < 10 {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is less then 10")
} else {
    fmt.Print("The value of number, ")
    fmt.Print(number)
    fmt.Println(" is equal to 10")
}
fmt.Println("Test complete")

// if number has the value 11 the example prints out
// The value of number, 11 is greater then 10
// Test complete

// if number had the value 0 the example prints
// The value of number, 0 is less than  10
// Test complete

// if number had the value 10 the example prints
// The value of number, 10 is equal to 10
// Test complete
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
The _condition_ is exactly the same as the _condition_ in a `if` statement.
All of the comparison operators can be used and the `else` part is optional.

### Loops
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to the computer to do the same set of things over and over again.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to put the things you want the computer to do over and over inside a
loop statement.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Loop Pattern" gopher="gopher-big-board" %}}
#### Pattern
The pattern for a loop is this:
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
for condition {
    statement-block
}
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
A loop starts with the keyword `for`.

The _condition_ is the same condition used by an `if` statement.

The _condition_ is tested __first__. If the condition is __false__ the entire loop
is jumped over. The program continues at the line after the closing brace, `}`.

If the _condition_ is __true__ then the loop will run the group of
statements in the _statement-body_.

Once the loop has run the _statement-body_ once, it jumps back to the
_condition_.

The _condition_ is then tested again. If the _condition_ is still true then the
_statement-body_ runs again. At the end of this second run, the _condition_ is
rested once again.

The _condition_ is tested after each run of the _statement-body_. If
the _condition_ becomes __false__ the loop is jumped over. The program will
then continue at the line after the closing brace, `}`.

The braces, the `{}`, as required. The opening brace, `{` must be on the same
line as the `for` keyword. The closing brace, the `}`, is on the line after
the _statement-block_.

The _statement-block_ can contian other loops and `if` statements as required.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// Print out numbers while the number is less than 10
var number int
number = 0
for number < 10 {
    fmt.Print(number)
    fmt.Print(", ")
    number = number + 1 // remember to make number bigger
}

// this code when run will print out
0, 1, 2, 3, 4, 5, 6, 7, 8, 9,

// this example prints "Can you guess the secret word?" and reads
//the users guess until they guess the secret word
var secretWord string
secretWord = "secret"
var guess string // guess starts as an empty string, ""

for guess != secretWord {
    fmt.Println("can you guess the secret word?")
    guess = simpleio.ReadStringFromKeybaord()
}
fmt.Println("Congratualtions")

// if the users types "banana" and then "goldfish" and then "secret"
// there output would be:
can you guess the secret word?
banana
can you guess the secret word?
goldfish
can you guess the secret word?
secret
Congratulations
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
The pattern examples show the two most common approaches.

The first example shows how to loop a fixed number for times. In this case 10.
The condition in this pattern tests a variable that counts the number of
times the loop has been run. In the case of the example this is the
variable `number`. Inside the loop you must remember to change the value of the
loop counter variable. In this case `number` increases by one each time.

The second example shows how to loop while a more general condition is true.
In this case the loop continues while the users guess, stored in the variable
also called `guess`, is not the same as the secret word. Inside the loop
the value of `guess` is changed, because the user types in a new guess each time
around the loop. This changes the values used in the condition when the
condition is next tested.

### Convert an decimal fraction to whole number
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to convert a decimal number to a whole number.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use a type conversion from an `float64` to an `int`.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Whole Number Conversion Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
int(decimal-number)
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
This is a type conversion. It uses a Go type like a function, to convert
the type of the variable in the brackets, to the type before the brackets.

_decimal-number_ is a variable of type `float64` or a fixed number that contains
a decimal point.

{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// convert 3.1415 to 3
var pi float64
pi = 3.14.15
var almostPi int
almostPi = int(pi) // almostPi now has the value 3
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
The conversion always rounds down to the nearest whole number. This is
also called truncating the number. Any numbers after the decimal point are
lost.

{{% panelWarningTitleWithGopher title="Warning" gopher="gopher-danger" %}}
You can use the same pattern with any two types. But just because you can
does not mean you should!

This approach is only safe to use with two number types and only when you have to.
{{% /panelWarningTitleWithGopher %}}

### Convert an whole number to decimal fraction
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to convert a whole number to a decimal fraction number.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use a type conversion from an `int` to an `float64`.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Whole Number Conversion Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
float64(whole-number)
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
This is a type conversion. It uses a Go type like a function, to convert
the type of the variable in the brackets, to the type before the brackets.

_whole-number_ is a variable of type `int` or a fixed whole number.

{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// convert 3 to 3.0
var wholeNumber int
wholeNumber = 3
var decimalNumber float64
decimalNumber = float(wholeNumber) // decimalNumber now has the value 3.0
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
The conversion always create a number with a zero after the decimal point.

{{% panelWarningTitleWithGopher title="Warning" gopher="gopher-danger" %}}
You can use the same pattern with any two types. But just because you can
does not mean you should!

This approach is only safe to use with two number types and only when you have to.
{{% /panelWarningTitleWithGopher %}}

### Find the length of a string
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to know the length of a string. The length is the  total number of
letters, symbols including spaces, numbers, and logorams in a string.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
You need to use the `RuneCountInString` function from the `utf8` package
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Find the Length of a String Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "unicode/utf8"
    )

number-of-runes = utf8.RuneCountInString(string-variable-name)
{{< /hilight >}}

{{% infoBarTitle title="Pattern Explanation" %}}
The `RuneCountInString` function will tell you the length of a string.
It counts the number of runes in a string. Remember that a rune is any letter,
digit, symbol or logogram. You can think of a rune as a alphanumeric character to
make it simpler.

The _string-variable-name_ is the name of the string type variable that you want
to know the length of. You can also use a fixed string, inside inverted commas,
if you want instead of an string variable.

You must put _string-variable-name_ between the brackets, the `()`.

The result of `RuneCountInString` is the number of runes in the string. The number
is always a whole number and is always zero or more. You need to assign the
answer to the variable, _number-of-runes_.

The `utf8.` must always come before the `RuneCountInString`. It is part of the
pattern.

The `unicode/utf8` package has to be imported before you can use
`RuneCountInString`. You need to make sure that `"unicode/utf8"` is between the
`()` of the `import` line at the top of the program.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "unicode/utf8"
    )

var numberOfRunes int

// using a fixed string
numberOfRunes = utf8.RuneCountInString("Hello World") // numberOfRunes is 11. The space counts as a character

// with numbers
numberOfRunes = utf8.RuneCountInString("123 !ab$#") // numberOfRunes is 9

// with a variable
var message string
message = "Hello World!"
numberOfRunes = utf8.RuneCountInString(message) // numberOfRunes is 12

// with Chinese
message = "你好，世界"
numberOfRunes = utf8.RuneCountInString(message) // numberOfRunes is 5

// with English and Chinese
message = "hello 世界!"
numberOfRunes = utf8.RuneCountInString(message) // numberOfRunes is 9
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
As you can see from the examples. The pattern works correctly for any language,
or several languages mixed together.

If you are using the Atom editor it will automatically put `"unicode/utf8"` in the
`import` statement for you.

### Access the characters in a string
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to be able to access the individual letters, or characters, in a string.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
This requires a two part solution. First you have to convert the string
you want to work with to a "slice of runes" type. Then you need to examine the
individual rune at the position you are interested in.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Access the Characters in a String Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// Part 1 - convert the string to a slice of runes
rune-slice-variable = []rune(string-variable)

// Part 2 - access the individual rune
individual-rune = rune-slice-variable[position]
{{< /hilight >}}
{{% infoBarTitle title="Pattern Explanation" %}}
The pattern has two parts.

The first part of the pattern uses a type conversion to convert a string
to a slice of runes type.
The _string-variable_ is the name of the string variable that you want to convert.
The _string-variable_ must be between the brackets, the `()`. The
`[]rune` part must come before the first bracket, the `(`.

You can also use a fixed string, enclosed in inverted commas, in place of
the _string-variable_ if that is what you need.

The _rune-slice-variable_ is a variable of type, `[]rune`, the "slice of runes"
type. The result of the conversion will be stored in this variable.

The second part of the pattern shows you how to access the individual letters in
the string, once it has been converted to a slice of runes.

Each character in the slice of runes has a position. The first character is at
position 0, the second at position 1, the third at position 2 and so on.
The last character in the string is at the position one less than the length
of the string. You will need to use the previous pattern,
"Find the length of a string" to find this out.

The _position_ is the whole number of the character you want to access. The
position can only be between zero and one less than the length of the string.
The _position_ must appear between the square brackets, the `[]`.
The _position_ can be a variable of type `int` or a fixed number e.g. 0.

The result of this is an individual rune. This represents the letter at the
requested position. This is stored in the variable, _individual-rune_ which is
of type `rune`.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// with a fixed string
var characters []rune
characters = []rune("hello world")

var character rune
character = characters[0] // character is "h"
character = characters[1] // character is "e"
character = character[10] // character is "d"

// which a variable
var message string
message = "Danger Mouse and Penfold"
characters = []rune(message)
character = characters[0] // character is "D"
characters = characters[7] // character is "M"

// with a different language
message = "你好，世界"
characters = []rune(message)
character = characters[0] // character is "你"
character = characters[4] // character is "界"

// with a variable
var position int
position = 2
character = characters[position] // character is ","
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
It is illegal to access a the slice of runes at a position that is
either before the start or beyond the end. The position of the
first letter is 0. This is the position of the start of the slice.
The position of the last letter is one less than the length of the string.
This is the position of the end of the slice.

If the position is less than zero or greater than one less than the length of
the string the program will __panic__ when you run it. The panic error
message will start with:

`panic: runtime error: slice bounds out of range`

This situation is most likely to occur if you are using a variable to calculate
the value of the position.

### Print an Individual Character
{{% dangerBarTitleWithGopher title="Problem" gopher="gopher-warning-left" %}}
#### Problem
You want to print an single character, or letter to the terminal.
{{% /dangerBarTitleWithGopher %}}

{{% successBarTitleWithGopher title="Solution" gopher="gopher-info-left" %}}
#### Solution
The _simplest_ solution to this problem is to cheat. You need to convert the
individual character to a string and then print the string using the `Print`
and `Println` in the `fmt` package.
{{% /successBarTitleWithGopher %}}

{{% primaryBarTitleWithGopher title="Print an Individual Character Pattern" gopher="gopher-big-board" %}}
#### Pattern
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
// first create a one character string
one-character-string = string(individual-rune)

// then print it just like any other string
fmt.Print(one-character-string)
// or
fmt.Println(one-character-string)
{{< /hilight >}}
{{% infoBarTitle title="Pattern Explanation" %}}
The pattern uses a type conversion to convert a single character, or type `rune`
to a string.

The `individual-rune` is the variable of type `rune` that contains the
character you want to print.

You need to put the `individual-rune` in between the brackets, the `()`. You
also need to put the keyword `string` before the opening bracket, the `(`.

The result of the type conversion will be a string. You will need
to store this in a variable, like `one-character-string` which is variable
of type string.

You can then print `one-character-string` using the same `Print` and `Println`
functions to print the character to the terminal.
{{% /primaryBarTitleWithGopher  %}}

{{% primaryBarTitle title="Pattern Examples" %}}
#### Pattern Examples
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
import (
    "fmt"
    )

var character rune
character = 'A' // this must be single inverted commas.

var oneCharacterString string
oneCharacterString = string(character)

// now Print it
fmt.Print("The letter is:")
fmt.Println(oneCharacterString)

// the example would print
// The letter is: A
{{< /hilight >}}

{{% primaryBarTitle title="Pattern Notes" %}}
#### Pattern Notes
This is the simplest solution and the only one you can use without knowing
more Go. There are however other common ways to do this.
