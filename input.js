//---- VAR -------------------------------------------------------------
var html = '';
//---- VAR -------------------------------------------------------------

//---- HTML -------------------------------------------------------------
html += '<div>';
  html += '<textarea></textarea>';
	html += '<input type="button" class="btn" onClick="POST_CROSS_DOMAIN(this)" value="投稿">';
html += '</div>';
//---- HTML -------------------------------------------------------------

//---- FUNCTION -------------------------------------------------------------
function POST_CROSS_DOMAIN(btn){
	var textarea = jQuery(btn).prev().eq(0);
	var msg = textarea.val();
	var data = {
		msg : msg
		//,tag : ['brake' ,'the' ,'dish']
		,tag : cfg_unipost.tag
	};
	data.tag.push(document.title);
	console.log('post=',data);
	$.ajax({
		type: 'POST'
		//,url: "http://192.168.2.105:15105/"
		,url: "http://posthub.herokuapp.com/"
		,data: data
		,crossDomain: true
		,dataType: 'json'
		,success: function (res) {
			console.log(res);
			if(res.result == true){textarea.val('');}
		}
	});
}
//---- FUNCTION -------------------------------------------------------------

//---- INIT -------------------------------------------------------------
window.document.write(html);
//---- INIT -------------------------------------------------------------
