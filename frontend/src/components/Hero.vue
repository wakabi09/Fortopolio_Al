<template>
  <section
    id="profil"
    class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
  >
    <!-- Teks Profil -->
    <div class="md:w-1/2 text-center md:text-left space-y-6 animate-slide-in-left">
      <h1 class="text-5xl font-bold text-gray-800">
        Halo, Saya <span class="text-blue-600">Al-Fatch</span>
      </h1>
      <p class="text-xl text-gray-600">
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain
        antarmuka.
      </p>
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Foto Profil -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="@/assets/profil.jpg"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-blue-500"
      />
    </div>
  </section>
</template>
