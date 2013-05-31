/**
 *  LinkedList Implementation
 *
 */
public class LinkedList {

	Link head;
	Link nextLink;

	/** Constructor */
	public LinkedList() {

	}

	/** Push Object onto Linked List */
	public void push() {

	}

	/** Pop Object from Linked List */
	public void pop() {

	}

	/** Check if Linked List is empty */
	public boolean isEmpty() {
		if (head == null) {
			return true;
		}
		else {
			return false;
		}
	}

	/** Print Linked List to output */
	public void printLinkedList() {

		while(head != null){

		}
	}

	/**
	 *  Link class
	 */
	private class Link {

		Object data1;
		Object data2;

		/**
		 *  Link Constructor
		 */
		private Link(Object data1, Object data2) {
			this.data1 = data1;
			this.data2 = data2;
		}

		/**
		 *  Method that prints the link to output.
		 */
		public void printLink() {
			System.out.println("{ " + data1.toString() + " , " + data2.toString() + " }");
		}
	}
}

/**
 *  LinkedList Driver
 */
public void main (String args[]){
	LinkedList 	list = new LinkedList();
				list.push();
				list.push();
				list.pop();
				list.push();

	list.printLinkedList();




}