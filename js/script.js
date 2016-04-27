// JavaScript File
btn.addEventListener('click',getResult,true);
btn2.addEventListener('click',fibonacci,true);
mark.addEventListener('click',marks,true);
mark2.addEventListener('click',marks,true);
mark3.addEventListener('click',marks,true);


function getResult()
{
    var a=Number(document.getElementById('number_a').value);
    var b=Number(document.getElementById('number_b').value);
    var c=Number(document.getElementById('number_c').value);
    
    var d=b*b-4*a*c;
    if(d>0)
    {
       var x1=(-b+Math.sqrt(d))/(2*a);
       var x2=(-b-Math.sqrt(d))/(2*a);
       var res="x1 ="+x1 +'<br>'+'x2 ='+x2;
       document.write(res);
    }
    if(d==0)
    {
        var x=(-b)/(2*a);
        var res="x ="+x;
        document.write(res);
    }
    if(d<0)
    {document.write('Це рівняння не має розв\'язків');}
}

function marks()
{
    document.write('Thank you!!!');
}


function fibonacci(){
    
    var min=Number(document.getElementById('min').value);
    var max=Number(document.getElementById('max').value);
    if(min<max)
    {
        document.write('Bottom border:'+min+'<br>'); 
        if(min>=0&&max>0)
        {      
                    var f=[];
                    f[0]=0;f[1]=1;
                if(min==f[0]){
                    document.write(f[0]+'<br>');
                    document.write(f[1]+'<br>');
                }
                if(min==f[1]){
                    document.write(f[1]+'<br>');}
                for(var i=2;i<1000000;i++)
                {
                    f[i]=f[i-1]+f[i-2];
                    if(f[i]>=min&&f[i]<=max)
                    {
                        document.writeln(f[i]+'<br>');
                        continue;
                    }
                    else if(f[i]<min){
                      continue;
                     }
                    else if(f[i]>max){
                      break;
                    }
                }
        }
         else if(min<0&&max<=0)
         {
                    var f=[];
                    f[0]=0;f[1]=-1;
                if(max==f[0]){
                    document.write(f[0]+'<br>');
                    document.write(f[1]+'<br>');
                }
                if(max==f[1]){
                    document.write(f[1]+'<br>');}
                for(var i=2;i<1000000;i++)
                {
                    f[i]=f[i-1]+f[i-2];
                    if(f[i]>=min&&f[i]<=max)
                    {
                        document.writeln(f[i]+'<br>');
                        continue;
                    }
                    else if(f[i]>max){
                      continue;
                     }
                    else if(f[i]<min){
                      break;
                    }
                }
        }
        
         else if(min<0&&max>0)
        {      
                var f=[];
                f[0]=0;f[1]=-1;
                if(min==f[1]){
                    document.write(f[1]+'<br>');}
                else if(true)
                {   
                    document.write(f[1]+'<br>');
                    for(var i=2;i<1000000;i++)
                    {
                        
                        f[i]=f[i-1]+f[i-2];
                        if(f[i]>=min)
                        {
                            document.writeln(f[i]+'<br>');
                            continue;
                        }
                        else if(f[i]<min){
                          break;
                        }
                    }
                }
                
                  f[0]=0;f[1]=1;
                if(max==f[1]){
                    document.write(f[1]+'<br>');}
                else if(true)
                {
                    document.write(f[0]+'<br>');
                    document.write(f[1]+'<br>');
                    for(var i=2;i<1000000;i++)
                    {
                        f[i]=f[i-1]+f[i-2];
                        if(f[i]<=max)
                        {
                            document.writeln(f[i]+'<br>');
                            continue;
                        }
                        else if(f[i]>max){
                          break;
                        }
                    }
                }
                
        }
        document.write('Top border:'+max);
    }
    else{
            alert('Error!!!max має бути більшим за min!!');
        }
     
}  
