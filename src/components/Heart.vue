<template>
  <div class="heart">
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="ui-e2"
      style="color: #001a34"
    >
      <path
        d="M17.282 1C21.34 1 23.999 4.147 24 8.5c0 4.287-3.168 8.376-10.8 14.1l-1.2.9-1.2-.9C3.168 16.876 0 12.787 0 8.5 0 4.147 2.659 1 6.718 1 8.734 1 10.64 1.806 12 3.177A7.455 7.455 0 0117.282 1z"
        fill="#fff"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 8.5C23 4.8 20.861 2 17.282 2 15.115 2 13.136 3.069 12 4.742 10.864 3.069 8.884 2 6.718 2 3.138 2 1 4.8 1 8.5c0 3.817 2.886 7.664 10.4 13.3l.6.45.6-.45C20.115 16.164 23 12.316 23 8.5zM17.282 4C19.622 4 21 5.805 21 8.5c0 2.93-2.398 6.211-9 11.246C5.398 14.712 3 11.43 3 8.5 3 5.805 4.379 4 6.718 4 9.03 4 11 5.743 11 8h2c0-2.257 1.969-4 4.282-4z"
        :fill="heartColor"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    heartColor() {
      return this.isActive ? "red" : "#001A34";
    },
  },
};
</script>

<style scoped>
.heart {
  cursor: pointer;
  margin-left: 10px;
}
</style>
