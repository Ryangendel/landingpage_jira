$(document).ready(function(){
    var height = $('.footer').height();
    $('.sect-t-footer').css('height', height);
});

const footer = document.querySelector('footer.footer');
// const element = document.getElementsByClassName(".footer")
// Function to handle scroll and apply style
function handleScroll() {
  const documentHeight = document.documentElement.scrollHeight;
  const halfwayPoint = documentHeight / 2;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Apply inline style if scrolled halfway, else remove it
  if (scrollPosition >= halfwayPoint) {
    footer.style.bottom = 0;
    // element.style.bottom = 0
  } else {
    footer.style.bottom = ''; // Reset to original value if scrolled back up
    // element.style.bottom = ""
  }
}

function submitEmail(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Your email submission logic will go here in the future
    console.log("Form submitted, but no action taken");
  }

// Add scroll event listener
window.addEventListener('scroll', handleScroll);