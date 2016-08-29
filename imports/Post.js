import { Astro, Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

const Post = Class.create({
  name: 'Post',
  collection: Posts,
  secured: false,
  fields: {
    name: String,
    userId: String
  },
  events: {
    beforeInsert(e) {
      const doc = e.currentTarget;
      doc.userId = Meteor.userId();
    }
  }
});

export default Post;