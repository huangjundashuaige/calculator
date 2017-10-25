window.onload=function()
{
   // alert(document.getElementById("result").innerHTML)
    document.getElementById("0").onclick=function()
    {

        showTheProcess("0",document.getElementById("result").innerHTML);
    }
    document.getElementById("1").onclick=function()
    {

        showTheProcess("1",document.getElementById("result").innerHTML);
    }
    document.getElementById("2").onclick=function()
    {

        showTheProcess("2",document.getElementById("result").innerHTML);
    }
    document.getElementById("3").onclick=function()
    {
        showTheProcess("3",document.getElementById("result").innerHTML);
    }
    document.getElementById("4").onclick=function()
    {

        showTheProcess("4",document.getElementById("result").innerHTML);
    }
    document.getElementById("0").onclick=function()
    {

        showTheProcess("0",document.getElementById("result").innerHTML);
    }
    document.getElementById("5").onclick=function()
    {

        showTheProcess("5",document.getElementById("result").innerHTML);
    }
    document.getElementById("6").onclick=function()
    {

        showTheProcess("6",document.getElementById("result").innerHTML);
    }
    document.getElementById("7").onclick=function()
    {

        showTheProcess("7",document.getElementById("result").innerHTML);
    }
    document.getElementById("8").onclick=function()
    {

        showTheProcess("8",document.getElementById("result").innerHTML);
    }
    document.getElementById("9").onclick=function()
    {

        showTheProcess("9",document.getElementById("result").innerHTML);
    }
    document.getElementById("+").onclick=function()
    {
        showTheProcess("+",document.getElementById("result").innerHTML);
    }
    document.getElementById("-").onclick=function()
    {
        showTheProcess("-",document.getElementById("result").innerHTML);
    }
    document.getElementById("/").onclick=function()
    {
        showTheProcess("/",document.getElementById("result").innerHTML);
    }
    document.getElementById("*").onclick=function()
    {
        showTheProcess("*",document.getElementById("result").innerHTML);
    }
    document.getElementById("%").onclick=function()
    {
        showTheProcess("%",document.getElementById("result").innerHTML);
    }
    document.getElementById(".").onclick=function()
    {
        showTheProcess(".",document.getElementById("result").innerHTML);
    }
    document.getElementById("equal").onclick=function()
    {
        showTheResult(document.getElementById("result").innerHTML);
    }
    document.getElementById("backwards").onclick=function()
    {
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML.substring(0,document.getElementById("result").innerHTML.length-1);
    }
    document.getElementById("ce").onclick=function()
    {
        document.getElementById("result").innerHTML="";
    }
    document.getElementById("(").onclick=function()
    {
        showTheProcess("(",document.getElementById("result").innerHTML)
    }
    document.getElementById(")").onclick=function()
    {
        showTheProcess(")",document.getElementById("result").innerHTML)
    }
    document.getElementById("1/x").onclick=function()
    {
        var flag=1;
        try {
         eval(document.getElementById("result").innerHTML); 
        } catch (e) {
            if(e instanceof SyntaxError )flag=0;
        }
         if(flag==0)
         {
             document.getElementById("result_help").innerHTML="the input was not correct!";
         }
         else
         {
             document.getElementById("result_help").innerHTML="";
             var str="eval(document.getElementById('result').innerHTML)";
             document.getElementById("result").innerHTML=eval("1/"+str);
         }
    }
    document.getElementById("sqrt").onclick=function()
    {
        showTheResult();
        if(document.getElementById("result").innerHTML!="")
        document.getElementById("result").innerHTML=eval("Math.sqrt("+document.getElementById("result").innerHTML+")");
    }
    document.getElementById("miniusOrPlus").onclick=function()
    {
        if(document.getElementById("result").innerHTML[0]=='-')document.getElementById("result").innerHTML=document.getElementById("result").innerHTML.substring(1,document.getElementById("result").innerHTML.length);
        else document.getElementById("result").innerHTML="-"+document.getElementById("result").innerHTML;
    }
    
};
function showTheProcess(symbol,outputString)
{
    outputString+=symbol;
    document.getElementById("result").innerHTML=outputString;
}
function showTheResult()
{
var re = /([^0-9])(0)/;
    var ra=/^(0)/;
    while(document.getElementById("result").innerHTML.match(ra))
    {
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML.replace(ra,"");
    }
    while(document.getElementById("result").innerHTML.match(re))
    {
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML.replace(re,"$1");
    }   
    var flag=1;
   try {
    eval(document.getElementById("result").innerHTML); 
   } catch (e) {
       if(e instanceof SyntaxError )flag=0;
   }
        if(flag==0)
        {
            document.getElementById("result_help").innerHTML="the input was not correct!";
        }
        else
        {
            document.getElementById("result_help").innerHTML="";
            document.getElementById("result").innerHTML=eval(document.getElementById("result").innerHTML);
        }
    if(eval(document.getElementById('result').innerHTML)=="Infinity")
    {
        document.getElementById("result_help").innerHTML="the number which is used to divide another number cant be 0";
        document.getElementById('result').innerHTML="";
    }
    
};