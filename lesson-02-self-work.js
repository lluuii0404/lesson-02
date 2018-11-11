// ------- task 1 -------
var group = [
    {
		name: "Tony",
		lastname: "Junior",
		age: 16,
		notebook: false,
		hobbys: ["football", "basketball"] 
	},
	{
		name: "Laty",
		lastname: "Fox",
		age: 21,
		notebook: true,
		hobbys: ["read book", "walking"] 
	},
	{
		name: "Kate",
		lastname: "Nikson",
		age: 21,
		notebook: true,
		hobbys: ["shopping", "party"] 
	}
]

function getStudentsList ( arrayOfStudents ) {
    for (var person of group){
		console.log( person["name"] + " " + 
					 person["lastname"] + ", " +
				     person["age"] + " лет, ноутбук " +
				     person["notebook"] + ", хобби " + 
				     person["hobbys"])
    }
}

getStudentsList(group)


// ------- task 2 -------
function addNewStudent ( name, lastName, age, notebook, hobby ) {
    group.push(
        {
			name: name,
			lastname: lastName,
			age: age,
			notebook: notebook,
			hobby: hobby
		}
	)
}

addNewStudent("Ann", "Maison", "24", false, ["make up", "shopping"])

getStudentsList(group)


// ------- task 3 -------
function testStr (str) {
	var res="", test = false
	for (var i = 0; i < str.length; i++) {
		test = str.charCodeAt(i)<1103 && str.codePointAt(i)>1040
		res+=test ? str.charAt(i) : "";
	}
	return res
}



// ------- task 4 -------

var arr = [5, 3, 8, 2, 12, 1]

function sortArray (array) {
    var i = 0, j = 0, temp = 0
	while (j < array.length){
		i=0
		while (i < array.length-1){
            if (array[i]> array[i+1]) {
                temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
            i = i + 1
        }
		j = j + 1
	}
	return array   
}

sortArray(arr)

arr= [9,16.44,1,9,4,32,"2"]

sortArray(arr)

var arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

sortArray(arr)

// ------- task 5 -------

﻿
var names = ["Мария", "Николай", "Антон", "Сергей", "Карина", "Николай"]
var lastnames = ["Сидоренко", "Иванов", "Чижиков", "Коломенцев", "Ежова", "Чижиков", "Коломенцев"]


function getNewArray(n,l) {
	var newArray = [];
	
	n.length < l.length ? l = l.slice(0, n.length) : n = n.slice(0, l.length)

	
	for(var i = 0, j = 0; i < n.length, j < l.length; i++, j++){

		newArray[i] = n[i] + " " + l[j]
	}
	return newArray
}

getNewArray(names, lastnames)
