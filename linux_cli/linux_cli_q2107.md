# Linux CLI 3: Backup Partition

## Item ID
2107

## Claim
Claim 3

## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)
> Let’s say that our system has a separate partition for our home directory at ‘sda2’ and we want to back it up to a file named ‘home_backup.img’ in our current directory.
>
>     dd if=/dev/sda2 of=home_backup.img

https://linuxhandbook.com/dd-command/

## Content Target
File Systems

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
`fdisk` reports the following information about a disk on your system:

```
Disk /dev/sda: 64 GiB, 68719476736 bytes, 134217728 sectors
Disk model: Ubuntu Linux 18.
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0x56eee60c

Device     Boot Start       End   Sectors Size Id Type
/dev/sda1  *     2048 134215679 134213632  64G 83 Linux
```

Which command will create an image of the first partition?

## Code Snippet (optional)

## Answer Key
```
sudo dd if=/dev/sda1 of=backup.img bs=4096
```

## Distractors
### 1.
```
sudo cp /dev/sda1 backup.img
```

### 2.
```
sudo ar /dev/sda1 backup.img
```

### 3.
```
sudo mkfs -t ext4 /dev/sda1 backup.img
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
