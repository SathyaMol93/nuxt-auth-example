<template>
  <div class="lg:flex lg:h-full lg:flex-col w-full h-full">
    <header
      class="flex 0 items-center justify-between border-b border-gray-200 py-4"
    >
      <h1
        class="flex flex-col justify-center text-base h-full font-semibold leading-6 text-gray-700 dark:text-white w-full"
      >
        <time datetime="2022-01"> {{ calendarDateString }} </time>
        <p v-if="selectedCalendarView.id < 3" class="mt-1 text-sm">
          {{ calendarDOWString }}
        </p>
      </h1>
      <div class="flex items-center gap-4 h-full w-full justify-end">
        <input
          :v-model="currentDate"
          v-if="selectedCalendarView.id === 1"
          class="hidden md:block min-h-full min-w-20 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white px-3"
          type="date"
          @change="datePick($event.target.value)"
        />
        <div
          class="min-w-20 flex items-center justify-center rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-sm px-3 py-2 gap-4 border dark:border-gray-700 h-full"
        >
          <button @click="selectView(Direction.Previous)">
            <Icon
              name="heroicons:chevron-left"
              class="w-6 h-6 hover:text-blue-700 hover:w-8 hover:h-8 duration-200"
            />
          </button>
          <span class="text-sm font-semibold"> {{ selectorLable }} </span>
          <button @click="selectView(Direction.Next)">
            <Icon
              name="heroicons:chevron-right"
              class="w-6 h-6 hover:text-blue-700 hover:w-8 hover:h-8 duration-200"
            />
          </button>
        </div>
        <div class="flex items-center h-full gap-4">
          <Listbox v-model="selectedCalendarView" class="h-full w-40">
            <div class="relative h-full">
              <ListboxButton
                class="relative w-full h-full cursor-default rounded-md text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-left px-3 py-2 pr-10 focus:outline-none border dark:border-gray-700"
              >
                <span class="block truncate">{{
                  selectedCalendarView.name
                }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon
                    name="heroicons:chevron-down"
                    class="w-5 h-5 hover:text-blue-700"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full shadow-md overflow-auto rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none text-sm font-medium z-40"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="view in calendarViews"
                    :key="view.id"
                    :value="view"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-blue-700 text-white ' : '',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ view.name }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <Icon
                          name="heroicons:x-mark"
                          class="w-5 h-5 hover:text-gray-700"
                        />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
          <button
            type="button"
            class="flex h-full items-center rounded-md gap-2 bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-200"
          >
            <Icon name="heroicons:plus" class="w-5 h-5 hover:text-blue-700" />
            <span>Add Event</span>
          </button>
        </div>
      </div>
    </header>
    <CalendarDay v-if="selectedCalendarView.id === 1" />
    <CalendarWeek
      :date="{
        year: selectedYear,
        month: selectedMonth,
        week: selectedWeek,
        date: selectedDate,
      }"
      v-if="selectedCalendarView.id === 2"
    />
    <CalendarMonth
      :date="{
        year: selectedYear,
        month: selectedMonth,
        week: selectedWeek,
        date: selectedDate,
      }"
      v-if="selectedCalendarView.id === 3"
    />
    <CalendarYear v-if="selectedCalendarView.id === 4" />
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

interface CalendarView {
  id: number;
  name: string;
}

enum Direction {
  Previous,
  Next,
}

const calendarViews: CalendarView[] = [
  { id: 1, name: "Day View" },
  { id: 2, name: "Week View" },
  { id: 3, name: "Month View" },
  // { id: 4, name: "Year View" },
];

const selectorLable: Ref<String> = ref("");

const currentDate: Ref<Date> = ref(new Date());

const selectedDate: Ref<number> = ref(0);
const selectedWeek: Ref<number> = ref(0);
const selectedMonth: Ref<number> = ref(0);
const selectedYear: Ref<number> = ref(0);

const selectedCalendarView: Ref<CalendarView> = ref(calendarViews[2]);

const calendarDateString: Ref<String> = ref("");
const calendarDOWString: Ref<String> = ref("");

/**
 * Selects a view based on the given direction.
 *
 * @param {Direction} direction - the direction of the view change
 * @return {void}
 */
function selectView(direction: Direction) {
  const viewId = selectedCalendarView.value.id;
  const current = currentDate.value;

  switch (viewId) {
    case 1:
      changeDate(direction, current);
      break;
    case 2:
      changeWeek(direction, current);
      break;
    case 3:
      changeMonth(direction, current);
      break;
    case 4:
      changeYear(direction, current);
      break;
  }
}

function datePick(date: any) {
  const newDate = new Date(date);
  currentDate.value = newDate;
  updateValues(newDate);
  selectorLable.value = currentDate.value.toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  calendarDateString.value = currentDate.value.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  calendarDOWString.value = currentDate.value.toLocaleString("en-US", {
    weekday: "long",
  });
}

function changeDate(direction: Direction, date: Date) {
  const newDate = new Date(date);
  newDate.setDate(
    newDate.getDate() + (direction === Direction.Previous ? -1 : 1)
  );
  currentDate.value = newDate;
  updateValues(newDate);
  selectorLable.value = currentDate.value.toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  calendarDateString.value = currentDate.value.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  calendarDOWString.value = currentDate.value.toLocaleString("en-US", {
    weekday: "long",
  });
}

/**
 * Changes the week of the given date based on the specified direction.
 *
 * @param {Direction} direction - the direction to change the week (Previous or Next)
 * @param {Date} date - the date to modify
 * @return {void}
 */
function changeWeek(direction: Direction, date: Date) {
  const daysInWeek = 7;
  const dayOfWeek = date.getDay();
  const newDate = new Date(date);
  const daysToModify =
    direction === Direction.Previous
      ? -daysInWeek + dayOfWeek
      : daysInWeek - dayOfWeek;
  newDate.setDate(date.getDate() + daysToModify);
  currentDate.value = newDate;
  updateValues(newDate);
  selectorLable.value = `Week ${getWeekNumber(currentDate.value)}`;
  calendarDateString.value =
    currentDate.value.toLocaleString("en-US", {
      year: "numeric",
    }) + ` - Week ${getWeekNumber(currentDate.value)}`;
  calendarDOWString.value = currentDate.value.toLocaleString("en-US", {
    month: "long",
  });
}

/**
 * Function to change the month of a given date based on the provided direction.
 *
 * @param {Direction} direction - the direction in which to change the month
 * @param {Date} date - the date to be modified
 * @return {void}
 */
function changeMonth(direction: Direction, date: Date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + (direction === Direction.Next ? 1 : -1));
  currentDate.value = newDate;
  updateValues(newDate);
  selectorLable.value = currentDate.value.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  calendarDateString.value = currentDate.value.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Updates the year of the given date based on the specified direction.
 *
 * @param {Direction} direction - the direction in which to change the year (Next or Previous)
 * @param {Date} date - the date object whose year will be updated
 * @return {void}
 */
function changeYear(direction: Direction, date: Date) {
  const newDate = new Date(date);
  newDate.setFullYear(
    newDate.getFullYear() + (direction === Direction.Next ? 1 : -1)
  );
  currentDate.value = newDate;
  updateValues(newDate);
  selectorLable.value = currentDate.value.toLocaleString("en-US", {
    year: "numeric",
  });
  calendarDateString.value = currentDate.value.toLocaleString("en-US", {
    year: "numeric",
  });
}

/**
 * Get the week number for a given date.
 *
 * @param {Date} date - the input date
 * @return {number} the week number
 */
function getWeekNumber(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const dayDiff =
    (date.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24);
  return 1 + Math.ceil(dayDiff / 7);
}

watch(
  selectedCalendarView,
  (newView: any, oldView: any) => {
    switch (newView.id) {
      case 1:
        selectorLable.value = currentDate.value.toLocaleString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        calendarDateString.value = currentDate.value.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        calendarDOWString.value = currentDate.value.toLocaleString("en-US", {
          weekday: "long",
        });
        break;
      case 2:
        selectorLable.value = `Week ${getWeekNumber(currentDate.value)}`;
        calendarDateString.value =
          currentDate.value.toLocaleString("en-US", {
            year: "numeric",
          }) + ` - Week ${getWeekNumber(currentDate.value)}`;
        calendarDOWString.value = currentDate.value.toLocaleString("en-US", {
          month: "long",
        });
        break;
      case 3:
        selectorLable.value = currentDate.value.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
        calendarDateString.value = currentDate.value.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        });
        break;
      case 4:
        selectorLable.value = currentDate.value.toLocaleString("en-US", {
          year: "numeric",
        });
        calendarDateString.value = currentDate.value.toLocaleString("en-US", {
          year: "numeric",
        });
        break;
    }
    updateValues(currentDate.value);
  },
  { immediate: true, deep: true }
);

function updateValues(date: Date) {
  selectedDate.value = date.getDate();
  selectedWeek.value = getWeekNumber(date);
  selectedMonth.value = date.getMonth();
  selectedYear.value = date.getFullYear();
}
</script>

<style scoped></style>
