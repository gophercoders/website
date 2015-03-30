+++
date = "2015-03-13T19:03:05Z"
description = "How to install the Atom editor on MacOS X"
subtitle = ""
title = "Installing Atom on MasOS X"
+++
These instructions are written for installing the Atom editor on Ubuntu or another
Debian derived Linux Distribution. If you are using a different Linux distribution
then you will need to adapt these instructions.

Atom is a text editor for programmers. It is an alternative to gedit.
It also has very good integration with Go.

Installing Atom has two steps.

* Downloading and installing Atom
* Configuring Atom to work with Go.

### Downloading and Installing Go

Atom can be downloaded from the [project home page](http://atom.io).
You just need to click the green "Download For Mac" button.

Once Atom has downloaded you need to install it.

To do this you need to open you Downloads folder and find the file called "atom-mac.zip"

{{< img src="/images/install/macosx/AtomZipFile.png" title="The atom zip file" >}}

Double click on this file and it will expand. Once it has finished you will have
an Atom.app file in your Downloads directory.

{{< img src="/images/install/macosx/AtomApp.png" title="Atom" >}}

You are going to use Atom often so you should drag it into your Applications directory.

## Starting Atom

You can double click the Atom icon to start. However this is not how you should
start Atom when you use Go. This is because Go depends on the `GOPATH` environmental variable that you created when you installed Go. When you start Go
from the Finder by double clicking the `GOAPTH` variable does not have a value. This means Go will not work with Atom.

When you use Atom with Go you should _always_ start it from the Terminal. To do this you need to open the Terminal application and type

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
atom
{{< /hilight >}}

into a terminal.

If you see a security warning when you first try to start Atom like this

{{< img src="/images/install/macosx/AtomSecurityWarning.png" title="Atom security warning" >}}

It is OK to click "Open".

Now you are ready to configure Atom to work with Go.

### Configuring Atom to Work with Go

Once Atom is is installed you need to configure it to use Go. To do that you
need to read our [Guide to Configuring Atom](/install/atom/configure).
