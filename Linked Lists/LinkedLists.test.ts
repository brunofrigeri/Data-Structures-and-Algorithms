import LinkedList from './index'

describe('Linked Lists', () => {
  describe('should be able to insert', () => {
    describe('to the tail', () => {
      let linkedList = new LinkedList()
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
      let linkedList = new LinkedList()
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

  describe('should be able to remove', () => {
    describe('from the tail', () => {
      let linkedList = new LinkedList()

      it('one item', () => {
        linkedList.insertToTail(10)
        const removedNode = linkedList.removeNode()
        expect(removedNode?.data).toBe(10)
        expect(linkedList.length).toBe(0)
        expect(linkedList.head).toBeNull()
      })

      it('two items', () => {
        linkedList.insertToTail(10)
        linkedList.insertToTail(20)
        const removedNode = linkedList.removeNode()
        expect(removedNode?.data).toBe(20)
        expect(linkedList.length).toBe(1)
        expect(linkedList.head?.data).toBe(10)
      })

      it('three or more items', () => {
        linkedList.insertToTail(20)
        linkedList.insertToTail(30)
        linkedList.insertToTail(40)
        const removedNode = linkedList.removeNode()
        expect(removedNode?.data).toBe(40)
        expect(linkedList.length).toBe(3)
        expect(linkedList.head?.data).toBe(10)
      })
    })
    it.todo('from the head')
  })

  describe('should be able to reverse', () => {
    let linkedList = new LinkedList()
    it('with one item', () => {
      linkedList.insertToTail(10)
      linkedList.reverse()
      expect(linkedList.head?.data).toBe(10)
    })
    it('with two items', () => {
      linkedList.insertToTail(20)
      linkedList.reverse()
      expect(linkedList.head?.data).toBe(20)
    })
    it('with three or more items', () => {
      linkedList.insertToTail(30)
      linkedList.insertToTail(40)
      linkedList.insertToTail(50)
      linkedList.reverse()
      expect(linkedList.head?.data).toBe(50)
    })
  })
})
