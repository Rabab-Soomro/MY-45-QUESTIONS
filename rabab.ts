//Q 15:Changing Guest list:Yoou just heared that one of your guest can't make dinner.so you need to send out a new set of invitation.You'll have to think anyone else to invite.

let GuestList=["Apo khala","Ibly Mamoo","Haider Mamoo"]
console.log(`${GuestList[1]} nahi aasaktey,Q ke wo Islamabad mein hai`)
GuestList.splice(1,1,"Aliza Api")

GuestList.forEach((invitation) =>
 console.log(`Assalamulaikum,${invitation},"Ap logo ne hamare ghar se to jaise bycott hi kardiya hai 
           hamare ghar aate hi nhi hai ..par iss SUNDAY toh ap logoo ko ana hi parega Qke baat hi intni khaas hai.
           darasal api ki baat pakki ki khushi mein iss SUNDAY hum logo ne hammare ghar ek dawaat rakhi"
              'kuch bhi hojae zaroor aaye ga' `)
            );