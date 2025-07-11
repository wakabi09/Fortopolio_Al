// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2023 - 2026',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'Teknik Informatika'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMK Muhammadiyah Batam',
    major: 'IPA'
  }
];

const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Vue.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Basic' },
];


const projects = [
 {
  id: 1,
  title: "Maha Parfum",
  description: "Aplikasi toko parfum berbasis Vue dan Express.",
  image: "https://example.com/maha-parfum.jpg",  // URL gambar
  tech: ["React.js", "Express.js", "MongoDB"],         // Array teknologi
  link: "https://github.com/wakabi09/parfumeeeeee.git"        // Link ke project
}
]

module.exports = { educationHistory, skills, projects };
