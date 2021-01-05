let m=prompt('Nhập kí tự chữ bất kì:');
let n=prompt('Nhập kí tự số bất kì:');

function merge2String(m,n) {
    k=new Array();
    if ( m.length <= n.length ) {
        for ( let i = 0; i < n.length; i++ ) {
            if ( i < m.length ) {
                k = k + m[i] + n[i];
            }
            else {
                k = k + n[i];     
            }    
        }     
    }
    else {
        for ( let i = 0; i < m.length; i++ ) {
            if ( i < n.length ) {
                k = k + m[i] + n[i]; 
            }
            else {
                k = k + m[i];
            }            
    }      
    return k;   
}
console.log(merge2String(m,n))