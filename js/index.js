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
    {name: "Богдан", frriends: 5},
    {name: "Даня", frriends: 43},
    {name: "Єгор", frriends: 14},
    {name: "Денис", frriends: 4},
    {name: "Дмитро", frriends: 10},
    {name: "Андрій", frriends: 1}
];
const copyPeople = [...people]
copyPeople.sort((prevNum, nextNum) => nextNum.frriends - prevNum.frriends)
console.log(copyPeople)

// 4

const userss = [
    {name: "user1", balance: 395, location: "Ukraine", skills: "volleyball"},
    {name: "user2", balance: 57, location: "England", skills: "football"},
    {name: "user3", balance: 917, location: "Austria", skills: "basketball"},
    {name: "user4", balance: 1020, location: "Switzerland", skills: "handball"},
    {name: "user5", balance: 150, location: "Ukraine", skills: "programming"}
];
const copyUserss = [...userss]
copyUserss.sort((a, b) => a.skills.localeCompare(b.skills))
console.log(copyUserss)
