import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    prepend(value) {
        const second = this.head;
        this.head = new Node(value);
        this.head.next = second;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        let current = this.head;
        let idx = 0;

        while (current) {
            idx++;
            if (index === idx) {
                const newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        console.log("Index out of bounds");
    }

    removeAt(index) {
        if (!this.head) {
            console.log("Index out of bounds");
            return;
        }

        if (index == 0) {
            this.head = this.head.next;
            return;
        }
        let prev;
        let current = this.head;
        let idx = 0;
        while (current) {
            if (idx === index) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
            idx++;
        }

        console.log("Index out of bounds");
    }

    pop() {
        let current = this.head;

        if (!current) return;
        if (current && !current.next) {
            this.head = null;
            return;
        }

        // Handle second >>
        while (current.next.next) {
            current = current.next;
        }
        if (current) current.next = null;
    }

    first() {
        const first = this.head;
        if (first) return first.value;
        return "null";
    }

    last() {
        let current = this.head;

        if (!current) return "null";

        while (current.next) {
            current = current.next;
        }
        return current.value;
    }

    at(index) {
        let idx = 0;
        let current = this.head;

        if (current) {
            while (current.next) {
                if (index == idx) break;
                current = current.next;
                idx++;
            }
            if (index > idx) return "Array out of index";

            return current.value;
        } else return "Array out of index";
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (value === current.value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let result = null;
        let index = 0;
        while (current) {
            if (value === current.value) return index;
            current = current.next;
            index++;
        }
        return result;
    }

    toString() {
        let output = "";
        let current = this.head;
        while (current) {
            output += `${current.value} --> `;
            current = current.next;
        }
        output += "null";

        console.log(output);
    }

    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter += 1;
            current = current.next;
        }
        return counter;
    }
}
