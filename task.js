var ques = document.querySelectorAll(".q1");
ques.forEach(function(ans){
      ans.addEventListener("click",function(){
            var answer = this.nextElementSibling.nextElementSibling.nextElementSibling;
            if(answer.style.display==="none"|| answer.style.display===""){
                   answer.style.display="flex";
                   this.querySelector('i').classList.remove('fa-plus');
                    this.querySelector('i').classList.add('fa-minus');
            }
     else{
          answer.style.display="none";
              }
            });
      });
      
      

