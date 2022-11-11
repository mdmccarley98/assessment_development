# User Agent

## Item ID
backend-http

## Claim
Backend web

## Claim Behavior (evidence)
- [HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) - MDN
- [RFC 822](https://tools.ietf.org/html/rfc822) - IETF definition

## Content Target
HTTP Protocol

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem

You are making a web server to let you know if mail has been delivered to your mailbox.
If it's full then it responds "Full" and if it's empty it responds "Empty".

What is the HTTP response of your server?


## Code Snippet (optional)


## Answer Key
```
HTTP/1.0 200 OK
Content-Type: text/plain
Content-Length: 4
Date: Wed, 07 Oct 2020 23:03:03 GMT

Full
```

## Distractors

### 1.
```
GET / HTTP/1.1
Host: example.com

Full
```

### 2.
```
GET / HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15
```

### 3.
```
<html><body>Full</body></html>
```


## Common errors, misconceptions, or irrelevant information (optional):

An HTTP request is sent by a browser to the server.  An HTTP response is sent by the server to a browser.

HTTP is a text protocol, you can easily emulate a browser going to example.com by running `telnet example.com` and then typing the following and pressing return twice at the end.
```
GET / HTTP/1.1
Host: example.com

```
The text above is a valid raw HTTP request, and the server will give you a raw HTTP response.

The HTTP protocol does not need to deal with HTML at all.  For example a REST API that responds with JSON isn't returning HTML, it's returning JSON.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

