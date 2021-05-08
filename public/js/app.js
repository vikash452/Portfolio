var roles=['Student','Web-Developer','Competitive Programmer']

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // document.getElementById('horizonEffect').innerText='Student'
  
  rolesPrinter(0)

});

function rolesPrinter(i)
{
  // console.log(i) 
  var horizontalText=document.getElementById('horizonEffect')
  horizontalText.innerText=roles[i];
  var toChange=0;
  var start=true
  var end=false
  
  var myInterval = setInterval(()=>{
      horizontalText.style.width=`${toChange}px`

      if(start)
      {
        toChange+=1;
        if(toChange > 200)
        {
          start=false;
          end=true
        }
      }

      if(end)
      {
        toChange-=1

        if(toChange <= 0)
        {
          clearInterval(myInterval)
          rolesPrinter((i+1)%3)
        }
        
      }
      
    },10)    
    
}
