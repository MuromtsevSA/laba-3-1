Array.from(document.getElementsByTagName('a')).forEach(el => {
   el.textContent = 'СГЭУ ' + el.textContent;
   el.href = 'http://www.sseu.ru/';
   var links = (el);
   console.log(links)
});
