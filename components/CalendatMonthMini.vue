<template>
  <div
    class="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block"
  >
    <div class="flex items-center text-center text-gray-900">
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span class="sr-only">Previous month</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="flex-auto text-sm font-semibold">January 2022</div>
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span class="sr-only">Next month</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500"
    >
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>
    <div
      class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
    >
      <!--
            Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
            Is current month, include: "bg-white"
            Is not current month, include: "bg-gray-50"
            Is selected or is today, include: "font-semibold"
            Is selected, include: "text-white"
            Is not selected, is not today, and is current month, include: "text-gray-900"
            Is not selected, is not today, and is not current month, include: "text-gray-400"
            Is today and is not selected, include: "text-indigo-600"
  
            Top left day, include: "rounded-tl-lg"
            Top right day, include: "rounded-tr-lg"
            Bottom left day, include: "rounded-bl-lg"
            Bottom right day, include: "rounded-br-lg"
          -->
      <button
        type="button"
        class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <!--
              Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              Is selected and is today, include: "bg-indigo-600"
              Is selected and is not today, include: "bg-gray-900"
            -->
        <time
          datetime="2021-12-27"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >27</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2021-12-28"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >28</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2021-12-29"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >29</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2021-12-30"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >30</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2021-12-31"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >31</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-01"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >1</time
        >
      </button>
      <button
        type="button"
        class="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-02"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >2</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-03"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >3</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-04"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >4</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-05"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >5</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-06"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >6</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-07"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >7</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-08"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >8</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-09"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >9</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-10"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >10</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-11"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >11</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-12"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >12</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-13"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >13</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-14"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >14</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-15"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >15</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-16"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >16</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-17"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >17</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-18"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >18</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-19"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >19</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-20"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >20</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-21"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >21</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-22"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white"
          >22</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-23"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >23</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-24"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >24</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-25"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >25</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-26"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >26</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-27"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >27</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-28"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >28</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-29"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >29</time
        >
      </button>
      <button
        type="button"
        class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-30"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >30</time
        >
      </button>
      <button
        type="button"
        class="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-01-31"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >31</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-01"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >1</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-02"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >2</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-03"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >3</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-04"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >4</time
        >
      </button>
      <button
        type="button"
        class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-05"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >5</time
        >
      </button>
      <button
        type="button"
        class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
      >
        <time
          datetime="2022-02-06"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
          >6</time
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DateEvents } from "~/types/intefaces/Calendar.inteface";
import type { DateProp } from "~/types/intefaces/Props.interface";

const props = defineProps({
  date: {
    type: Object as PropType<DateProp>,
  },
});

enum Direction {
  Previous,
  Next,
}

const selectedMonth: Ref<number> = ref(0);
const selectedDate: Ref<number> = ref(0);
const currentDate: Ref<Date> = ref(new Date());
const selectorLable: Ref<String> = ref("");
const calendarData: Ref<DateEvents[]> = ref([]);

function changeDate(direction: Direction, date: Date) {
  const newDate = new Date(date);
  newDate.setDate(
    newDate.getDate() + (direction === Direction.Previous ? -1 : 1)
  );
  currentDate.value = newDate;
}

function changeMonth(direction: Direction, date: Date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + (direction === Direction.Next ? 1 : -1));
  currentDate.value = newDate;
  selectorLable.value = currentDate.value.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

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
