import Post from '/imports/Post';
import { Template } from 'meteor/templating';

import './main.html';

Template.Posts.onCreated(function() {
  this.subscribe('posts');
});

Template.Posts.helpers({
  posts() {
    return Post.find();
  }
});

Template.Posts.events({
  'click #add' () {
    const p = new Post({
      name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
    });
    p.save();
  }
});