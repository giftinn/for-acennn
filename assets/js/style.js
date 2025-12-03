
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('I love you, Acen').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); 
          } else {
            const subtitle = document.createElement('p');
            subtitle.innerText = "Your presence feels like home in the most unexpected way.";
            subtitle.style.fontSize = '20px'; 
            subtitle.style.marginTop = '2px'; 
            subtitle.style.color = '#fff';

            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
