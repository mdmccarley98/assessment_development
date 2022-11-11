# C# 🎵 3 Standard: ReadAll


## Item ID
1897

## Claim
-   Claim 3 (Standard Library): Use major features of the C# standard library. I/O, exceptions, threads, type casting, etc.


## Claim Behavior (evidence)

```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\CreateBigFile> dotnet run
Creating ../big-file.db
Writing sqlite header
Writing gigabyte 1
Writing gigabyte 2
Writing gigabyte 3
Writing gigabyte 4
Writing gigabyte 5
Writing gigabyte 6
Writing gigabyte 7
Writing gigabyte 8
Writing gigabyte 9
Writing gigabyte 13
Writing gigabyte 14
Writing gigabyte 16
Writing gigabyte 17
Writing gigabyte 19
Writing gigabyte 20
Writing gigabyte 24
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Example> dotnet run
Testing ../big-file.db
Out of memory.
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Key> dotnet run ../big-file.db
Testing ../big-file.db
True
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Distractor1> dotnet run ../big-file.db
Testing ../big-file.db
Out of memory.
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Distractor2> dotnet run ../big-file.db
Testing ../big-file.db
False
Testing ../big-file.db
Unhandled exception. System.AggregateException: One or more errors occurred. (The length cannot be greater than the capacity. (Parameter 'valueCount'))
 ---> System.ArgumentOutOfRangeException: The length cannot be greater than the capacity. (Parameter 'valueCount')
   at System.Text.StringBuilder.Append(Char* value, Int32 valueCount)
   at System.Text.StringBuilder.Append(Char[] value, Int32 startIndex, Int32 charCount)
   at System.IO.File.InternalReadAllTextAsync(String path, Encoding encoding, CancellationToken cancellationToken)
   --- End of inner exception stack trace ---
   at System.Threading.Tasks.Task.ThrowIfExceptional(Boolean includeTaskCanceledExceptions)
   at System.Threading.Tasks.Task.Wait(Int32 millisecondsTimeout, CancellationToken cancellationToken)
   at System.Threading.Tasks.Task.Wait()
   at Example.Program.IsSQLite3(String filename) in C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Distractor3\Program.cs:line 13
   at Example.Program.Main(String[] args) in C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-readall\Distractor3\Program.cs:line 21
```


## Content Target
* reading files


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
SQLite files have a "magic number" at the beginning that is always the same.
You're debugging a program with the `IsSQLite3` function below.

Sometimes the program exits with an error: "Out of memory."

How do you fix the problem?


## Code Snippet (optional)
```csharp
const string SQLITE3_SIG = "SQLite format 3";

static bool IsSQLite3(string filename) {
    var text = File.ReadAllText(filename);
    return text.StartsWith(SQLITE3_SIG);
}
```


## Answer Key
```csharp
static bool IsSQLite3(string filename) {
    var buffer = new byte[SQLITE3_SIG.Length];
    using (var reader = File.Open(filename, FileMode.Open)) {
        reader.Read(buffer, 0, buffer.Length);
    }
    string result = System.Text.Encoding.UTF8.GetString(buffer);
    return result.StartsWith(SQLITE3_SIG);
}
```


## Distractors
### 1.
```csharp
static bool IsSQLite3(string filename) {
    var lines = File.ReadAllLines(filename);
    foreach(var line in lines) {
        return line.StartsWith(SQLITE3_SIG);
    }
    return false;
}
```


### 2.
```csharp
static bool IsSQLite3(string filename) {
    try {
        var text = File.ReadAllText(filename);
        return text.StartsWith(SQLITE3_SIG);
    } catch (OutOfMemoryException) {
        return false;
    }
}
```


### 3.
```csharp
static bool IsSQLite3(string filename) {
    var task = File.ReadAllTextAsync(filename);
    task.Wait();
    return task.Result.StartsWith(SQLITE3_SIG);
}
```


## Common errors, misconceptions, or irrelevant information:

All the distractors and the example work for small files like "[example.db](./example.db)" (included in this folder).

If you just read one line at a time and the file has no `\n` it will still run out of memory.

1. This reads all the lines before even getting to the foreach.
2. This returns False after running out of memory.
3. This reads the entire file, just like the example.

The fact that CreateBigFile doesn't create a valid SQLite file is irrelevant, I didn't want to have to code up inserting tons of data to generate a giant sqlite file.

Theoretically being unable to read 16 bytes in the Key would also cause it to crash.  But in practice it would require setting up the system very carefully to have enough memory to start the program, but not enough to either allocate 16 bytes, or however much `FileOpen` or `GetString(byte[])` allocates.  So IMO it's not possible to write a test to reproduce that theoretical situation, and that theory shows lack of understanding about how much memory is saved by only reading a portion of the entire file.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

