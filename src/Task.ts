function startTask(targetObject: any, desiredValue: any) {
  let taskHandle: number; // To store the reference to the task for cancellation

  function checkObject() {
      if (targetObject.hasOwnProperty(desiredValue) || Object.values(targetObject).includes(desiredValue)) {
          clearTimeout(taskHandle); // Cancel the task
          console.log("Value found. Task cancelled.");
      } else {
          console.log("Value not found. Checking again...");
          taskHandle = setTimeout(checkObject, 1000); // Check again after 1 second
      }
  }

  taskHandle = setTimeout(checkObject, 1000); // Start the task
}

// Example usage remains the same:
const myObject = { a: 1, b: 2 };
startTask(myObject, 3); 

// Simulate an external update after a few seconds
setTimeout(() => {
  myObject.c = 3; 
}, 3500); 
