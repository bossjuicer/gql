// const {}=require()

const { UserList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    friend: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id });
      return user;
    },
  },
};

module.exports = { resolvers };
