Airplane.destroy_all

a1 = Airplane.create name:"Boeing 747", rows:6, columns:10
a2 = Airplane.create name:"Airbus A380", rows:10, columns:20
a3 = Airplane.create name:"Cessna 140", rows: 4, columns:6
a4 = Airplane.create name:"Boeing 707", rows: 8, columns: 14

User.destroy_all

u1 = User.create name:"Bob", password:"chicken", age:20, isAdmin:0
u2 = User.create name:"Bill", password:"chicken", age:30, isAdmin:0
u3 = User.create name:"Nathan", password:"chicken", age:20, isAdmin:1
u4 = User.create name:"Linna", password:"chicken", age:20, isAdmin:1

Flight.destroy_all


f1 = Flight.create date:"2018/06/08 20:30:00", from_airport:"Sydney Airport", to_airport:"Melbourne Airport"
f2 = Flight.create date:"2018/06/09 15:30:00", from_airport:"Sydney Airport", to_airport:"Melbourne Airport"
f3 = Flight.create date:"2018/06/08 14:00:00", from_airport:"Sydney Airport", to_airport:"Brisbane Airport"
f4 = Flight.create date:"2018/06/09 16:30:00", from_airport:"Sydney Airport", to_airport:"Brisbane Airport"
f5 = Flight.create date:"2018/06/08 12:25:00", from_airport:"Sydney Airport", to_airport:"Gold Coast Airport"
f6 = Flight.create date:"2018/06/09 14:20:00", from_airport:"Sydney Airport", to_airport:"Gold Coast Airport"
f7 = Flight.create date:"2018/06/08 15:50:00", from_airport:"Sydney Airport", to_airport:"Adelaide Airport"
f8 = Flight.create date:"2018/06/09 09:50:00", from_airport:"Sydney Airport", to_airport:"Adelaide Airport"
f9 = Flight.create date:"2018/06/08 06:00:00", from_airport:"Sydney Airport", to_airport:"Hobart International Airport"
f10 = Flight.create date:"2018/06/09 08:00:00", from_airport:"Sydney Airport", to_airport:"Hobart International Airport"
f11 = Flight.create date:"2018/06/08 10:30:00", from_airport:"Sydney Airport", to_airport:"Perth Airport"
f12 = Flight.create date:"2018/06/09 14:30:00", from_airport:"Sydney Airport", to_airport:"Perth Airport"
f13 = Flight.create date:"2018/06/08 15:30:00", from_airport:"Melbourne Airport", to_airport:"Sydney Airport"
f14 = Flight.create date:"2018/06/09 11:30:00", from_airport:"Melbourne Airport", to_airport:"Sydney Airport"
f15 = Flight.create date:"2018/06/08 07:00:00", from_airport:"Melbourne Airport", to_airport:"Brisbane Airport"
f16 = Flight.create date:"2018/06/09 22:30:00", from_airport:"Melbourne Airport", to_airport:"Brisbane Airport"
f17 = Flight.create date:"2018/06/08 16:25:00", from_airport:"Melbourne Airport", to_airport:"Gold Coast Airport"
f18 = Flight.create date:"2018/06/09 08:20:00", from_airport:"Melbourne Airport", to_airport:"Gold Coast Airport"
f19 = Flight.create date:"2018/06/08 19:50:00", from_airport:"Melbourne Airport", to_airport:"Adelaide Airport"
f20 = Flight.create date:"2018/06/09 08:50:00", from_airport:"Melbourne Airport", to_airport:"Adelaide Airport"
f21 = Flight.create date:"2018/06/08 11:00:00", from_airport:"Melbourne Airport", to_airport:"Hobart International Airport"
f22 = Flight.create date:"2018/06/09 15:00:00", from_airport:"Melbourne Airport", to_airport:"Hobart International Airport"
f23 = Flight.create date:"2018/06/08 19:30:00", from_airport:"Melbourne Airport", to_airport:"Perth Airport"
f24 = Flight.create date:"2018/06/09 11:30:00", from_airport:"Melbourne Airport", to_airport:"Perth Airport"
f25 = Flight.create date:"2018/06/08 08:30:00", from_airport:"Brisbane Airport", to_airport:"Melbourne Airport"
f26 = Flight.create date:"2018/06/09 09:30:00", from_airport:"Brisbane Airport", to_airport:"Melbourne Airport"
f27 = Flight.create date:"2018/06/08 10:00:00", from_airport:"Brisbane Airport", to_airport:"Sydney Airport"
f28 = Flight.create date:"2018/06/09 11:30:00", from_airport:"Brisbane Airport", to_airport:"Sydney Airport"
f29 = Flight.create date:"2018/06/08 12:45:00", from_airport:"Brisbane Airport", to_airport:"Gold Coast Airport"
f30 = Flight.create date:"2018/06/09 15:20:00", from_airport:"Brisbane Airport", to_airport:"Gold Coast Airport"
f31 = Flight.create date:"2018/06/08 11:50:00", from_airport:"Brisbane Airport", to_airport:"Adelaide Airport"
f32 = Flight.create date:"2018/06/09 05:50:00", from_airport:"Brisbane Airport", to_airport:"Adelaide Airport"
f33 = Flight.create date:"2018/06/08 23:00:00", from_airport:"Brisbane Airport", to_airport:"Hobart International Airport"
f34 = Flight.create date:"2018/06/09 23:40:00", from_airport:"Brisbane Airport", to_airport:"Hobart International Airport"
f35 = Flight.create date:"2018/06/08 12:30:00", from_airport:"Brisbane Airport", to_airport:"Perth Airport"
f36 = Flight.create date:"2018/06/09 12:30:00", from_airport:"Brisbane Airport", to_airport:"Perth Airport"
f37 = Flight.create date:"2018/06/08 20:30:00", from_airport:"Gold Coast Airport", to_airport:"Melbourne Airport"
f38 = Flight.create date:"2018/06/09 15:30:00", from_airport:"Gold Coast Airport", to_airport:"Melbourne Airport"
f39 = Flight.create date:"2018/06/08 14:00:00", from_airport:"Gold Coast Airport", to_airport:"Brisbane Airport"
f40 = Flight.create date:"2018/06/09 16:30:00", from_airport:"Gold Coast Airport", to_airport:"Brisbane Airport"
f41 = Flight.create date:"2018/06/08 12:25:00", from_airport:"Gold Coast Airport", to_airport:"Sydney Airport"
f42 = Flight.create date:"2018/06/09 14:20:00", from_airport:"Gold Coast Airport", to_airport:"Sydney Airport"
f43 = Flight.create date:"2018/06/08 15:50:00", from_airport:"Gold Coast Airport", to_airport:"Adelaide Airport"
f44 = Flight.create date:"2018/06/09 09:50:00", from_airport:"Gold Coast Airport", to_airport:"Adelaide Airport"
f45 = Flight.create date:"2018/06/08 06:00:00", from_airport:"Gold Coast Airport", to_airport:"Hobart International Airport"
f46 = Flight.create date:"2018/06/09 08:00:00", from_airport:"Gold Coast Airport", to_airport:"Hobart International Airport"
f47 = Flight.create date:"2018/06/08 10:30:00", from_airport:"Gold Coast Airport", to_airport:"Perth Airport"
f48 = Flight.create date:"2018/06/09 14:30:00", from_airport:"Gold Coast Airport", to_airport:"Perth Airport"
f49 = Flight.create date:"2018/06/08 22:30:00", from_airport:"Adelaide Airport", to_airport:"Melbourne Airport"
f50 = Flight.create date:"2018/06/09 23:30:00", from_airport:"Adelaide Airport", to_airport:"Melbourne Airport"
f51 = Flight.create date:"2018/06/08 11:00:00", from_airport:"Adelaide Airport", to_airport:"Brisbane Airport"
f52 = Flight.create date:"2018/06/09 13:30:00", from_airport:"Adelaide Airport", to_airport:"Brisbane Airport"
f53 = Flight.create date:"2018/06/08 15:25:00", from_airport:"Adelaide Airport", to_airport:"Gold Coast Airport"
f54 = Flight.create date:"2018/06/09 04:20:00", from_airport:"Adelaide Airport", to_airport:"Gold Coast Airport"
f55 = Flight.create date:"2018/06/08 03:50:00", from_airport:"Adelaide Airport", to_airport:"Sydney Airport"
f56 = Flight.create date:"2018/06/09 09:50:00", from_airport:"Adelaide Airport", to_airport:"Sydney Airport"
f57 = Flight.create date:"2018/06/08 07:00:00", from_airport:"Adelaide Airport", to_airport:"Hobart International Airport"
f58 = Flight.create date:"2018/06/09 15:00:00", from_airport:"Adelaide Airport", to_airport:"Hobart International Airport"
f59 = Flight.create date:"2018/06/08 17:30:00", from_airport:"Adelaide Airport", to_airport:"Perth Airport"
f60 = Flight.create date:"2018/06/09 19:30:00", from_airport:"Adelaide Airport", to_airport:"Perth Airport"
f61 = Flight.create date:"2018/06/08 22:30:00", from_airport:"Hobart International Airport", to_airport:"Melbourne Airport"
f62 = Flight.create date:"2018/06/09 13:30:00", from_airport:"Hobart International Airport", to_airport:"Melbourne Airport"
f63 = Flight.create date:"2018/06/08 09:00:00", from_airport:"Hobart International Airport", to_airport:"Brisbane Airport"
f64 = Flight.create date:"2018/06/09 07:30:00", from_airport:"Hobart International Airport", to_airport:"Brisbane Airport"
f65 = Flight.create date:"2018/06/08 21:25:00", from_airport:"Hobart International Airport", to_airport:"Gold Coast Airport"
f66 = Flight.create date:"2018/06/09 19:20:00", from_airport:"Hobart International Airport", to_airport:"Gold Coast Airport"
f67 = Flight.create date:"2018/06/08 17:50:00", from_airport:"Hobart International Airport", to_airport:"Adelaide Airport"
f68 = Flight.create date:"2018/06/09 12:50:00", from_airport:"Hobart International Airport", to_airport:"Adelaide Airport"
f69 = Flight.create date:"2018/06/08 16:00:00", from_airport:"Hobart International Airport", to_airport:"Sydney Airport"
f70 = Flight.create date:"2018/06/09 20:00:00", from_airport:"Hobart International Airport", to_airport:"Sydney Airport"
f71 = Flight.create date:"2018/06/08 23:30:00", from_airport:"Hobart International Airport", to_airport:"Perth Airport"
f72 = Flight.create date:"2018/06/09 21:30:00", from_airport:"Hobart International Airport", to_airport:"Perth Airport"
f73 = Flight.create date:"2018/06/08 23:30:00", from_airport:"Perth Airport", to_airport:"Melbourne Airport"
f74 = Flight.create date:"2018/06/09 13:30:00", from_airport:"Perth Airport", to_airport:"Melbourne Airport"
f75 = Flight.create date:"2018/06/08 06:00:00", from_airport:"Perth Airport", to_airport:"Brisbane Airport"
f76 = Flight.create date:"2018/06/09 03:30:00", from_airport:"Perth Airport", to_airport:"Brisbane Airport"
f77 = Flight.create date:"2018/06/08 11:25:00", from_airport:"Perth Airport", to_airport:"Gold Coast Airport"
f78 = Flight.create date:"2018/06/09 15:20:00", from_airport:"Perth Airport", to_airport:"Gold Coast Airport"
f79 = Flight.create date:"2018/06/08 18:50:00", from_airport:"Perth Airport", to_airport:"Adelaide Airport"
f80 = Flight.create date:"2018/06/09 21:50:00", from_airport:"Perth Airport", to_airport:"Adelaide Airport"
f81 = Flight.create date:"2018/06/08 23:00:00", from_airport:"Perth Airport", to_airport:"Hobart International Airport"
f82 = Flight.create date:"2018/06/09 16:00:00", from_airport:"Perth Airport", to_airport:"Hobart International Airport"
f83 = Flight.create date:"2018/06/08 19:30:00", from_airport:"Perth Airport", to_airport:"Sydney Airport"
f84 = Flight.create date:"2018/06/09 21:30:00", from_airport:"Perth Airport", to_airport:"Sydney Airport"

a1.flights << f1 << f5 << f9 << f13 << f17 << f21 << f25 << f29 << f33 << f37 << f41 << f45 << f49 << f53 << f57 << f61 << f65 << f69 << f73 << f77 << f81
a2.flights << f2 << f6 << f10 << f14 << f18 << f22 << f26 << f30 << f34 << f38 << f42 << f46 << f50 << f54 << f58 << f62 << f66 << f70 << f74 << f78 << f82
a3.flights << f3 << f7 << f11 << f15 << f19 << f23 << f27 << f31 << f35 << f39 << f43 << f47 << f51 << f55 << f59 << f63 << f67 << f71 << f75 << f79 << f83
a4.flights << f4 << f8 << f12 << f16 << f20 << f24 << f28 << f32 << f36 << f40 << f44 << f48 << f52 << f56 << f60 << f64 << f68 << f72 << f76 << f80 << f84

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