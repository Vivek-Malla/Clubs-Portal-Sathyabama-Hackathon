const express = require("express");
const app = express();
const nodemailer = require('nodemailer');

const club = "hack club event is on the gogle form is s";

const bp = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(urlencoded({extented : true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var posts = [];

app.get("/",function(req,res){
 res.sendFile(__dirname+"/home.html");
})
app.get("/home.html",function(req,res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about.html",function(req,res){
    res.sendFile(__dirname+"/about.html");
   });
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
   });
app.get("/adminlogin.html",function(req,res){
    res.sendFile(__dirname+"/adminlogin.html");
   });
//    important
app.get("/events",function(req,res){
    res.render("events",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/Eventupdates",function(req,res){
    res.render("Eventupdates");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/pay",function(req,res){
    res.render("pay");
});
app.post("/student",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("sdashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});
app.get("/facultypageevents",function(req,res){
    res.render("facultypageevents",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/hodapproval",function(req,res){
    res.render("hodapproval",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/eventadded",function(req,res){
    res.sendFile(__dirname+"/eventadded.html")
});
app.get("/eventpage",function(req,res){
    res.sendFile(__dirname+"Confirmedevent.ejs");
})
app.post("/admin",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("adashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});

app.post("/Eventupdates",function(req,res){
    var title = req.body.tname;
    var date = req.body.edate;
    var des = req.body.edes;
    var reg = req.body.eform;
    var ddate = req.body.ldate;

    const post = {
        tname : title,
        edate : date,
        edes : des,
        eform : reg,
        ldate : ddate
    };
    posts.push(post);
    var emailq = req.body.email;

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: 'gmail',
    auth: {
      user: 'thisisvivekmalla8055@gmail.com',
      pass: 'yptbkgmfoxuebnux'
    }
  })
  let info = transporter.sendMail({
    from: 'vivekmalla123@gmail.com',
    to: emailq,
    subject: 'Event Added',
    text: "A Student have updated an new Event. Details are Verified. Kindly Check the portal"
  })

    res.sendFile(__dirname+"/home.html");
});
app.get("/slogin",function(req,res){
    res.sendFile(__dirname+"/slogin.html");
});
app.post("/studentportal",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "thisisvivekmalla@gmail.com" && spwd == "1234"){
        res.render("studentportal",{username : sname});
    }
    else{
        res.send("incorrect password");
    }
});
app.get("/edit",function(req,res){
    res.render("studentportal",{username : "Admin"});
})
app.get("/hodlogin",function(req,res){
    res.sendFile(__dirname+"/hodlogin.html");
});
app.post("/hodportal",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "hod@gmail.com" && spwd == "1234"){
        res.render("hodportal",{username : sname});
    }
    else{
        res.send("incorrect password");
    }
});
app.get("/faculogin",function(req,res){
    res.sendFile(__dirname+"/faculogin.html");
});
app.post("/facultyportal",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "jeslin@gmail.com" && spwd == "1234"){
        res.render("facultyportal",{username : sname});
    }
    else{
        res.send("incorrect password");
    }
});
app.post("/eventadded",function(req,res){
    var event = req.body.event;
    var clubname = req.body.clubname;
    var faculty = req.body.faculty;
    var student = req.body.student;
    var dateevent = req.body.dateevent;
    var BrochureLink = req.body.BrochureLink;
    var GoogleLink = req.body.GoogleLink;
console.log(event);
console.log(clubname);
    const post = {
        event : event,
        clubname : clubname,
        faculty : faculty,
        student : student,
        dateevent : dateevent,
        BrochureLink : BrochureLink,
        GoogleLink : GoogleLink
    };
    posts.push(post);

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: 'gmail',
    auth: {
      user: 'thisisvivekmalla@gmail.com',
      pass: 'anqbfjhmvwtgmroa'
    }
  })
  let info = transporter.sendMail({
    from: 'thisisvivekmalla@gmail.com',
    to: 'thisisvivekmalla8055@gmail.com',
    subject: 'Event Added Successfully',
    text: "A new Event Updated in the Event Portal"
  })

   res.sendFile(__dirname+"/eventadded.html");
});
app.listen(1204,function(){
    console.log("Server is running sucessfully at LocalHost:1234");
});