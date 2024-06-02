db = db.getSiblingDB('SmartTracker');
db.createUser({
  user: 'User',
  pwd: 'U$er0',
  roles: [
    {
      role: 'readWrite',
      db: 'SmartTracker',
    },
  ],
});

db.createCollection('Blog_db');
