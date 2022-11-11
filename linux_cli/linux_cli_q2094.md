# Linux CLI 3: EFI UUID

## Item ID
2094

## Claim
Claim 3

## Threshold Probabilities
[0.05, 0.20, 0.30, 0.50]

## Claim Behavior (evidence)
> and add the root partition path (example: /dev/sda2) or its PARTUUID to (CONFIG_CMDLINE).  
> ...  
> Using root=PARTUUID= might be preferable. To find out use blkid:
>
>     # blkid | grep sda2
>     /dev/sda2: UUID="d1e0c1e0-3a40-42c5-8931-cfa2c7deae32" TYPE="ext4" PARTUUID="adf55784-15d9-4ca3-bb3f-56de0b35d88d"
>
> -- https://wiki.gentoo.org/wiki/EFI_stub

> You're confusing filesystem UUIDs with partition GUIDs. The former are stored within the filesystems and can be used in Linux's /etc/fstab file or by the mount command via the UUID= parameter.  
> -- https://askubuntu.com/questions/472714/wrong-efi-system-partition-guid

Authoritative Answer:
>  The boot manager must use the GUID or signature and partition number in the hard drive device path to match it to a device in the system. If the drive supports the GPT partitioning scheme the GUID in the hard drive media device path is compared with the UniquePartitionGuid field of the GUID Partition Entry  
> -- https://uefi.org/sites/default/files/resources/UEFI_Spec_2_9_2021_03_18.pdf

## Content Target
- File Systems
- Troubleshooting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Your system won't boot. Below are the output of `blkid` and `/boot/loader/entries/linux.conf`:

```bash
# blkid
/dev/sda2: UUID="a151e99a-4242-4480-b776-8b29c94f05c0" TYPE="swap" PARTUUID="77a0b265-7758-451f-233c98c100f0"
/dev/sda3: UUID="4731a29c-fc40-4a08-962e-5e58aca9ba44" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="41d5ef85-afe0-c04e-ba87-cf27cf948ef0"
/dev/sda1: UUID="857A-B2D3" BLOCK_SIZE="512" TYPE="vfat" PARTUUID="e094f4e7-3afb-9594-af6d-dd417f5b15b1"


# /boot/loader/entries/linux.conf
title	Linux
linux	/vmlinuz-linux
initrd	/initramfs-linux.img
options root=76ffa1fa-ca9c-4ed5-9937-75bb3e5e0031 rootfstype=ext4 add_efi_memmap
```

The `/dev/sda1` is mounted at `/boot`. What change needs to be done to make the system boot?

## Code Snippet (optional)

## Answer Key
```
options root=PARTUUID=41d5ef85-afe0-c04e-ba87-cf27cf948ef0 rootfstype=ext4 add_efi_memmap
```

## Distractors
### 1.
```
options root=4731a29c-fc40-4a08-962e-5e58aca9ba44 rootfstype=ext4 add_efi_memmap
```

### 2.
```
options root=857A-B2D3 rootfstype=vfat add_efi_memmap
```

### 3.
```
options root=PARTUUID=e094f4e7-3afb-9594-af6d-dd417f5b15b1 rootfstype=vfat add_efi_memmap
```

## Common errors, misconceptions, or irrelevant information:
The EFI filestystem must be FAT, so that any motherboard's UEFI can read it.
UEFI will load the settings from the first EFI partition, so at the point that it reads the configuration
file, it already knows where the EFI partition is located, and now wants to know which system to boot.

Since `/dev/sda1` is mounted on `/boot`, then the root `/` must be mounted on `/dev/sda3`, and the swap partition is not for running a filesystem.

A common error is to use the UUID of the partition instead of the PARTUUID in the EFI.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
