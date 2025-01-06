// 1
const users = [
    {name: "user1", balance: 395, location: "Ukraine"},
    {name: "user2", balance: 57, location: "England"},
    {name: "user3", balance: 917, location: "Austria"},
    {name: "user4", balance: 1020, location: "Switzerland"},
    {name: "user5", balance: 150, location: "Ukraine"}
];
const someBalances = users.reduce((acc, user) => acc + user.balance, 0);
console.log(someBalances);

// 2

const visitors = [
    {name: "Artem", balance: 395, location: "Ukraine", friend: "Vanya"},
    {name: "Sasha", balance: 57, location: "Ukraine", friend: "Vanya"},
    {name: "Lisa", balance: 917, location: "Ukraine", friend: "Vanya"},
    {name: "Dima", balance: 1020, location: "Ukraine", friend: "Alexei"},
    {name: "Alexei", balance: 150, location: "Ukraine", friend: "Dima"}
];
const filterVisitors = visitors.reduce((newVisitors, visitor) => {
    if (visitor.friend === "Vanya") {
        newVisitors.push(visitor);
    }
    return newVisitors;
}, []);
console.log(filterVisitors);

// 3

const people = [
    {name: "Богдан", frriend: "Андрій"},
    {name: "Даня", frriend: "Дмитро"},
    {name: "Єгор", frriend: "Андрій"},
    {name: "Денис", frriend: "Даня"},
    {name: "Дмитро", frriend: "Даня"},
    {name: "Андрій", frriend: "Дмитро"}
];
const friends = people.reduce((firstFriend, man) => {
    if (man.frriend === "Андрій") {
        firstFriend.push(man)
        return firstFriend
    } else if (man.frriend === "Дмитро") {
        firstFriend.push(man)
        return firstFriend
        
    } else if (man.frriend === "Даня") {
        firstFriend.push(man)
        return firstFriend
    }
})