+++
Description = "A helpful list of terminal commands"
author = "Owen"
date = "2015-10-04T12:29:49Z"
subtitle = "helpful commands"
title = "Terminal Cheat Sheet"
+++
## Terminal Cheat Sheet
This is a cheat sheet for LXTerminal. This is a list is useful commands that you
can use when you use the LXTerminal.

{{% panelDangerTitle title="Warning" %}}
Remember that you have to press the <kbd>return</kbd> key at the end of each line.
{{% /panelDangerTitle %}}

### Directories and Paths
Your files are contained in **Directories**, also called *folders*. Directories
can contain both **files**, like your Go programs or more directories or **both**.

In the terminal directories and files are separated by a forward slash
<kbd>/</kbd>. This creates a **path**. A path can end in a directory to create
a **directory path**. Or a path can end with a filenane to create a **file path**.

{{% panelInfoTitle title="Example" %}}
The path

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/
{{< /hilight >}}

means there there is a directory called `home` that contains a directory called
`gopher`. This is the directory you are in when you login. This is called the
_users home directory_.

The path to your first Go program is

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/go-workspace/src/helloclub
{{< /hilight >}}

This means that the `home` directory contains the `gopher` directory, which
contains the `go-workspace` directory, which contains the `src` directory
which in turn contains the `helloclub` directory.

The path to your first Go program is

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/go-workspace/src/helloclub/helloclub.go
{{< /hilight >}}

The last part of the path, after the final `/`, is `helloclub.go`. This is the
name of the file that contains your Go program.
{{% /panelInfoTitle %}}

### Special directory names
There are four special directory names. You can use use these save you typing
longer lines.

1. `~` typed <kbd>SHIFT-#</kbd>- This means the _users home directory_.
{{% panelInfoTitle title="Example" %}}
The path
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/
{{< /hilight >}}
and
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
~
{{< /hilight >}}
are the same. '~' just means '/home/gopher'
You will see this used a lot when you need to run your Go programs.
{{% /panelInfoTitle %}}
2. `.` typed <kbd>.</kbd> - This means the current directory
3. `..` typed <kbd>..</kbd> - This means the directory one before the current one.
{{% panelInfoTitle title="Example" %}}
If the path is
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/
{{< /hilight >}}
then `.` means `/home/gopher` because this is the current directory.
`..` means the directory `/home` because this is the directory before the
current one.
{{% /panelInfoTitle %}}
4. `/` typed <kbd>/</kbd> - is called the **root** directory. This is the very
first directory. You can think of it as "everything at the very first or top
level."

### Knowing which directory you are in
There are two ways to know which directory you are in.

The first way is easy. You have to look at the **prompt** in the terminal. This
is the bit to the *left* of the cursor. It will look like something like this:

<strong style="color:lime">gopher@coderVM:</strong><strong style="color:blue">~/go-workspace/src/helloclub$</strong>

The part in <strong string style="color:blue">blue</strong> **not** including
the `$` sign is the path. In this case the path is
`~/go-workspace/src/helloclub` which is the path to your first Go program from
your users home directory.

The second way is to use the *print current directory* command like this. Just type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
pwd
{{< /hilight >}}

the answer will be the path, all the way from the **root** directory to
your current directory. For example

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
/home/gopher/go-workspace/src/helloclub
{{< /hilight >}}

`pwd` is short for *print current directory*.

### Change directory
If you want to change directory you need to use the `cd`, short for *change
directory*. You need to tell the `cd` command which directory you want to change
to.

For example to change to the `go-workspace` directory in your users home directory
you need to type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/go-workspace
{{< /hilight >}}

Once you do this your prompt will automatically change to

<strong style="color:lime">gopher@coderVM:</strong><strong  style="color:blue">~/go-workspace$</strong>

You have to type a **directroy path** after `cd` to tell the `cd` command which
directory you want to change to. You can only type one directory path.

If just type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd
{{< /hilight >}}

you will change directory to your users home directory and your prompt will
automatically change to
<strong style="color:lime">gopher@coderVM:</strong><strong style="color:blue">~$</strong>

### Seeing which files in a directory
To see which files are in a directory you can use the `l` or `ll` commands,
short for *list* and *long list*.

Just type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
l
{{< /hilight >}}

or

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ll
{{< /hilight >}}

This will list the contents of the current directory.

{{% panelInfoTitle title="Example" %}}
The result of the `ll` commands looks like this.
<table class="table-condensed">
<tr><td>drwxrwxr-x</td><td>5</td><td>gopher</td><td>gopher</td><td>4096</td><td> Oct  2 18:11</td> <td><strong style="color:blue">.</strong>/</td></tr>
<tr><td>drwxrwxr-x</td><td>  5</td><td> gopher</td><td>gopher</td><td>4096</td><td>Aug 26 13:47</td><td><strong style="color:blue">..</strong>/</td></tr>
<tr><td>drwxrwxr-x</td><td>10</td><td>gopher</td><td> gopher</td><td> 4096</td><td> Aug 26 13:58</td><td><strong style="color:blue"> github.com</strong>/</td></tr>
</tr><td>drwxrwxr-x</td><td>  3</td><td> gopher</td><td> gopher</td><td> 4096</td><td> May 18 11:19</td><td><strong style="color:blue"> golang.org</strong>/</td></tr>
<tr><td>drwxrwxr-x</td><td>  2</td><td> gopher</td><td> gopher</td><td> 4096</td><td> Oct  2 18:14</td><td><strong style="color:blue"> helloclub</strong>/</td></tr>
</table>

Directories will be coloured blue in the output. Directories also have a `/` added
to their name. You do not need to type this `/` in if you use the directory name
with the `cd` command.

The colour of files can vary, depending in the file type. Most filenames will be
coloured white.
{{% /panelInfoTitle %}}

### Deleting files
{{% panelDangerTitle title="Warning" %}}
You should use the mouse to drag files and directories into the "Rubbish Bin".
Or select them with the mouse and press the <kbd>delete</kbd> key.

If you use either of these methods your files are not deleted forever. You can
still undelete them from the "Rubbish Bin".
{{% /panelDangerTitle %}}

### Running Go Programs
To run your Go programs you need to use the `go` command in the terminal.
First you have to use `cd` to change directory to where your program is, that's the
`.go` file, is. Then you need to use the `go` command to run your program.

When you use the `go` command you also need to tell the computer what you want
to do with the file. To do this you need to use the `run` subcommand, followed
the name of the `*.go` file you want to run.

{{% panelInfoTitle title="Example" %}}
This is how you would run your `helloclub` program.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/go-workspace/src/helloclub
go run helloclub.go
{{< /hilight >}}
{{% /panelInfoTitle %}}

{{% panelWarningTitle title="Important" %}}
You must have a space between the `go` command and the `run` subcommand.
{{% /panelWarningTitle %}}


### Using the cursor and tab keys
You can use the up
<kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd>
and down
<kbd><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></kbd>
cursor keys in the terminal.

The up
<kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd>
key will show you the last command you typed in so you don't have to type it in
again. If you press the up <kbd><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></kbd>
key again you will see the command before the command that you last typed.

You can use the down <kbd><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></kbd>
key if you go to far.

You can also use the <kbd>TAB</kbd> key to get the terminal to finish lines for
you. This works for commands, directories, and filenames.

{{% panelInfoTitle title="Example" %}}
If you want to change directory to the `go-workspace` directory you can either
type everything in like this

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/go-workspace/src/helloclub
{{< /hilight >}}

of you can use the tab key like this

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/go-TAB
{{< /hilight >}}
{{% panelInfoTitle title="Tip" %}}
Don't type TAB in the above line. You have to press the <kbd>TAB</kbd> key instead.
{{% /panelInfoTitle %}}

When you press the tab key the line will expand to

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/go-workspace/src/helloclub
{{< /hilight >}}
{{% /panelInfoTitle %}}
