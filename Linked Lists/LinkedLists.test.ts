import { LinkedList } from '.'

describe('Linked Lists', () => {
  it('should be able to insert item to the tail of the list', () => {
    let linkedList = new LinkedList()

    linkedList.insertToTail(10)
    linkedList.insertToTail(20)

    expect(linkedList.head?.data).toBe(10)

    expect(linkedList.head?.next?.data).toBe(20)
  })

  it('should be able to insert item to the head of the list', () => {
    let linkedList = new LinkedList()

    linkedList.insertToHead(10)
    let oldHead = linkedList.head
    linkedList.insertToHead(20)

    expect(linkedList.head?.data).toBe(20)

    expect(linkedList.head?.next).toBe(oldHead)
  })

  it.todo('should be able to remove item by position')
  it.todo('should be able to reverse the linked list')
  it.todo('should be able to remove the node following the linked list order')
})
