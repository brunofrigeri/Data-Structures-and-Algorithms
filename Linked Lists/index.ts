interface ILinkedListNode {
  data: number
  next: ILinkedListNode | null
}

class LinkedListNode implements ILinkedListNode {
  data: number
  next: ILinkedListNode | null = null

  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  head: LinkedListNode | null
  tail: LinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insertToHead(value: number) {
    const node = new LinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      const next = this.head
      this.head = node
      this.head.next = next
    }
  }

  insertToTail(value: number) {
    const node = new LinkedListNode(value)
    if (this.head === null) {
      this.head = node
    } else {
      if (this.tail) {
        this.tail.next = node
      }
    }

    this.tail = node
  }

  removeNode() {
    let llist = this.head

    while (llist !== null) {
      if (llist?.next?.next === null) {
        llist.next = null
      } else {
        llist = llist.next
      }
    }
  }

  reverse() {
    let llist = this.head
    let prev: LinkedListNode | null = null
    while (llist !== null) {
      let next = llist.next
      llist.next = prev
      prev = llist
      llist = next
    }
    this.head = prev
  }
}
