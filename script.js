//fullname="Astha";
//console.log(fullname);

document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const button = item.querySelector('.toggle-button');
  
    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';
      document.querySelectorAll('.faq-answer').forEach((ans) => (ans.style.display = 'none'));
      document.querySelectorAll('.toggle-button').forEach((btn) => btn.classList.remove('open'));
  
      if (!isOpen) {
        answer.style.display = 'block';
        button.classList.add('open');
      } else {
        answer.style.display = 'none';
        button.classList.remove('open');
      }
    });
  });
  

const watchButton = document.getElementById("watchButton");
const trailerPopup = document.getElementById("trailerPopup");
const closeButton = document.getElementById("closeButton");

// Show the trailer
watchButton.addEventListener("click", () => {
    trailerPopup.style.display = "flex"; // Show the popup
    document.body.style.overflow = "hidden"; // Prevent scrolling
});

// Hide the trailer
closeButton.addEventListener("click", () => {
    trailerPopup.style.display = "none"; // Hide the popup
    document.body.style.overflow = ""; // Restore scrolling
});

// Close the popup if clicking outside the video
window.addEventListener("click", (event) => {
    if (event.target === trailerPopup) {
        trailerPopup.style.display = "none";
        document.body.style.overflow = "";
    }
});

