let friend1 = {
    name: 'abul',
    friend: 'babul'
}

let friend2 = {
    name: 'babul',
    friend: 'abul'
}
console.log(isBestFriend(friend1, friend2))
function isBestFriend(friend1, friend2) {
    if (friend1.name == friend2.friend && friend1.friend == friend2.name) {
        return true
    } else {
        return false
    }
}
