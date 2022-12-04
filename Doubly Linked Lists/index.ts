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

export default class DoublyLinkedList {
  head: DoublyLinkedListNode | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  insertToHead(value: number) {
    const node = new DoublyLinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let next = this.head
      this.head = node
      this.head.next = next
      this.head.prev = null
    }

    this.length++
  }

  insertToTail(value: number) {
    const node = new DoublyLinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let doublyLinkedList = this.head

      while (doublyLinkedList !== null) {
        if (doublyLinkedList?.next === null) {
          let prev = doublyLinkedList
          doublyLinkedList.next = node
          doublyLinkedList.next.prev = prev
          break
        } else {
          doublyLinkedList = doublyLinkedList.next
        }
      }
    }

    this.length++
  }

  removeFromHead() {
    let removedNode = null

    if (this.head !== null) {
      removedNode = this.head
      let next = this.head.next
      this.head = next

      if (this.head?.prev) this.head.prev = null
    }

    this.length--
    return removedNode
  }

  removeFromTail() {
    let removedNode = null

    if (this.head?.next === null) {
      removedNode = this.head
      this.head = null
    } else {
      let dllist = this.head
      while (dllist !== null) {
        if (dllist?.next === null) {
          removedNode = dllist
          dllist = null
        } else {
          dllist = dllist?.next
        }
      }
    }

    this.length--
    return removedNode
  }

  reverse() {}
}
