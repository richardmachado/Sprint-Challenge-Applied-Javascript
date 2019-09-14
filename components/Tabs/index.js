// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const cards = document.querySelector(".cards");
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((results) => {
    
    const newcard =createCard(results.data);
    
    cards.appendChild(newcard);

    //Stretch Graph -- begin
    const calendarDiv = document.createElement("div");
    cards.appendChild(calendarDiv);
    
    calendarDiv.classList.add("calendar");

    new GitHubCalendar(".calendar", "richardmachado");
    //Stretch Graph -- end
    
  })
  .catch((err) => {
    console.log(err);
})