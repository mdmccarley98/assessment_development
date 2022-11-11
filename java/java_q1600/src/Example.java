import java.io.Serializable;
import java.util.Queue;

interface RobustWorkQueue<T extends Runnable & Serializable> extends Queue<T> { 

}


// Distractor #1
// interface RobustWorkQueue extends Queue<T extends Runnable & Serializable> { 

// }

// Distractor #2
// interface RobustWorkQueue<T implements Runnable & Serializable> implements Queue<T> { 

// }

// Distractor #3
// interface RobustWorkQueue<T extends Runnable, Serializable> extends Queue<T> { 

// }
