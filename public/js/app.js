var roles=['Student','Web Developer','Competitive Programmer']

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // document.getElementById('horizonEffect').innerText='Student'
  // console.log(document.getElementById('horizonEffect').innerText)
  
  rolesPrinter(0)

});

function rolesPrinter(i)
{
  var horizontalText=document.getElementById('horizonEffect')
  horizontalText.innerText=roles[i];
  var toChange=0;
  var start=true
  var end=false
  var maxLength=roles[i].length * 20 + 70
  var myInterval = setInterval(()=>{
      horizontalText.style.width=`${toChange}px`

      if(start)
      {
        toChange+=1;
        if(toChange > maxLength)
        {
          start=false;
          end=true
        }
      }

      if(end)
      {
        toChange-=1

        if(toChange <= -10)
        {
          clearInterval(myInterval)
          rolesPrinter((i+1)%3)
        }
        
      }
      
    },5)    
    
}
