let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')              
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class','dog-content')
content.append(dogContent)

let image = document.createElement('img')
image.setAttribute('class','dog-image')
image.setAttribute('src',"./assets/rizzo.jpg")
dogContent.append(image)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class','dog-details')
dogContent.append(dogDetails)

let dogDescription = document.createElement('h3')
dogDescription.append("Description:")
dogDetails.append(dogDescription)

let dogDescContent = document.createElement('p')
dogDescContent.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")
dogDetails.append(dogDescContent)

let dogFeedingTime = document.createElement('h3')
dogFeedingTime.append("Feeding Times:")
dogDetails.append(dogFeedingTime)

let feedingTimeList = document.createElement('ul')
dogDetails.append(feedingTimeList)

let feeding9AM = document.createElement('li')
feeding9AM.append("9:00 am")
dogDetails.append(feeding9AM)

let feeding12PM = document.createElement('li')
feeding12PM.append("12:00 pm")
dogDetails.append(feeding12PM)

let feeding5PM = document.createElement('li')
feeding5PM.append("5:00 pm")
dogDetails.append(feeding5PM)