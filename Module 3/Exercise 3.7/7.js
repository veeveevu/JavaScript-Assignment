document.addEventListener('DOMContentLoaded', function() {
  const trigger = document.getElementById('trigger');
  const target = document.getElementById('target');

  trigger.addEventListener('mouseover', function(){
    target.src = 'img/picB.jpg';
  });

  trigger.addEventListener('mouseout', function(){
    target.src = 'img/picA.jpg';
  });

});