// steps(N)
// steps(2)
/*
steps(2)
    '# '
    '##'

steps(3)
'#  '
'## '
'###'


steps(4)
'#   '
'##  '
'### '
'####'
*/

function steps(n){


    // counter to track the levels from i = 1 through n
    // for each i, print # and then print spaces from (n-i) till i 

    for(let row = 0; row < n; row++)  {

        let stair = '';
        for(let column = 0 ; column< n ; column++){
            if(column <= row){
                stair += '#'
            }
            else
                stair += ' '
        }
        console.log(stair);

    }
}


steps(3)

module.exports = steps;
