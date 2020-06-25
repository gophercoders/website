+++
title = "What is Go"
subtitle = "...and what is a gopher"
description = "What is Go?"
date = "2014-09-27"
+++
### It is all in the name

[Go](http://golang.org) is a programming language. [Go](http://en.wikipedia.org/wiki/Go_(game))
is also an ancient far-eastern board game. But, just to confuse things, there is also
[Go!](http://en.wikipedia.org/wiki/Go!_%28programming_language%29), with an exclamation mark,
which is also a programming language.

So just to make this clear, we mean the language called "[Go](http://golang.org)" which
is sometimes also know as "[Golang](http://golang.org)" after the Internet domain.

### Okay, but what IS it?

Go is a computer programming language, originally invented at [Google](http://www.google.com)
in 2007. OK but that probably doesn't help you much!

A programming language is a man-made language that a programmer uses to give instructions to
a computer. A programming language looks a little like a combination of English and Mathematics.
They are used to create the programs that a computer runs. The web browser you are using
now to read this is just a computer program.

That's a lot of stuff, so let's explain this a little more. Go is a computer language, but it
is a man-made language. It is not like English, French, German or Spanish. These are all natural
languages. They just evolved from the sounds people make when they speak. No one invented them.

A programming language is different. Someone did invent it. A programming language
is more like man-made languages found in [books](http://www.britannica.com/list/15/6-fictional-languages-you-can-really-learn)
like _Elvish_ from _The Lord of the Rings_ or [TV](http://www.britannica.com/list/15/6-fictional-languages-you-can-really-learn)
like _Klingon_ from _StarTrek_.

Go was invented by three people.
[Ken Thompson](http://en.wikipedia.org/wiki/Ken_Thompson)
(who is a very famous computer scientist),
[Rob "Commander" Pike](http://en.wikipedia.org/wiki/Robert_Griesemer)
(who is another famous computer scientist) and
[Robert Griesemer](http://http://en.wikipedia.org/wiki/Robert_Griesemer)
(who is famous for his work on the JavaScript and Java computer languages).

A programming language can, at least in theory, be used to write any program to
do anything. We say in theory because you have to be able to describe the problem
in the programming language first.

### Okay, but what does it look like

Go is textural computer language. [Scratch](https://scratch.mit.edu/) or
[Alice](http://www.alice.org/index.php) or [Kodo](http://www.kodugamelab.com/) are
visual or graphical programming languages. In these languages you program by
moving snapping coloured blocks together to create a program.

Textural computer languages are different. You have to type everything - Sorry,
but this is actually what real programmers do most days. And if you find you have a
talent for it, there is so much more you can do with textual computer languages that
aren't possible with visual ones.
{{< defaultNote >}}
If you have to install Go, you will have to do this to. We will show you how in
the install instructions.
{{< /defaultNote >}}
The simplest way to explain the difference is with an example. The most famous
computer program in the world is known as "Hello World". It prints "Hello, world!"
to the screen. Programmers often use this program as a test to show that a
language is correctly installed and working.

Hello World in Scratch looks like this:
{{< gcFigure class="text-center" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Scratch_Hello_World.png" title="Fig-1: Hello World written in Scratch" >}}

{{< codeFigure caption="Fig-2. Hello World written in Go" >}}
{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
{{< /highlight >}}
{{< /codeFigure >}}

{{< defaultNote >}}
You would not need to type the line numbers on the left. We have added these to
the program __code__ to make it easier to talk about a specific line.
{{< /defaultNote >}}
The first time you look at these programs they appear to be quite different,
even though they do the same thing. But if you look carefully you can see that
they are also similar.

In the Scratch program the middle, purple `say` block is the one that prints
"Hello, world! to the screen.

In the Go program, it is line 6 that prints "Hello, World!" to the screen.

The programs are similar because they both solve the same problem, how do you
print "Hello, world!" to the screen. But they are different because they are
written in two very different programming languages.

### What is a gopher?
A gopher is not small furry [rodent](http://en.wikipedia.org/wiki/Gopher).
A gopher is the name the Go community uses for someone who can program in
Go. Once you learn Go you too will be a Gopher.

The mascot of the Go language is also a gopher, the "Go Gopher".
The Go Gopher was drawn by [Renee French](http://reneefrench.blogspot.co.uk/)
and has an interesting [history](http://blog.golang.org/gopher "The history of the Go Gopher")
all of his own.

The [GopherCoders](/) gopher is based on a drawing Ben did on a Post-It note!
{{< gcFigure
class="text-center"
imgclass="img-rounded"
src="/images/bens-orignal-gophers-small.png"
title="Ben's original Post-It! note"
>}}
