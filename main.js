qwerty=[]
function submit(){
   display_student_name=[];
for( var i=0;i<=4;i++){
    var name_of_the_students= document.getElementById("name_of_the_student_"+i).value;
    qwerty.push(name_of_the_students);
}

     document.getElementById("display_name_with_commas").innerHTML=qwerty;
}
function sorting(){
    display_student_name2=[];
    for( var j=0;j<=4;j++){
        var name_of_the_studentss= document.getElementById("name_of_the_student_"+j).value;
        name_of_the_studentss.sort();
        qwertyuiop.push(name_of_the_studentss);
    } 
    document.getElementById("display_name_without_commas").innerHTML=qwertyuiop;

}