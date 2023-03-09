function loginfunc() {
    sname = document.getElementById("uname").value;
    age = parseInt(document.getElementById("age").value);
    sem = parseInt(document.getElementById("sem").value);
    window.open("p2.html");
    
    localStorage.setItem("uname", sname);
    localStorage.setItem("usem", sem);
    localStorage.setItem("uage", age);
}
function cgpacalc() {
    document.getElementById("demo").innerHTML = "Submitted!";
    var c1 = parseInt(document.getElementById("cr1").value);
    var c2 = parseInt(document.getElementById("cr2").value);
    var c3 = parseInt(document.getElementById("cr3").value);
    var c4 = parseInt(document.getElementById("cr4").value);
    var c5 = parseInt(document.getElementById("cr5").value);
    var c6 = parseInt(document.getElementById("cr6").value);

    var n1 = document.getElementById("i1").value;
    var n2 = document.getElementById("i2").value;
    var n3 = document.getElementById("i3").value;
    var n4 = document.getElementById("i4").value;
    var n5 = document.getElementById("i5").value;
    var n6 = document.getElementById("i6").value;

    let s1 = document.getElementById("g1");
    var v1 = s1.value;
    let s2 = document.getElementById("g2");
    var v2 = s2.value;
    let s3 = document.getElementById("g3");
    var v3 = s3.value;
    let s4 = document.getElementById("g4");
    var v4 = s4.value;
    let s5 = document.getElementById("g5");
    var v5 = s5.value;
    let s6 = document.getElementById("g6");
    var v6 = s6.value;
    document.getElementById("s1").innerHTML = n1 + " Grade : " + s1.options[s1.selectedIndex].text;
    document.getElementById("s2").innerHTML = n2 + " Grade : " + s2.options[s2.selectedIndex].text;
    document.getElementById("s3").innerHTML = n3 + " Grade : " + s3.options[s3.selectedIndex].text;
    document.getElementById("s4").innerHTML = n4 + " Grade : " + s4.options[s4.selectedIndex].text;
    document.getElementById("s5").innerHTML = n5 + " Grade : " + s5.options[s5.selectedIndex].text;
    document.getElementById("s6").innerHTML = n6 + " Grade : " + s6.options[s6.selectedIndex].text;
    var total_gp = parseInt(v1) * c1 + parseInt(v2) * c2 + parseInt(v3) * c3 + parseInt(v4) * c4 + parseInt(v5) * c5 + parseInt(v6) * c6;
    var gpa = total_gp / (c1 + c2 + c3 + c4 + c5 + c6);
    gpa = (Math.round(gpa * 10000) / 10000).toFixed(4);
    document.getElementById("CGPA").innerHTML = "GPA Grade : " + gpa;    

    localStorage.setItem("CGPA",gpa);
    localStorage.setItem("s1",n1);
    localStorage.setItem("s2",n2);
    localStorage.setItem("s3",n3);
    localStorage.setItem("s4",n4);
    localStorage.setItem("s5",n5);
    localStorage.setItem("s6",n6);
    localStorage.setItem("g1",s1.options[s1.selectedIndex].text);
    localStorage.setItem("g2",s2.options[s2.selectedIndex].text);
    localStorage.setItem("g3",s3.options[s3.selectedIndex].text);
    localStorage.setItem("g4",s4.options[s4.selectedIndex].text);
    localStorage.setItem("g5",s5.options[s5.selectedIndex].text);
    localStorage.setItem("g6",s6.options[s6.selectedIndex].text);
    localStorage.setItem("c1",c1);
    localStorage.setItem("c2",c2);
    localStorage.setItem("c3",c3);
    localStorage.setItem("c4",c4);
    localStorage.setItem("c5",c5);
    localStorage.setItem("c6",c6);
    localStorage.setItem("sc1",parseInt(v1));
    localStorage.setItem("sc2",parseInt(v2));
    localStorage.setItem("sc3",parseInt(v3));
    localStorage.setItem("sc4",parseInt(v4));
    localStorage.setItem("sc5",parseInt(v5));
    localStorage.setItem("sc6",parseInt(v6));
    localStorage.setItem("tgp",total_gp);
    localStorage.setItem("tc",c1+c2+c3+c4+c5+c6);
    window.open("result.html")
}

