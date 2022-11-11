# Go Standard Library os File

## Item ID
go-standard-library-os-file

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
> OpenFile is the generalized open call; most users will use Open or Create instead. It opens the named file with specified flag (O_RDONLY etc.). If the file does not exist, and the O_CREATE flag is passed, it is created with mode perm (before umask). If successful, methods on the returned File can be used for I/O. If there is an error, it will be of type *PathError.
>
>     f, err := os.OpenFile("notes.txt", os.O_RDWR|os.O_CREATE, 0755)
>
> - [pkg os - OpenFile](https://golang.org/pkg/os/#OpenFile) - golang.org

>     % go run main.go
>     Error Writing:  write example.txt: bad file descriptor
> - [main.go example](./main.go)

## Content Target
* os
* os.OpenFile

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Using the "os" package to access files is a common task in go.

What does the following program do?

## Code Snippet (optional)

```golang
stream, err := os.OpenFile("example.txt", os.O_CREATE, 0755)
if err != nil {
    fmt.Println("Error Opening File: ", err)
    return
}
defer stream.Close()
if _, err := fmt.Fprintln(stream, "example"); err != nil {
    fmt.Println("Error Writing: ", err)
    return
}
fmt.Println("Done")
```

## Answer Key
```
Error Writing:  write example.txt: bad file descriptor
```

## Distractors

### 1.
* creates the `example.txt` file
* writes "example\n" to the file
* closes the file

### 2.
```
Error Writing:  write example.txt: file already closed
```

### 3.
```
Error Opening File: open example.txt: no such file or directory
```


## Common errors, misconceptions, or irrelevant information:
The `OpenFile` flags `os.O_WRONLY` or `os.O_RDWR` need to be specified in order to write to the file.  But they were missing.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

