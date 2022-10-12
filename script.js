//1.JSON iterate over all for loops(for,for in,for of,forEach);
//for loop method
var a=[{"name":"guvi","age":"25"},{"name":"arun","age":"27"},
       {"name":"guna","age":"23"},{"name":"manoher","age":"29"}] 
       
for(var i=0;i<a.length;i++){
    console.log(a[i].name,a[i].age)
}

//for in loop method
var employ={
    "name":"vinoth",
    "age" :"30",
    "gender":"male",
    "location":"chennai",
    "company":"guvi",
    "salari":"33,000"
}
for(var b in employ){
console.log(b,employ[b]);
}

//for of lopp method
var cars=["audi","benz","bmw", "maruthi", "toyota", "lambrogini", "zaguar",]

for(var c of cars){
    console.log(c);
}

//for each loop method
var number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

number.forEach(function(number){
console.log(number);
});

//2.My resume data in JSON format

var vijayakumar = {
    "basics":{
        "name":"vijayakumar",
        "label":"Developer",
        "image":"",
        "email":"vijayalingam@gmail.com",
        "url":"https://vijayakumar.com",
        "summery":"A summery of vijayakumar...",
        "location":{
            "address":"4/221,nalapparampatti(vill),rangapuram(p.o),pennagaram(t.k),dharmapuri(d.t)",
            "city":"dharmapuri",
            "state":"Tamil Nadu",
            "postal code":"636813",
            "country":"india"
        },
        "Profile":[{
           "network":"twitter",
           "username":"vijayakumar",
           "url":"https://Twitter.com/vijayakumar",

        }]
    },
    "Work":[{
        "name":"Dharmapuri distict minor millet former producr com ltd",
        "position":"CEO",
        "startDate":"25-08-2019",
        "endDate":"25-08-2022",
        "summery":"description",
        "highlights":["identify illegal activites & place of new management"]
}],
"eduction":[{
    "institution":"GUVI From IIT-MADRES",
    "url":"https://GUVI.COM",
    "area":"Full stack Web developer",
    "StartDate":"06-09-2022",
    "endDate":"still study",
    "courses":"MERN stack",
}],
"skills":[{
    "name":"Web Development",
    "level":"Bachelor",
    "keywords":["HTML","CSS","JAVASCRIPT","BOOTSTRAP","DOM","ADVANCE JS","REACT JS","DATABASE","NODE JS"],
}],
"LANGUAGE":[{
    "language":"English,tamil,kanada,telugu",
}],

}
console.log(vijayakumar);
