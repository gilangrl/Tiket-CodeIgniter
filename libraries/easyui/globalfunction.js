function pemutakhiranDokumen(reqRekananId, reqPrimaryId, reqKode, pesan="Apakah Anda yakin ingin melakukan pemutakhiran dokumen ?")
{	
	$.messager.confirm('Confirm', pesan, function(r){
		if (r){

			$.post( "rekanan_json/pemutakhiran_dokumen", { reqRekananId: reqRekananId, reqPrimaryId: reqPrimaryId, reqKode: reqKode })
			  .done(function(data) {
				$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
}


function postingPemutakhiran(reqRekananId, reqPrimaryId, reqKode, pesan="Apakah Anda yakin ingin memposting pemutakhiran dokumen ?")
{	
	$.messager.confirm('Confirm', pesan, function(r){
		if (r){

			$.post( "rekanan_json/posting_pemutakhiran_dokumen", { reqRekananId: reqRekananId, reqPrimaryId: reqPrimaryId, reqKode: reqKode })
			  .done(function(data) {
				$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
}


function kirimApprovalPaket(kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm','Posting Dokumen ?',function(r){
		if (r){

			$.post( "paket_berita_acara_json/posting", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApproval(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/posting", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalVP(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingVP", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalVPPrakatalog(pesan, kodeDokumen, paketId, rekananId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingVPPrakatalog", { reqKode: kodeDokumen, reqId: paketId, reqRekananId: rekananId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalBACustom(pesan, kodeDokumen, reqId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingApprovalBACustom", { reqKode: kodeDokumen, reqId: reqId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
}


function kirimApprovalSuratCustom(pesan, kodeDokumen, reqId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingApprovalSuratCustom", { reqKode: kodeDokumen, reqId: reqId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
}


function kirimApprovalSM(pesan, kodeDokumen, paketId, primaryId='')
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingSM", { reqKode: kodeDokumen, reqId: paketId, reqPrimaryId: primaryId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalSMPrakatalog(pesan, kodeDokumen, paketId, rekananId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingSMPrakatalog", { reqKode: kodeDokumen, reqId: paketId, reqRekananId: rekananId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}



function kirimApprovalVPUnitTeknis(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingVPUnitTeknis", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}

function kirimApprovalPanitia(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingPanitia", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalPanitiaPrakatalog(pesan, kodeDokumen, paketId, rekananId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingPanitiaPrakatalog", { reqKode: kodeDokumen, reqId: paketId, reqRekananId: rekananId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}

function kirimApprovalPanitiaPermohonanKSO(pesan, kodeDokumen, paketId, paketRekananKsoId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){
			$.post( "paket_berita_acara_json/postingPanitiaPermohonanKSO", { reqKode: kodeDokumen, reqId: paketId, reqPaketRekananKsoId: paketRekananKsoId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}

function kirimApprovalPrakualifikasi(pesan, kodeDokumen, rekananId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingPrakualifikasi", { reqKode: kodeDokumen, reqId: rekananId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalUpgradeNonPengadaanLangsung(pesan, kodeDokumen, rekananId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingUpgradeNonPengadaanLangsung", { reqKode: kodeDokumen, reqId: rekananId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalPanitiaPihakLain(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingPanitiaPihakLain", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}


function kirimApprovalPanitiaPihakLainRekanan(pesan, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm',pesan,function(r){
		if (r){

			$.post( "paket_berita_acara_json/postingPanitiaPihakLainRekanan", { reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					$.messager.alertReload('Info', data, 'info');	
			});
		}
	});
	
	
}



function createDokumenPaket(tabelName, kodeDokumen, paketId)
{	

	$.messager.confirm('Confirm','Lanjutkan ke pembuatan Berita Acara ?',function(r){
		if (r){

			$.post( "dokumen_manager_json/editablePaket", { reqTabel: tabelName, reqTabelId: "PAKET_ID", reqKode: kodeDokumen, reqId: paketId })
			  .done(function( data ) {
					windowOpenerReload(800,1200,"", "https://www.valsix.xyz/ap1/onlyoffice/doceditor.php?fileID="+data+"&user=1&reqTarget=eproc-pp3_uploads_doc");
			});
		}
	});
	
	
}

function updateDokumenPaket(dokumenWord)
{
	windowOpenerReload(800,1200,"", "https://www.valsix.xyz/ap1/onlyoffice/doceditor.php?fileID="+dokumenWord+"&user=1&reqTarget=eproc-pp3_uploads_doc");
}


function uploadFile(index,jenisDokumen)
{
	//configuration
	var max_file_size 			= 10485760; //allowed file size. (1 MB = 1048576)
	var allowed_file_types 		= ['application/pdf']; //allowed file types
	var result_output 			= '#output'+index; //ID of an element for response output
	var my_form_id 				= '#upload_form'+index; //ID of an element for response output
	var progress_bar_id 		= '#progress-wrp'+index; //ID of an element for response output
	//on form submit

	var proceed = true; //set proceed flag
	var error = [];	//errors
	var total_files_size = 0;
	
	//reset progressbar
	$("#progress-bar"+index).css("width", "0%");
	$("#status"+index).text("0%");

	if(!window.File && window.FileReader && window.FileList && window.Blob){ //if browser doesn't supports File API
	
		error.push("Your browser does not support new File API! Please upgrade."); //push error text
	}else{
		var total_files_size = $("#reqLinkFile"+index)[0].files[0].size;
		
		//if total file size is greater than max file size
		if(total_files_size > max_file_size){ 
			$.messager.alert('Info', 'Pastikan file anda tidak melebihi kapasitas yang telah ditentukan.', 'info');
			return;
		}
		
		$("#progressBar"+index).show();
		
		var formData = new FormData();
		formData.append('reqLinkFile', $("#reqLinkFile"+index)[0].files[0]);
		formData.append('reqJenisDokumen', jenisDokumen);

		//jQuery Ajax to Post form data
		$.ajax({
			url : "dokumen_manager_json/upload_temporary",
			type: "POST",
			data : formData,
			contentType: false,
			cache: false,
			processData:false,
			xhr: function(){
				//upload Progress
				var xhr = $.ajaxSettings.xhr();
				if (xhr.upload) {
					xhr.upload.addEventListener('progress', function(event) {
						var percent = 0;
						var position = event.loaded || event.position;
						var total = event.total;
						if (event.lengthComputable) {
							percent = Math.ceil(position / total * 100);
						}
						//update progressbar
						$("#progress-bar"+index).css("width", + percent +"%");
						$("#status"+index).text(percent +"%");
					}, true);
				}
				return xhr;
			},
			mimeType:"multipart/form-data"
		}).done(function(res){ //
			var obj = JSON.parse(res); 
			if(obj.result == "failed")
			{
				$("#reqLinkFile"+index).val("");
				$("#progressBar"+index).hide();
				$.messager.alert('Info', obj.message, 'info');
			}
			else
			{
				
				$("#reqLinkFile"+index).val("");
				$("#reqLinkFileTemp"+index).val(obj.temp);
				$("#reqLinkFileTempNama"+index).val(obj.name);	
				$("#reqLinkFileTempTipe"+index).val(obj.type); 
				$("#reqLinkFileTempUkuran"+index).val(obj.size); 
				$("#reqLinkFileInfo"+index).text("temp : "+obj.name); 
				$("#progressBar"+index).hide();
				$("#reqLinkFileTemp"+index).focus();
			}
		});
	}
}

function CekNumber(id)
{
	var txt = document.getElementById(id);
	var a = txt.value;//.charAt(txt.value.length-1);
	
	if(a.substring(0, 1) == "-")
		return;
		
	var tmpA;
	var jmlKoma = 0;	
	//while(isNaN(a))
	{
		tmpA = '';
		for(var i=0;i<a.length;i++)
		{	
			if((a.charAt(i)>='0' && a.charAt(i)<='9')||(a.charAt(i)==',' ))
			{					
				tmpA = tmpA+a.charAt(i);
			}
		}
		a = tmpA;
		txt.value = a;
	}
}
 
function CekDouble(id)
	{
		var txt = document.getElementById(id);
		var a = txt.value;//.charAt(txt.value.length-1);
		
		var tmpA;
		var jmlKoma = 0;	
		//while(isNaN(a))
		{
			tmpA = '';
			for(var i=0;i<a.length;i++)
			{	
				if((a.charAt(i)>='0' && a.charAt(i)<='9') || (i>0 && a.charAt(i)=='.'))
				{					
					tmpA = tmpA+a.charAt(i);
				}
			}
			a = tmpA;
			txt.value = a;
		}
	}
	
function ReplaceString(oldS,newS,fullS) 
{
	 
// Replaces oldS with newS in the string fullS   
	for (var i=0; i<fullS.length; i++) 
	{      
		if (fullS.substring(i,i+oldS.length) == oldS) 
		{         
			fullS = fullS.substring(0,i)+newS+fullS.substring(i+oldS.length,fullS.length)      
		}   
	}   
	return fullS
}

/*function FormatCurrency(num) 
{
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	{
		num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
	}
	if(cents != "00")
		return (((sign)?'':'-') +  num + ',' + cents);
	else
		return (((sign)?'':'-') +  num);
}
*/
function FormatCurrency(num) 
{
	num = num.toString().replace(/\$|\,/g,'');
	
	if(isNaN(num))
		num = "0";
		
	sign = (num == (num = Math.abs(num)));
	
	num_str = num.toString();
	cents = 0;
	
	if(num_str.indexOf(".")>=0)
	{
		num_str = num.toString();
		angka = num_str.split(".");
		cents = angka[1];
	}
	
	num = Math.floor(num).toString();
	
		
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	{
		num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
	}
	
	if(cents != "00")
		return (((sign)?'':'-') +  num + ',' + cents);
	else
		return (((sign)?'':'-') +  num);
}

function FormatCurrencyBaru(num) 
{
	num = num.toString().replace(/\$|\,/g,'');
	
	if(isNaN(num))
		num = "0";
		
	sign = (num == (num = Math.abs(num)));
	
	num_str = num.toString();
	cents = 0;
	
	if(num_str.indexOf(".")>=0)
	{
		num_str = num.toString();
		angka = num_str.split(".");
		cents = angka[1];
	}
	
	num = Math.floor(num).toString();
	
		
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	{
		num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
	}
	
	if(cents != "00")
		return (((sign)?'':'-') +  num + ',' + cents);
	else
		return (((sign)?'':'-') +  num);
}
    
function CekJam(id)
{
        CekNumber(id);
        var txt = document.getElementById(id);
        if (txt.value == "")
            txt.value = "00"; 
		var a = parseFloat(txt.value);
        if (a > 23)
        {
            txt.value = '00';
        }
        else
        {
            if (a<10)
                txt.value = '0' + a;
            else
                txt.value = a;    
        }
}

function CekMenit(id)
{
        CekNumber(id);
        var txt = document.getElementById(id);
        if (txt.value == "")
            txt.value = "00"; 
		var a = parseFloat(txt.value);
        if (a > 59)
        {
            txt.value = '00';
        }
        else
        {
            if (a<10)
                txt.value = '0' + a;
            else
                txt.value = a;    
        }
}

/*function FormatUang(id)
{
         CekNumber(id);
        var txt = document.getElementById(id);
		var num = txt.value;
		num = num.toString().replace(",",".");

		var aPosition = num.indexOf(".");
		if(((aPosition+1)<num.length)||(aPosition<0))
		{
			var a = parseFloat(num);
			var nilai = FormatCurrencyBaru(a);
			txt.value = nilai;    
		}    

}*/

function FormatUang(id)
{
    CekNumber(id);
	var txt = document.getElementById(id);
	var num = (txt.value);	
	
	var str = num.toString().replace("$", ""), parts = false, output = [], i = 1, formatted = null;
	if(str.indexOf(",") > 0) {
		parts = str.split(",");
		str = parts[0];
	}
	str = str.split("").reverse();
	for(var j = 0, len = str.length; j < len; j++) {
		if(str[j] != ".") {
			output.push(str[j]);
			if(i%3 == 0 && j < (len - 1)) {
				output.push(".");
			}
			i++;
		}
	}
	formatted = output.reverse().join("");
	txt.value =(formatted + ((parts) ? "," + parts[1].substr(0, 2) : "")); 

}

function FormatUang1(id)
{
        CekNumber(id);
        var txt = document.getElementById(id);
		var num = txt.value;
		num = num.toString().replace(",",".");

		var aPosition = num.indexOf(".");
		if(((aPosition+1)<num.length)||(aPosition<0))
		{
			var a = parseFloat(num);
			var nilai = FormatCurrencyBaru(a);
			txt.value = nilai;    
		}
}

function FormatAngka(id)
{
		//alert(id+':adasd');
        var txt = document.getElementById(id);
		var a = txt.value;
        var nilai = ReplaceString('.','',a);
        txt.value = nilai;    
}

function FormatAngkaNumber(value)
{

		var a = value;
        var nilai = ReplaceString('.','',a);
        var nilai = ReplaceString(',','.',nilai);
        return nilai;    
}

function getWaktuSisa(startTime, endTime, diff)
{
	//var TargetDate = "03/31/2009 5:30:00 PM";//Format waktu yang dipakai
	//var TargetDate = "04/14/2009 14:50:54";//Format waktu yang dipakai
    //startTime, dipakai jika anda menentukan waktu awal sendiri
	//End time: waktu akhir
	//diff = 	perbedaan waktu server dan waktu client. javascript bekerja menggunakan waktu client.
	//			sehingga perlu dihitung selisihnya.
	var sisa = 0;
	var dstart = new Date(startTime);//Di sini tidak digunakan
	var dthen = new Date(endTime);
	var dnow = new Date();
	var diff = Math.floor((dthen-dnow + diff)/1000);
	if (diff > 0){ 
		var hrsDiff = Math.floor(diff/60/60); 
		diff -= hrsDiff*60*60;
		var minsDiff = Math.floor(diff/60);
		diff -= minsDiff*60;
		var secsDiff = diff;  
		if (hrsDiff <10)
		{
			hrsDiff = '0'+ hrsDiff;
		}
		if (minsDiff <10)
		{
			minsDiff = '0' + minsDiff;
		} 
		if (secsDiff <10)
		{
			secsDiff = '0'+ secsDiff;
		}
		sisa = hrsDiff+' : '+minsDiff+' : '+secsDiff;
		//Format Return : HH : MM : SS
	}
	return sisa;
}

function validateEmpty(value, Name) {
    var error = "";
    if (value.length == 0) {
        error = Name + " belum di isi\n";
    } 
    return error;  
}
function validateRadio(radio, Name) 
{
     var error = "";
     var myOption = -1;
    for (i=radio.length-1; i > -1; i--) {
        if (radio[i].checked) {
            myOption = i; i = -1;
        }
    }
        if (myOption == -1) 
            error = Name + " belum di pilih\n";
     return error;     
}
function CekEnter(evt)
{
    evt = (evt) ? evt : event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	//If Press Enter the begin Search
	if(charCode==13){
        return true;
    }
    return false;
}

function hidediv(elementID) {

	document.getElementById(elementID).style.display = 'none';

	document.getElementById(elementID).setAttribute('display', 'none');

}

function showdiv(elementID) {

	document.getElementById(elementID).style.display = 'block';

	document.getElementById(elementID).setAttribute('display', 'block');
}

function CekNumberGrid(a)
	{
		isAngka = '1';
		for(var i=0;i<a.length;i++)
		{	
			if((a.charAt(i)>='0' && a.charAt(i)<='9'))
			{					
				isAngka = isAngka;
			}
			else
			{
				isAngka = '0';
			}
		}
			return isAngka;		
	}

function format_npwp(event, nama_text) {
	var arr_regex = new Array('\\d','\\d','[.]','\\d','\\d','\\d','[.]','\\d','\\d','\\d','[.]','\\d','[-]','\\d','\\d','\\d','[.]','\\d','\\d','\\d');
	var current_value = document.getElementById(nama_text).value;            
	var len = document.getElementById(nama_text).value.length;       
	var result_value = '';
	var current_regex = '';
	var i=0;
	for (i=0; i<len; i++) {
	  current_regex += arr_regex[i];
	}
			
	if (!current_value.match(current_regex)) {
	  if (!isNaN(current_value.substring(len-1, len))) {
		if(arr_regex[len-1] == '[.]')
		  current_value = current_value.substring(0,len-1) + '.' + current_value.substring(len-1, len);                  
		else if(arr_regex[len-1] == '[-]')
		  current_value = current_value.substring(0,len-1) + '-' + current_value.substring(len-1, len);                  
		  document.getElementById(nama_text).value = current_value;      
	  } else {        
		current_value = current_value.substring(0,len-1);                  
		document.getElementById(nama_text).value = current_value;      
	  }
	}    
}
								  
function format_menit(event, nama_text) {
  	//var arr_regex = new Array('\\d','\\d','[-]','\\d','\\d','[-]','\\d','\\d','\\d','\\d');
    var arr_regex = new Array('\\d','\\d','[:]','\\d','\\d');
    var current_value = document.getElementById(nama_text).value;            
    var len = document.getElementById(nama_text).value.length;       
    var result_value = '';
    //alert(current_value);
    var current_regex = '';
    var i=0;
    for (i=0; i<len; i++) {
      current_regex += arr_regex[i];
      //alert(arr_regex[i]);
    }
            
    if (!current_value.match(current_regex)) {
        //alert(arr_regex[len-1]+'---');
      if (!isNaN(current_value.substring(len-1, len))) {
        if(arr_regex[len-1] == '[:]')
          current_value = current_value.substring(0,len-1) + ':' + current_value.substring(len-1, len);
        /* else if(arr_regex[len-1] == '[-]')
          current_value = current_value.substring(0,len-1) + '-' + current_value.substring(len-1, len);*/
          document.getElementById(nama_text).value = current_value;
      } else {        
        current_value = current_value.substring(0,len-1);                  
        document.getElementById(nama_text).value = current_value;      
      }
    }    
  }

function format_date(event, nama_text) {        
    var arr_regex = new Array('\\d','\\d','[-]','\\d','\\d','[-]','\\d','\\d','\\d','\\d');
    var current_value = document.getElementById(nama_text).value;            
    var len = document.getElementById(nama_text).value.length;       
    var result_value = '';
    //alert(current_value);
    var current_regex = '';
    var i=0;
    for (i=0; i<len; i++) {
      current_regex += arr_regex[i];
      //alert(arr_regex[i]);
    }
    
    //alert(current_value.substring(0,len-1)+'---'+current_value.substring(len, len));
    
    if (!current_value.match(current_regex)) {
        //alert(arr_regex[len-1]+'---');
      if (!isNaN(current_value.substring(len-1, len))) {
        /*if(arr_regex[len-1] == '[.]')
          current_value = current_value.substring(0,len-1) + '.' + current_value.substring(len-1, len);                  
        else */if(arr_regex[len-1] == '[-]')
          current_value = current_value.substring(0,len-1) + '-' + current_value.substring(len-1, len);
          document.getElementById(nama_text).value = current_value;      
      } else {        
        current_value = current_value.substring(0,len-1);                  
        document.getElementById(nama_text).value = current_value;      
      }
    }    
  }

function hapus_data(linkdata)
{
	$.messager.confirm('Confirm','Apakah anda yakin ingin menghapus data terpilih ? Perlu anda ingat bahwa data yang anda hapus akan hilang secara permanen.',function(r){
		if (r){
			document.location.href = linkdata;
		}
	});
	
	
}  

function get_day_between(date1, date2)
{
	var minutes = 1000*60;
	var hours = minutes*60;
	var days = hours*24;
	
	var foo_date1 = getDateFromFormat(date1, "d-M-y");
	var foo_date2 = getDateFromFormat(date2, "d-M-y");
	
	var diff_date = Math.round((foo_date2 - foo_date1)/days);
	return (diff_date + 1);
}


// ===================================================================
// Author: Matt Kruse <matt@mattkruse.com>
// WWW: http://www.mattkruse.com/
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish, however it is
// appreciated by the author if at least my web site address is kept.
//
// You may *NOT* re-distribute this code in any way except through its
// use. That means, you can include it in your product, or your web
// site, or any other form where the code is actually being used. You
// may not put the plain javascript up on your site for download or
// include it in your javascript libraries for download. 
// If you wish to share this code with others, please just point them
// to the URL instead.
// Please DO NOT link directly to my .js files from your site. Copy
// the files to your server and use them there. Thank you.
// ===================================================================

// HISTORY
// ------------------------------------------------------------------
// May 17, 2003: Fixed bug in parseDate() for dates <1970
// March 11, 2003: Added parseDate() function
// March 11, 2003: Added "NNN" formatting option. Doesn't match up
//                 perfectly with SimpleDateFormat formats, but 
//                 backwards-compatability was required.

// ------------------------------------------------------------------
// These functions use the same 'format' strings as the 
// java.text.SimpleDateFormat class, with minor exceptions.
// The format string consists of the following abbreviations:
// 
// Field        | Full Form          | Short Form
// -------------+--------------------+-----------------------
// Year         | yyyy (4 digits)    | yy (2 digits), y (2 or 4 digits)
// Month        | MMM (name or abbr.)| MM (2 digits), M (1 or 2 digits)
//              | NNN (abbr.)        |
// Day of Month | dd (2 digits)      | d (1 or 2 digits)
// Day of Week  | EE (name)          | E (abbr)
// Hour (1-12)  | hh (2 digits)      | h (1 or 2 digits)
// Hour (0-23)  | HH (2 digits)      | H (1 or 2 digits)
// Hour (0-11)  | KK (2 digits)      | K (1 or 2 digits)
// Hour (1-24)  | kk (2 digits)      | k (1 or 2 digits)
// Minute       | mm (2 digits)      | m (1 or 2 digits)
// Second       | ss (2 digits)      | s (1 or 2 digits)
// AM/PM        | a                  |
//
// NOTE THE DIFFERENCE BETWEEN MM and mm! Month=MM, not mm!
// Examples:
//  "MMM d, y" matches: January 01, 2000
//                      Dec 1, 1900
//                      Nov 20, 00
//  "M/d/yy"   matches: 01/20/00
//                      9/2/00
//  "MMM dd, yyyy hh:mm:ssa" matches: "January 01, 2000 12:30:45AM"
// ------------------------------------------------------------------

var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');
function LZ(x) {return(x<0||x>9?"":"0")+x}

// ------------------------------------------------------------------
// isDate ( date_string, format_string )
// Returns true if date string matches format of format string and
// is a valid date. Else returns false.
// It is recommended that you trim whitespace around the value before
// passing it to this function, as whitespace is NOT ignored!
// ------------------------------------------------------------------
function isDate(val,format) {
	var date=getDateFromFormat(val,format);
	if (date==0) { return false; }
	return true;
	}

// -------------------------------------------------------------------
// compareDates(date1,date1format,date2,date2format)
//   Compare two date strings to see which is greater.
//   Returns:
//   1 if date1 is greater than date2
//   0 if date2 is greater than date1 of if they are the same
//  -1 if either of the dates is in an invalid format
// -------------------------------------------------------------------
function compareDates(date1,dateformat1,date2,dateformat2) {
	var d1=getDateFromFormat(date1,dateformat1);
	var d2=getDateFromFormat(date2,dateformat2);
	if (d1==0 || d2==0) {
		return -1;
		}
	else if (d1 > d2) {
		return 1;
		}
	return 0;
	}

// ------------------------------------------------------------------
// formatDate (date_object, format)
// Returns a date in the output format specified.
// The format string uses the same abbreviations as in getDateFromFormat()
// ------------------------------------------------------------------
function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Object();
	if (y.length < 4) {y=""+(y-0+1900);}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
	}
	
// ------------------------------------------------------------------
// Utility functions for parsing in getDateFromFormat()
// ------------------------------------------------------------------
function _isInteger(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
		}
	return true;
	}
function _getInt(str,i,minlength,maxlength) {
	for (var x=maxlength; x>=minlength; x--) {
		var token=str.substring(i,i+x);
		if (token.length < minlength) { return null; }
		if (_isInteger(token)) { return token; }
		}
	return null;
	}
	
// ------------------------------------------------------------------
// getDateFromFormat( date_string , format_string )
//
// This function takes a date string and a format string. It matches
// If the date string matches the format string, it returns the 
// getTime() of the date. If it does not match, it returns 0.
// ------------------------------------------------------------------
function getDateFromFormat(val,format) {
	val=val+"";
	format=format+"";
	var i_val=0;
	var i_format=0;
	var c="";
	var token="";
	var token2="";
	var x,y;
	var now=new Date();
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=1;
	var hh=now.getHours();
	var mm=now.getMinutes();
	var ss=now.getSeconds();
	var ampm="";
	
	while (i_format < format.length) {
		// Get next token from format string
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		// Extract contents of value based on format token
		if (token=="yyyy" || token=="yy" || token=="y") {
			if (token=="yyyy") { x=4;y=4; }
			if (token=="yy")   { x=2;y=2; }
			if (token=="y")    { x=2;y=4; }
			year=_getInt(val,i_val,x,y);
			if (year==null) { return 0; }
			i_val += year.length;
			if (year.length==2) {
				if (year > 70) { year=1900+(year-0); }
				else { year=2000+(year-0); }
				}
			}
		else if (token=="MMM"||token=="NNN"){
			month=0;
			for (var i=0; i<MONTH_NAMES.length; i++) {
				var month_name=MONTH_NAMES[i];
				if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
					if (token=="MMM"||(token=="NNN"&&i>11)) {
						month=i+1;
						if (month>12) { month -= 12; }
						i_val += month_name.length;
						break;
						}
					}
				}
			if ((month < 1)||(month>12)){return 0;}
			}
		else if (token=="EE"||token=="E"){
			for (var i=0; i<DAY_NAMES.length; i++) {
				var day_name=DAY_NAMES[i];
				if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
					i_val += day_name.length;
					break;
					}
				}
			}
		else if (token=="MM"||token=="M") {
			month=_getInt(val,i_val,token.length,2);
			if(month==null||(month<1)||(month>12)){return 0;}
			i_val+=month.length;}
		else if (token=="dd"||token=="d") {
			date=_getInt(val,i_val,token.length,2);
			if(date==null||(date<1)||(date>31)){return 0;}
			i_val+=date.length;}
		else if (token=="hh"||token=="h") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>12)){return 0;}
			i_val+=hh.length;}
		else if (token=="HH"||token=="H") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>23)){return 0;}
			i_val+=hh.length;}
		else if (token=="KK"||token=="K") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>11)){return 0;}
			i_val+=hh.length;}
		else if (token=="kk"||token=="k") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>24)){return 0;}
			i_val+=hh.length;hh--;}
		else if (token=="mm"||token=="m") {
			mm=_getInt(val,i_val,token.length,2);
			if(mm==null||(mm<0)||(mm>59)){return 0;}
			i_val+=mm.length;}
		else if (token=="ss"||token=="s") {
			ss=_getInt(val,i_val,token.length,2);
			if(ss==null||(ss<0)||(ss>59)){return 0;}
			i_val+=ss.length;}
		else if (token=="a") {
			if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
			else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
			else {return 0;}
			i_val+=2;}
		else {
			if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
			else {i_val+=token.length;}
			}
		}
	// If there are any trailing characters left in the value, it doesn't match
	if (i_val != val.length) { return 0; }
	// Is date valid for month?
	if (month==2) {
		// Check for leap year
		if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) { // leap year
			if (date > 29){ return 0; }
			}
		else { if (date > 28) { return 0; } }
		}
	if ((month==4)||(month==6)||(month==9)||(month==11)) {
		if (date > 30) { return 0; }
		}
	// Correct hours value
	if (hh<12 && ampm=="PM") { hh=hh-0+12; }
	else if (hh>11 && ampm=="AM") { hh-=12; }
	var newdate=new Date(year,month-1,date,hh,mm,ss);
	return newdate.getTime();
	}

// ------------------------------------------------------------------
// parseDate( date_string [, prefer_euro_format] )
//
// This function takes a date string and tries to match it to a
// number of possible date formats to get the value. It will try to
// match against the following international formats, in this order:
// y-M-d   MMM d, y   MMM d,y   y-MMM-d   d-MMM-y  MMM d
// M/d/y   M-d-y      M.d.y     MMM-d     M/d      M-d
// d/M/y   d-M-y      d.M.y     d-MMM     d/M      d-M
// A second argument may be passed to instruct the method to search
// for formats like d/M/y (european format) before M/d/y (American).
// Returns a Date object or null if no patterns match.
// ------------------------------------------------------------------
function parseDate(val) {
	var preferEuro=(arguments.length==2)?arguments[1]:false;
	generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');
	monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');
	dateFirst =new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');
	var checkList=new Array('generalFormats',preferEuro?'dateFirst':'monthFirst',preferEuro?'monthFirst':'dateFirst');
	var d=null;
	for (var i=0; i<checkList.length; i++) {
		var l=window[checkList[i]];
		for (var j=0; j<l.length; j++) {
			d=getDateFromFormat(val,l[j]);
			if (d!=0) { return new Date(d); }
			}
		}
	return null;
}



function tambahBidangUsahaNonKualifikasi(id, nama)
{
	var rv = true;
	$('[name^=reqBidangUsahaId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data bidang usaha telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	
	totalData = $("#tbodyBidangUsaha tr").length;
	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_nonkualifikasi", { reqId: id, reqNama: nama })
			  .done(function( data ) {
					$("#tbodyBidangUsaha").append(data);	
		});
	}
}


function tambahBidangUsahaRekanan(id, nama)
{
	var rv = true;
	$('[name^=reqBidangUsahaId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data bidang usaha telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	
	totalData = $("#tbodyBidangUsaha tr").length;
	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_rekanan", { reqId: id, reqNama: nama })
			  .done(function( data ) {
					$("#tbodyBidangUsaha").append(data);	
		});
	}
}

function tambahBidangUsahaPaket(id, nama)
{
	var rv = true;
	$('[name^=reqBidangUsahaId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data bidang usaha telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	
	totalData = $("#tbodyBidangUsaha tr").length;
	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_paket", { reqId: id, reqNama: nama })
			  .done(function( data ) {
					$("#tbodyBidangUsaha").append(data);	
		});
	}
}

function tambahBidangUsaha(id, nama)
{
	var rv = true;
	$('[name^=reqBidangUsahaId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data bidang usaha telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	
	totalData = $("#tbodyBidangUsaha tr").length;
	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha", { reqId: id, reqNama: nama })
			  .done(function( data ) {
					$("#tbodyBidangUsaha").append(data);	
		});
	}
}


function tambahBidangUsahaNIB(id, nama)
{
	var rv = true;

	totalData = $("#tbodyBidangUsahaNIB tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi", { reqId: id, reqNama: nama, reqPrefix:"NIB" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaNIB").append(data);	
		});
	}
}


function tambahBidangUsahaSIUP(id, nama)
{
	var rv = true;
	
	totalData = $("#tbodyBidangUsahaSIUP tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi_siup", { reqId: id, reqNama: nama, reqPrefix:"SIUP" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaSIUP").append(data);	
		});
	}
}

function tambahBidangUsahaSIUJK(id, nama)
{
	var rv = true;
	
	totalData = $("#tbodyBidangUsahaSIUJK tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi_siujk", { reqId: id, reqNama: nama, reqPrefix:"SIUJK" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaSIUJK").append(data);	
		});
	}
}

function tambahBidangUsahaSBU(id, nama)
{
	var rv = true;

	
	totalData = $("#tbodyBidangUsahaSBU tr").length;

		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi_sbu", { reqId: id, reqNama: nama, reqPrefix:"SBU" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaSBU").append(data);	
		});
	}
}

function tambahBidangUsahaIUI(id, nama)
{
	var rv = true;
	
	totalData = $("#tbodyBidangUsahaIUI tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi", { reqId: id, reqNama: nama, reqPrefix:"IUI" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaIUI").append(data);	
		});
	}
}

function tambahBidangUsahaSTP(id, nama)
{
	var rv = true;
	
	totalData = $("#tbodyBidangUsahaSTP tr").length;

	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi", { reqId: id, reqNama: nama, reqPrefix:"STP" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaSTP").append(data);	
		});
	}
}

function tambahBidangUsahaSIUL(id, nama)
{
	var rv = true;
	
	totalData = $("#tbodyBidangUsahaSIUL tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_prakualifikasi_siul", { reqId: id, reqNama: nama, reqPrefix:"SIUL" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaSIUL").append(data);	
		});
	}
}


function tambahBidangUsahaRekananAdministrasi(id, nama)
{
	var rv = true;
	
	
	totalData = $("#tbodyBidangUsahaRekananAdministrasi tr").length;
		
	if(rv == true)
	{
		$.post( "app/loadUrl/template/bidang_usaha_rekanan_administrasi", { reqId: id, reqNama: nama, reqPrefix:"SIUP" })
			  .done(function( data ) {
					$("#tbodyBidangUsahaRekananAdministrasi").append(data);	
		});
	}
}


function tambahBidangUsahaPermohonanKategori(id, parent_id, nama)
{
	var rv = true;
	$('[name^=reqBidangUsahaId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data bidang usaha telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	totalData = $("#tbodyBidangUsahaPermohonanKategori tr").length;

	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$.post("app/loadUrl/template/bidang_usaha_permohonan_kategori", { reqId: id, reqParentId: parent_id, reqNama: nama })
			.done(function(data) {
				$("#tbodyBidangUsahaPermohonanKategori").append(data);	
		});
	}
}


function tambahPanitia(nip, nama, jabatan)
{
	var rv = true;
	$('[name^=reqNIP]').each(function() {
		if($(this).val() == nip)
		{
			$.messager.alert("Info", "Data panitia telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPanitia").append('<tr><td>'+nama+'</td><td>'+nip+'</td><td>'+jabatan+'</td><td><input type="hidden" name="reqNIP[]" value="'+nip+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahEmailRekanan(kode, nama, email)
{
	var rv = true;
	$('[name^=reqId]').each(function() {
		if($(this).val() == kode)
		{
			$.messager.alert("Info", "Data panitia telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyRekananEmail").append('<tr><td>'+nama+'</td><td>'+email+'</td><td><input type="hidden" name="reqId[]" value="'+kode+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahEmail(user_login_id, user_nama, user_email)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == user_login_id)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true){
		$("#tbodyTujuan").append('<tr><td>'+user_nama+'<input type="hidden" name="reqUserNama[]" value="'+user_nama+'"></td><td>'+user_email+'<input type="hidden" name="reqUserEmail[]" value="'+user_email+'"></td><td><input type="hidden" name="reqUserLoginId[]" value="'+user_login_id+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
	}
}


function tambahPaketPekerjaan(pr_group_number, pr_sap, nama, nilai_oe, paket_id)
{
	var rv = true;
	$('[name^=reqPrGroupNumber]').each(function() {
		if($(this).val() == pr_group_number)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyPaket tr").length;

	if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1 (satu) paket yang dapat dipilih atau hapus terlebih dahulu paket pekerjaan sebelumnya");
		rv = false;
		return false;	
	}
				  	
	if(rv == true){
		$("#tbodyPaket").append('<tr><td>'+pr_group_number+'<input type="hidden" name="reqPrGroupNumber" value="'+pr_group_number+'"><input type="hidden" name="reqPaketId" value="'+paket_id+'"></td><td>'+pr_sap+'</td><td>'+nama+'</td><td>'+nilai_oe+'</td><td><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
	}
}

function tambahDaftarPanitia(nip, nama, jabatan, fungsi)
{
	var rv = true;
	$('[name^=reqNIP]').each(function() {
		if($(this).val() == nip)
		{
			$.messager.alert("Info", "Data panitia telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPanitia").append('<tr><td>'+nama+'</td><td>'+nip+'</td><td>'+jabatan+'</td><td>'+fungsi+'</td><td><input type="hidden" name="reqNIP[]" value="'+nip+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahUnitTeknis(userloginid, usernama, userlogin, usertype, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Unit Teknis telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyUnitTeknis").append('<tr><td>'+usernama+'</td><td>'+userlogin+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqStatus[]" value="'+status+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahUnitTeknisBACustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Unit Teknis telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyUnitTeknis").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="hidden" name="reqUserLoginIdUnitTeknis[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHESUtama(userloginid, usernama, userlogin, usertype, status)
{
	var rv = true;
	$('[name^=reqPIC]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data PIC Utama telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyPICUtama tr").length;

	if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1(satu) PIC Utama yang dapat dipilih.");
		rv = false;
		return false;	
	}
				  	
	if(rv == true)
		$("#tbodyPICUtama").append('<tr><td>'+usernama+'</td><td>'+userlogin+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqPIC[]" value="'+userloginid+'"><input type="hidden" name="reqStatus[]" value="'+status+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHESPendukung(userloginid, usernama, userlogin, usertype, status)
{
	var rv = true;
	$('[name^=reqPICPendukung]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data PIC Pendukung telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPICPendukung").append('<tr><td>'+usernama+'</td><td>'+userlogin+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqPICPendukung[]" value="'+userloginid+'"><input type="hidden" name="reqStatus[]" value="'+status+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHesBACustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyHes").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="hidden" name="reqUserLoginIdPanitia[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahPihakLain(userloginid, usernama, userlogin, usertype, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pihak Terkait Lainnya telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPihakLain").append('<tr><td>'+usernama+'</td><td>'+userlogin+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqStatus[]" value="'+status+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahPihakLainBACustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pihak Terkait Lainnya telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPihakLain").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="hidden" name="reqUserLoginIdPihakLain[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahApprovalSuratCustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyApproval tr").length;

	if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1(satu) approval yang dapat dipilih.");
		rv = false;
		return false;	
	}
				  	
	if(rv == true)
		$("#tbodyApproval").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahTujuanSuratCustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyTujuan").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="hidden" name="reqUserLoginIdTujuan[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahRealisasiPaket(paketId, nama, prgroupnumber, prnumber, paketmetodelelang, nilainegosiasi)
{
	var rv = true;
	$('[name^=reqPaketId]').each(function() {
		if($(this).val() == paketId)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyRealisasiPaket").append('<tr><td>'+prgroupnumber+'</td><td>'+prnumber+'</td><td>'+nama+'</td><td>'+paketmetodelelang+'</td><td>'+nilainegosiasi+'</td><td><input type="hidden" name="reqPaketId[]" value="'+paketId+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahDokumenKlarifikasi(nama, paketEvalTawarId, rekananEvalTawarId, paketRekananId, jenis, slug)
{
	var rv = true;
	$('[name^=reqPaketEvalTawarId]').each(function() {
		if($(this).val() == paketEvalTawarId)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$(slug).append('<tr><td>'+nama+'</td>'+
			'<td><input type="text" class="form-control easyui-validatebox" name="reqKeteranganDokumen[]" value="" required placeholder="Keterangan alasan dilakukan klarifikasi">'+
			'<input type="hidden" name="reqNamaDokumen[]" value="'+nama+'">'+
			'<input type="hidden" name="reqPaketEvalTawarId[]" value="'+paketEvalTawarId+'">'+
			'<input type="hidden" name="reqRekananEvalTawarId[]" value="'+rekananEvalTawarId+'">'+
			'<input type="hidden" name="reqPaketRekananId[]" value="'+paketRekananId+'"></td>'+
			'<input type="hidden" name="reqJenisDokumen[]" value="'+jenis+'"></td>'+
			'<td align="center"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a>'+
			'</td></tr>');	
}


function tambahHesParaf(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqPelaksanaUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pelaksana telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyParaf").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td>'+usertype+'</td><td><input type="text" name="reqUrutParaf[]" onkeypress="return onlyNumberKey(event)" value=""></td><td><input type="hidden" name="reqParafUserLoginId[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesPelaksana(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqPelaksanaUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pelaksana telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPelaksana").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td>'+usertype+'</td><td><input type="text" name="reqUrutPembuat[]" value=""></td><td><input type="hidden" name="reqPelaksanaUserLoginId[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahRekananKSO(rekananId, usernama, alamat)
{
	var rv = true;
	$('[name^=reqRekananIdAnggota]').each(function() {
		if($(this).val() == rekananId)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyRekanan tr").length;

	if(totalData > 2)
	{
		$.messager.alert("Info", "Maksimal 3(tiga) Penyedia yang dapat dipilih.");
		rv = false;
		return false;	
	}
				  	
	if(rv == true)
		$("#tbodyRekanan").append('<tr><td>'+usernama+'</td><td>'+alamat+'</td><td align="center"><input type="hidden" name="reqRekananIdAnggota[]" value="'+rekananId+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesRapatPesertaOE(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyOE").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrutPeserta[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="OE"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesRapatPesertaUnitTeknis(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyUnitTeknis").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrutPeserta[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="UNIT_TEKNIS"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesRapatPesertaPihakLain(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPihakLain").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrutPeserta[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="PIHAK_LAIN"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHesKlarifikasiMaker(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyMaker").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrut[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="MAKER"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesKlarifikasiChecker(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyChecker").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrut[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="CHECKER"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHesKlarifikasiSigner(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodySigner").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td><input type="text" name="reqUrut[]" class="form-control easyui-validatebox" onkeypress="return onlyNumberKey(event)" value=""></td><td align="center"><input type="hidden" name="reqUserLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqSebagai[]" value="SIGNER"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}

function tambahHesPejabat(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqPejabatUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pejabat telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPejabat").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td>'+usertype+'</td><td><input type="text" name="reqUrutPejabat[]" value=""></td><td><input type="hidden" name="reqPejabatUserLoginId[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahHesPejabatRapat(userloginid, usernama, userlogin, usertype, userjabatan)
{
	var rv = true;
	$('[name^=reqPejabatUserLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Pejabat telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyPejabat").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>'+userjabatan+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqUrutPejabat[]" value=""><input type="hidden" name="reqPejabatUserLoginId[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahKonsultanPenilai(userloginid, usernama, userlogin, usertype, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Konsultan Jasa Penilai telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyKonsultanJasaPenilai").append('<tr><td>'+usernama+'</td><td>'+userlogin+'</td><td>'+usertype+'</td><td><input type="hidden" name="reqLoginId[]" value="'+userloginid+'"><input type="hidden" name="reqStatusKonsultan[]" value="'+status+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}


function tambahRekananCadangan(rekananid, kode, nama, npwp, alamat)
{
	var rv = true;
	$('[name^=reqRekananIdPemenangCadangan]').each(function() {
		if($(this).val() == rekananid)
		{
			$.messager.alert("Info", "Data Penyedia/Pemenang Cadangan telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyRekananCadangan tr").length;

	/*if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1(satu) Penyedia/Pemenang Cadangan yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
				  	
	if(rv == true){
		$("#tbodyRekananCadangan").append('<tr><td>'+kode+'</td><td>'+nama+'</td><td>'+npwp+'</td><td>'+alamat+'</td><td><input type="hidden" name="reqRekananIdPemenangCadangan[]" value="'+rekananid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
	}
}


function tambahRekanan(rekanan_id, nama, alamat, email, nilai="")
{
	var rv = true;
	$('[name^=reqRekananId]').each(function() {
		if($(this).val() == rekanan_id)
		{
			$.messager.alert("Info", "Data rekanan telah dipilih.");
			rv = false;
			return false;	
		}
	});

	if(nilai == ""){
		nilai = 0;
	}
				  	
	if(rv == true)
	{
		$("#tbodyRekanan").append('<tr><td>'+nama+'</td><td>'+alamat+'</td><td>'+email+'</td><td>'+nilai+'</td><td><input type="hidden" name="reqKodeRekanan[]" value="'+rekanan_id+'"><a title="#" onclick="$(this).parent().parent().remove();"><img src="images/button_cancel.png" width="16" height="16" border="0" /></a></td></tr>');	
	}
}


function tambahRekananBACustom(userloginid, usernama, userlogin, userjabatan, status)
{
	var rv = true;
	$('[name^=reqLoginId]').each(function() {
		if($(this).val() == userloginid)
		{
			$.messager.alert("Info", "Data Penyedia telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#tbodyRekanan").append('<tr><td>'+userlogin+'</td><td>'+usernama+'</td><td>Penyedia</td><td><input type="hidden" name="reqRekananIdApproval[]" value="'+userloginid+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
}



function tambahPRInduk(pr_tracing, nama, paket_id, permohonan_paket_id)
{
	var rv = true;
	$('[name^=reqKodeTrackingParent]').each(function() {
		if($(this).val() == pr_tracing)
		{
			$.messager.alert("Info", "Paket Pekerjaan telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyPRInduk tr").length;
	/*if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1(satu) Paket Pekerjaan yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
				  	
	if(rv == true){
		$("#tbodyPRInduk").append('<tr><td>'+pr_tracing+'</td><td>'+nama+'</td><td><input type="hidden" name="reqPermohonanPaketParentId" value="'+permohonan_paket_id+'"><input type="hidden" name="reqKodeTrackingParent" value="'+pr_tracing+'"><a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>');	
	}
}


function tambahPRPermohonanAddendum(pr_tracing, nama, paket_id, metodeId)
{
	var rv = true;
	$('[name^=reqKodeTrackingParent]').each(function() {
		if($(this).val() == pr_tracing)
		{
			$.messager.alert("Info", "Paket Pekerjaan telah dipilih.");
			rv = false;
			return false;	
		}
	});

	totalData = $("#tbodyPRInduk tr").length;
	/*if(totalData > 0)
	{
		$.messager.alert("Info", "Maksimal 1(satu) Paket Pekerjaan yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
				  	
	if(rv == true && metodeId == 6){
		$("#tbodyPRInduk").append('<tr><td>'+pr_tracing+'</td><td>'+nama+'</td>'+
			'<td><input type="hidden" name="reqPaketId" value="'+paket_id+'">'+
			'<input type="hidden" name="reqPrGroupNumber" value="'+pr_tracing+'">'+
			'<input type="hidden" name="reqNamaPaket" value="'+nama+'">'+
			'<a title="#" onclick="kelolaPRAddendumKurang('+pr_tracing+')" class="btn-aksi"><i class="fa fa-info" aria-hidden="true"></i></a> - '+
			'<a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a>'+
			'</td></tr>');	
	}
	else if(rv == true && metodeId != 6){
		$("#tbodyPRInduk").append('<tr><td>'+pr_tracing+'</td><td>'+nama+'</td>'+
			'<td><input type="hidden" name="reqPaketId" value="'+paket_id+'">'+
			'<input type="hidden" name="reqPrGroupNumber" value="'+pr_tracing+'">'+
			'<input type="hidden" name="reqNamaPaket" value="'+nama+'">'+
			'<a title="#" onclick="$(this).parent().parent().remove();" class="btn-aksi"><i class="fa fa-trash" aria-hidden="true"></i></a>'+
			'</td></tr>');	
	}

	$("#reqMaxPrNumber").val(pr_tracing);
}



function validasiPendaftaran(tbodyId, validasiId)
{
	if($("#"+tbodyId+" tr").length > 0)
		setElementValue(validasiId,'Data Lengkap');	
	else
		setElementValue(validasiId,'Data Belum Lengkap');	
	
}

function tambahPengalaman(id, nama)
{
	var rv = true;
	$('[name^=reqPengalamanSyarat]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data pengalaman telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#daftarPengalaman").append('<tr><td><input type="hidden" name="reqPengalamanSyarat[]" value="'+id+'">'+nama+'</td><td align="center"><a title="#" onclick="$(this).parent().parent().remove(); validasiPendaftaran(\'daftarPengalaman\', \'reqDataPengalamanLabel\');"><img src="images/button_cancel.png" width="16" height="16" border="0" /></a></td></tr>');	

	validasiPendaftaran("daftarPengalaman", "reqDataPengalamanLabel");
		
}


function tambahRKAPaket(id, kode, namaRka, nama)
{
	var rv = true;
	$('[name^=reqRencanaKinerjaProgramId]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "RKA telah dipilih.");
			rv = false;
			return false;	
		}
	});
	
	
	totalData = $("#tbodyRKA tr").length;
	/*if(totalData > 4)
	{
		$.messager.alert("Info", "Maksimal 5(lima) bidang usaha yang dapat dipilih.");
		rv = false;
		return false;	
	}*/
		
	if(rv == true)
	{
		$("#tbodyRKA").append('<tr><td>'+namaRka+'</td><td>'+nama+'</td><td align="center"><input type="hidden" name="reqRencanaKinerjaProgramId[]" value="'+id+'"><a title="#" onclick="$(this).parent().parent().remove();"><i class="fa fa-trash"></i></a></td></tr>');	
	}
}


function tambahTenagaAhli(id, nama)
{
	var rv = true;
	$('[name^=reqTenagaAhliSyarat]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data tenaga ahli telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#daftarTenagaAhli").append('<tr><td><input type="hidden" name="reqTenagaAhliSyarat[]" value="'+id+'">'+nama+'</td><td align="center"><a title="#" onclick="$(this).parent().parent().remove(); validasiPendaftaran(\'daftarTenagaAhli\', \'reqDataTeknisTenagaAhliLabel\');"><img src="images/button_cancel.png" width="16" height="16" border="0" /></a></td></tr>');	

	validasiPendaftaran("daftarTenagaAhli", "reqDataTeknisTenagaAhliLabel");
}

function tambahPeralatan(id, nama)
{
	var rv = true;
	$('[name^=reqPeralatanSyarat]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data peralatan telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#daftarPeralatan").append('<tr><td><input type="hidden" name="reqPeralatanSyarat[]" value="'+id+'">'+nama+'</td><td align="center"><a title="#" onclick="$(this).parent().parent().remove(); validasiPendaftaran(\'daftarPeralatan\', \'reqDataPeralatanLabel\');"><img src="images/button_cancel.png" width="16" height="16" border="0" /></a></td></tr>');	

	validasiPendaftaran("daftarPeralatan", "reqDataPeralatanLabel");

}

function tambahSertifikat(id, nama)
{
	var rv = true;
	$('[name^=reqSertifikatSyarat]').each(function() {
		if($(this).val() == id)
		{
			$.messager.alert("Info", "Data sertifikat telah dipilih.");
			rv = false;
			return false;	
		}
	});
				  	
	if(rv == true)
		$("#daftarSertifikat").append('<tr><td><input type="hidden" name="reqSertifikatSyarat[]" value="'+id+'">'+nama+'</td><td align="center"><a title="#" onclick="$(this).parent().parent().remove(); validasiPendaftaran(\'daftarSertifikat\', \'reqDataSertifikatLabel\');"><img src="images/button_cancel.png" width="16" height="16" border="0" /></a></td></tr>');	

	validasiPendaftaran("daftarSertifikat", "reqDataSertifikatLabel");

}



function konfirmasiAksi(konfirmasi, web_link, id)
{
	$.messager.confirm('Konfirmasi',konfirmasi,function(r){
		if (r){
			
			var win = $.messager.progress({
				title:'APPro | PT Angkasa Pura I (Persero)',
				msg:'proses data...'
			});						
			
			var jqxhr = $.get( web_link+'?reqId='+id, function(data) {
				$.messager.progress('close');
				$.messager.alertReload('Info', data, 'info');	
			})
			.done(function() {
				$.messager.progress('close');
				$.messager.alertReload('Info', data, 'info');	
			})
			.fail(function() {
				$.messager.progress('close');
				alert( "error" );
			});								
		}
	});				
}

function deleteData(delete_link, id)
{
	$.messager.confirm('Konfirmasi','Yakin menghapus data terpilih ?',function(r){
			if (r){
				var jqxhr = $.get(delete_link+'?reqId='+id, function(result) {
					$.messager.alertReload('Info', result, 'info');
					// document.location.reload();
				})
				.done(function(result) {
					$.messager.alertReload('Info', result, 'info');
					// document.location.reload();
				})
				.fail(function() {
					alert( "error" );
				});								
			}
		});				
}

function deleteDataReload(delete_link, id)
{
	$.messager.confirm('Konfirmasi','Yakin menghapus data terpilih ?',function(r){
			if (r){
				var jqxhr = $.get(delete_link+'?reqId='+id, function(result) {
					$.messager.alertReload('Info', result, 'info');
					// document.location.reload();
				})
				.done(function(data) {
					arrData = data.split("|");
			        if(arrData[0] == "GAGAL"){
			        	// sweetAlert('gagal','Gagal...',arrData[1]);
			        	$.messager.alert('Informasi',arrData[1],'info');
			        }
			        else{
						// $("#"+elementId).remove();
						$.messager.alertReload('Informasi',arrData[1],'info');
			        	// sweetAlert('berhasil','Berhasil...',arrData[1]);
			        }
				})
				.fail(function(data){
					arrData = data.split("|");
					$.messager.alert('Informasi',arrData[1],'info');
			        // sweetAlert('gagal','Gagal...',arrData[1]);
				});								
			}
		});				
}

function deleteDataKodeHes(delete_link, id, jumlah_anak)
{	
	var pesan = '';
	if(jumlah_anak > 0){
		pesan = 'Yakin ingin menghapus kode parent?';
	}
	else{
		pesan = 'Yakin ingin menghapus data terpilih?';
	}

	$.messager.confirm('Konfirmasi',pesan,function(r){
			if (r){
				var jqxhr = $.get(delete_link+'?reqId='+id, function(result) {
					$.messager.alertReload('Info', result, 'info');
					// document.location.reload();
				})
				.done(function(result) {
					$.messager.alertReload('Info', result, 'info');
					// document.location.reload();
				})
				.fail(function() {
					alert( "error" );
				});								
			}
		});				
}

function deleteDataTable(delete_link, id, elementId)
{
	$.messager.confirm('Konfirmasi','Yakin menghapus data terpilih ?',function(r){
			if (r){
				var jqxhr = $.get( delete_link+'?reqId='+id, function() 
				{
					$("#"+elementId).remove();
				})
				.done(function(data) {
					arrData = data.split("|");
			        if(arrData[0] == "GAGAL"){
			        	// sweetAlert('gagal','Gagal...',arrData[1]);
			        	$.messager.alert('Informasi',arrData[1],'info');
			        }
			        else{
						$("#"+elementId).remove();
						$.messager.alert('Informasi',arrData[1],'info');
			        	// sweetAlert('berhasil','Berhasil...',arrData[1]);
			        }
				})
				.fail(function(data){
					arrData = data.split("|");
					$.messager.alert('Informasi',arrData[1],'info');
			        // sweetAlert('gagal','Gagal...',arrData[1]);
				});								
			}
		});				
}

function warningData()
{
	$.messager.alert("Warning !", "Data tidak dapat diubah/dihapus. Dikarenakan ada relasi.");			
}

function setElementValue(id,val){
	//alert(id+'-'+val);
	$("#"+id).val(val);
}


/**
PERHITUNGAN
**/

(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();


function hitungBidangPekerjaan(index, rekananid)
{
	if($("#reqKesesuaian"+index+"-"+rekananid).val() == "S")
		$("#reqKesesuaianNilai"+index+"-"+rekananid).val(100);
	else if($("#reqKesesuaian"+index+"-"+rekananid).val() == "TS")
		$("#reqKesesuaianNilai"+index+"-"+rekananid).val(0);
	else
	{	
		if($("#reqKesesuaianNilai"+index+"-"+rekananid).val() == "")
			return;
			
		if(Number($("#reqKesesuaianNilai"+index+"-"+rekananid).val()) == 0 || Number($("#reqKesesuaianNilai"+index+"-"+rekananid).val()) == 100)
			$("#reqKesesuaianNilai"+index+"-"+rekananid).val(50);	
	}
		
	var total = (Number($("#reqBpNiai").val()) * Number($("#reqKesesuaianNilai"+index+"-"+rekananid).val())) / 100;
	total = Math.round10(total, -2); 
	$("#reqKesesuaianTotal"+index+"-"+rekananid).val(total);
	$("#reqKesesuaianTotalCaption"+index+"-"+rekananid).text(total);

	var nilai = total + Number($("#reqNK"+index+"-"+rekananid).val()) + Number($("#reqSTBU"+index+"-"+rekananid).val());
	//alert(nilai);
	nilai = Math.round10(nilai, -2); 
	$("#reqNilaiCaption"+index+"-"+rekananid).text(nilai);
	$("#reqNilai"+index+"-"+rekananid).val(nilai);
	
	var total_nilai = 0;
	var jumlah_pengalaman = Number($("#reqEntrianPengalaman"+rekananid).val());
	var jumlah_pengalaman_pembagi = 0;	
	for(i=0;i<jumlah_pengalaman;i++)
	{
		if(Number($("#reqKesesuaianNilai"+i+"-"+rekananid).val()) == 0)
		{}
		else
		{
			total_nilai = total_nilai + Number($("#reqNilai"+i+"-"+rekananid).val());
			jumlah_pengalaman_pembagi += 1;
		}
	}
	
	var prosentase_nilai = 0;
	if(jumlah_pengalaman_pembagi >= Number($("#reqJmlPengalamanA").val()))
		prosentase_nilai = (Number($("#reqProsentasePengalamanA").val()));
	else if(jumlah_pengalaman_pembagi >= Number($("#reqJmlPengalamanB").val()))
		prosentase_nilai = (Number($("#reqProsentasePengalamanB").val()));
	else if(jumlah_pengalaman_pembagi >= Number($("#reqJmlPengalamanC").val()))
		prosentase_nilai = (Number($("#reqProsentasePengalamanC").val()));
	else if(jumlah_pengalaman_pembagi >= Number($("#reqJmlPengalamanD").val()))
		prosentase_nilai = (Number($("#reqProsentasePengalamanD").val()));
	else
		prosentase_nilai = 0;
	if(jumlah_pengalaman_pembagi == 0)
		total_nilai = 0;
	else
		total_nilai = (total_nilai / jumlah_pengalaman_pembagi);
	total_nilai = Math.round10(total_nilai, -2);
	$("#reqRataFinal"+rekananid).val(total_nilai);
	$("#reqProsentaseFinal"+rekananid).val(prosentase_nilai);
	$("#reqRataFinalCaption"+rekananid).text(total_nilai);
	prosentase_nilai = Math.round10(prosentase_nilai, -2);
	$("#reqProsentaseFinalCaption"+rekananid).text(prosentase_nilai + " %");

	total_nilai = (total_nilai * prosentase_nilai)/100;
	total_nilai = Math.round10(total_nilai, -2);
	$("#reqNilaiFinal"+rekananid).val(total_nilai);
	

}

function hitungPersonil(index, personilid, rekananid)
{
	if($("#reqKesesuaian"+index+"-"+personilid+"-"+rekananid).val() == "S")
		$("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val(100);
	else if($("#reqKesesuaian"+index+"-"+personilid+"-"+rekananid).val() == "TS")
		$("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val(0);
	else
	{	
		if($("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val() == "")
			return;
			
		if(Number($("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val()) == 0 || Number($("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val()) == 100)
			$("#reqKesesuaianNilai"+index+"-"+personilid+"-"+rekananid).val(50);	
	}
		
	var total_nilai = 0;
	var jumlah_personil = Number($("#reqPemenuhan"+personilid+"-"+rekananid).val());
	var jumlah_kebutuhan = Number($("#reqKebutuhan"+personilid+"-"+rekananid).val());
	var total_kebutuhan = Number($("#reqKebutuhan"+personilid+"-"+rekananid).val()) * 100;
	for(i=0;i<jumlah_personil;i++)
	{
		total_nilai = total_nilai + Number($("#reqKesesuaianNilai"+i+"-"+personilid+"-"+rekananid).val());
	}
	
	if(jumlah_kebutuhan > jumlah_personil)
		total_nilai = total_nilai / total_kebutuhan;
	else
	{
		if(total_kebutuhan <= total_nilai)
		{
			total_nilai = 1;
		}
		else
		{
			total_nilai = total_nilai / total_kebutuhan; 
		}
	}
	
	total_nilai = Number($("#reqProsentase"+personilid+"-"+rekananid).val()) * total_nilai; 
	
	total_nilai = Math.round10(total_nilai, -2);
	$("#reqKebutuhanPemenuhanNilai"+personilid+"-"+rekananid).val(total_nilai);	
	
	var total_prosentase = 0;
	var jumlah_kategori = Number($("#reqJumlahKategori").val());
	var nilai = Number($("#reqNilai").val());
	for(i=0;i<jumlah_kategori;i++)
	{
		total_prosentase = total_prosentase + Number($("#reqKebutuhanPemenuhanNilai"+i+"-"+rekananid).val());
	}
	nilai = (nilai * total_prosentase) / 100;
	
	nilai = Math.round10(nilai, -2);
	$("#reqNilaiProsentase"+rekananid).text(total_prosentase);	
	$("#reqNilaiFinal"+rekananid).val(nilai);	
	
}

function hitungPeralatan(index, peralatanid, rekananid)
{
	if($("#reqKesesuaian"+index+"-"+peralatanid+"-"+rekananid).val() == "S")
		$("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val(100);
	else if($("#reqKesesuaian"+index+"-"+peralatanid+"-"+rekananid).val() == "TS")
		$("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val(0);
	else
	{	
		if($("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val() == "")
			return;
		
		if(Number($("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val()) == 0 || Number($("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val()) == 100)
			$("#reqKesesuaianNilai"+index+"-"+peralatanid+"-"+rekananid).val(50);	
	}
		
	var total_nilai = 0;
	var jumlah_peralatan = Number($("#reqPemenuhan"+peralatanid+"-"+rekananid).val());
	var total_kebutuhan = 100;
	for(i=0;i<jumlah_peralatan;i++)
	{
		total_nilai = total_nilai + ((Number($("#reqKesesuaianNilai"+i+"-"+peralatanid+"-"+rekananid).val()) * Number($("#reqKepemilikan"+i+"-"+peralatanid+"-"+rekananid).val())) / 100);
	}

	if(total_kebutuhan <= total_nilai)
	{
		total_nilai = 1;
	}
	else
	{
		total_nilai = total_nilai / 100; 
	}
		
	
	total_nilai = Number($("#reqProsentase"+peralatanid+"-"+rekananid).val()) * total_nilai; 
	total_nilai = Math.round10(total_nilai, -2);
	$("#reqKebutuhanPemenuhanNilai"+peralatanid+"-"+rekananid).val(total_nilai);	
		
	var total_prosentase = 0;
	var jumlah_kategori = Number($("#reqJumlahKategori").val());
	var nilai = Number($("#reqNilai").val());
	for(i=0;i<jumlah_kategori;i++)
	{
		total_prosentase = total_prosentase + Number($("#reqKebutuhanPemenuhanNilai"+i+"-"+rekananid).val());
	}
	
	total_prosentase = Math.round10(total_prosentase, -2);
	if(total_prosentase > 100)
		total_prosentase = 100;
			

	nilai = (nilai * total_prosentase) / 100;
	nilai = Math.round10(nilai, -2);
	
	$("#reqNilaiProsentase"+rekananid).text(total_prosentase);	
	$("#reqNilaiFinal"+rekananid).val(nilai);	
	
}

function hitungSertifikat(index, sertifikatid, rekananid)
{
	if($("#reqKesesuaian"+index+"-"+sertifikatid+"-"+rekananid).val() == "S")
		$("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val(100);
	else if($("#reqKesesuaian"+index+"-"+sertifikatid+"-"+rekananid).val() == "TS")
		$("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val(0);
	else
	{	
		if($("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val() == "")
			return;
		
		if(Number($("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val()) == 0 || Number($("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val()) == 100)
			$("#reqKesesuaianNilai"+index+"-"+sertifikatid+"-"+rekananid).val(50);	
	}
		
	var total_nilai = 0;
	var jumlah_sertifikat = Number($("#reqPemenuhan"+sertifikatid+"-"+rekananid).val());
	var total_kebutuhan = 100;
	for(i=0;i<jumlah_sertifikat;i++)
	{
		total_nilai = total_nilai + Number($("#reqKesesuaianNilai"+i+"-"+sertifikatid+"-"+rekananid).val());
	}
	
	if(total_kebutuhan <= total_nilai)
	{
		total_nilai = 1;
	}
	else
	{
		total_nilai = total_nilai / 100; 
	}
	
	total_nilai = Number($("#reqProsentase"+sertifikatid+"-"+rekananid).val()) * total_nilai; 
	
	total_nilai = Math.round10(total_nilai, -2);
	$("#reqKebutuhanPemenuhanNilai"+sertifikatid+"-"+rekananid).val(total_nilai);	
		
	var total_prosentase = 0;
	var jumlah_kategori = Number($("#reqJumlahKategori").val());
	var nilai = Number($("#reqNilai").val());
	for(i=0;i<jumlah_kategori;i++)
	{
		total_prosentase = total_prosentase + Number($("#reqKebutuhanPemenuhanNilai"+i+"-"+rekananid).val());
	}
	
	total_prosentase = Math.round10(total_prosentase, -2);
	if(total_prosentase > 100)
		total_prosentase = 100;
		
	nilai = (nilai * total_prosentase) / 100;
	
	nilai = Math.round10(nilai, -2);
	
	$("#reqNilaiProsentase"+rekananid).text(total_prosentase);	
	$("#reqNilaiFinal"+rekananid).val(nilai);	
	
}

function reloadCaptcha () {
    $('#captchaImage').attr('src', 'app/loadUrl/main/CaptchaSecurityImages/?random=' + (new Date).getTime()+'&width=100&height=40&characters=5');
}


$(function(){
	$.extend($.fn.validatebox.defaults.rules, {
		remote:{
			validator: function(value,param){
				var target = this;
				var opts = $(this).validatebox('options');
				var data = {};
				opts.rules['remote']['message'] = "";
				data["reqParam1"] = value;
				data["reqParam2"] = param[2];
				if (!opts.notValidate){
					$.ajax({
						url: param[0],
						dataType: 'text',
						data: data,
						type: 'post',
						success: function(data){
							if (data == 'true'){
								opts.result = true;
							} else {
								opts.result = false;
							}
							opts.notValidate = true;
							$(target).validatebox('validate');
							opts.notValidate = false;
						}
					});
				}
				return opts.result!=undefined ? opts.result : true;
			}
		}
	});
});	




// extend the 'equals' rule
$.extend($.fn.validatebox.defaults.rules, {
	length: {
		validator: function(value,param){
			if ( value.length < 8 ) {
				return false;
			} else {
				return true;
			}
		},
		message: 'Be at least <strong>8 characters</strong>'
	},
	letter: {
		validator: function(value,param){
			if ( value.match(/[A-z]/) ) {
				return true;
			} else {
				return false;
			}
		},
		message: 'At least <strong>one letter</strong>'
	},
	capital: {
		validator: function(value,param){
			if ( value.match(/[A-Z]/) ) {
				return true;
			} else {
				return false;
			}
		},
		message: 'At least <strong>one capital letter</strong>'
	},
	number: {
		validator: function(value,param){
			if ( value.match(/\d/) ) {
				return true;
			} else {
				return false;
			}
		},
		message: 'At least <strong>one number</strong>'
	},
	maxFileSize: {
			validator: function(value, param){
				var file = $(this).parent().find('.easyui-validatebox');
				var sizeKB = ((file[0].files[0].size)/1024).toFixed(0);
				return sizeKB<=param[0];
			},
			message: 'The file must be less than {0} KB'
		}
});
			