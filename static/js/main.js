var value="not logged password";//global variable  
function myFunction() {
    if (document.getElementById("username_text").value === "pharoah" && document.getElementById("password_text").value === "' OR 1=1--")
        {
            document.getElementById("isloged").innerHTML = "good job your next challenge https://raw.githubusercontent.com/oo6055/passover-ctf-part2/master/image.jpg";
            document.getElementById("picture").src = "https://tikunhaklali.co.il/wp-content/uploads/2018/02/2.png";

    }else{
        window.open( 
            "https://www.youtube.com/watch?v=CZgDNPGZ9Sg", "_blank");
            document.getElementById("isloged").innerHTML = "wrong username or password";
    }
	}