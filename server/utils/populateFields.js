export const populateField = async (Model, userId) => {
  const element = await Model.find({ user: userId })
    .then(item => {
      if (item) {
        return item;
      }
    })
    .catch(error => {
      console.error("This information could not be found.", error)
    })
  
  return element
}

export const userEnrollmentField = async (userEnrollment, userId) => {
  try {
    const userEnrollmentData = await userEnrollment.findOne({ subscriber: userId }).populate("subscription")
    if (userEnrollmentData) {
      const { startDate, endDate } = userEnrollmentData
      const { subscriptionType, price } = userEnrollmentData.subscription

      return {
        membershipType: subscriptionType,
        membershipCost: price,
        subscriptionStart: startDate,
        renewalDate: endDate
      }
    } else {
      console.log("No Subscription")
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}