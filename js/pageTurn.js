pageTurn({//pageTurn 0.1 by chen 
	id:'warp',//翻页页码块的ID
	pageCount:12,//总页数
	showMax:6,//最大显示块数
	curPage:1//当前页数
});
function pageTurn(paget_turn) {
	var turnBox=document.getElementById(paget_turn.id),
		box=turnBox.getElementsByTagName('li'),
		pageCount=paget_turn.pageCount,
		showMax=paget_turn.showMax,
		curPage=paget_turn.curPage,
		last=document.getElementById('lastPage'),
		next=document.getElementById('nextPage'),
		bottom=document.getElementById('bottomPage'),
		top=document.getElementById('topPage');
	createTurn();
	setButton();
	turnBox.onclick=function(e){
		var event=e||window.event;
		var target=event.target||event.srcElement;
		curPage=parseInt(target.getAttribute('pageIndex'));
		if(curPage){
			turn();
			setButton();
		}
	};
	last.onclick=function(e){
		if(curPage>1){
			curPage=curPage-1;
			turn();
			setButton();
		}
	}
	next.onclick=function(e){
		if(curPage<pageCount){
			curPage=curPage+1;
			turn();
			setButton();
		}
	}
	bottom.onclick=function(e){
		curPage=pageCount;
		turn();
		setButton();
	}
	top.onclick=function(e){
		curPage=1;
		turn();
		setButton();
	}
	function createTurn(){
		console.log(curPage);
		if(curPage<showMax/2+1||curPage>pageCount-showMax){
			var start=curPage>showMax?pageCount-showMax+1:1;
		}
		else{
			var start=curPage-Math.floor(showMax/2);
		}
		for(var i=start;i<showMax+start;i++){
				var pbox=document.createElement('li');
				pbox.setAttribute('pageIndex',i);
				if(i==curPage){
					pbox.className='cur';
				}
			
				pbox.innerHTML=i;
				turnBox.appendChild(pbox);
		}
	}
	function setButton(){
		if(curPage==1){
			top.style.cssText='display:none';
			nextPage.style.cssText='display:block';
			bottom.style.cssText='display:block';
		}
		else if(curPage>1&&curPage<pageCount-showMax+1){
			 top.style.cssText='display:block';
			lastPage.style.cssText='display:block';
			nextPage.style.cssText='display:block';
			bottom.style.cssText='display:block';
		}
		else if(curPage>pageCount-showMax+1){
			top.style.cssText='display:block';
			lastPage.style.cssText='display:block';
			nextPage.style.cssText='display:block';
			bottom.style.cssText='display:none';
		}
		else if(curPage==pageCount){
			top.style.cssText='display:block';
			lastPage.style.cssText='display:block';
			nextPage.style.cssText='display:none';
			bottom.style.cssText='display:none';
		}
	}
	function turn(){
		 for(var i=1;i<=showMax;i++){
		 	turnBox.removeChild(turnBox.childNodes[1]);
		 }
		 createTurn();
	}	
};
