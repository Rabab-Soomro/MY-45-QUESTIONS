//Q 15:Changing Guest list:Yoou just heared that one of your guest can't make dinner.so you need to send out a new set of invitation.You'll have to think anyone else to invite.
var GuestList = ["Apo khala", "Ibly Mamoo", "Haider Mamoo"];
console.log("".concat(GuestList[1], " nahi aasaktey,Q ke wo Islamabad mein hai"));
GuestList.splice(1, 1, "Aliza Api");
GuestList.forEach(function (invitation) {
    return console.log("Assalamulaikum,".concat(invitation, ",\"Ap logo ne hamare ghar se to jaise bycott hi kardiya hai \n           hamare ghar aate hi nhi hai ..par iss SUNDAY toh ap logoo ko ana hi parega Qke baat hi intni khaas hai.\n           darasal api ki baat pakki ki khushi mein iss SUNDAY hum logo ne hammare ghar ek dawaat rakhi\"\n              'kuch bhi hojae zaroor aaye ga' "));
});
