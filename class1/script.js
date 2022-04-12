let student1 = {
    firstName : "Alexis",
    lastName: "Aldrete",
    age: 25,
    isActive: true
}

let student2 = {
    firstName : "Eric",
    lastName: "Hernandez",
    age: 22,
    isActive: true
}

let student3 = {
    firstName : "Ramon",
    lastName: "Lopez",
    age: 23,
    isActive: true,
    hobbies: ["run","swim","play games"],
    address: {
        street:"cerritos",
        number:"12345",
        zipCode: 12312
    }
}

let client1 = {
    firstName : "Alexis",
    lastName: "Hernandez",
    subscription: {
        type: "Premium",
        active: true,
        credits: 70
    }
}

console.log(student1, student2, student3);
console.log(student1["firstName"]);
console.log(student2.firstName);
console.log (student3.address.street);
console.log(client1);