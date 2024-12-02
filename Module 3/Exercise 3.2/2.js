const target = document.getElementById('target');

const item_list = ['First item', 'Second item', 'Third item'];
let index = 0;

for (const item of item_list){
  const li = document.createElement('li');
  li.textContent = item;
  if (index === 1) {
        li.classList.add('my-item');
  }
  target.appendChild(li);
  index++;
}