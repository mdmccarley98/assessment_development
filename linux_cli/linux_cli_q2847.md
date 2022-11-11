# Linux CLI - TRANSIENT TIMERS

## Item ID
2847

## Claim
3: sys_admin

## Target Skill Level
3

## Claim Behavior (evidence)
>Transient timer units
>
>One can use systemd-run to create transient .timer units. That is, one can set a command to run at a specified time without having a service file. For example the following command touches a file after 30 seconds:

>systemd-run --on-active=30 /bin/touch /tmp/foo
>https://wiki.archlinux.org/title/Systemd/Timers

## Content Target
Scripting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
As a Junior system administrator, you are shadowing the Level 3 support team on a production issue. The system you are working with has been hardened with STIG Security Profile, and its inactivity timeout is 900 seconds.
<br><br>
The Senior engineer tells you to run a specific script one time only 20 minutes from now. Which command will accomplish this?

## Code Snippet (optional)

## Answer Key
`systemd-run --on-active=1200 /usr/bin/ts-script.sh`

## Distractors
### 1.
`echo "20 * * * * root /usr/bin/ts-script.sh" >> /etc/crontab`

### 2.
`sleep 1200 && /usr/bin/ts-script.sh`

### 3.
`/usr/bin/ts-script.sh | at +20 minutes`

## Common errors, misconceptions, or irrelevant information:
Both systemd --on-active and at command are used for one-time runs, but the AT command syntax is not correct.

1. This will run the same command every hour past 20 minutes
2. This will timeout due to inactivity
3. The AT syntax is incorrect

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
