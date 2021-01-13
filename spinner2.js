/*setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\ '); 
  }, 700);
  setTimeout(() => {
    process.stdout.write('\r|  \n ');
  }, 900);*/

   let character =['|','\r/','\r-','\r/','\r|','\n'];

   let delay =100;
   function spin(){
for (const char of character) {
     setTimeout(() => {
  process.stdout.write(char)                                                 
}, delay)  
delay+=200; 
}  //process.stdout.write('\n') 
   }
spin();