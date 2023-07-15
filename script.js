const sections = document.querySelectorAll(".hover-el");
const btn = document.querySelector(".btn-div button");

sections.forEach(section => {
    
    section.addEventListener('mouseover', () => {
      document.getElementById("heading-large").style.transform = "translateY(-32px)";
      texts=document.querySelectorAll("#heading-small");
      texts.forEach(text => {
        text.style.transform = "translateY(32px)";
      });
      btn.style.backgroundColor = "rgba(255, 87, 51, 0.9)";
      btn.style.transform = "scale(1.05)";
    });

    section.addEventListener('mouseout', () => {
        document.getElementById("heading-large").style.transform = "translateY(0)";
        texts=document.querySelectorAll("#heading-small");
        texts.forEach(text => {
          text.style.transform = "translateY(0)";
        });
        btn.style.backgroundColor = "#000";
        btn.style.transform = "scale(1)";
      });   
});
