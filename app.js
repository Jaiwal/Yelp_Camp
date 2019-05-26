var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds=[
    {name:"Toa Heftiba",image:"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name:"Sansa",image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name:"John",image:"https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
]


app.get("/",function(req,res){

  res.render("landing");


});


app.get("/campgrounds",function(req,res){

  
  res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds",function(req,res){
  
    //get data from form and add to campground array
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name,image:image};
    campgrounds.push(newCampground);
    
    //redirect back to campground page(get wala)
     res.redirect("/campgrounds");
  
    // res.send("you hit the post route!");
});





app.get("/campgrounds/new",function(req,res){
  res.render("new");
});













app.listen('3000',()=>console.log("YelpCamp Server has started"));