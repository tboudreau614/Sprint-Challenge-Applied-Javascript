// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const head = document.querySelector('.header-container');

function Header(arr1) {

    const divHeader = document.createElement ('div');
    const spanHeader = document.createElement ('span');
    const textHeader = document.createElement ('h1');
    const span2Header = document.createElement ('span');

    head.appendChild(divHeader);
    divHeader.appendChild(spanHeader);
    divHeader.appendChild(textHeader);
    divHeader.appendChild(span2Header);

    divHeader.classList.add('header');
    spanHeader.classList.add('date');
    span2Header.classList.add('temp');

    spanHeader.textContent = 'SMARCH 28, 2019';
    textHeader.textContent = 'Lamda Times';
    span2Header.textContent = '98°';

    return divHeader;

}
