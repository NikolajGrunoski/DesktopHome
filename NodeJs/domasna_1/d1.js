var studenti = [
	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
]
function studentiDet(){
studenti.sort((a,b) => a.prosek - b.prosek);

}


studentiDet(studenti);