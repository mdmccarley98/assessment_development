// Extending a class without default constructor

class Parent {
    private String id;

    public Parent(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}

// Answer:
class Child extends Parent {
    public Child(String id) {
        super(id);
    }
}

// Distractor #1
// class Child extends Parent {
//     public Child(String id) {
//         super.id = id;
//     }
// }

// Distractor #2
// class Child extends Parent {

// }

// Distractor #3
// class Child extends Parent {
//     private String id;

//     public Child(String id) {
//         super();
//         this.id = id;
//     }
// }