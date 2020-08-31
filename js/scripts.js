function Contact(first,second){
    this.firstName =first;
    this.secondName = second;
}
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.secondName;
  }
//user interface logic
// user interface logic
$(document).ready(function() {
    $("#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("#new-first-name").val();
      var inputtedLastName = $("#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
    //   $("new-first-name").val("");
    //   $("new-last-name").val("");

      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.secondName);
      });  
    });  
});