<script setup>
import { ref, onMounted } from 'vue'

const profileDropdown = ref(null)
const profileButton = ref(null)
const mobileChat = ref(null)
const toggleChatBtn = ref(null)
const closeMobileChat = ref(null)

onMounted(() => {
  // Profile button toggle
  profileButton.value.addEventListener('click', () => {
    profileDropdown.value.classList.toggle('hidden')
  })

  document.addEventListener('click', (e) => {
    if (!profileButton.value.contains(e.target) && !profileDropdown.value.contains(e.target)) {
      profileDropdown.value.classList.add('hidden')
    }
  })

  // Chat drawer toggle (if mobile chat exists in your layout)
  if (toggleChatBtn.value) {
    toggleChatBtn.value.addEventListener('click', () => {
      mobileChat.value.classList.toggle('translate-x-full')
    })
  }

  if (closeMobileChat.value) {
    closeMobileChat.value.addEventListener('click', () => {
      mobileChat.value.classList.add('translate-x-full')
    })
  }
})
</script>

<template>
  <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
    <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo + Search -->
      <div class="flex items-center space-x-4">
        <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
        <div class="hidden md:block">
          <input
            type="text"
            placeholder="Search for courses, people, or communities…"
            class="w-64 bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <!-- Right controls -->
      <div class="flex items-center space-x-4">
        <!-- Notification button -->
        <button class="relative text-gray-600 hover:text-indigo-600 focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center"
            >3</span
          >
        </button>

        <!-- Mobile chat button -->
        <button
          ref="toggleChatBtn"
          id="toggle-chat-mobile"
          class="relative text-gray-600 hover:text-indigo-600 focus:outline-none md:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 3h2a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 4V5a2 2 0 012-2h2"
            />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center"
            >2</span
          >
        </button>

        <!-- Profile dropdown -->
        <div class="relative">
          <button
            ref="profileButton"
            id="profile-button"
            class="flex items-center focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
              alt="User avatar"
              class="w-8 h-8 rounded-full"
            />
          </button>
          <div
            ref="profileDropdown"
            id="profile-dropdown"
            class="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10"
          >
            <router-link to="/profile" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >View profile
            </router-link>
            <a href="#settings" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Settings</a>
            <a href="#logout" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile chat drawer (hidden by default) -->
  <div
    ref="mobileChat"
    id="mobile-chat"
    class="fixed top-0 right-0 w-64 h-full bg-white shadow transform translate-x-full transition-transform"
  >
    <button ref="closeMobileChat" id="close-mobile-chat" class="p-2 text-red-500">Close</button>
    <p class="p-4">Chat content here…</p>
  </div>
</template>
