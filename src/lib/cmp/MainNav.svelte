<nav class="bg-gray-700 shadow-lg">

  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-xl font-bold text-white" href="/">skillzaa.com</a>
      </div>

      <div class="md:hidden">
        <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="hidden md:flex md:items-center md:w-auto">
      <nav>
        <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/">Home</a></li>
          <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/blog">Blog</a></li>
          <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/about">About</a></li>
          <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/labs">Labs</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a class="text-white hover:text-gray-300 py-2 block" href="/">Home</a>
      <a class="text-white hover:text-gray-300 py-2 block" href="/blog">Blog</a>
      <a class="text-white hover:text-gray-300 py-2 block" href="/about">About</a>
      <a class="text-white hover:text-gray-300 py-2 block" href="/labs">Labs</a>
    </div>
  </div>

</nav>
