// TASK 28: Simple Confirmation
// Write a program that:
// Asks "Are you 18+?" using confirm()
// If user clicks OK, print "Adult" using console.log()
// If user clicks Cancel, print "Minor" using console.warn()

var confirm_age = confirm("Are you 18+ ?")

if (confirm_age){
    console.log("Adult")
}
else{
    console.warn("Minor")
}