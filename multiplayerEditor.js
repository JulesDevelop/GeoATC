var whitelist = [
  "1315709",
]
setInterval(() => {
  for (const key in multiplayer.users) {
    whitelist.forEach(element => {
      if (multiplayer.users[key].id == element) {
        return
      }
    });
    delete multiplayer.users[key];
  }
}, 100);
