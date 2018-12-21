$(document).ready(function(){
  //user defined values 
  var saveValues = function(){
    var array = [];
    var lsNames = localStorage.getItem('lsValue') 
    if (!lsNames){ lsNames = '';}//null case 
    array = lsNames.split(',');
    array.push(document.getElementById('lsValue').value);
    lsNames = array.join(',');//comma side effect from null case 
    localStorage.setItem('lsValue', lsNames);
    showValues();
  } //show stored values 
  var showValues = function() {
    var ls = localStorage.getItem('lsValue');
    document.getElementById('list-display-field').innerHTML = "Memory: " + ls.slice(1);
  } 
  //on click functions 
  $('.btn-submit').on('click', function(){saveValues()});// write to local storage from input when button save clicked
  $('.btn-delete-all').on('click', function(){localStorage.setItem('lsValue','');showValues()});// delete from local
  $('.btn-memory').on('click', function(){showValues()});//memory button
});
