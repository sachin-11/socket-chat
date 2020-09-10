function pattern(){
    let i, j;
    for(i=1;i<=3;i++)
    {
        for(j=1;j<=i;j++)
        {
            console.log(j) 
        }  
        console.log(" ");
    }
    for(i=2;i>=1; i--)
    {
        for(j=1;j<=i; j++)
        {
            console.log(j)
        }

        console.log(" ")
    }


}

console.log(pattern());
