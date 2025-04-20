interface Developer {
  name: string;
  specialization: string;
  email: string;
  linkedin: string;
  image: string;
}

const developers: Developer[] = [
  {
    name: "Avinash Pappala",
    specialization: "Frontend Developer",
    email: "avinashpappala@gmail.com",
    linkedin: "https://linkedin.com/in/avinashpappala",
    image: "#picAVI"
  },
  {
    name: "Raghavendra Nadiminti",
    specialization: "Machine Learning Engineer",
    email: "raghavendranadiminti@gmail.com",
    linkedin: "https://linkedin.com/in/raghavendranadiminti",
    image: "#picRaghav"
  },
  {
    name: "Balu Perla",
    specialization: "Backend Developer",
    email: "baluperla@gmail.com",
    linkedin: "https://linkedin.com/in/baluperla",
    image: "#picBalu"
  },
  {
    name: "Kumar Karthik Malla",
    specialization: "Data Analyst",
    email: "kumarkarthik@gmail.com",
    linkedin: "https://linkedin.com/in/kumarkarthik",
    image: "#pickarthik"
  },
  {
    name: "Bhargava Potnuru",
    specialization: "UI/UX Designer",
    email: "bhargavapotnuru@gmail.com",
    linkedin: "https://linkedin.com/in/bhargavapotnuru",
    image: "#picBhargav"
  }
];

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 hgt">
      <h1 className="text-3xl font-bold text-center mb-12">Our Development Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {developers.map((dev) => (
          <div key={dev.name} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200"
              />
              <h2 className="text-lg font-semibold mb-1">{dev.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{dev.specialization}</p>
              <div className="flex flex-col space-y-1 mt-2">
                <a
                  href={`mailto:${dev.email}`}
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </span>
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}