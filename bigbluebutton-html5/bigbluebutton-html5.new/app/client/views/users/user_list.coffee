Template.usersList.helpers
  getMeetingSize: -> # Retreieve the number of users in the chat, or "error" string
    return Meteor.Users.find().count()

  # reloadAudioPlayer: -> # Retreieve the number of users in the chat, or "error" string
  #   console.log(Meteor.Meetings.findOne({meetingId: getInSession "meetingId"}))
