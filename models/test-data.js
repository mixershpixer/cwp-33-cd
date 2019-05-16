'use strict'

module.exports = async function (db) {
    await db.sequelize.sync({force: true});
  
    await db.repos.bulkCreate([
        { name: 'repo#1', author: 'Egwinn' },
        { name: 'repo#2', author: 'Artem' },
        { name: 'repo#3', author: 'Nastya' },
        { name: 'repo#4', author: 'Ivan' }
    ]);

    await db.commits.bulkCreate([
        { repoId: 1, message: 'important message1', hash: '27863f95fefa691baa82a522156322c21f7d6df3' },
        { repoId: 1, message: 'message2', hash: '553b91486218eee1d52de4b7bc8286b5dd18da03' },
        { repoId: 2, message: 'message3', hash: 'cdbed3a915745f1ad336f322948fa30c4ea8d82f' },
        { repoId: 2, message: 'message4', hash: '6b3c45f2d43d16c028ef18e38cb1e516f653463d' },
        { repoId: 3, message: 'message5', hash: '59395c05c18b9c8904853715d4136921de0b48f1' },
        { repoId: 3, message: 'message6', hash: 'rd0b4f0b5c90ed0fa911a2972ccc452641b31563' },
        { repoId: 4, message: 'message7', hash: '4aa8016a1ae49fe79cde9be51ac51e576115db1f' },
        { repoId: 4, message: 'message8', hash: '6bc96f923d399f4ab15280704a1d92e866c57657' }
    ]);
}