import React from 'react';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="bg-gray-50 pt-16 ">
      <div className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-playfair mb-4">Welcome to Our Department</h1>
          <p className="text-lg font-medium font-lora">
            Dedicated to excellence in education, research, and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Explore the Department Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Explore Our Department</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { count: '462', label: 'Students' },
              { count: '80', label: 'Scholars' },
              { count: '20', label: 'Faculty' },
              { count: '250+', label: 'Publications' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 w-40 text-center border border-gray-200 transition transform hover:scale-105"
              >
                <p className="text-4xl font-bold text-primary">{item.count}</p>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-playfair">About the Department</h2>
          <p className="text-gray-600 text-lg leading-relaxed font-lora text-center max-w-3xl mx-auto">
            Our Department aims at imparting quality education in Computer Science & Engineering
            and Information Technology through various postgraduate programs. It provides an
            excellent research atmosphere and opportunities for students to enhance their skills
            through PIXEL, our student association.
          </p>
        </section>

        {/* Programs Offered Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-playfair">Programs Offered</h2>
          <ul className="list-disc list-inside text-gray-700 font-lora text-lg max-w-2xl mx-auto">
            <li>B.Sc. (Honors with Research) Computer Science</li>
            <li>B.Tech. (Computer Science & Engineering)</li>
            <li>M.C.A. Master of Computer Applications</li>
            <li>M.Sc. Computer Science</li>
            <li>M.Sc. Computer Science (5 Years Integrated Programme)</li>
            <li>M.Tech. Computer Science & Engineering</li>
            <li>M.Tech. Network & Information Security</li>
            <li>Ph.D. Computer Science & Engineering</li>
          </ul>
        </section>

        {/* Faculty Section */}
        <section>
            <h2 className="text-3xl font-lorafont-bold text-gray-800 mb-6 text-center font-playfair">Meet Our Faculty</h2>
            <div className="grid font-lora grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Dr. R. Subramanian', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ycbzdpe9dunxurf3mbav' },
                { name: 'Dr. T. Chithralekha', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/b6kpihxyrmyxoixv2kqx' },
                { name: 'Dr. S. Sivasathya', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/f68culeeeobd4rktmvs1' },
                { name: 'Dr. S. K. V. Jayakumar', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/smb169veoslumnxzqfxx' },
                { name: 'Dr. K. Suresh Joseph', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/rsak84zzxxo3xfzf6nce' },
                { name: 'Dr. S. Ravi', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/f0ittw2cqmzvujn4su3j' },
                { name: 'Dr. M. Nandhini', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ymqcwfmqa5ed883rgz6j' },
                { name: 'Dr. Pothula Sujatha', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ybmkdtyy22rfpwm2yr1r' },
                { name: 'Dr. P. Shanthi Bala', role: 'Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/zpjkxfs6rvvozpmxyqwx' },
                { name: 'Dr. R. Sunitha', role: 'Associate Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hownto9sagfic5efocp4' },
                { name: 'Dr. K. S. Kuppusamy', role: 'Associate Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/cratujmxdcwpcbvtbqty' },
                { name: 'Dr. V. Uma', role: 'Associate Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gef1nnto0juxqh5dhqw2' },
                { name: 'Dr. T. Vengattaraman', role: 'Associate Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ntwaxcu3etjq13cis4kr' },
                { name: 'Dr. R. P. Sreenivasan', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hrgapaa1ktoize2mu0xc' },
                { name: 'Dr. T. Sivakumar', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/tnf3gqrpihmhmetwj4it' },
                { name: 'Dr. M. Sathya', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/xpe0v7oxqmk2drrnoset' },
                { name: 'Dr. R. S. Jayalakshmi', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/fq0r4kzi0algzjbyfy1c' },
                { name: 'Dr. Krishnapriya', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vl2spiljgkblfmbm7sz3' },
                { name: 'Dr. Sukhvinder Singh', role: 'Assistant Professor', image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/cvlyjj1owdxuqqjtbgk1' }
              ].map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden text-center transition transform hover:scale-105"
                >
                  <div className="flex items-center justify-center h-32 bg-gray-100">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="h-full object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faculty.name}</h3>
                    <p className="text-sm text-primary font-medium mt-2">{faculty.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

      </div>
    </div>
  );
};

export default About;
