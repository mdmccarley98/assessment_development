# Warehousing/ETL - Basics - Identifying Relationship

## Item ID
2598

## Claim
Claim 1

## Threshold Probabilities
[0.30, 0.40, 0.60, 0.80]

## Claim Behavior (evidence)
[Weak Entity](https://en.wikipedia.org/wiki/Weak_entity)

## Content Target
Database design

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Consider a music service where users can create playlists containing an ordered list of songs. Each song has an artist and a genre. Given the following simplified table definitions, which two tables have an "identifying relationship"?

## Code Snippet (Optional)
```
TABLE User (
    email
    PRIMARY KEY (email)
);
TABLE Playlist (
    playlist_id,
    user_email, 
    name,
    PRIMARY KEY (playlist_id)
);
TABLE PlaylistEntry (
    playlist_id, 
    index, 
    song_id,
    PRIMARY KEY (playlist_id, song_id)
);
TABLE Genre (
    id,
    PRIMARY KEY (id)
);
TABLE Artist (
    id,
    PRIMARY KEY (id)
);
TABLE Song (
    id, 
    genre_id, 
    artist_id, 
    name,
    PRIMARY KEY (id)
);
```

## Answer Key
Playlist and PlaylistEntry

## Distractors
### 1.
Song and Genre

### 2.
Artist and Song

### 3.
PlaylistEntry and Song

## Common errors, misconceptions, or irrelevant information (Optional):
In an identifying relationship, the child is a weak entity (cannot be uniquely identified by only its attributes) and the child's primary key contains the parent's primary key.

In this case, PlaylistEntry has no meaning independent of a corresponding Playlist, and its primary key contains the playlist_id.

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
