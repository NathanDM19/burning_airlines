Airplane.destroy_all

a1 = Airplane.create name:"747", rows:6, columns:10

User.destroy_all

u1 = User.create name:"bob", password:"chicken", age:20

Flight.destroy_all


f1 = Flight.create date:"2018/06/10", from_airport:"Sydney", to_airport:"Melbourne", seats:60
f2 = Flight.create date:"2018/06/11", from_airport:"Melbourne", to_airport:"Hobart", seats:45

a1.flights << f1
a1.flights << f2


Reservation.destroy_all

r1 = Reservation.create seat:"5A"

f1.reservations << r1
f2.reservations << r1
u1.reservations << r1