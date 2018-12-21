$(document).ready(function(){

  var saveValues = function(){

    var newArr = [];

    var lclStorageNames = localStorage.getItem('lsValue');

    if (!lclStorageNames) {
      lclStorageNames = '';
    }

    newArr = lclStorageNames.split(',');
    newArr.push(document.getElementById('lsValue').value);
    lclStorageNames = newArr.join(',');
    localStorage.setItem('lsValue', lclStorageNames);
    showValues();

  } 



  var showValues = function() {
    var ls = localStorage.getItem('lsValue');
    document.getElementById('list-display-field').innerHTML = "Memory: " + ls.slice(1);
  } 

  $('.btn-submit').on('click', function(){saveValues()});
  $('.btn-delete-all').on('click', function(){localStorage.setItem('lsValue','');showValues()});
  $('.btn-memory').on('click', function(){showValues()}); 

});
