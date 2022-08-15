const {db} = require('./db')
const {User, Cheese, Board} = require('./models/index')


describe('User, cheese, board models', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    });

    test("user can be created", async () => {
        const user1 = await User.create({
            name: "mich",
            email: "mich@email.com"
        })
        expect(user1.name).toBe("mich")
        expect(user1.email).toBe("mich@email.com")
    })

    test("cheese can be created", async () => {
        const cheese1 = await Cheese.create({
            title: "french",
            description: "french cheese"
        })
        expect(cheese1.title).toBe("french")
        expect(cheese1.description).toBe("french cheese")
    })

    test("board can be created", async () => {
        const board1 = await Board.create({
            type: "wooden",
            description: "a board",
            rating: 4
        })
        expect(board1.type).toBe("wooden")
        expect(board1.description).toBe("a board")
        expect(board1.rating).toBe(4)
    })
})