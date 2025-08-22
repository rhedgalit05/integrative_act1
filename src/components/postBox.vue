<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex space-x-4">
      <img
        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
        alt="Avatar"
        class="w-10 h-10 rounded-full"
      />
      <textarea
        rows="2"
        placeholder="Share something with your classmates…"
        class="flex-1 resize-none bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    </div>
    <div class="mt-3 flex justify-end space-x-3">
      <button class="flex items-center text-gray-600 hover:text-indigo-600">
        <svg
          class="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 15a4 4 0 018 0h6a4 4 0 018 0m-9-4V2m0 0h4m-4 0H7"
          />
        </svg>
        Photo/Video
      </button>
      <button class="flex items-center text-gray-600 hover:text-indigo-600">
        <svg
          class="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Poll
      </button>
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Post
      </button>
    </div>
  </div>
</template>
