<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="p-4 flex items-start space-x-3">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
        alt="User avatar"
        class="w-10 h-10 rounded-full"
      />
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-gray-800">Jane Doe</h4>
            <span class="text-sm text-gray-500">Posted 2 hours ago</span>
          </div>
          <button class="text-gray-400 hover:text-gray-600">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
        <p class="mt-2 text-gray-700">
          Does anyone have resources on linear algebra? I’m struggling with eigenvalues and
          eigenvectors. Any help is appreciated!
        </p>
        <div class="mt-4 flex items-center space-x-6 text-gray-600">
          <button class="flex items-center hover:text-indigo-600">
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
                d="M14 9l3-3 3 3m0 6l-3 3-3-3M3 12h12"
              />
            </svg>
            Like (12)
          </button>
          <button class="flex items-center hover:text-indigo-600">
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
                d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h3l4 4 4-4h3a2 2 0 002-2z"
              />
            </svg>
            Comment (4)
          </button>
          <button class="flex items-center hover:text-indigo-600">
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
                d="M4 4v5h.582c3.592 0 5.444 1.13 5.444 4.618V20h4.289V13.618c0-3.488 1.852-4.618 5.444-4.618H20V4H4z"
              />
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
    <!-- Comments preview-->
    <div class="bg-gray-50 border-t px-4 py-3 space-y-2">
      <div class="flex space-x-3">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
          alt="User avatar"
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 bg-white p-2 rounded-md shadow">
          <div class="flex justify-between items-center">
            <span class="text-sm font-semibold">John Smith</span>
            <span class="text-xs text-gray-500">1 h</span>
          </div>
          <p class="text-sm text-gray-700">
            Check out 3Blue1Brown’s videos on YouTube—great explanation!
          </p>
        </div>
      </div>
      <div class="flex space-x-3">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
          alt="User avatar"
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 bg-white p-2 rounded-md shadow">
          <div class="flex justify-between items-center">
            <span class="text-sm font-semibold">Emily Chen</span>
            <span class="text-xs text-gray-500">30 m</span>
          </div>
          <p class="text-sm text-gray-700">
            I recommend Gilbert Strang’s MIT open courseware lectures.
          </p>
        </div>
      </div>
      <button class="text-sm text-indigo-600 hover:underline">View more comments</button>
    </div>
  </div>
</template>
