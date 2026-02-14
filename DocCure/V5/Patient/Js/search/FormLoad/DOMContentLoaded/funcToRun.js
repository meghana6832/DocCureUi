import { StartFunc as StartFuncAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {

	const template = document.getElementById("doctorTemplate");
	const container = document.getElementById("doctorContainer");

	if (!localStorage.getItem("doctors")) {

		const doctorsData = [
			{
				id: 1,
				name: "Dr. Keshav Nalam",
				degree: "MDS - Periodontology and Oral Implantology, BDS",
				speciality: "Dentist",
				location: "Florida, USA",
				img: "../assets/img/doctors/doctor-thumb-01.jpg",
				rating: "17"
			},
			{
				id: 2,
				name: "Dr. Meghana Degala",
				degree: "BDS, MDS - Oral & Maxillofacial Surgery",
				speciality: "Dentist",
				location: "New York, USA",
				img: "../assets/img/doctors/doctor-thumb-02.jpg",
				rating: "35"
			}
		];

		localStorage.setItem("doctors", JSON.stringify(doctorsData));
	}

	window.LoadDoctors = function () {

		const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
		console.log("Doctors Data:", doctors);
		container.innerHTML = "";

		doctors.forEach(doc => {

			const clone = template.content.cloneNode(true);

			clone.querySelector(".doctor-img-src").src = doc.img;
			clone.querySelector(".doctor-name").textContent = doc.name;
			clone.querySelector(".doctor-degree").textContent = doc.degree;
			clone.querySelector(".doctor-speciality").textContent = doc.speciality;
			clone.querySelector(".doctor-location").append(doc.location);
			clone.querySelector(".doctor-rating").textContent = doc.rating;

			clone.querySelector(".BookAppointmentClass").href =
				`booking.html?id=${doc.id}`;

			container.appendChild(clone);
		});
	};

	StartFuncAddListeners();
	window.LoadDoctors();
};

export { StartFunc };