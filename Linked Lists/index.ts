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

export default class LinkedList {
  head: LinkedListNode | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
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
    this.length++
  }

  insertToTail(value: number) {
    const node = new LinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let llist = this.head
      while (llist !== null) {
        if (llist?.next === null) {
          llist.next = node
          break
        } else {
          llist = llist?.next
        }
      }
    }

    this.length++
  }

  removeNode() {
    let removedNode = null

    if (this.head?.next === null) {
      removedNode = this.head
      this.head = null
    } else {
      let llist = this.head
      while (llist !== null) {
        if (llist?.next === null) {
          removedNode = llist
          llist.next = null
        }

        llist = llist.next
      }
    }
    this.length--
    return removedNode
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
