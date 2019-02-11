var obj = [

    { id:1, parent:null },
    { id:3, parent:2 },

    { id:2, parent:1 },
]

var treeObj = function(obj)
{
  obj.map((o) =>
  {
    if(o.parent !== null)
    {
      obj.map((item) =>
      {
        if(o.parent === item.id)
        {
          if(!item.child)
          {
            item.child = [];
          }
          item.child.push(o);
        }
      });
    }
  });
  return obj.filter(o => o.parent === null)[0];
}
// console.log(treeObj(obj));

// var arr = [1, 2, 3, 4];

var subArr = function(target, size, origin)
{
  var _arr = [];
  function getArrange(target, nums, ret)
  {
    if(nums === 1)
    {
      for(var i = 0; i < target.length; i++)
      {
        var tmp = ret.slice();
        tmp.push(target[i]);
        _arr.push(tmp);
      }
    }
    else{
      nums -= 1;
      for(var i = 0; i < target.length; i++)
      {
        var tmp = ret.slice();
        var newTarget = target.slice();
        tmp.push(target[i]);
        newTarget.slice(i, 1);
        getArrange(newTarget, nums, tmp);
      }
    }
  }
  getArrange(target, size, origin);
  return _arr;

}
// console.log(subArr(arr, 2, []));

var combine = function(arr, k)
{
	let result = [];
	let temp = [];
	function dfs(curr)
	{
		if(temp.length < k)
		{
			for(var i = 0; i < arr.length; i++)
			{
				if(curr-1 !== i)
				{
					temp.push(arr[i]);
					dfs(i+1);
					temp.pop();
				}
			}
		}
		else
		{
			result.push(temp.slice());
		}
	}
	dfs(0);
	return result;
}
// console.log(combine(arr, 2));

var combination = function(arr, length)
{
	let result = [], temp = [];
	var n = function()
	{
		for(var i = 0; i < arr.length-1; i++)
		{
			if(length !== 0)
			{
				let newArr = arr.slice(0, i).concat(arr.slice(i+1));
				temp.push(newArr[i]);
				length -= 1;
			}	
		}
	}
};

var combine1 = function(arr, k)
{
	let result = [];
	let temp = [];
	var dfs = function(curr)
	{
		if(temp.length < k)
		{
			for(var i = curr; i < arr.length; i++)
			{
					if(curr-1 !== i)
					{
						temp.push(arr[i]);
						dfs(i+1);
						temp.pop();
					}
			}
		}
		else
		{
			result.push(temp.slice());
		}
	}
	dfs(0);
	return result;
}
// console.log(combine1(arr, 2));

var arr = [1, 2, 3, 4, 6, 8, 9, 10];

var consist = function(a)
{
	if(!arr.length) return arr;

	var result = [];
	var temp = [arr[0]];
	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i-1] === arr[i]-1)
		{
			temp.push(arr[i]);
		}
		else
		{
			if(temp.length === 1)
			{
				result.push(temp[0]);
			}
			else
			{
				result.push(`${ temp[0] } - ${ temp[temp.length-1] }`);
			}
			temp = [arr[i]];
		}

	}
	result.push(`${ temp[0] } - ${ temp[temp.length-1] }`);
	return result;
}
console.log(consist(arr));




