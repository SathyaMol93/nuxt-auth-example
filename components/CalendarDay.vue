<template>
  <div
    class="isolate flex flex-auto overflow-hidden bg-white dark:bg-gray-800 w-full dark:border"
  >
    <div
      class="flex flex-auto flex-col overflow-auto w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
    >
      <div
        class="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white dark:bg-gray-800 text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
      >
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>W</span>
          <!-- Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" -->
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
            >19</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>T</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600"
            >20</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>F</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
            >21</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>S</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white"
            >22</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>S</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
            >23</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>M</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
            >24</span
          >
        </button>
        <button type="button" class="flex flex-col items-center pb-1.5 pt-3">
          <span>T</span>
          <span
            class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
            >25</span
          >
        </button>
      </div>
      <div class="flex w-full flex-auto">
        <div
          class="w-14 flex-none bg-white dark:bg-gray-800 ring-1 ring-gray-100"
        ></div>
        <div class="grid flex-auto grid-cols-1 grid-rows-1">
          <!-- Horizontal lines -->
          <div
            class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
            style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
          >
            <div class="row-end-1 h-7"></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                12AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                1AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                2AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                3AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                4AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                5AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                6AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                7AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                8AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                9AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                10AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                11AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                12PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                1PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                2PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                3PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                4PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                5PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                6PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                7PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                8PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                9PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                10PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="-ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                11PM
              </div>
            </div>
            <div></div>
          </div>

          <!-- Events -->
          <ol
            class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
            style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
          >
            <li class="relative mt-px flex" style="grid-row: 74 / span 6">
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
              >
                <p class="order-1 font-semibold text-blue-700">Breakfast</p>
                <p class="text-blue-500 group-hover:text-blue-700">
                  <time datetime="2022-01-22T06:00">6:00 AM</time>
                </p>
              </a>
            </li>
            <li class="relative mt-px flex" style="grid-row: 92 / span 30">
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
              >
                <p class="order-1 font-semibold text-pink-700">
                  Flight to Paris
                </p>
                <p class="order-1 text-pink-500 group-hover:text-pink-700">
                  John F. Kennedy International Airport
                </p>
                <p class="text-pink-500 group-hover:text-pink-700">
                  <time datetime="2022-01-22T07:30">7:30 AM</time>
                </p>
              </a>
            </li>
            <li class="relative mt-px flex" style="grid-row: 134 / span 18">
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
              >
                <p class="order-1 font-semibold text-indigo-700">Sightseeing</p>
                <p class="order-1 text-indigo-500 group-hover:text-indigo-700">
                  Eiffel Tower
                </p>
                <p class="text-indigo-500 group-hover:text-indigo-700">
                  <time datetime="2022-01-22T11:00">11:00 AM</time>
                </p>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
