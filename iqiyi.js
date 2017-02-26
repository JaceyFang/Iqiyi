function bannerbox(){
	var x=0;
	return function (doc,i){	
		var lis=doc.parentNode.children;
		for(var j=0;j<lis.length;j++){
			if((i-1)==j){
				lis[j].style.backgroundColor="#63b504";
				lis[j].firstElementChild.style.color="#fff";
			}else{
				lis[j].style.backgroundColor="#111";
				lis[j].firstElementChild.style.color="#ccc";
			}
		}
		if(x%2==0){
			doc.parentNode.previousElementSibling.className="rotay";
			doc.parentNode.previousElementSibling.firstElementChild.firstElementChild.src="images/banner"+i+".jpg";
		}else{
			doc.parentNode.previousElementSibling.className="rotay_no";
			doc.parentNode.previousElementSibling.lastElementChild.firstElementChild.src="images/banner"+i+".jpg";
		}
		x++;
	};
}
var bannerOver=bannerbox();
function moveon(doc,i){	
	var divs=doc.parentNode.children;
	if(i!=6){
		doc.lastElementChild.className="big";
		for(var j=0;j<divs.length;j++){					
			if(j==i-1){
				divs[j].firstElementChild.className="gg_item";
			}else if(j==i){
				divs[j].firstElementChild.className="gg_r_item";
			}else{
				divs[j].firstElementChild.className="gg_hover";
			}
		}
	}else{
		doc.lastElementChild.className="sbig";
		for(var k=0;k<divs.length;k++){					
			if(k==i-2||k==i-1){
				divs[k].firstElementChild.className="gg_item";
			}else{
				divs[k].firstElementChild.className="gg_hover";
			}
		}
	}	
}
function moveout(doc,i){
	doc.lastElementChild.className="mbig";
	var divs=doc.parentNode.children;
	for(var j=0;j<divs.length;j++){
		if(j==5){
			divs[j].firstElementChild.className="gg_sitem";
		}else{
			divs[j].firstElementChild.className="gg_item";
		}
	}
}
