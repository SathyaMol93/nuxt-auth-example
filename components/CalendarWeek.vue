<template>
  <div
    class="flex flex-auto flex-col overflow-auto bg-white dark:bg-gray-800 w-full dark:border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
  >
    <div class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
      <div
        class="sticky top-0 z-30 flex-none bg-white dark:bg-gray-800 shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
      >
        <div
          class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
        >
          <div class="col-end-1 w-14"></div>
          <div
            v-for="(day, i) in calendarData"
            :key="i"
            class="flex items-center justify-center py-3"
          >
            <span class="flex items-baseline">
              {{ day.dayOfWeekStr }}
              <span
                class="ml-1.5 h-8 w-8 flex items-center justify-center font-semibold text-gray-900 dark:text-white"
                :class="
                  day.isToday ? ' rounded-full bg-indigo-600 text-white' : ''
                "
              >
                {{ day.day }}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-auto">
        <div
          class="sticky left-0 z-10 w-14 flex-none bg-white dark:bg-gray-800 ring-1 ring-gray-100"
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
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                12AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                1AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                2AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                3AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                4AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                5AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                6AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                7AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                8AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                9AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                10AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                11AM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                12PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                1PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                2PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                3PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                4PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                5PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                6PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                7PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                8PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                9PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                10PM
              </div>
            </div>
            <div></div>
            <div>
              <div
                class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400 dark:text-white"
              >
                11PM
              </div>
            </div>
            <div></div>
          </div>

          <!-- Vertical lines -->
          <div
            class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7"
          >
            <div class="col-start-1 row-span-full"></div>
            <div class="col-start-2 row-span-full"></div>
            <div class="col-start-3 row-span-full"></div>
            <div class="col-start-4 row-span-full"></div>
            <div class="col-start-5 row-span-full"></div>
            <div class="col-start-6 row-span-full"></div>
            <div class="col-start-7 row-span-full"></div>
            <div class="col-start-8 row-span-full w-8"></div>
          </div>

          <!-- Events -->
          <ol
            class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
            style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
          >
            <li
              class="relative mt-px flex sm:col-start-3"
              style="grid-row: 74 / span 12"
            >
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
              >
                <p class="order-1 font-semibold text-blue-700">Breakfast</p>
                <p class="text-blue-500 group-hover:text-blue-700">
                  <time datetime="2022-01-12T06:00">6:00 AM</time>
                </p>
              </a>
            </li>
            <li
              class="relative mt-px flex sm:col-start-3"
              style="grid-row: 92 / span 30"
            >
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
              >
                <p class="order-1 font-semibold text-pink-700">
                  Flight to Paris
                </p>
                <p class="text-pink-500 group-hover:text-pink-700">
                  <time datetime="2022-01-12T07:30">7:30 AM</time>
                </p>
              </a>
            </li>
            <li
              class="relative mt-px hidden sm:col-start-6 sm:flex"
              style="grid-row: 122 / span 24"
            >
              <a
                href="#"
                class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
              >
                <p class="order-1 font-semibold text-gray-700">
                  Meeting with design team at Disney
                </p>
                <p class="text-gray-500 group-hover:text-gray-700">
                  <time datetime="2022-01-15T10:00">10:00 AM</time>
                </p>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import {
  getLocaleDateString,
  isCurrentDate,
} from "~/composables/calendar.composable";
import type { DateEvents, Event } from "~/types/intefaces/Calendar.inteface";
import type { DateProp } from "~/types/intefaces/Props.interface";

const props = defineProps({
  date: {
    type: Object as PropType<DateProp>,
  },
});

const calendarData: Ref<DateEvents[]> = ref([]);

function getDateRange(year: number, weekNumber: number): Date[] {
  const firstDayOfYear = new Date(year, 0, 1);
  const daysToFirstThursday = 1 - firstDayOfYear.getDay();
  const firstThursday = new Date(
    firstDayOfYear.setDate(firstDayOfYear.getDate() + daysToFirstThursday)
  );
  const daysToTargetWeek = (weekNumber - 1) * 7;
  const targetWeekStartDate = new Date(
    firstThursday.setDate(firstThursday.getDate() + daysToTargetWeek)
  );

  const daysOfWeek: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(targetWeekStartDate);
    currentDate.setDate(targetWeekStartDate.getDate() + i);
    daysOfWeek.push(currentDate);
  }

  return daysOfWeek;
}

function getCalendarData(year: number, week: number): DateEvents[] {
  const dates: Date[] = getDateRange(year, week);
  const calendarData: DateEvents[] = [];

  dates.forEach((date: Date) => {
    const events: Event[] = [];
    calendarData.push({
      from: "",
      date,
      dateStr: getLocaleDateString(date),
      dayOfWeek: date.getDay(),
      dayOfWeekStr: getLocaleDateString(date, "en-US", {
        weekday: "short",
      }),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      events,
      isToday: isCurrentDate(date),
    });
  });

  return calendarData;
}

function changeWeek(date: DateProp) {
  calendarData.value = getCalendarData(date.year, date.week);
}

watch(
  () => props.date,
  (newDate: any) => {
    changeWeek(newDate);
  },
  { deep: true, immediate: true }
);
</script>

<style scoped></style>
