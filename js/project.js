document.addEventListener('readystatechange',function(){
	if(document.readyState==='complete'){
	var projects=document.querySelectorAll('.project-box .projects');
	var arrs=['My-Project-1','My-Project-2','My-Project-3','My-Project-4','My-Project-5','My-Project-6','My-Project-7','My-Project-8','My-Project-9']
	lunbo=function(){
		arrs.push(arrs.shift());
		for(var i=0;i<projects.length;i++){
			projects[i].setAttribute('class','projects '+arrs[i]);
			projects[i].onmouseover=function(){
				clearInterval(t);
			}
			projects[i].onmouseout=function(){
				t=setInterval(lunbo,2000);
			}
		}
		
	}
	var t=setInterval(lunbo,2000)
	}
},false)