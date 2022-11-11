# Go Libraries github.com/spf13/cobra

## Item ID
go-libraries-spf13-cobra

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
>     var rootCmd = &cobra.Command{
>          Use:   "hugo",
>          Short: "Hugo is a very fast static site generator",
>          Long: `A Fast and Flexible Static Site Generator built with
>                      love by spf13 and friends in Go.
>                      Complete documentation is available at http://hugo.spf13.com`,
>          Run: func(cmd *cobra.Command, args []string) {
>              // Do Stuff Here
>          },
>     }
> - [package github.com/spf13/cobra](https://github.com/spf13/cobra)

## Content Target
* package "github.com/spf13/cobra"

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You're writing a command line app.  You want it to print "Green" if the "green" argument is given.

Using the "spf13/cobra" package, how do you write this app?

## Code Snippet (optional)


## Answer Key
```golang
root := &cobra.Command{Use: "colors"}
green := &cobra.Command{
    Use: "green",
    Run: func(cmd *cobra.Command, args []string) {
        fmt.Println("Green")
    },
}
root.AddCommand(green)
root.Execute()
```

## Distractors

### 1.
```golang
green := cobra.Bool("green", false, "green color")
cobra.Parse()
if *green {
    fmt.Println("Green")
}
```

### 2.
```golang
root := &cobra.Command{
    Use: "colors",
    SubCommands: []*cobra.Command{
        &cobra.Command{ Use: "green" }
    }
}
root.Execute()
if root.Bool("green") {
    fmt.Println("Green")
}
```

### 3.
```golang
if args, err := cobra.Command(`colors [green]
        green	(default false)	prints the word Green`); err != nil {
    if args.Bool("green") {
        fmt.Println("Green")
    }
}
```

## Common errors, misconceptions, or irrelevant information:

Using cobra like a framework helps you to keep cli apps organized.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

