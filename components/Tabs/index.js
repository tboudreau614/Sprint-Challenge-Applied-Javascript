// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function(response) {
        console.log(response.data);
        const topics = response.data.topics;
        topics.forEach(item => {
            const newTab = tabComps(item);
            tabTop.appendChild(newTab);
        });
        
    })
    .catch(function(error) {
        console.log('There Is An Error');
    })

const tabTop = document.querySelector('.topics');

function tabComps(item) {

    const divTabs = document.createElement('div');

    tabTop.appendChild(divTabs);

    divTabs.classList.add('tab');

    divTabs.textContent = `Learn ${item}`;

    return divTabs

}