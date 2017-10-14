/**
 * Created by rostislav on 14.10.17.
 */
/*
/!*  1  *!/
var newArr = [];

/!*  2  *!/

function getRandomNumber(min, max) {
	for (let i = min; i <= max; i++) {
		var random = Math.random() * (max + 1 - min) + min;
		random = Math.floor(random);
		newArr.push(random);
	}
	return newArr;
}

//console.log(getRandomNumber(1, 100));

/!*  3  *!/

var arrayToFind = [3, 6, 0, -6, 12];

function findMinMax(arr, minmax) {
	var arrSort = arr.sort(function (a, b) {
		return	a - b;
		});
	if (minmax === 'min') {
		return arrSort[0];
	} return arrSort[arrSort.length - 1];
}

//console.log(findMinMax(arrayToFind, 'max'));

function newfuncMM(arr, minmax) {
	var min = arr[0];
	var max = arr[0];
	for (let i = 1; i <= arr.length; i++	) {
		if (arr[i] <= min) {
			min = arr[i];
		} else if (arr[i] >= max) {
			max = arr[i];
		} continue;
	};
	if (minmax === 'min') {
		return min;
	} return max;
}
//console.log(newfuncMM(arrayToFind, 'min'));

function newfindMM(arr, minmax) {
	var min = Math.min.apply(0, arr);
	var max = Math.max.apply(0, arr);
	switch (minmax) {
		case 'min':
			return min;
			break;
		case 'max':
			return max;
			break;
	}
}
console.log(newfindMM(arrayToFind, 'max'));*/

/*  4  */

var newArr2 = [];

for (let i = 0; i < 30; i++) {
	newArr2.push(i);
}


function convertArrayToObj (array) {
	var obj = {};
	var lat = [];
	var arrLength = array.length;
	for (var i = 97; i <= 122; i++) {
		lat.push(String.fromCharCode(i));
	}
	for	(let i = 0; i < arrLength; i++) {
		i < 26 ? obj[lat[i]] = array[i] : obj[i - 25] = array[i];
	} return obj;
}

// console.log(convertArrayToObj(newArr2));

/*  5  */

var newData = [2, 12, 22, 6, 32];

var oldData = [12, 5, 7, 17, 22, 32];

function filterNew(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) >= 0) {
			arr1.splice(i, 1);
			i--;
		}
	} return arr1;
}

filterNew(newData, oldData);

console.log(newData);














