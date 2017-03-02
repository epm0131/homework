(function() {
  'use strict';

  window.household = window.household || {};
  window.household.newHouseHoldMember = newHouseHoldMember;

  document
    .querySelector('form')
    .addEventListener('submit', function handleAdd(eventobj){

      eventobj.preventDefault();

      var houseHoldMembers = JSON.stringify(window.household.showMeTheArray(), undefined, 2);

      var debugElement = document.getElementsByClassName('debug')[0];

      debugElement.style.display = 'block';

      debugElement.innerHTML = houseHoldMembers;
  });

  /**
   * Creates new HTML elements and appends them with the inputted values.
   * @param  {object} memberAtr the properties that makeup the member.
   */
  function newHouseHoldMember(memberAtr) {

      var createLi = document.createElement('li');

      var createRemove = document.createElement('button');

      var createP = document.createElement('p');

      var values = Object.values(memberAtr);

      values.splice(0,1);

      createP.innerText = values;

      createRemove.classList.add('remove');

      createRemove.setAttribute('id', memberAtr.id);

      createLi.appendChild(createRemove);

      createLi.appendChild(createP);

      document.querySelector('ol').appendChild(createLi);
  }

  document
    .querySelector('.add')
    .addEventListener('click', function handleAdd(eventobj){

    eventobj.preventDefault();

    var age = document.querySelector('input[name=age]');

    var relationship = document.querySelector('select[name=rel]');

    var smoker = document.querySelector('input[name=smoker]');

    window.household.houseHoldData(age.value, relationship.value, smoker.checked);
  });

  document
    .querySelector('ol.household')
    .addEventListener('click', function removeMember(eventobj){

      if(eventobj.target.tagName === 'BUTTON' && eventobj.target.className === 'remove') {

          window.household.deleteMemberFromArray(eventobj.target.id);

          eventobj.target.parentNode.remove();
      }
  });

}());
