window.onload = function() {
	
	var images = document.getElementById('images');
	var words = document.getElementById('words');
	var imgboxs = images.getElementsByTagName('div');
	var wordsboxs = words.getElementsByTagName('div');
	
	images.onclick = function(e) {
		
		e = e || window.event;
		
		var currObj = e.target || e.srcElement;
		
		if(currObj.className != 'imgbox') 
			return;
		
		for (var i = 0;i < imgboxs.length;i ++) {
			imgboxs[i].className = 'imgbox';
		}
		
		currObj.className = 'imgboxs';
		
		for (var i = 0;i < wordsboxs.length;i ++) {
			wordsboxs[i].className = 'wordsbox';
		}
		
		var index = currObj.id.charAt(3) - 1;
		
		wordsboxs[index].className = 'wordsboxs';
		
		
	}
	
}