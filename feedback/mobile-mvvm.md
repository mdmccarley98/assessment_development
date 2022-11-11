# Mobile Architecture - MVVM

## Item ID
mobile-mvvm

## Claim
Mobile Architecture

## Claim Behavior (evidence)
* [Swift MVVM Tutorial](https://www.raywenderlich.com/34-design-patterns-by-tutorials-mvvm) - raywenderlich.com
* [Android MVVM design Pattern](https://www.journaldev.com/20292/android-mvvm-design-pattern) - jounaldev.com
* [Xamarin Forms MVVM](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm) - microsoft.com
* [MVVM](https://en.wikipedia.org/wiki/Model–view–viewmodel) - Wikipedia

## Content Target


## Cognitive Model


## Item Type


## Stem

Using the MVVM pattern can help organize code.

Which of the following classes in this pseudocode is the Model, View, and ViewModel?


## Code Snippet (optional)

```
class A extends Observable {
    B b;
    A(B b) {
        this.b = b;
    }
    void onMessagesOpen() {
        int totalMessages = 0;
        b.setUnreadMessages(totalMessages);
        notifyPropertyChanged("unreadMessages", totalMessages);
    }
    void onMessageReceived(string message) {
        int totalMessages = b.getUnreadMessages() + 1;
        b.setUnreadMessages(totalMessages);
        notifyPropertyChanged("unreadMessages", totalMessages);
    }
}
```

```
class B {
    int unreadMessages;
    int getUnreadMessages() {
        return unreadMessages;
    }
    void setUnreadMessages(int unreadMessages) {
        this.unreadMessages = unreadMessages;
    }
}
```

```
class C {
    Button messageCount;
    C() {
        messageCount = new Button();
    }
    void onNotifyUnreadMessages(int totalMessages) {
        button.text = totalMessages;
    }
}
```

## Answer Key

* A: ViewModel
* B: Model
* C: View


## Distractors

### 1.
* A: Model
* B: ViewModel
* C: View

### 2.
* A: ViewModel
* B: View
* C: Model

### 3.
* A: Model
* B: View
* C: ViewModel


## Common errors, misconceptions, or irrelevant information (optional):

* The Model is a domain model.  It owns the data values itself.  In this case, the number of unread messages.
* The View controls what the user sees on the screen, and forwards events like mouse clicks via data binding.
* The ViewModel works with the binder to communicate with the view, and it controls the Model directly.

A binder is not provided in this example.  In .NET XAML could be a binder, and Android has it's own Data Binding Library.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

