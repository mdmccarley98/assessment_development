# Add Contact

## Item ID
1850

## Claim
Claim 3

## Claim Behavior (evidence)
> Whenever possible, don't add a permission to your app to complete an action that could be completed in another app. Instead, use an intent to defer the request to a different app that already has the necessary permission.
> 
> The following example shows how to use an intent to direct users to a contacts app instead of requesting the READ_CONTACTS and WRITE_CONTACTS permissions:
> -- https://developer.android.com/topic/security/best-practices?authuser=1#permissions-intents

>
> https://developer.android.com/training/contacts-provider/modify-data

## Content Target
* intents
* contacts


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You want to add a feature to your app to add someone to the phone's contact list.
Your app does NOT have WRITE_CONTACTS permission.

Which of the following will result in a contact being added to the phone's contacts?


## Code Snippet (optional)



## Answer Key
```java
Intent intent = new Intent(Intents.Insert.ACTION);
intent.setType(RawContacts.CONTENT_TYPE);
intent.putExtra(Intents.Insert.PHONE, "5551212");
startActivity(intent);
```

## Distractors
### 1.
```java
ContentResolver cr = getContentResolver();
ArrayList ops = new ArrayList<>();
ops.add(ContentProviderOperation.newInsert(Data.CONTENT_URI)
	.withValue(Data.RAW_CONTACT_ID, 0);
	.withValue(Data.MIMETYPE, Phone.CONTENT_ITEM_TYPE)
	.withValue(Phone.NUMBER, "5551212")
	.build());
cr.applyBatch(ContactsContract.AUTHORITY, ops);
```


### 2.
```java
ContentResolver cr = getContentResolver();
ContentValues values = new ContentValues();
values.put(Data.RAW_CONTACT_ID, 0);
values.put(Data.MIMETYPE, Phone.CONTENT_ITEM_TYPE);
values.put(Phone.NUMBER, "5551212");
Uri dataUri = cr.insert(Data.CONTENT_URI, values);
```


### 3.
```java
Intent intent = new Intent(Intent.ACTION_USER_INITIALIZE);
intent.setType(Contacts.CONTENT_TYPE);
intent.putExtra(Intents.Insert.PHONE, "5551212");
startActivity(intent);
```


## Common errors, misconceptions, or irrelevant information:
1. the app does not have permission to do this
2. the app does not have permission to do this
3. this is not the correct intent

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

