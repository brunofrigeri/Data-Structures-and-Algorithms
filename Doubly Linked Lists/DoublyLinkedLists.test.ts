import DoublyLinkedList from '.'

describe('Doubly Linked Lists', () => {
  describe('should be able to insert', () => {
    describe('to the tail', () => {
      let linkedList = new DoublyLinkedList()
      it('one item', () => {
        linkedList.insertToTail(10)
        expect(linkedList.length).toBe(1)
        expect(linkedList.head?.data).toBe(10)
      })
      it('two items', () => {
        linkedList.insertToTail(20)
        expect(linkedList.length).toBe(2)
        expect(linkedList.head?.data).toBe(10)
      })
      it('three or more items', () => {
        linkedList.insertToTail(30)
        linkedList.insertToTail(40)
        expect(linkedList.length).toBe(4)
        expect(linkedList.head?.data).toBe(10)
      })
    })
    describe('to the head', () => {
      let linkedList = new DoublyLinkedList()
      it('with one item', () => {
        linkedList.insertToHead(10)
        expect(linkedList.length).toBe(1)
        expect(linkedList.head?.data).toBe(10)
      })
      it('with two items', () => {
        linkedList.insertToHead(20)
        expect(linkedList.length).toBe(2)
        expect(linkedList.head?.data).toBe(20)
      })
      it('with three or more items', () => {
        linkedList.insertToHead(30)
        linkedList.insertToHead(40)
        expect(linkedList.length).toBe(4)
        expect(linkedList.head?.data).toBe(40)
      })
    })
  })

  it.skip('should be able to remove item from tail', () => {
    let linkedList = new DoublyLinkedList()
    linkedList.insertToHead(10)

    let removedNode = linkedList.removeFromTail()
    console.log(linkedList.head)
    expect(removedNode).toBe(10)
  })
  it.skip('should be able to remove item from head', () => {
    let linkedList = new DoublyLinkedList()
    linkedList.insertToHead(10)
    linkedList.insertToHead(20)
    let removedNode = linkedList.removeFromHead()
    expect(removedNode).toBe(20)
  })
  it.todo('should be able to remove item by position')
  it.todo('should be able to remove item by value')
  it.todo('should be able to reverse the list')
})
