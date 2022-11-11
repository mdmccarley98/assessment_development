# devops

## Item ID
q1042

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
linux

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What required field is missing from the following Terraform configuration?

## Code Snippet (optional)
```plain
provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

resource "aws_instance" "example" {
  ami = "ami-2757f631"
}
```

## Answer Key
`instance_type`

## Distractors

### 1.
`name`

### 2.
`availability_zone`

### 3.
`subnet_id`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

