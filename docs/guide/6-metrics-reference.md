# Metrics reference

Each metric is characterised by the following traits:
- A name, together with a path in metrics tree (e. g. "Halstead.Volume" means the name of a metric is "Volume" and it is in the "Halstead" section).
- One of two types: base or composite.
  - The value of a base metric is calculated based on the source code of a function (e. g. Lines of Code).
  - The value of a composite metric is calculated based only on the values of other metrics. (e. g. `Halstead.Length = Hasltead.N1 + Halstead.N2`) Metric's dependencies can be both base and composite.
- "Good" value, being the target for this metric. If a metric of a function has this value, it is colored in green.
- "Too low" and/or "Too high" values. If a metric of a function has any of these values, it is colored in red. Colors of values between "Good" and "Too low"/"Too high" are interpolated. Values further from "Good" than "Too low"/"Too bad" are colored red.

The "Good", "Too low" and "Too bad" values can be set in the interface. See [Histograms](./4-graph-view-interface.md#Histograms).

## Cyclomatic complexity

**Type:** <Badge type="note" text="base" vertical="middle" />

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

Number of independent execution paths through the function. Calculated as 1 + number of decision points. Decision points are branches, loops, and logical operators that can alter the flow of execution.

## Halstead metrics

### n1

**Type:** <Badge type="note" text="base" vertical="middle" />

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

Number of distinct operators used in the function. Operators are language-specific and can include arithmetic operators, logical operators, assignment operators, etc.

### n2

**Type:** <Badge type="note" text="base" vertical="middle" />

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

Number of distinct operands used in the function. Operands are language-specific and can include variable names, literals, function calls, etc.

### N1

**Type:** <Badge type="note" text="base" vertical="middle" />

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

Number of total operators used in the function. Operators are language-specific and can include arithmetic operators, logical operators, assignment operators, etc.

### N2

**Type:** <Badge type="note" text="base" vertical="middle" />

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

Number of total operands used in the function. Operands are language-specific and can include variable names, literals, function calls, etc.

### Vocabulary

**Type:** <Badge type="important" text="composite" vertical="middle" />

The total number of unique operators and operands in the function `(n1 + n2)`.

### Length

**Type:** <Badge type="important" text="composite" vertical="middle" />

The total number of operators and operands in the function `(N1 + N2)`.

### Estimated length

**Type:** <Badge type="important" text="composite" vertical="middle" />

Estimate of the length of the program based on its vocabulary: `n1 * log2(n1) + n2 * log2(n2)`

### Volume

**Type:** <Badge type="important" text="composite" vertical="middle" />

Total information of the program. `N * log2(n)`, where `N` is the program length and `n` is the program vocabulary.

### Difficulty

**Type:** <Badge type="important" text="composite" vertical="middle" />

Difficulty of the program to write or understand. `(n1 / 2) * (N2 / n2)`.

### Effort

**Type:** <Badge type="important" text="composite" vertical="middle" />

The effort required to write or understand the program. The product of the program difficulty and volume.

### Time

**Type:** <Badge type="important" text="composite" vertical="middle" />

The estimated time required to write the program. The effort divided by 18 seconds.

### Bugs

**Type:** <Badge type="important" text="composite" vertical="middle" />

The estimated number of bugs delivered in the code. The effort raised to the power of 2/3 divided by 3000.

## Lines of Code

**Available in:** <Badge type="warning" text="Java" vertical="middle" /><Badge type="info" text="C" vertical="middle" /><Badge type="tip" text="Python" vertical="middle" />

**Type:** <Badge type="note" text="base" vertical="middle" />

Number of lines in the function, including signature, blank lines, comments and the trailing brace.