Airplane.destroy_all

a1 = Airplane.create name:"747", rows:6, columns:10
a2 = Airplane.create name:"900", rows:10, columns:20

User.destroy_all

u1 = User.create name:"Bob", password:"chicken", age:20
u2 = User.create name:"Bill", password:"chicken", age:30

Flight.destroy_all


f1 = Flight.create date:"2018/06/10 20:30:00", from_airport:"Sydney", to_airport:"Melbourne"
f2 = Flight.create date:"2018/06/11 14:00:00", from_airport:"Melbourne", to_airport:"Hobart"
f3 = Flight.create date:"2018/07/01 15:30:00", from_airport:"Toronto", to_airport:"Singapore"

a1.flights << f1
a1.flights << f2
a2.flights << f3


Reservation.destroy_all

r1 = Reservation.create row:4, column: 10
r2 = Reservation.create row:7, column: 15
r3 = Reservation.create row:6, column: 5
r4 = Reservation.create row:8, column: 15


f1.reservations << r1
f1.reservations << r3
f2.reservations << r2
f2.reservations << r4
u1.reservations << r1
u1.reservations << r2
u2.reservations << r3
u2.reservations << r4