class BasicClass {
    // Properties should be defined here
    private property: string;

    // Constructor to initialize the class
    constructor(property: string) {
        this.property = property;
    }

    // Method to perform an action
    public doSomething(): void {
        // Implementation of the method
        console.log(`Property value is: ${this.property}`);
    }
}

// Usage
const instance = new BasicClass('example');
instance.doSomething();
