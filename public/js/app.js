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
  var maxLength=roles[i].length * 20 + 60
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

/*

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<p>If the viewport is less than, or equal to, 700 pixels wide, the background color will be yellow. If it is greater than 700, it will change to pink.</p>
<p><strong>Resize the browser window to see the effect.</strong></p>

<script>
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
</script>

</body>
</html>

*/

function sendMessage()
{
  var name=document.getElementById('senderName')
  var email=document.getElementById('senderEmail')
  var message=document.getElementById('message')
  // console.log(name.value)
  if(name.value.length == 0)
  {
    name.placeholder = 'PLEASE ENTER YOUR NAME'
    return;
  }
  if(email.value.length == 0)
  {
    email.placeholder = 'PLEASE ENTER YOUR EMAIL'
    return;
  }
  if(message.value.length == 0)
  {
    message.placeholder = 'PLEASE ENTER YOUR MESSAGE'
    return;
  }
  
  fetch('/sendQuery',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      message:message.value,
      senderEmail:email.value,
      name:name.value
    })
  })
  .then(res=>res.json())
  .then((data) => {
    
    if(data.success)
    {
      M.toast({html: 'Message sent successfully', displayLength:1000}) 
    }
    else{
      console.log(data);
    }
    
  })
  .catch((err)=>{
    console.log(err);
  })

}
