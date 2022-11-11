# Room DAO Flows

## Item ID
2504

## Claim
Claim 2

## Claim Behavior (evidence)
> Observable queries can be used to easily connect app components to database updates https://developer.android.com/training/data-storage/room/async-queries#observable

## Content Target
- databases
- Room

## Target Level
Level 4: The candidate is well-versed in native Android development, along with both the underlying theory and practical application of Java/Kotlin and of the Android platform itself. They understand Android data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Consider the following Room data access object. What advantage does `loadBookFlowByAuthor` have over `loadBookListByAuthor`?

## Code Snippet (optional)
```kotlin
@Dao
interface LibraryDao {
    @Query("SELECT * FROM book WHERE authorId = :authorId")
    fun loadBookListByAuthor(authorId: Int): List<Book>

    @Query("SELECT * FROM book WHERE authorId = :authorId")
    fun loadBookFlowByAuthor(authorId: Int): Flow<List<Book>>
}
```

## Answer Key
`loadBookFlowByAuthor` offers an observable stream of books by author that notifies consumers when the set of books by a particular author changes.

## Distractors
### 1.
`loadBookFlowByAuthor` automatically cleans up database resources after the query resolves.

### 2.
`loadBookFlowByAuthor` makes queried data available to other applications/services.

### 3.
`loadBookFlowByAuthor` allows consumers of the data to paginate through results efficiently.

## Common errors, misconceptions, or irrelevant information:
- Developers may not know that observable variations of database queries exist and may attempt to implement less efficient mechanisms to watch for data updates, e.g. polling on a fixed timeout.
- DAO objects have nothing directly to do with interprocess communication
- Database resources don't need to be manually cleaned up when using Room

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
