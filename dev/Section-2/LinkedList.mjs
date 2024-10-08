class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 연결리스트 시작위치
    this.count = 0; // 총 저장된 노드 수
  }

  printAll() {
    let currentNode = this.head;
    let text = [];
    while (currentNode != null) {
      text.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0)
      throw new Error("범위를 넘어갔습니다.");

    let newNode = new Node(data);

    // 리스트의 가장 앞부분에 삽입하는 경우
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 중간에 삽입하는 경우
      let currentNode = this.head;
      // index의 앞 Node까지 이동 => i < index -1
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next; // 새로운 Node에 index Node의 next넣기
      currentNode.next = newNode; // index Node의 next에 새로운 Node 넣기
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0)
      throw new Error("범위를 넘어갔습니다.");

    let currentNode = this.head;

    // insertAt과 거의 같음
    if (index === 0) {
      let deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = deletedNode.next; // 삭제된 Node의 다음 Node를 next로 가져감
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0)
      throw new Error("범위를 넘어갔습니다.");

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, LinkedList };
