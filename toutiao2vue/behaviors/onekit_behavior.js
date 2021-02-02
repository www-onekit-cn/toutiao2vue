/* eslint-disable vue/custom-event-name-casing */
export default {
  props: {
    "onekit-id": { type: String, default: `id${new Date().getTime()}` },
    "onekit-class": { type: String, default: "" },
    "onekit-style": { type: String, default: "" }
  },
  methods: {
  }
}

