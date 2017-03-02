(function() {
  'use strict';

  window.household = window.household || {};
  window.household.houseHoldData = houseHoldData;
  window.household.deleteMemberFromArray = deleteMemberFromArray;
  window.household.showMeTheArray = showMeTheArray;

  var houseHoldMemberList = [];

/**
 * this function creates a member with properties/values and then pushes it
 * into an array.
 * @param  {object} newMember is a member with properties
 */
  function houseHoldData(newMember) {

      var age = document.getElementsByName('age')[0].value;

      var relationship = document.getElementsByName('rel')[0].value;

      var smoker = document.getElementsByName('smoker')[0].checked;

      var ageCheck = validateAge(age);

      if(ageCheck !== '') {

          createMessage(ageCheck);

          return;
      }

      var relationshipCheck = validateRelationship(relationship);

      if(relationshipCheck !== '') {

          createMessage(relationshipCheck);

          return;
      }

      var person = {

         'id': Date.now(),
         'Age': age,
         'Relationship': relationship,
         'Smoker': smoker

      };

      window.household.newHouseHoldMember(person);

      houseHoldMemberList.push(person);

      document.getElementsByTagName('form')[0].reset();

      var removeElement = document.getElementsByClassName('messages');

      if(removeElement !== null) {

          for (var i = removeElement.length-1; i >= 0; i--) {

            removeElement[i].parentNode.removeChild(removeElement[i]);

         }
      }
  }

  /**
   * This ensures that the supplied relation meets the requirements.
   * @param  {string} relationship Cannot be blank
   * @return {string} ret Error string or blank on success
   */
  function validateRelationship(relationship) {

      var ret = '';

      if(relationship === '') {

          ret = 'Please choose a relationship!';
      }
      return ret;
  }

  /**
   * This ensures that the supplied age meets validation requirements.
   * @param  {string} age Cannot be blank and must be great than zero.
   * @return {string} ret Error string or blank on success
   */
  function validateAge(age) {

      var ret = '';

      if(age <= 0) {

          ret = 'Age cannot be less than or equal to 0!';
      }
      if(age === '' || age === undefined) {

          ret = 'Age cannot be left blank!';
      }
      return ret;
  }

  /**
   * this function creates a an element so that the validation messages will
   * appear on the page.
   * @param  {string} message the new message that shows in the element.
   */
  function createMessage(message) {

      var createM = document.createElement('p');

      createM.classList.add('messages');

      document.querySelector('form').appendChild(createM);

      createM.innerText = message;
  }

  /**
   * this function returns the array.
   * @return {array} provides an array with objects.
   */
  function showMeTheArray() {

      return houseHoldMemberList;
  }

  /**
   * This function goes through the array and deletes the object if the id's
   * match
   * @param  {string} id is a property of the object
   */
  function deleteMemberFromArray(id) {

      houseHoldMemberList.forEach(function deleteMember(each, i) {

            if(each.id === Number(id)) {

                houseHoldMemberList.splice(i, 1);
            }
      });
  }

}());
