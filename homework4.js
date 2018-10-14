//1
const f = function(a,b){
	let x = 0;
	let str = "";
	while(x < a){
		str = str + b;
		x=x+1;
	}
	return str;
};

const row = function(c,a){
	console.log(f(c, " ") + f(a, "*"));
};

const triangleStars = function(m){
	let x = 0;
	let spaces = 0;
	let stars = 2*m-1;
	while(x < m){
		row(spaces, stars);
		spaces=spaces+1;
		stars = stars - 2;
		x=x+1;
	}s
};


triangleStars(4);

//2
const multiToSingle = function(arr){
	const onearr = [];
	let a = 0;
	while(a < arr.length){
		let arr1 = arr[a];
		let b = 0;
		while(b < arr1.length){
			onearr[onearr.length] = arr1[b];
			b = b + 1;
		}
		a = a + 1;
	}
	return onearr;
};

console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));

//3
const findMinMax = function(arr,tOf){
	let a = arr[0];
	let b = 1;
	while(b < arr.length){
		if(tOf === true){
			if(a < arr[b]){
				a = arr[b];
			}
		}else if(tOf === false){
			if(a > arr[b]){
				a = arr[b];
			}
		}else{
			console.log("Error!");
		}
		b=b+1;
	}
	return a;
};

console.log(findMinMax([4, 2, 66, -44, 8], true));

//4
const forEach = function(arr, func){
	let a = 0;
	while(a < arr.length){
		func(arr[a]);
		a=a+1;
	}
};

forEach([1, 2, 3], function(res) {

  console.log(res);

});

//5
const sum = function(arr){
	let sum = 0;
	let a = 0;
	while(a < arr.length){
		sum += arr[a];
		a=a+1;
	}
	return sum;
};
console.log(sum([1,2,3]));

//6
const reverse = function(str){
	let revStr = "";
	let a = str.length-1;
	while(a >= 0){
		revStr += str[a];
		a--;
	}
	return revStr;
};
console.log(reverse("abcd"));

//7
const checkerboard = function(num){
	let a = 0;
	while(a < num){
		if(a%2 === 0){
			console.log(f(num,"* "));
		}else{
			console.log(f(num, " *"));
		}
		a++;
	}

};


checkerboard(5);