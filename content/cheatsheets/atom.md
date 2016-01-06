+++
Description = "A helpful list of keyboard shortcuts for the Atom editor"
author = "Owen"
date = "2015-12-02T12:29:49Z"
subtitle = "helpful commands"
title = "Atom Editor Cheat Sheet"
+++
## Atom Editor Cheat Sheet
This is a cheat sheet for Atom Editor. This is a list is useful keyboard
shortcuts that you can use instead of using the menus.

{{% panelWarningTitle title="Important" %}}
We'll show you which keys you need to type to activate the shortcut like this:

<kbd>CTRL</kbd>+<kbd>s</kbd>

to tell you to press the <kbd>CTRL</kbd> and the <kbd>s</kbd> keys __together__.
{{% /panelWarningTitle %}}


### Moving About and Selecting
You don't have to use the mouse, or the scroll bars to move the cursor
when you need to edit your Go program. It is much faster to use the keyboard
shortcuts.

#### Moving One Character or Line at a Time
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor left by one character</td>
    </tr>
    <tr>
    <td><kbd><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor right one by character</td>
    </tr>
    <tr>
    <td><kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor up by one line</td>
    </tr>
    <tr>
    <td><kbd><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor down by one line</td>
    </tr>
</table>
</div>


#### Moving to the Start or End of the Line
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>Home</kbd></td>
    <td>move up the first non-space character of the line. Press <kbd>Home</kbd> twice to move to the start of the line.</td>
    </tr>
    <tr>
    <td><kbd>End</kbd></td>
    <td>move to the end of the line</td>
    </tr>
</table>
</div>


#### Moving one Screen at a Time
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>PgUp</kbd></td>
    <td>move up one screen at a time</td>
    </tr>
    <tr>
    <td><kbd>PgDn</kbd></td>
    <td>move down one screen at a time</td>
    </tr>
</table>
</div>


#### Moving One Word at a Time
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>CTRL</kbd>+<kbd><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor left by one word</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></kbd></td>
    <td>moves the cursor right by one word</td>
    </tr>
</table>
</div>


#### Selecting Text
You can combine all of these with the <kbd>SHIFT</kbd> key to highlight or select text.

<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></kbd></td>
    <td>select the character then moves the cursor left by one character</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></kbd></td>
    <td>select the character and then moves the cursor right one by character</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd></td>
    <td>select the current line then moves the cursor up by one line</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></kbd></td>
    <td>select the current line then moves the cursor down by one line</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>Home</kbd></td>
    <td>select everything up the first non-space character of the line. Press <kbd>SHIFT</kbd>+<kbd>Home</kbd> twice to select everything to the start of the line.</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>End</kbd></td>
    <td>select everything to the end of the line</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>PgUp</kbd></td>
    <td>select everything on the current screen then move up one screen at a time</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>PgDn</kbd></td>
    <td>select everything on the current screen then move down one screen at a time</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></kbd></td>
    <td>selects the word to the left then moves the cursor left by one word</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></kbd></td>
    <td>selectes the word to the right then moves the cursor right by one word</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>l</kbd></td>
    <td>select the current line</td>
    </tr>
</table>
</div>


#### Deleting Text
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>Delete</kbd> or <kbd>Del</kbd></td>
    <td>delete the character to the right</td>
    </tr>
    <tr>
    <td><kbd>BACKSPACE</kbd></td>
    <td>delete the character to the left</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>Delete</kbd> or <kbd>SHIFT</kbd>+<kbd>Del</kbd></td>
    <td>delete the selected text</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>BACKSPACE</kbd></td>
    <td>delete the selected text</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>k</kbd></td>
    <td>delete the current line</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>Delete</kbd> or <kbd>CTRL</kbd>+<kbd>Del</kbd></td>
    <td>delete to the end of the line</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>BACKSPACE</kbd></td>
    <td>delete to the start~/go of the line</td>
    </tr>
</table>
</div>


### Working with Files
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>n</kbd></td>
    <td>create a new empty file</td>
    </tr>
    <td><kbd>CTRL</kbd>+<kbd>o</kbd></td>
    <td>open a file. The file opens in the same window in a new tab.</td>
    </tr>
    <td><kbd>CTRL</kbd>+<kbd>s</kbd></td>
    <td>save the file</td>
    </tr>
    <td><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>s</kbd></td>
    <td>save the file with a new name</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>w</kbd></td>
    <td>close a tab. If it is not saved you will be asked to save it.</td>
    </tr>
</table>
</div>


### Switching Tabs
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>PgUp</kbd></td>
    <td>switch to the previous tab</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>PgDn</kbd></td>
    <td>switch to the next tab</td>
    </tr>
</table>
</div>


### Cut, Copy and Paste
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>x</kbd></td>
    <td>cut the selected text to the clipboard</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>c</kbd></td>
    <td>copy the selected text</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>v</kbd></td>
    <td>paste the selected text</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>d</kbd></td>
    <td>duplicate the current line</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd></td>
    <td>move the line up</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></kbd></td>
    <td>move the line down</td>
    </tr>    
</table>
</div>

### Finding Things
<div class="table-responsive">
<table class="table table-condensed table-striped table-bordered">
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>f</kbd></td>
    <td>find and replace words in the current file</td>
    </tr>
    <tr>
    <td><kbd>F3</kbd></td>
    <td>find the next instance</td>
    </tr>
    <tr>
    <td><kbd>SHIFT</kbd>+<kbd>F3</kbd></td>
    <td>find the previous instance</td>
    </tr>
    <tr>
    <td><kbd>CTRL</kbd>+<kbd>m</kbd></td>
    <td>find the matching bracket, or brace or square bracket. The bracket
    can be to the left or the right of the cursor.</td>
    </tr>
</table>
</div>
