+++
date = "2015-03-08T15:57:06Z"
description = ""
title = "Linux install guide"
subtitle = "for Ubuntu and other Debian systems"
+++
### Start Here...
These instructions are written for installing Go on Ubuntu or another
Debian derived Linux Distribution. If you are using a different Linux distribution
then you will need to adapt these instructions.

Installing [Go](http://golang.org) is straightforward. We are going to show you how
to install the latest version of Go.

We need to install Go using the Terminal also called the shell.
So your first task is to start a new Terminal.

{{% defaultNote %}}
You need to type the commands in the boxes like this:
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls
{{< /hilight >}}
Remember to type the command _exactly_ as you see it. The case of
the letters is important.
{{% /defaultNote %}}

### Download and Install the Programs that Go needs

Go needs four other programs to work correctly. These programs must be installed
on your computer first. These programs are called _dependancies_ because another
program, in this case Go, depends upon them to work correctly.

The four programs are "Git", "Mercurial", "Bazaar" and "Subversion". They are all
_version control tools_.

To download and install these on your computer type the following command
into your terminal.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
sudo apt-get install git mercurial bzr subversion
{{< /hilight >}}
and answer "y"es when prompted to install.

### Download Go

Next you need to download Go itself. You need to visit Go's [download page](https://golang.org/dl/).
The version you should download is the 64-bit Linux archive.
Currently the latest Go version is 1.4.2. if there is a later version there when
you read this you should download that instead.

{{% defaultNote %}}
When you click on the download link of the Linux archive file your web browser
may ask you to "Open the file with" another program or save it. You should choose
to save it.
{{% /defaultNote %}}

Once you have downloaded the file then it is time to install Go.

### Installing Go

Now you have Go this is really easy.
First you need to change directory into your Downloads directory where your
web browser download Go to.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/Downloads
{{< /hilight >}}
Now check the file name - you'll need this for the next step
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls
{{< /hilight >}}
Now you need to install it into the default location of /usr/local.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
sudo tar -C /usr/local -xzf go1.4.2.linux-amd64.tar.gz
{{< /hilight >}}
In the command above `go1.4.2.linux-amd64.tar.gz` is the filename of the
file you downloaded. If your filename is different you need to make sure you use
the filename of the file you downloaded and not `go1.4.2.linux-amd64.tar.gz`

Now you need to tell your Terminal where to find Go. To do this you need to edit
a file called `.bashrc` in your home directory. You can do this form the Terminal
by typing
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
gedit ~/.bashrc
{{< /hilight >}}
{{% panelWarningTitle title="Be Careful" %}}
The `.bashrc` file is an important file. It controls how your Terminal works.
We are going to add two lines to the bottom of the file. Be careful not to
change any of the other lines in the file. If you think you have made a mistake
quit gedit without saving the file. You can then start gedit again with the
original `.bashrc` by retyping the above command.
{{% /panelWarningTitle %}}
At the very bottom of the `.bashrc` file you need to add these two lines.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
# Tell the terminal where to find Go
export PATH=$PATH:/usr/local/go/bin
{{< /hilight >}}
Now save the file and quit gedit.

Next you need to tell your terminal to read your updated `.bashrc` file. You do
this with the source command.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
source ~/.bashrc
{{< /hilight >}}
If everyting has worked correctly so far you should be able to confirm the
version of Go you have installed. To do this you use Go's `go` command
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
go version
{{< /hilight >}}
The go command should print something like:
`go version go1.4.2 linux/amd64`
{{% defaultNote %}}
If you downloaded and installed a later version of Go the version number in
the middle will be different. This is OK.
{{% /defaultNote %}}

Now you need to set up your workspace.

### Setting up a Go Workspace

Go code _must_ be kept inside a workspace. A workspace is a directory
on your computer. A directory is the correct name for the folders that you see
when you use the file manager. Inside the workspace directory there must be
three more directories.

* `src` contains the Go source code, organised into packages. There is one
directory per package. More on packages later.
* `pkg` contains the package objects
* `bin` contains your executable programs.

The `go` tool builds source packages it finds in the `src` directory and
installs the resulting binaries in the `pkg` and `bin` directories.

This is not a complicated as it sounds. Creating a work space is easy. You can
call you Go workspace anything, but we will choose to call ours "go-workspace".
To create your workspace you need to type the following into you Terminal
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~
mkdir go-workspace
cd go-workspace
mkdir src
mkdir pkg
mkdir bin
{{< /hilight >}}
If you now do this:
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
ls -l
{{< /hilight >}}
You should see something like this
````
drwxr-xr-x  2 pi pi 4096 Feb 11 23:33 bin
drwxr-xr-x  3 pi pi 4096 Aug 14  2014 pkg
drwxr-xr-x 11 pi pi 4096 Jan 21 16:13 src
````
We are nearly finished now. There is just one more step to go. We need to tell
Go where to find your workspace. To do this we need to edit your `.bashrc` file
again. So in you terminal type
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
gedit ~/.bashrc
{{< /hilight >}}
Now we need to set up the `GOAPTH` environmental variable. As before go the the
end of the `.bashrc` file and add these five lines. These five lines should
appear below the lines we added earlier.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
# Set the value of the GOPATH environmental variable to the go-workspace
# This tells go which directory is your workspace
export GOPATH=$HOME/go-workspace
# Add the workspace's bin directory to the PATH
export PATH=$PATH:$GOPATH/bin
{{< /hilight >}}
Now save the file and quit gedit.

The last step is to tell your terminal to read your updated `.bashrc` file. Once
again we do this with the source command.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
source ~/.bashrc
{{< /hilight >}}

You now have Go installed on your computer. Now you need to test it to make
sure that everything is working. To find out how to do this you need to
read [testing your install guide](/install/testing-the-install/).
