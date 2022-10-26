interface IDoublyLinkedListNode {
  data: number
  next: IDoublyLinkedListNode | null
  prev: IDoublyLinkedListNode | null
}

class DoublyLinkedListNode implements IDoublyLinkedListNode {
  data: number
  next: IDoublyLinkedListNode | null = null
  prev: IDoublyLinkedListNode | null = null

  constructor(data: number) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null
  tail: DoublyLinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insert(node: DoublyLinkedListNode) {
    if (this.head === null) {
      this.head = node
    } else {
      if (this.tail) {
        this.tail.next = node
        this.tail.next.prev = this.tail
      }
    }

    this.tail = node
  }

  print() {
    let dllist = this.head
    while (dllist !== null) {
      console.log(dllist.data)
      dllist = dllist.next
    }
  }

  removeFromTail() {
    let dllist = this.head

    while (dllist !== null) {
      if (dllist?.next?.next === null) {
        dllist.next = null
      } else {
        dllist = dllist.next
      }
    }
  }

  removeByValue() {}

  reverse() {}
}

function doublyLinkedListsMain() {
  const arrayOfNumbers = [20, 30, 60]

  let linkedList = new DoublyLinkedList()
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    const node = new DoublyLinkedListNode(arrayOfNumbers[index])
    linkedList.insert(node)
  }

  linkedList.removeFromTail()
  linkedList.print()
}

doublyLinkedListsMain()
