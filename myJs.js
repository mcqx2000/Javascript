//author:xutao
//datetime:2017-8-31
//

//1.字符串反转
function reverseString(string){
     return string.split("").reverse().join("");
}
//2.数组去重
function distinct(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]===arr[j]){
				j=++i;
			}
			
		}
		newArr.push(arr[i]);
	}
	return newArr;
}
//3.找出数组中重复的元素
function findRepeat(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]===arr[j]){
				j=++i;
			} 
			
		}
		newArr.push(arr[j]);
	}
	return newArr;
}
//4.阶乘
 function factorial(num){
 	if(num<0){
 		return -1;
 	}else if(num===0||num===1){
 		return 1;
 	}else{
 		return num*factorial(num-1);
 	}
 }
