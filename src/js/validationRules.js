import { required, email, minLength, helpers } from "@vuelidate/validators";

export const rules = {
  volunteer: {
    "full-name": {
      required: helpers.withMessage("Povinné pole", required),
      minLength: helpers.withMessage(
        "Musí být delší než jedno písmeno",
        minLength(1)
      ),
    },
    "email-address": {
      required: helpers.withMessage("Povinné pole", required),
      email: helpers.withMessage("Neplatný e-mail", email),
    },
    "phone-number": {
      minLength: helpers.withMessage("Nejméně 9 znaků", minLength(9)),
    },
  },
  gardener: {
    "full-name": {
      required: helpers.withMessage("Povinné pole", required),
      minLength: minLength(1),
    },
    "email-address": {
      required: helpers.withMessage("Povinné pole", required),
      email: helpers.withMessage("Neplatný e-mail", email),
    },
    "phone-number": {
      minLength: helpers.withMessage("Nejméně 9 znaků", minLength(9)),
    },
    "flower-beds": {
      required: helpers.withMessage("Povinné pole", required),
    },
    "payment-tarif": {
      required: helpers.withMessage("Povinné pole", required),
    },
  },
  newsletter: {
    required: helpers.withMessage("Povinné pole", required),
    email: helpers.withMessage("Neplatný e-mail", email),
  },
};
