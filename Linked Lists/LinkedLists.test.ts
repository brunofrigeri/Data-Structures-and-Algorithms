import LinkedList from './index'

describe('Linked Lists', () => {
  it('should be able to insert item to the tail of the list', () => {
    let linkedList = new LinkedList()

    linkedList.insertToTail(10)
    linkedList.insertToTail(20)

    expect(linkedList.head?.data).toBe(10)

    expect(linkedList.head?.next?.data).toBe(20)
    expect(linkedList.length).toBe(2)
  })

  it('should be able to insert item to the head of the list', () => {
    let linkedList = new LinkedList()

    linkedList.insertToHead(10)
    let oldHead = linkedList.head
    linkedList.insertToHead(20)

    expect(linkedList.head?.data).toBe(20)

    expect(linkedList.head?.next).toBe(oldHead)
  })

  it('should be able to remove item from tail', () => {
    let linkedList = new LinkedList()

    linkedList.insertToTail(10)
    linkedList.insertToTail(20)
    linkedList.insertToTail(30)
    linkedList.insertToTail(40)
    linkedList.insertToTail(50)
    expect(linkedList.length).toBe(5)

    const removedNode = linkedList.removeNode()
    expect(removedNode?.data).toBe(50)
    expect(linkedList.length).toBe(4)
  })
  it('should be able to reverse the linked list', () => {
    let linkedList = new LinkedList()
    linkedList.insertToTail(10)
    linkedList.insertToTail(20)
    linkedList.insertToTail(30)
    linkedList.insertToTail(40)
    linkedList.insertToTail(50)

    linkedList.reverse()

    expect(linkedList.head?.data).toBe(50)
  })
  // it.todo('should be able to remove the node following the linked list order')
})
