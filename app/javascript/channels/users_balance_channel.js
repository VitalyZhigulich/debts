import consumer from "./consumer"

consumer.subscriptions.create("UsersBalanceChannel", {
  connected() {
    console.log('connected')
  },

  disconnected() {
    console.log('disconnected')
  },

  received({ users }) {
    console.log(users);

    if (!users.length) { return }

    console.log(this.a())
    // $('#balances-container').append('<p class="received"> ' + data.message + '</p>');
  },

  a() {
    return 'rresult'
  }
});
