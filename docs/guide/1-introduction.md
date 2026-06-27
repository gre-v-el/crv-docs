# Introduction

::: note *Clean Code* by Robert C. Martin
Have you ever chased your tail through a class, hopping from one function to the next, scrolling up and down the source file, trying to divine how the functions relate and operate, only to get lost in a rat’s nest of confusion? Have you ever hunted up the chain of inheritance for the definition of a variable or function? This is frustrating because **you are trying to understand what the system does, but you are spending your time and mental energy on trying to locate and remember where the pieces are.**
:::

Robert C. Martin’s book is about writing clean code. But unfortunately not all code is clean, and we still need to work with it.

## Overview

Code ReViewer is a Visual Studio Code extension that does two things:
1. It visualises the structure of the code, taking functions, files and calls into consideration (see [Graph view](./4-graph-view-interface.md#graph-view)).
2. It rates each function's quality using metrics. You can use [built-in metrics](./6-metrics-reference.md) or [define your own](./7-custom-metrics.md).

Below is a screenshot of an analysis of the Java package `org.apache.kafka.connect.json` defining a json serializer, deserializer and converter. Each method in the analized classes is represented as a graph node. Directed edges of the graph represent calls, with arrows pointing from the caller to the calee. Each node is colored according to values of metrics selected in the right side bar. In the bottom right there is a histogram of values of the selected metric.

![Code ReViewer overview](/images/guide/1-introduction-example.png)

Below is the same graph with methods grouped into files. Each file is a contour encopassing all its methods.

![Code ReViewer overview with contours](/images/guide/1-introduction-example-contours.png)
