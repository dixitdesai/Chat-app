const users = []

const addUser = ({ id, username, room}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room are required!'
        }
    }

    // Check of existing data
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    }) 

    if (existingUser) {
        return {
            error: 'Username is in Use!'
        }
    }

    // Store user data
    const user = { id, username, room}
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase())
}

addUser({
    id: 22,
    username: 'Dixit',
    room: 'Bhavena'
})

addUser({
    id: 32,
    username: 'Mike',
    room: 'Bhavena'
})

addUser({
    id: 42,
    username: 'Dixit',
    room: 'Sid'
})

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}