# Language support

Below is the list of languages supported by CRV.

## Java

**Extensions:** <Badge type="warning" text=".java" vertical="middle" />

Resolving the calls between methods is based on the package name, object type (if present), and method name. Overloaded methods are represented as a single node in the graph with many definitions (see [Selected function details](./4-graph-view-interface.md#selected-function-details)).

## Python

**Extensions:** <Badge type="tip" text=".py" vertical="middle" />

Currently functions and methods are identified only by their name. This means that if there are two functions with the same name, they will be represented as a single node in the graph with many definitions (see [Selected function details](./4-graph-view-interface.md#selected-function-details)).

## C

**Extensions:** <Badge type="info" text=".c" vertical="middle" />, <Badge type="info" text=".h" vertical="middle" />

Currently functions and methods are identified only by their name. This means that if there are two functions with the same name, they will be represented as a single node in the graph with many definitions (see [Selected function details](./4-graph-view-interface.md#selected-function-details)).