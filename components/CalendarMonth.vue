<template>
  <div class="shadow lg:flex lg:flex-auto lg:flex-col dark:border">
    <div
      class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 dark:text-white lg:flex-none"
    >
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>M</span>
        <span class="sr-only sm:not-sr-only">on</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>T</span>
        <span class="sr-only sm:not-sr-only">ue</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>W</span>
        <span class="sr-only sm:not-sr-only">ed</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>T</span>
        <span class="sr-only sm:not-sr-only">hu</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>F</span>
        <span class="sr-only sm:not-sr-only">ri</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>S</span>
        <span class="sr-only sm:not-sr-only">at</span>
      </div>
      <div class="flex justify-center bg-white dark:bg-gray-800 py-2">
        <span>S</span>
        <span class="sr-only sm:not-sr-only">un</span>
      </div>
    </div>
    <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
      <div
        class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px"
      >
        <div
          v-for="(date, i) in calendarData"
          :key="i"
          :class="
            date.from !== 'current'
              ? 'bg-gray-100 dark:bg-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300'
              : 'bg-white dark:bg-gray-800 dark:text-white px-3 py-2'
          "
          class="relative"
        >
          <time
            :datetime="date.dateStr"
            :class="
              date.isToday
                ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                : ''
            "
          >
            {{ date.day }}
          </time>
          <ol class="mt-2">
            <li>
              <a href="#" class="group flex">
                <p
                  class="flex-auto truncate font-medium text-gray-900 dark:text-white group-hover:text-indigo-600"
                >
                  Design review
                </p>
                <time
                  datetime="2022-01-03T10:00"
                  class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                  >10AM</time
                >
              </a>
            </li>
            <li>
              <a href="#" class="group flex">
                <p
                  class="flex-auto truncate font-medium text-gray-900 dark:text-white group-hover:text-indigo-600"
                >
                  Sales meeting
                </p>
                <time
                  datetime="2022-01-03T14:00"
                  class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                  >2PM</time
                >
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
import type {
  DateEvents,
  DateRange,
  Event,
} from "~/types/intefaces/Calendar.inteface";
import type { DateProp } from "~/types/intefaces/Props.interface";

const props = defineProps({
  date: {
    type: Object as PropType<DateProp>,
  },
});

const calendarData: Ref<DateEvents[]> = ref([]);

function getDateRange(year: number, month: number): DateRange {
  const startDate = new Date(year, month - 1, 1); // Month is zero-based
  const endDate = new Date(year, month, 0); // Get last day of current month
  const startDayOfWeek = startDate.getDay(); // Get the day of the week for the start date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const endDayOfWeek = endDate.getDay();

  const startDateOffset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Calculate offset for the start date
  const endDateOffset = endDayOfWeek === 0 ? 0 : 7 - endDayOfWeek; // Calculate offset for the end date

  // Adjust start date to the beginning of the week
  startDate.setDate(startDate.getDate() - startDateOffset);

  // Adjust end date to the end of the week
  endDate.setDate(endDate.getDate() + endDateOffset);
  return { startDate, endDate };
}

function getCalendarData(year: number, month: number): DateEvents[] {
  const { startDate, endDate } = getDateRange(year, month);
  const calendarData: DateEvents[] = [];

  let currentDate = new Date(startDate);

  // Loop through dates from start date to end date and push them into the calendarData array
  while (currentDate <= endDate) {
    let from = "";

    if (currentDate.getMonth() < month - 1) {
      from = "pre";
    } else if (currentDate.getMonth() > month - 1) {
      from = "next";
    } else {
      from = "current";
    }
    const date = new Date(currentDate);
    const events: Event[] = [];
    calendarData.push({
      from,
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
    currentDate.setDate(currentDate.getDate() + 1); // Increment date by 1 day
  }
  new Date(currentDate);
  return calendarData;
}

function changeMonth(date: DateProp) {
  console.log("changeMonth : ", date);
  calendarData.value = getCalendarData(date.year, date.month + 1);
}

watch(
  () => props.date,
  (newDate: any) => {
    changeMonth(newDate);
  },
  { deep: true, immediate: true }
);
</script>

<style scoped></style>
