function superbowlWin(collection){
    let winCheck = collection.find(tracker => tracker.result === "W")
    if (winCheck) {
      return winCheck.year
    } else {
      return undefined
    }
}
