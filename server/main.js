import { Meteor } from 'meteor/meteor';
import Post from '/imports/Post';

Meteor.publish('posts', function() {
  return Post.find();
});