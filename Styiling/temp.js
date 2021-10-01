    let str = "aabba";

   let size = str.length;
  
        // initialize left and right pointer to 0
        let LHS = 0;
        let RHS = 0;
        let count = 0;
  
        // an array to keep track of count of each alphabet
        let data = new Array(26).fill(0);
       
    for (RHS = 0; RHS < size; RHS++){
            
            data[str[RHS].charCodeAt(0) - 'a'.charCodeAt(0)]++;
         
            while (data[str[RHS].charCodeAt(0) - 'a'.charCodeAt(0)] > 2)
            {            
                // decrement the count
                data[str[LHS].charCodeAt(0) - 'a'.charCodeAt(0)]--;

                //increment left pointer
                LHS++;
            }
            count += RHS - LHS + 1;
                  
        }
    
console.log(count)