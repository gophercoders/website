+++
date = "2015-03-13T11:44:04Z"
description = "How to install liteIDE on a Raspberry Pi"
subtitle = ""
title = "Installing LiteIDE on a Raspberry Pi"
+++
[LiteIDE](https://github.com/visualfc/liteide) is an Integrated Development
Environment for programming in Go. An integrated development environment, or
just an IDE, is a program where you can edit then build
and run your Go source code without leaving the IDE. So you do not have to use the
terminal to build and run your code if you do not want to.

### Downloading and Installing LiteIDE

Before you can install LiteIDE you need to have Go installed on your Raspberry Pi.
If you don't have Go installed yet you need to follow our [install guide](/install/raspberry-pi).

Once you have Go installed installing LiteIDE is a three step process consisting of

* Download the LiteIDE package file
* Download and install the dependencies of the LiteIDE package file
* Tell the Terminal where to find LiteIDE

### Downloading LiteIDE

This is easy. We have already created a package that contains LiteIDE for you.
You just need to click [here](/install/liteide_28.0_1_armhf.deb) and your web
browser will download the file to your `Downloads` directory to you.

This package file contains version X27.1 of LiteIDE for you Raspberry Pi.

### Installing LiteIDE

First we need to install the packages that LiteIDE depends upon. These packages
are part of Raspbian. If you don't already have one open start a new Terminal
on you Raspberry Pi and type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
sudo apt-get install libqt4-core libqt4-gui
{{< /hilight >}}

Now you are ready to install LiteIDE. Because LiteIDE is not part of Raspbian
we need to use the `dpkg` command to install it.

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
cd ~/Downloads
sudo dpkg -i liteide_27.1-9_armhf.deb
{{< /hilight >}}

Now you need to tell your Terminal where to find LiteIDE

### Telling the Terminal where to find LiteIDE

Now you need to tell your Terminal where to find LiteIDE. We are going to use
the same process you used when you installed Go.

To do this you need to edit a file called `.bashrc` in your home directory.
You can do this from the Terminal by typing
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
leafpad ~/.bashrc
{{< /hilight >}}
{{% panelWarningTitle title="Be Careful" %}}
The `.bashrc` file is an important file. It controls how your Terminal works.
We are going to add two lines to the bottom of the file. Be careful not to
change any of the other lines in the file. If you think you have made a mistake
quit leafpad without saving the file. You can then start leafpad again with the
original `.bashrc` by retyping the above command.
{{% /panelWarningTitle %}}
At the very bottom of the `.bashrc` file you need to add these two lines.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
# Tell the terminal where to find LiteIDE
export PATH=$PATH:/usr/local/liteide/bin
{{< /hilight >}}
Now save the file and quit gedit.

Next you need to tell your terminal to read your updated `.bashrc` file. You do
this with the source command.
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
source ~/.bashrc
{{< /hilight >}}
If everything has worked correctly so far you should be able to start
LiteIDe by typing
{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
liteide
{{< /hilight >}}

If all is well LiteIDE will start and show you its Welcome screen.
