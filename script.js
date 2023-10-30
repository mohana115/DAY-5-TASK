//1. For the given JSON iterate over all for loops(for, for in , for of)

const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };

//   //using the for loops.

const entries = Object.entries(jsonData);
for (let i = 0; i < entries.length; i++) {
  const key = entries[i][0];
  const value = entries[i][1];
  console.log(key, value);
}

//using the for in loops.

for (let key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      console.log(key, jsonData[key]);
    }
  }
//using the for of loops.

const values = Object.values(jsonData);
for (const value of values) {
  console.log(value);
}
//2. Create your own resume data inJSON format.

const resumeData = {
  "name":"mohana",
  "email":"mohanajp92@gmail.com",
  "address":["chennai","Tamilnadu"],
  "education":[{
    "degree":"Bachelor of Electronic and Communication Engineering",
    "year": "2012-2015"
  },
  {
    "degree":"Diploma Electronic and Communication Engineering",
    "year":"2009-2012"
  },
  {
    "school":"L.N.P Girls higher sec school",
    "year":"2009"
  }
]
}
 console.log(JSON.stringify(resumeData, null , 2));