# Linux CLI - MAINTENANCE NOTIFICATION

## Item ID
2848

## Claim
3: sys_admin

## Target Skill Level
3

## Claim Behavior (evidence)
>wall is a command-line utility that displays a message on the terminals of all logged-in users. The messages can be either typed on the terminal or the contents of a file.

>https://linuxize.com/post/wall-command-in-linux/#:~:text=wall%20is%20a%20command%2Dline,user%20use%20the%20write%20command.

## Content Target
Scripting

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You need to start maintenance on a production server; you know other users are logged in but cannot easily identify who is logged in.
<br><br>
Which command do you use to notify other logged-in users that the system will enter maintenance in 20 minutes?

## Code Snippet (optional)

## Answer Key
`wall "The system will start maintenance in 20 minutes, please save your work and log off"`

## Distractors
### 1.
`echo "The system will start maintenance in 20 minutes, please save your work and log off" > /dev/tty*`

### 2.
`printf -A $(who) "The system will start maintenance in 20 minutes, please save your work and log off"`

### 3.
`/usr/bin/sendmail -T 20 "The system will start maintenance in 20 minutes, please save your work and log off" > /dev/tty*`

## Common errors, misconceptions, or irrelevant information:

Wall command is used to notify users in other terminals, whether SSH or console.
1. This command will return an error about bad redirection
2. printf does not send messages to other users, only existing terminal is displaying the message
3. sendmail send messages to users outside this server.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
