# Distributed Computing 1: Helm Template


## Item ID
2086

## Claim

-   Claim: 1

## Threshold Probabilities
[0.10, 0.30, 0.40, 0.60]


## Claim Behavior (evidence)

> The `tpl` function allows developers to evaluate strings as templates inside a template. This is useful to pass a template string as a value to a chart or render external configuration files. Syntax: `{{ tpl TEMPLATE_STRING VALUES }}`  
> -- https://helm.sh/docs/howto/charts_tips_and_tricks/#using-the-tpl-function


```
distributed_computing/5-helm-template % helm install example ./example
NAME: example
LAST DEPLOYED: Tue Jun 29 12:57:01 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
distributed_computing/5-helm-template % kubectl get configmap example-configmap -o jsonpath='{.data.value}'
{{ index .Values.config 0 }}% 
```

https://helm.sh/docs/chart_template_guide/getting_started/



## Content Target
helm
kubernetes
templates

## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

You have the following helm configuration named "example" installed in your k8s cluster:

`./templates/example.yaml`
```
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ .Release.Name }}-configmap
data:
  value: "{{ tpl .Values.value . }}" 
```

`./values.yaml`
```
config:
  - "{{ index .Values.config 1 }}"
  - "item"
  - "{{ index .Values.config 0 }}"
value: "{{ index .Values.config 2 }}"
```


What is returned when you issue the following kubectl command?

```
kubectl get configmap example-configmap -o jsonpath='{.data.value}'
```

## Code Snippet (optional)



## Answer Key
```
{{ index .Values.config 0 }}
```


## Distractors
### 1.
```
item
```

### 2.
```
{{ tpl .Values.value . }}
```

### 3.
```
{{ index .Values.config 2 }}
```



## Common errors, misconceptions, or irrelevant information:

`tpl` executes the template in the string one time (not recursively).
The executed template in `value` returns the item at config index 2 `{{ index .Values.config 0 }`


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

