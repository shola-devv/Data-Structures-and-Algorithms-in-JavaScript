// STACKS

/*

A stack is a fundamental data structure in JavaScript that follows the Last-In-First-Out (LIFO) principle. It allows you to store and retrieve elements in a specific order, where the most recently added element is the first one to be removed.

*What does a Stack do?*

A stack provides two primary operations:

1. *Push*: Adds an element to the top of the stack.
2. *Pop*: Removes the top element from the stack.
*/


//PSEUDOCODE EXAMPLE

/*
Class Stack {
      Function push(element) {
          Add element to top of stack
            }

              Function pop() {
                  If stack is not empty {
                        Remove and return top element
                            } Else {
                                  Return null or throw error
                                      }
                                        }
                                        }
}
*/

//CODE
class Stack {
      constructor() {
          this.top = null;
            }

              push(element) {
                  const newNode = { element, next: this.top };
                      this.top = newNode;
                        }

                          pop() {
                              if (!this.top) return null;
                                  const temp = this.top;
                                      this.top = this.top.next;
                                          return temp.element;
                                            }
                                            }
                                            ```

                                            ```
                                            const stack = new Stack();
                                            stack.push(1);
                                            stack.push(2);
                                            stack.push(3);

                                            console.log(stack.pop()); // Output: 3
                                            console.log(stack.pop()); // Output: 2
                                            console.log(stack.pop()); // Output: 1
                                            console.log(stack.pop()); // Output: null
                                            




// Real world usage
/*
In an application, a stack can be used to implement features like undo and redo
 functionality in a text editor. When a user makes changes to the 
 text, each change can be pushed onto a stack. 
 When the user wants to undo a change, the top element can be popped from the stack, reverting the text to its previous state
*/