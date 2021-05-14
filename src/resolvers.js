const { Article } = require('./models/Article');
const { Section } = require('./models/Section');
const { Theme } = require('./models/Theme');

module.exports.resolvers = {
  Query: {
    articles: async () => await Article.find(),
    themes: async () => await Theme.find(),
  },
  Mutation: {
    createArticle: async (_, { name }) => await Article.create({ name }),
    createSection: async (_, { name, articleId }) =>
      await Section.create({ name, articleId }),
    createTheme: async (_, { name, sectionId }) =>
      await Theme.create({ name, sectionId }),
  },
  Article: {
    sections: async article => await Section.find({ articleId: article._id }),
  },
  Section: {
    themes: async section => await Theme.find({ sectionId: section._id }),
  },
};
