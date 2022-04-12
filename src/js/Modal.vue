<template>
  <!-- Provides access to modal controls -->
  <a
    href="/volunteer"
    class="group block h-full w-full sm:flex-1"
    @click.prevent="openModal('volunteer')"
  >
    <slot name="box1"></slot>
  </a>
  <a
    href="/gardener"
    class="group block h-full w-full sm:flex-1"
    @click.prevent="openModal('gardener')"
  >
    <slot name="box2"></slot>
  </a>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 z-30 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          >
            <!-- Render the modal content -->
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <!-- Checkmark icon displayed on successful submit -->
                  <div
                    v-if="formType === 'submitted'"
                    class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div
                    v-if="formType === 'unsuccessful'"
                    class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <DialogTitle
                    as="h3"
                    class="text-center text-xl font-semibold leading-6 text-primary-900 sm:my-4"
                  >
                    <span v-if="formType === 'volunteer'"
                      >Přihlaš se jako dobrovolník</span
                    >
                    <span v-if="formType === 'gardener'"
                      >Přihlaš se jako zahradník</span
                    >
                    <!-- <span v-if="formType === 'gardener'">Přihlaš se jako dobrovolník</span> -->
                    <span v-if="formType === 'submitted'">Děkujeme!</span>
                    <span v-if="formType === 'unsuccessful'">Chyba</span>
                  </DialogTitle>
                  <!-- First form content -->
                  <VolunteerForm
                    v-if="formType === 'volunteer'"
                    v-model="forms.volunteer"
                  ></VolunteerForm>
                  <!-- GardenerForm -->
                  <GardenerForm
                    v-if="formType === 'gardener'"
                    v-model="forms.gardener"
                  ></GardenerForm>
                  <!-- Thank you -->
                  <div v-if="formType === 'submitted'" class="prose prose-lg">
                    <p>
                      Obdrželi jsme vaši registraci a brzy vám ji potvrdíme
                      emailem.
                    </p>
                  </div>
                  <div
                    v-if="formType === 'unsuccessful'"
                    class="prose prose-lg"
                  >
                    <p>
                      Odeslání formuláře se nepovedlo. Prosím, zkuste to
                      později, nebo nám napište na adresu
                      info@zahradastrelak.cz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-primary-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                v-if="formType === 'volunteer' || formType === 'gardener'"
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                @click.prevent="handleSubmit"
              >
                Odeslat
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="open = false"
                ref="cancelButtonRef"
              >
                Zpět
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

// initialize supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLIC_KEY
);

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import VolunteerForm from "./VolunteerForm";
import GardenerForm from "./GardenerForm";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    VolunteerForm,
    GardenerForm,
  },
  setup() {
    const open = ref(false);
    const formType = ref("volunteer");
    const formVolunteerDefault = {
      "full-name": "",
      "email-address": "",
      "phone-number": "",
      "city-part": "",
      "soul-plant": "",
      newsletter: true,
      volunteer: true,
      "notes-and-questions": "",
    };
    const formGardenerDefault = {
      "full-name": "",
      "email-address": "",
      "phone-number": "",
      "city-part": "",
      "flower-beds": "",
      "payment-tarif": "",
      "soul-plant": "",
      newsletter: true,
      volunteer: false,
      "notes-and-questions": "",
    };

    const forms = {
      volunteer: reactive(formVolunteerDefault),
      gardener: reactive(formGardenerDefault),
    };

    function openModal(role) {
      open.value = true;
      formType.value = role;
    }

    function encodeData(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    }

    async function handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      const response = await axios.post(
        "/",
        encodeData({
          "form-name": formType.value,
          ...forms[formType.value],
        }),
        axiosConfig
      );
      if (response.status === 200) {
        // Save data to Supabase
        const { data, error } = await supabase
          .from("Members")
          .insert([forms[formType.value]]);

        // Reset form by looping over properties
        Object.keys(forms[formType.value]).forEach((key) => {
          forms[formType.value][key] = formVolunteerDefault[key];
        });
        // Display confirmation
        formType.value = "submitted";
      } else {
        formType.value = "unsuccessful";
      }
    }

    return { open, forms, formType, openModal, handleSubmit };
  },
};
</script>
