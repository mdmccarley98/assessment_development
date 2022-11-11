# Low-Level: Registry File


## Item ID
low-level-registry-file


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> To delete a registry key with a .reg file, put a hyphen (-) in front of the RegistryPath in the .reg file. For example, to delete the Test subkey from the following registry key

https://support.microsoft.com/en-us/topic/how-to-add-modify-or-delete-registry-subkeys-and-values-by-using-a-reg-file-9c7f37cf-a5e9-e1cd-c4fa-2a26218a1a23


## Content Target
* windows registry
* installing and uninstalling


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem

The following file named `example.reg` is executed, by double clicking on it, on a Windows computer.

What happens?

## Code Snippet (optional)

```ini
Windows Registry Editor Version 5.00

[-HKEY_CURRENT_USER\SOFTWARE\TripleByte]
"Example"=dword:00000003
"Example2"=dword:00000015


```


## Answer Key

The `HKEY_CURRENT_USER\SOFTWARE\TripleByte` key and it's contents are **deleted**.

## Distractors
### 1.

A key named `HKEY_CURRENT_USER\SOFTWARE\TripleByte` is **added**  
Two 32-bit values are **added** in **hexadecimal** form:
* `Example` set to 0x00000003
* `Example2` set to 0x00000015


### 2.

A key named `HKEY_CURRENT_USER\SOFTWARE\TripleByte` is **added**  
Two 32-bit values are **added** in **decimal** form:
* `Example` set to 3
* `Example2` set to 15


### 3.

**If** the key named `HKEY_CURRENT_USER\SOFTWARE\TripleByte` exists  
Two 32-bit values are **updated** in **hexadecimal** form:
* `Example` set to 0x00000003
* `Example2` set to 0x00000015


## Common errors, misconceptions, or irrelevant information:

`.reg` files can be used in installer scripts to set up an installation, or remove an installation.
This is something a low-level windows developer might have experience with if they maintained an installer.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

