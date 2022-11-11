# iOS: UITableView rows


## Item ID
1819

## Claim
-   Claim/PI 2: The candidate understands some of the basics of native iOS development and Objective-C or Swift. They show some familiarity with UI development tools, common iOS interface components like UITableView, and simple performance optimization strategies. However, they display little or no knowledge of troubleshooting techniques, iOS data persistence methods, or the internals of iOS as an operating system.


## Claim Behavior (evidence)

> ## tableView(_:numberOfRowsInSection:)
> Tells the data source to return the number of rows in a given section of a table view.
> https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614931-tableview

> Table views manage only the presentation of their data; they do not manage the data itself. To manage the data, you provide the table with a data source object—that is, an object that implements the UITableViewDataSource protocol. A data source object responds to data-related requests from the table. It also manages the table's data directly, or coordinates with other parts of your app to manage that data. Other responsibilities of the data source object include:
> * Reporting the number of sections and rows in the table.
> * Providing cells for each row of the table.
> https://developer.apple.com/documentation/uikit/uitableviewdatasource

## Content Target
* UITableView


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
You're working on an app with a `UITableView`.

How do you set the number of rows in a section?


## Code Snippet (optional)



## Answer Key
Return the number of rows for the section in the `tableView(_:numberOfRowsInSection:)` function of the data source.


## Distractors
### 1.
Call the `UITableView.dataSource.numberOfRowsInSection(_ section:rows:)` function with the number of rows for the section.


### 2.
Set the `rows` property of the `UITableViewSection` in the `UITableView.sections` list.


### 3.
Call the `UITableView.setNumberOfRowsInSection(_ section:rows:)` function with the number of rows in the section.


## Common errors, misconceptions, or irrelevant information:
Knowing the UITableView API is essential to everyday iOS development for many iOS apps.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

