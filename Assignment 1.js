function checksorted(arr)
{
    let ascending =true;
    let descending = true;
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            ascending=false;
        }
        if(arr[i]<arr[i+1])
        {
            descending=false;
        }
    }
    if(ascending)
    {
        return 1;
    }
    else if(descending)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
const arr1=[1,2,3,4,5];
console.log(checksorted(arr1));

const arr2=[5,4,3,2,1];
console.log(checksorted(arr2));

const arr3=[1,3,2,4,6];
console.log(checksorted(arr3));