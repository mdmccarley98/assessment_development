# WebSocket Handshake

## Item ID
2705

## Claim
2

## Target Skill Level
3

## Claim Behavior (evidence)
[RFC 6455 Section 4](https://datatracker.ietf.org/doc/html/rfc6455#section-4).

## Content Target
WebSockets

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You're involved with creating the backend for a multiplayer game that also features in-game chat. Gameplay data and chat data are both sent to and from your server via WebSocket. Some users join the chat or the game, but not both.
<br>
What detail of a WebSocket handshake, like in the example below, would allow you to direct the user to the chat or to the game applications when making requests against your server without combining the two?

## Code Snippet (optional)
```plain
GET /game HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: xmpp
```

## Answer Key
The interpretation of the Request URI is up to your server, so `/game` could instead be something like `/chat`, allowing the one server to handle multiple different WebSocket applications.

## Distractors
### 1.
Setting the `Sec-WebSocket-Protocol` to `chat` would multiplex the connection.

### 2.
Setting `Sec-WebSocket-Version` to a different version would control what service handles the connection.

### 3.
Making a `POST` request instead of `GET` would allow us to send details regarding what kind of connection we want to make, allowing the server to connect us with the appropriate WebSocket application.

## Common errors, misconceptions, or irrelevant information:
Many aspects of the WebSocket handshake are parts of the protocol. Others are specific to your server and implementation - knowing which is an essential part of the basic implementation.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
