function generate(){
    const col = document.getElementById("col").value;
    const row = document.getElementById("row").value;
    const col2 = document.getElementById("col");
    const row2 = document.getElementById("row");
    const table = document.getElementById("table");
    const code = document.getElementById("code");
    const thx = document.getElementById("thx");
    const thy = document.getElementById("thy");
    const range = document.getElementById("range");
    const borderenable = document.getElementById("borderenable");
    const bordersize = document.getElementById("bordersize").value;
    const borderstyle = document.getElementById("borderstyle").value;
    const bordercolor = document.getElementById("bordercolor").value;
    const nospaces = document.getElementById("nospaces");

    var lt="<span style='color: #808080'>&lt;</span>";
    var lts="<span style='color: #808080'>&lt;/</span>";
    var rt="<span style='color: #808080'>></span>";

    if(col=="" || row==""){
        range.hidden=true;
        col2.style.outline="";
        row2.style.outline="";
        table.innerHTML=("");
        code.innerHTML=("");
    }

    if(col<1 || col>100)if(col!=""){
        range.hidden=false;
        col2.style.outline="3px solid #DA0000";
        table.innerHTML=("");
        code.innerHTML=("");
    }
    
    if(row<1 || row>100)if(row!=""){
        range.hidden=false;
        row2.style.outline="3px solid #DA0000";
        table.innerHTML=("");
        code.innerHTML=("");
    }

    if(col>0 && row>0 && col<101 && row<101){
        range.hidden=true;
        col2.style.outline="";
        row2.style.outline="";

        if(borderenable.checked==true || nospaces.checked==true){
            var tablevalue=("<style>");
            if(borderenable.checked==true) tablevalue+=("td, th{border: "+bordersize+"px "+borderstyle+" "+bordercolor+";} ");
            if(nospaces.checked==true) tablevalue+=("table{border-collapse: collapse;} ");
            tablevalue+=("</style><table>");
        }

        else var tablevalue=("<table>");
        if(thx.checked==true){
            tablevalue+=("<tr>");
            for(colv=col; colv>0; colv--) tablevalue+=("<th>th</th>");
            tablevalue+=("</tr>");
            for(rowv=row-1; rowv>0; rowv--){
                tablevalue+=("<tr>");
                if(thy.checked==true){
                    tablevalue+=("<th>th</th>");
                    for(colv=col-1; colv>0; colv--) tablevalue+=("<td></td>");
                }
                else{
                    for(colv=col; colv>0; colv--) tablevalue+=("<td></td>");
                }
                tablevalue+=("</tr>");
            }
        }
        else{
            for(rowv=row; rowv>0; rowv--){
                tablevalue+=("<tr>");
                if(thy.checked==true){
                    tablevalue+=("<th>th</th>");
                    for(colv=col-1; colv>0; colv--) tablevalue+=("<td></td>");
                }
                else{
                    for(colv=col; colv>0; colv--) tablevalue+=("<td></td>");
                }
                tablevalue+=("</tr>");
            }
        }
        tablevalue+=("</table>");
        table.innerHTML=(tablevalue);

        if(borderenable.checked==true || nospaces.checked==true){
            var codevalue=(lt+"style"+rt);
            if(borderenable.checked==true) codevalue+=("<br><span style='color: #D7BA7D'>td</span><span style='color: white'>,</span> <span style='color: #D7BA7D'>th</span><span style='color: #FFD700'>{</span><span style='color: #9CDCFE'>border</span><span style='color: white'>:</span> <span style='color: #B5CEA8'>"+bordersize+"px</span> <span style='color: #CE9178'>"+borderstyle+" "+bordercolor+"</span><span style='color: white'>;</span><span style='color: #FFD700'>}</span>");
            if(nospaces.checked==true) codevalue+=("<br><span style='color: #D7BA7D'>table</span><span style='color: #FFD700'>{</span><span style='color: #9CDCFE'>border-collapse</span><span style='color: white'>:</span> <span style='color: #CE9178'>collapse</span><span style='color: white'>;</span><span style='color: #FFD700'>}</span>");
            codevalue+=("<br>"+lts+"style"+rt+"<br>"+lt+"table"+rt+"<br>");
        }

        else var codevalue=(lt+"table"+rt+"<br>");
        if(thx.checked==true){
            codevalue+=(lt+"tr"+rt+"<br>");
            for(colv=col; colv>0; colv--) codevalue+=(lt+"th"+rt+lts+"th"+rt);
            codevalue+=("<br>"+lts+"tr"+rt+"<br>");
            for(rowv=row-1; rowv>0; rowv--){
                codevalue+=(lt+"tr"+rt+"<br>");
                if(thy.checked==true){
                    codevalue+=(lt+"th"+rt+lts+"th"+rt);
                    for(colv=col-1; colv>0; colv--) codevalue+=(lt+"td"+rt+lts+"td"+rt);
                }
                else{
                    for(colv=col; colv>0; colv--) codevalue+=(lt+"td"+rt+lts+"td"+rt);
                }
                codevalue+=("<br>"+lts+"tr"+rt+"<br>");
            }
        }
        else{
            for(rowv=row; rowv>0; rowv--){
            codevalue+=(lt+"tr"+rt+"<br>");
            if(thy.checked==true){
                codevalue+=(lt+"th"+rt+lts+"th"+rt);
                for(colv=col-1; colv>0; colv--) codevalue+=(lt+"td"+rt+lts+"td"+rt);
            }
            else{
                for(colv=col; colv>0; colv--) codevalue+=(lt+"td"+rt+lts+"td"+rt);
            }
            codevalue+=("<br>"+lts+"tr"+rt+"<br>");
            }
        }
        codevalue+=(lts+"table"+rt);
        code.innerHTML=(codevalue);
    }
}

function select(){
    window.getSelection().selectAllChildren(document.getElementById("code"));
}

function copy(){
    window.getSelection().selectAllChildren(document.getElementById("code"));
    document.execCommand('copy')
    const copied = document.getElementById("copied");
}

function colup(){document.getElementById("col").value++; generate();}
function coldown(){document.getElementById("col").value--; generate();}
function rowup(){document.getElementById("row").value++; generate();}
function rowdown(){document.getElementById("row").value--; generate();}

function fadein(){
    if(document.getElementById("code").innerHTML===""){
        const nocode = document.getElementById("notif");
        nocode.innerHTML="<i class=\"fa-solid fa-xmark\"></i> No code to copy";
        nocode.style.background="linear-gradient(140deg, #FF5429, #DD2323)";
        nocode.style.opacity = 1;
        setTimeout(function(){nocode.style.opacity = 0;}, 2000);
    }
    else{
        const copied = document.getElementById("notif");
        copied.innerHTML="<i class=\"fa-solid fa-check\"></i> Copied";
        copied.style.background="linear-gradient(140deg, #45B458, #23E02B)";
        copied.style.opacity = 1;
        setTimeout(function(){copied.style.opacity = 0;}, 2000);
    }
}

function clearinput(){
    document.getElementById("col").value="";
    document.getElementById("row").value="";
    document.getElementById("thx").checked=false;
    document.getElementById("thy").checked=false;
    document.getElementById("borderenable").checked=false;
    document.getElementById("bordersize").value="";
    document.getElementById("borderstyle").value="dotted";
    document.getElementById("bordercolor").value="#000000";
    borderenable();
    generate();
}

function regenerate(){generate()}

function cleared(){
    const cleared = document.getElementById("notif");
    cleared.innerHTML="<i class=\"fa-solid fa-check\"></i> Cleared";
    cleared.style.background="linear-gradient(140deg, #45B458, #23E02B)";
    cleared.style.opacity = 1;
    setTimeout(function(){cleared.style.opacity = 0;}, 2000);
}

function regenerated(){
    const regenerated = document.getElementById("notif");
    regenerated.innerHTML="<i class=\"fa-solid fa-check\"></i> Re-generated";
    regenerated.style.background="linear-gradient(140deg, #45B458, #23E02B)";
    regenerated.style.opacity = 1;
    setTimeout(function(){regenerated.style.opacity = 0;}, 2000);
}

function selected(){
    if(document.getElementById("code").innerHTML===""){
        const noselect = document.getElementById("notif");
        noselect.innerHTML="<i class=\"fa-solid fa-xmark\"></i> No code to select";
        noselect.style.background="linear-gradient(140deg, #FF5429, #DD2323)";
        noselect.style.opacity = 1;
        setTimeout(function(){noselect.style.opacity = 0;}, 2000);
    }
    else{
        const selected = document.getElementById("notif");
        selected.innerHTML="<i class=\"fa-solid fa-check\"></i> Selected";
        selected.style.background="linear-gradient(140deg, #45B458, #23E02B)";
        selected.style.opacity = 1;
        setTimeout(function(){selected.style.opacity = 0;}, 2000);
    }
}

function regenerateinfo1(){
    timeout = setTimeout(function(){       
        document.getElementById("regenerateinfo").style.opacity=1;
        document.getElementById("triangle").style.opacity=1;
    }, 500);
}
function regenerateinfo2(){
    document.getElementById("regenerateinfo").style.opacity=0;
    document.getElementById("triangle").style.opacity=0;
    clearTimeout(timeout);
}

function borderenable(){
    const status = document.getElementById("borderenable");
    const size = document.getElementById("bordersize");
    const px = document.getElementById("px");
    const style = document.getElementById("borderstyle");
    const color = document.getElementById("bordercolor");
    const info = document.getElementById("bordersinfo");
    const sizeup = document.getElementById("sizeup");
    const sizedown = document.getElementById("sizedown");
    if(status.checked==true){
        size.disabled=false;
        px.style.backgroundColor="#1C242C";
        px.style.borderColor="#1C242C";
        px.style.color="white";
        style.disabled=false;
        color.disabled=false;
        sizeup.disabled=false;
        sizeup.style.color="white";
        sizedown.disabled=false;
        sizedown.style.color="white";
        info.hidden=true;
    }
    else{
        size.disabled=true;
        px.style.backgroundColor="#171F27";
        px.style.borderColor="#171F27";
        px.style.color="#B6B9BB";
        style.disabled=true;
        color.disabled=true;
        sizeup.disabled=true;
        sizeup.style.color="#B6B9BB";
        sizedown.disabled=true;
        sizedown.style.color="#B6B9BB";
        info.hidden=false;
    }
}
function sizeup(){document.getElementById("bordersize").value++;}
function sizedown(){document.getElementById("bordersize").value--;}

function colorchange(){
    const colorchange = document.getElementById("colorchange");
    const table = document.getElementById("table");
    if(colorchange.checked==true){table.style.backgroundColor="white";}
    else{table.style.backgroundColor="#0A1117";}
}

function widthenable(){
    const status = document.getElementById("widthenable");
    const value = document.getElementById("cellwidth");
    const px = document.getElementById("px2");
    const widthup = document.getElementById("widthup");
    const widthdown = document.getElementById("widthdown");
    if(status.checked==true){
        value.disabled=false;
        px.style.backgroundColor="#1C242C";
        px.style.borderColor="#1C242C";
        px.style.color="white";
        widthup.disabled=false;
        widthup.style.color="white";
        widthdown.disabled=false;
        widthdown.style.color="white";
    }
    else{
        value.disabled=true;
        px.style.backgroundColor="#171F27";
        px.style.borderColor="#171F27";
        px.style.color="#B6B9BB";
        widthup.disabled=true;
        widthup.style.color="#B6B9BB";
        widthdown.disabled=true;
        widthdown.style.color="#B6B9BB";
    }
}
function widthup(){document.getElementById("cellwidth").value++;}
function widthdown(){document.getElementById("cellwidth").value--;}

function heightenable(){
    const status = document.getElementById("heightenable");
    const value = document.getElementById("cellheight");
    const px = document.getElementById("px3");
    const heightup = document.getElementById("heightup");
    const heightdown = document.getElementById("heightdown");
    if(status.checked==true){
        value.disabled=false;
        px.style.backgroundColor="#1C242C";
        px.style.borderColor="#1C242C";
        px.style.color="white";
        heightup.disabled=false;
        heightup.style.color="white";
        heightdown.disabled=false;
        heightdown.style.color="white";
    }
    else{
        value.disabled=true;
        px.style.backgroundColor="#171F27";
        px.style.borderColor="#171F27";
        px.style.color="#B6B9BB";
        heightup.disabled=true;
        heightup.style.color="#B6B9BB";
        heightdown.disabled=true;
        heightdown.style.color="#B6B9BB";
    }
}
function heightup(){document.getElementById("cellheight").value++;}
function heightdown(){document.getElementById("cellheight").value--;}

var moreopen = Boolean(false);
function more(){
    var menu = document.getElementById("menu");
    var moreicon = document.getElementById("moreicon");
    var menuclose = document.getElementById("menuclose");
    if(moreopen == false){
        menu.classList.add("open");
        menuclose.classList.add("open");
        moreicon.classList.add("open");
        moreicon.classList.remove("closed");
        moreopen = true;
    }
    else{
        menu.classList.remove("open");
        menuclose.classList.remove("open");
        moreicon.classList.remove("open");
        moreicon.classList.add("closed");
        moreopen = false;
    }
}