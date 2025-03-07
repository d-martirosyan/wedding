audio_paused = document.querySelector("#audio-paused")
audio_played = document.querySelector("#audio-played")
my_audio = document.querySelector("#my-audio")
form_inputs = document.querySelectorAll('input[type="radio"][name="come"]')

form_inputs.forEach(element => {
    element.addEventListener('click', function(e){
        input = e.target;
        guest_count = document.querySelector('input[name="guest_count"]');
        if (e.target.value == "reject"){
            if(guest_count){
                guest_count.style.display="none"
            }
        }else {
            if(guest_count){
                guest_count.style.display="block"
            }
        }
    })
});

audio_paused.addEventListener("click", function(){
    audio_paused.style.display="none";
    audio_played.style.display="block";
    my_audio.play()
})

audio_played.addEventListener("click", function(){
    audio_played.style.display="none";
    audio_paused.style.display="block";
    my_audio.pause()
})

function updateCountdown() {
    const targetDate = new Date('April 20, 2025 00:00:00');
    const currentDate = new Date();
    
    const timeDiff = targetDate - currentDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.querySelector('.day span').textContent = days;
    document.querySelector('.hour span').textContent = hours;
    document.querySelector('.minute span').textContent = minutes;
    document.querySelector('.second span').textContent = seconds;
}

setInterval(updateCountdown, 1000);


const targetElements = document.querySelectorAll('.animation-div');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  root: null, 
  threshold: 0.1
});

targetElements.forEach(element => {
  observer.observe(element);
});