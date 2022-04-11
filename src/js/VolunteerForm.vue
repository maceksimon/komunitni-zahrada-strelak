<template>
  <div>
    <form
      name="volunteer"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field-volunteer"
    >
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >First name</label
          >
          <input
            v-model="formData['first-name']"
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Last name</label
          >
          <input
            v-model="formData['last-name']"
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <label
            for="email-address"
            class="block text-sm font-medium text-gray-700"
            >Email address</label
          >
          <input
            v-model="formData['email-address']"
            type="text"
            name="email-address"
            id="email-address"
            autocomplete="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6">
          <label
            for="street-address"
            class="block text-sm font-medium text-gray-700"
            >Street address</label
          >
          <input
            v-model="formData['street-address']"
            type="text"
            name="street-address"
            id="street-address"
            autocomplete="street-address"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
          <label for="city" class="block text-sm font-medium text-gray-700"
            >City</label
          >
          <input
            v-model="formData['city']"
            type="text"
            name="city"
            id="city"
            autocomplete="address-level2"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
          <label for="region" class="block text-sm font-medium text-gray-700"
            >State / Province</label
          >
          <input
            v-model="formData['region']"
            type="text"
            name="region"
            id="region"
            autocomplete="address-level1"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            for="postal-code"
            class="block text-sm font-medium text-gray-700"
            >ZIP / Postal code</label
          >
          <input
            v-model="formData['postal-code']"
            type="text"
            name="postal-code"
            id="postal-code"
            autocomplete="postal-code"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    modelValue: {
      type: Object,
      default: {},
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const formData = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
        emit("change");
      },
    });

    return { formData };
  },
};
</script>
