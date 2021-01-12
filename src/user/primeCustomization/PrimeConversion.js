// import React, { Component } from 'react'

// class PrimeConversion extends Component {
//     render() {

//         var x = {A:1, a:1, J:1, j:1, S:1, s:1, B:2, b:2, K:2, k:2, T:2, t:2, C:3, c:3, L:3, l:3, U:3, u:3, D:4, d:4,
//             M:4, m:4, V:4, v:4, E:5, e:5, N:5, n:5, W:5, w:5, F:6, f:6, O:6, o:6, X:6, x:6, G:7, g:7, P:7, p:7, Y:7, y:7, H:8, h:8,
//             Q:8, q:8, Z:8, z:8, I:9, i:9, R:9, r:9};
            
//             var name = []
//             var nameScore = 0;
            
//             for( var i = 0; i < name.length; i++ )
//             {
//                 var curChar = name.charAt( i );
//                 var curValue = x[ curChar ];
//                 nameScore = nameScore + curValue;
//             }//for()
            
            
//             console.log( "Total score for this name is: " + nameScore );
        
//         var singleDigitScore = nameScore;
//         while( singleDigitScore >= 10 )
//           {
//             var total = 0;
//             var str = '' + singleDigitScore;
//             for( var i = 0; i < str.length; i++ )
//               {
//                 total = total + parseInt( str.charAt(i) );
//               }//for()
//             singleDigitScore = total;
//           }//while
        
//         console.log("Single Digit score is: "+singleDigitScore);
        

//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default PrimeConversion;
