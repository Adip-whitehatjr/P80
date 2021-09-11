name_of_the_student_array = [];

function submit() {
    var Display_Student_Array = [];

   for (var J = 1; J<= 4;J++ )
    {
        var name_of_the_student = document.getElementById("name_of_the_student"+J).Value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var lenght_name_of_the_student = name_of_the_student_array.length;
    console.log(lenght_name_of_the_student);
    for (var Ad = 0; Ad< lenght_name_of_the_student ; Ad++) 
    {
        Display_Student_Array.push("<h4> NAME-"+name_of_the_student_array [Ad]+"</h4>");
        console.log(Display_Student_Array);
    
    }
    console.log(Display_Student_Array);
    document.getElementById("diplay_name_with_commas").innerHTML = Display_Student_Array;
    var remove_commas = Display_Student_Array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none"; 

    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() 
{ name_of_the_student_array.sort(); 
    console.log(name_of_the_student_array); 
    var display_student_array_sorting = []; 
    var lenght_of_name_of_students_array = name_of_the_student_array.length; 
    console.log(lenght_of_name_of_students_array); 
    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    { display_student_array_sorting.push("NAME- " + name_of_the_student_array[k] + "</h4>"); 
    console.log(display_student_array_sorting); } 
    var remove_commas = display_student_array_sorting.join(" "); 
    console.log(remove_commas); 
    document.getElementById("display_name_without_commas").innerHTML = remove_commas; }