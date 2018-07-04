function sortNumberAS(a, b)
{
    return a-b    
}
function sortNumberDesc(a, b)
{
    return b-a
}

function SortTable(obj){
    let tag_num=obj.id.substr(3,1);
    let chosen_col = obj.id.substr(5,1);
    let td0s=document.getElementsByName("td_" + tag_num + "_0");
    let td1s=document.getElementsByName("td_" + tag_num + "_1");
    let td2s=document.getElementsByName("td_" + tag_num + "_2");
    let td3s=document.getElementsByName("td_" + tag_num + "_3");
    let td4s=document.getElementsByName("td_" + tag_num + "_4");
    let td5s=document.getElementsByName("td_" + tag_num + "_5");

    let tdArray0=[];
    let tdArray1=[];
    let tdArray2=[];
    let tdArray3=[];
    let tdArray4=[];
    let tdArray5=[];
    for(let i=0;i<td0s.length;i++){
        tdArray0.push(parseInt(td0s[i].innerHTML));
    }
    for(let i=0;i<td1s.length;i++){
        tdArray1.push(td1s[i].innerHTML);
    }
    for(let i=0;i<td2s.length;i++){
        tdArray2.push(td2s[i].innerHTML);
    }
    for(let i=0;i<td3s.length;i++){
        tdArray3.push(td3s[i].innerHTML);
    }
    for(let i=0;i<td2s.length;i++){
        tdArray4.push(td4s[i].innerHTML);
    }
    for(let i=0;i<td3s.length;i++){
        tdArray5.push(td5s[i].innerHTML);
    }

    let tds=document.getElementsByName("td"+obj.id.substr(2,4));
    let originArray=[];
    let columnArray=[];
    if(chosen_col == "0")
    {
      for(let i=0;i<tds.length;i++){
        columnArray.push(parseInt(tds[i].innerHTML));
      }
      for(let i=0;i<columnArray.length;i++){
          originArray.push(columnArray[i]);
      }

      if(obj.className=="title desc"){
        columnArray.sort(sortNumberAS);            
        obj.className="title as";
      }else{
        columnArray.sort(sortNumberDesc);              
        obj.className="title desc";
      }
    }
    else if(chosen_col == "1")
    {
      for(let i=0;i<td1s.length;i++){
        columnArray.push(tds[i].innerHTML);
      }
      for(let i=0;i<columnArray.length;i++){
        originArray.push(columnArray[i]);
      }
      for(let i=0; i<columnArray.length; i++)
      {
        columnArray[i] = originArray[(i+2)%columnArray.length]
      }
    }

    for(let i=0;i<columnArray.length;i++){
        for(let j=0;j<originArray.length;j++){
            if(originArray[j]==columnArray[i]){
                document.getElementsByName("td_" + tag_num + "_0")[i].innerHTML=tdArray0[j];
                document.getElementsByName("td_" + tag_num + "_1")[i].innerHTML=tdArray1[j];
                document.getElementsByName("td_" + tag_num + "_2")[i].innerHTML=tdArray2[j];
                document.getElementsByName("td_" + tag_num + "_3")[i].innerHTML=tdArray3[j];
                document.getElementsByName("td_" + tag_num + "_4")[i].innerHTML=tdArray4[j];
                document.getElementsByName("td_" + tag_num + "_5")[i].innerHTML=tdArray5[j];
                originArray[j]=null;
                break;
            }
        }
    }
}

function changeDocTable(obj)
{
  let num = obj.id.substr(3, 1);
  let thisDocument = document.getElementById("document" + num);
  for(let i = 1; i < 3; i++)
  {
      if(i!=num)
      {
          document.getElementById("document" + i).style.visibility = "hidden";
      }
  }
  thisDocument.style.visibility = "visible";
}

