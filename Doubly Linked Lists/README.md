# Doubly Linked Lists
Doubly Linked Lists are bidirectional lists. Usually the nodes are built in the following structure:
```
data: number
next: Node
prev: Node
```

![DoublyLinkedList](https://user-images.githubusercontent.com/39895418/205931814-75bf9c7d-88b3-4d48-be3c-27c571a89ec7.jpeg)


## Inserting

### To Head
Inserting elements to the head of a Doubly Linked List can be done by shifting the current element to the next one and adding the `prev` field of the current element pointing to the new node. 

![DL INSERT HEAD](https://user-images.githubusercontent.com/39895418/205934546-77e2d946-eaa4-432f-b219-82402ec27ad8.jpeg)

Codewise we can do following something like the snippet below:
```
if (head == null) {
  head = node
} else {
  const next = head
  head = node
  head.next = next;  
}
```

### To Tail
Inserting elements to the tail of a Doubly Linked List can be done by finding the last element of the list and then adding a node as the next element of the last.

![DL INSERT TAIL](https://user-images.githubusercontent.com/39895418/205934577-70fbdf88-1972-4fe9-879b-2fda366734b0.jpeg)

Codewise we can do following something like the snippet below:
```
if (head == null) {
  head = node
} else {
  var list = head
  while (list != null) {
    if (list.next == null) {
      list.next = node
      break
    }
    list = list.next
  }
}
```

## Removing
Removing elements can be done by removing the reference to the node. 

### From Head
The way to do it, is basically pointing the head to the next element, and removing the reference from the `prev` property of the next element from the element we're removing.

![DL REMOVE HEAD](https://user-images.githubusercontent.com/39895418/205934637-af61da9c-aa7e-4764-b5ee-fd540714223a.jpeg)

Codewise we can do following something like the snippet below:
```
if (head.next == null) {
  head = null
} else {
  const next = head.next
  head = next
  head.prev = null
}
```

### From Tail
We can achieve removing from the tail by finding the element before the last and removing all references to the last, which would basically be achieved by having the `next` field as null.

![DL REMOVE TAIL](https://user-images.githubusercontent.com/39895418/205934685-ffa7e6fd-42d9-428c-9a35-0e67af593070.jpeg)

Codewise we can do following something like the snippet below:
```
if (head.next == null) {
  head = null
} else {
  var list = head
  while (list != null) {
    if (list.next.next == null) {
      list.next = null
      break;
    }
    
    list = list.next
  }
}
```
