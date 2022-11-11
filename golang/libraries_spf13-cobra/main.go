package main

import (
	"fmt"

	"github.com/spf13/cobra"
)

func main() {
	root := &cobra.Command{Use: "colors"}
	green := &cobra.Command{
		Use: "green",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Green")
		},
	}
	root.AddCommand(green)
	root.Execute()
}

// func distractor1() {
// 	green := cobra.Bool("green", false, "green color")
// 	cobra.Parse()
// 	if *green {
// 		fmt.Println("Green")
// 	}
// }

// func distractor2() {
// 	root := &cobra.Command{
// 		Use: "colors",
// 		SubCommands: []*cobra.Command{
// 			&cobra.Command{ Use: "green" }
// 		}
// 	}
// 	root.Execute()
// 	if root.Bool("green") {
// 		fmt.Println("Green")
// 	}
// }

// func distractor3() {
// 	if args, err := cobra.Command(`colors [green]
// 			green	(default false)	prints the word Green`); err != nil {
// 		if args.Bool("green") {
// 			fmt.Println("Green")
// 		}
// 	}
// }
