
        // navbar js start 
            window.addEventListener("scroll", function () {
            const header = document.querySelector(".header-sec");
            if (window.scrollY > 50) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    // navbar js end

    //  swiper js start 
   
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      },
    });
    // swiper js end




    // enquiry form validation start

function data(event) {

            let a = document.getElementById('n1').value;//userid
            let b = document.getElementById('n2').value;
            let c = document.getElementById('n3').value;
            let d = document.getElementById('n4').value;

            if (a == "" || b == "" || c == "" || d == "") {
                alert('all fields are required')
                event.preventDefault(); // Prevents the form from submitting
                return false;
            }
            else  if (a.trim() !== a) {
            alert("Name should not start or end with spaces!");
            event.preventDefault();
            return false;
        }
         var namePattern = /^[A-Za-z0-9 ]+$/;
        if (!namePattern.test(a)) {
            alert("Name should contain only letters and numbers (no spaces or special characters)!");
            event.preventDefault();
            return false;
        }
            else if(c.length<10 || c.length>10){
                alert("Number should be 10 digits ! Plz enter valid number ");
                event.preventDefault(); // Prevents the form from submitting
                return false;
            
            }
            //isNan - is not a number
            else if(isNaN(c)){
                alert("Only numbers are allowed !")

                event.preventDefault(); // Prevents the form from submitting
                return false;
            
            }

           
            return true; // Allows the form to submit if validation passes
        }
// enquiry form validation end
