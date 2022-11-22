import { DoublyLinkedList, DoublyLinkedListNode } from '.'

describe('Doubly Linked Lists', () => {
  it('should be able to insert items to the tail of the list', () => {
    let linkedList = new DoublyLinkedList()

    linkedList.insertToTail(10)
    let oldHead = linkedList.head
    linkedList.insertToTail(20)

    expect(linkedList.head?.data).toBe(10)

    expect(linkedList.head?.next?.data).toBe(20)
    expect(linkedList.head?.next?.prev).toBe(oldHead)
  })

  it('should be able to insert items to the head of the list', () => {
    let linkedList = new DoublyLinkedList()

    linkedList.insertToHead(10)
    let oldHead = linkedList.head
    linkedList.insertToHead(20)

    expect(linkedList.head?.data).toBe(20)

    expect(linkedList.head?.next).toBe(oldHead)
  })

  it.todo('should be able to remove item from tail')
  it.todo('should be able to remove item from head')
  it.todo('should be able to remove item by position')
  it.todo('should be able to remove item by value')
  it.todo('should be able to reverse the list')
})
