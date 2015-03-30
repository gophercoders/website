+++
date = "2015-03-12T13:25:36Z"
description = "How to test your new go installation"
subtitle = ""
title = "Testing Your Go Installation"
+++
### Start here...
Now you have go installed you need to test it to make sure that it is installed
correctly

We are going to test your Go installation be writing the "Hello World!" program
in go. Once we have done that we are going to download and run the GopherCoders.com
"Hello" program from the Internet.

We are not going to explain how these programs work. We will do that in the
first few lessons. We just want to make sure that both of these programs work.
If they do work your Go installation is also working. If they do not work then
there is something wrong with your go installation. In this case you need to go
back and check that you followed the install instructions correctly.

{{% defaultNote %}}
You need to type the commands in the boxes like this:
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls
{{< /hilight >}}
Remember to type the command _exactly_ as you see it. The case of
the letters is important.
{{% /defaultNote %}}

### What you need
Before you start you need to open a Terminal on Linux, Max OS X or your
raspberry Pi. If you are using Windows you need to open a Windows Command Prompt
window.

Once your terminal has opened you need to change directory to the `src`
directory inside your Go workspace directory.

If you are using Linux, Mac OS X or a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd $GOPATH/src
{{< /hilight >}}

If you are using Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd %GOPATH%\src
{{< /hilight >}}

You will also need to a text editor. The name of your text editor is different on
each operating system.

On Linux to start your text editor you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
gedit
{{< /hilight >}}

On Mac OS X to start your text editor you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
open -a TextEdit
{{< /hilight >}}

On a Raspberry Pi to start your text editor you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
leafpad
{{< /hilight >}}

On a Windows to start your text editor you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
notepad
{{< /hilight >}}

### Hello World
Now you know how to start an editor you are almost ready to start to program
"Hello World!". First you need to make a new directory, called `helloworld`
to do this you need to type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
mkdir helloworld
{{< /hilight >}}

and then change into the new directory

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd helloworld
{{< /hilight >}}

Now start your text editor. When you text editor opens you need to type
{{< hilight lang="go" style="edit-gedit" lineNumbers="n" >}}
package main

import ("fmt")

func main() {
    fmt.Println("Hello world!")
}
{{< /hilight >}}
{{% defaultNote %}}
The colours we are using are there to help you. You do not need to try to
make the text in your editor have the same colours. You text should all
be black.
We will explain what the colours mean in one of the first lessons.
{{% /defaultNote %}}

This is a source code file. All source code files must be saved under your
Go workspace directory. Now you need to save the file. Use your text editors
`File` menu and select the `Save` option. You must save the file as `helloworld.go`.

{{% panelDangerTitle title="Note"%}}
If you are using Windows and using the Notepad editor you should save the file as:
`"helloworld.go"` including the `"` marks. If you do not do this Notepad will save
the file as `helloworld.go.txt`. This is a well known problem with NotePad.
If you install the [Atom editor](/install/atom/windows/) you will not have this
problem.
{{% /panelDangerTitle%}}

You must also make sure you save the file in the correct directory. This should
be the `helloworld` directory in your Go workspace that you created earlier.
Once the file is saved you need to quit your text editor. Use the `file` menu and
select the `Quit` or `Exit` option.
{{% panelInfoTitle title="Note"%}}
Once you have quit your text editor you can check if the file has been saved in the correct place and had the correct name check the directory contents with the
terminal.

On Linux, MacOS X or on a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls $GOPATH/src/helloworld/
{{< /hilight >}}
On Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
dir %GOPATH%\src\helloworld
{{< /hilight >}}
If you see a file called `helloworld.go` in the output of either of these commands
then everything is ok.
{{% /panelInfoTitle%}}

Now we are ready to run the program. To do this we need to use the `go` command.
Type this following into your terminal

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go build helloworld.go
{{< /hilight >}}

If everything worked correctly you should see

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
Hello world!
{{< /hilight >}}

printed by the program.

{{% panelInfoTitle title="Note"%}}
If you don't see
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
Hello world!
{{< /hilight >}}
when you do this then there is something wrong. If the `go`command tells you
there is a `syntax error` it means you have not typed the program correctly.

If you do see a syntax error go will tell you which line it thinks the
problem is on. For example, if you saw this
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
.\helloworld.go:5: syntax error: unexpectd {, expected )}
{{< /hilight >}}
It means the problem is on line 5 - thats what the number 5 means after the `:`
after the `helloworld.go` bit. If you do see this the rest of the error tells you
what is wrong. In this case there is a missing `)` on line 5. This is why the
`{` is unexpected. You may see something different here.

We'll explain more about syntax errors as we go along.

To fix this you need to start your text editor again and open the `helloworld.go`
file.

To do this on Linux you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
gedit helloworld.go
{{< /hilight >}}

To do this on Mac OS X you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
open -a TextEdit -f helloworld.go
{{< /hilight >}}

To do this on a Raspberry Piyou need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
leafpad helloworld.go
{{< /hilight >}}

To do this on a Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
notepad helloworld.go
{{< /hilight >}}

You need to carefully check that you have typed the program _exactly_ as it
was shown. Once you are sure it is correct save it again, as `helloworld.go`
and try to run it again.

If the program still does not run, you still have a mistake somewhere in the
program. You need to repeat the process of leading the `helloworld.go` file
into the text editor and making sure it matches exactly, until the program runs
as expected.

If you did make a mistake its OK. Programmers make mistakes all of the time.
You will get better at avoiding them and fixing or debugging them as we go along.
{{% /panelInfoTitle%}}

Now that the "Hello World!"" program works its time to try the "Hello" program.

### Hello

This time you are not going to type the program. We are going to download the
source code from the Internet. This tests that the programs that Go depends on
are all installed and working correctly.

First you need to change directory back to your the `src` directory in your
Go workspace.

If you are using Linux, Mac OS X or a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd $GOPATH/src
{{< /hilight >}}

If you are using Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd %GOPATH%\src
{{< /hilight >}}

Now you need to download the source code from the Internet using the `go` command.
To do this you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go get github.com/gophercoders/hello
{{< /hilight >}}

To `go get` command will download the source code to your workspace. You now need
to change to that directory.

If you are using Linux, Mac OS X or a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd $GOPATH/src/github.com/gophercoders/hello
{{< /hilight >}}

If you are using Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd %GOPATH%\src\github.com\gophercoders\hello
{{< /hilight >}}

If you now do

On Linux, MacOS X or on a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls
{{< /hilight >}}
On Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
dir
{{< /hilight >}}

You will see the files that we downloaded. `hello.go` is the source file we are
interested in.

Now we have the source code want to run it. To do this we need to use the `go run`
command again. If you type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go run hello.go
{{< /hilight >}}

into your terminal or command prompt the program should run. The program
should print a message and then show you a gopher in the terminal.

We are almost done. There is another way to run your program to `go build` command.
The `go build` command will build your program but will not run it. Instead it
creates a new program that you can run. Try typing this in your terminal

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go build hello.go
{{< /hilight >}}

Now if you look at the files in the directory again by typing
On Linux, MacOS X or on a Raspberry Pi you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls
{{< /hilight >}}
On Windows you need to type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
dir
{{< /hilight >}}

You will see an new file called `hello` or `hello.exe`, if you are using Windows.
This new file is your program. To run it you need to type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
hello
{{< /hilight >}}

and you should see the same result as before.

Now that you know Go works correctly you should setup an [alternative editor
to make programming easier](/installing-go#editor-install).
