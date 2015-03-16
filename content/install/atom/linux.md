+++
date = "2015-03-13T19:03:05Z"
description = "How to install the Atom editor on Linux"
sub-title = ""
title = "Installing Atom on Linux"
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
You just need to click the green "Download .deb" button.

Once Atom has downloaded you need to install it. To do this you need to open a
new terminal window. Then execute the following command.

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
sudo dpkg --install atom-amd64.deb
{{< /hilight >}}

And Atom will install.

Once atom is installed you can start it with by typing

{{< hilight lang="sh" style="neon" lineNumbers="n" >}}
atom
{{< /hilight >}}

in a terminal.

{{% defaultNote %}}
Unlike the Windows or MacOS X version of atom the Linux version does not
update itself. If you want to keep up with latest changes to Atom you need to
check the website regularly. New releases are made once a week.
{{% /defaultNote %}}

### Configuring Atom to Work with Go

Once Atom is is installed you need to configure it to use Go. To do that you
need to read our [Guide to Configuring Atom](/install/atom/configure).
