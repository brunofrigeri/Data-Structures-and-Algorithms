# Linked Lists
Linked Lists are unidirectional lists. Usually the nodes are built in the following structure:
```
data: number
next: Node
```

![LinkedList](https://user-images.githubusercontent.com/39895418/205640537-37d56524-b958-4ffb-bf9d-56a2258f6ffd.jpeg)

## Inserting

### To Head
Inserting elements to the head of a Linked List is the easier way to insert elements at all, but why is that? Let's understand:

![INSERTING TO HEAD](https://user-images.githubusercontent.com/39895418/205642075-0f0c517e-a361-4e3e-863a-15e215e0b811.jpeg)

As we see in the draw, to insert an item to the `head` of a Linked List we always need to reference head to the new node and from this node, next as what we used to have.
So in coding language, following the example above, we would have something like:

```
if (head == null) {
  // If the head is null means we can reference the head to the new node
  head = node
} else {
  const next = head
  head = node
  head.next = next
}
```

### To Tail
Inserting elements to the tail requires a bit more understanding. The first thing we need to figure is that, for inserting in the tail we need to know which node is the last, but how?
For finding the last node, we can run a loop until we find the node where the next field is equals to null.

![INSERTING TO TAIL](https://user-images.githubusercontent.com/39895418/205643089-ae4fdaed-60b9-442b-8881-98c1de90254c.jpeg)

Following the draw above, in code terms we would do something like:
```
if (head == null) {
  // If the head is null means we can reference the head to the new node
  head = node
} else {
  var list = head
  while (list != null) {
    if (list.next == null) {
      // We have found the last node, now we can insert here
      list.next = node
      break
    }
    
    // Going to next node
    list = list.next
  }
}
```

## Removing

### From Head

### From Tail
