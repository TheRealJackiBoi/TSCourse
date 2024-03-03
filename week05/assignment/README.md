# TaskManager with design patterns

I've used three patterns.

The first is "observer pattern," where my TaskManager class is my subject, and then I instanciate an observer in the App component, that observes the taskManager Object and causes a re-render when it gets "notified."

The second is "factory pattern," which I use to create new tasks in the TaskManager class.

The third is a "singleton a like pattern." I'm calling it "a like" because I'm creating the instance my self and exporting the created instance of the class.