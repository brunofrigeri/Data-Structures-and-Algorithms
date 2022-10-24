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

class LinkedList {
  head: LinkedListNode | null
  tail: LinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insert(node: LinkedListNode) {
    if (this.head === null) {
      this.head = node
    } else {
      if (this.tail) {
        this.tail.next = node
      }
    }

    this.tail = node
  }

  printData() {
    let llist = this.head

    while (llist !== null) {
      console.log(llist.data)
      llist = llist.next
    }
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

  removeNodeByPosition(position: number) {
    let llist = this.head

    let index = 0
    while (llist !== null) {
      if (index === position - 1) {
        if (llist.next !== null) {
          llist.next = llist.next.next
          return
        }
      } else {
        index++
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

function main() {
  const arrayOfNumbers = [20, 30, 60, 40, 33, 78, 63, 120, 108, 97]

  let linkedList = new LinkedList()
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    const node = new LinkedListNode(arrayOfNumbers[index])
    linkedList.insert(node)
  }

  linkedList.printData()
  console.log('\n')
  linkedList.removeNode()
  linkedList.printData()
  console.log('\n')
  linkedList.removeNodeByPosition(1)
  linkedList.printData()
  linkedList.reverse()
  linkedList.printData()
}

main()
