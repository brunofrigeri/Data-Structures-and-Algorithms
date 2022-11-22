interface IDoublyLinkedListNode {
  data: number
  next: IDoublyLinkedListNode | null
  prev: IDoublyLinkedListNode | null
}

export class DoublyLinkedListNode implements IDoublyLinkedListNode {
  data: number
  next: IDoublyLinkedListNode | null = null
  prev: IDoublyLinkedListNode | null = null

  constructor(data: number) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null
  tail: DoublyLinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insertToHead(value: number) {
    const node = new DoublyLinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let prev = this.head.prev
      let next = this.head
      this.head = node
      this.head.next = next
      this.head.prev = prev
    }
  }

  insertToTail(value: number) {
    const node = new DoublyLinkedListNode(value)

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

  removeFromHead() {}

  removeByValue() {}

  reverse() {}
}
