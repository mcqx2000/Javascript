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
	arr.sort();
	for(var i=0;i<arr.length;i++){
		if(arr.indexOf(arr[i])!==arr.lastIndexOf(arr[i])&&newArr.indexOf(arr[i])===-1){
			newArr.push(arr[i]); 
			} 
		i=arr.lastIndexOf(arr[i]);
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
// 1.计算给定周长圆的面积？
	function square(allLength){
		var PI=3.14;
		var r;
		r=allLength/(2*PI);
		return PI*r*r;
	}
// 2.定义两个函数，一个和加1，一个和减1？
   function sum_ab(a,b){
   	return a+b+1;
   }
   function dec_ab(a,b){
   	return a+b-1;
   } 
 //3.计算1+2+3+...+100的值？
  function sum(){
  	var sum=0;
  	for(var i=0;i<=100;i++){
  		sum+=i;
  	}
  	return sum;
  }
  //4.定义一个函数person，内部有个局部变量name,如何在函数外访问和修改此变量？
  var person=(function(){
  		var name="xutao";
  		return{
  			getname:function(){
  				return name;
  			},
  			setname:function(newname){
  				name=newname;
  				return newname;
  			}
  		};
  })();
//5.js删除字符串头尾空格
 function trim(str){
 	return str.replace(/(^\s*)|(\s*$)/g, "");
 }
