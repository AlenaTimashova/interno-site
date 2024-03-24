<template>
  <ul class="pagination container">
    <li class="pagination-item">
      <button class="pagination-btn">1</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-btn">2</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-btn">3</button>
    </li>
    <li>
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path
          d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <ul class="pagination container">
    <li class="pagination-item">
      <button class="pagination-btn" type="button">First</button>
    </li>

    <li class="pagination-item">
      <button class="pagination-btn" type="button">Prev</button>
    </li>

    <li>
      <button>1</button>
    </li>
    <li>
      <button>2</button>
    </li>
    <li>
      <button>3</button>
    </li>

    <li class="pagination-item">
      <button class="pagination-btn" type="button">Next</button>
    </li>

    <li class="pagination-item">
      <button class="pagination-btn">Last</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination",
  template: "#pagination",
  //   props: {
  //     maxVisibleButtons: {
  //       type: Number,
  //       required: false,
  //       default: 3,
  //     },
  //     totalPages: {
  //       type: Number,
  //       required: true,
  //     },
  //     total: {
  //       type: Number,
  //       required: true,
  //     },
  //     perPage: {
  //       type: Number,
  //       required: true,
  //     },
  //     currentPage: {
  //       type: Number,
  //       required: true,
  //     },
  //   },
  //   computed: {
  //     startPage() {
  //       if (this.currentPage === 1) {
  //         return 1;
  //       }

  //       if (this.currentPage === this.totalPages) {
  //         return this.totalPages - this.maxVisibleButtons + 1;
  //       }

  //       return this.currentPage - 1;
  //     },
  //     endPage() {
  //       return Math.min(
  //         this.startPage + this.maxVisibleButtons - 1,
  //         this.totalPages
  //       );
  //     },
  //     pages() {
  //       const range = [];

  //       for (let i = this.startPage; i <= this.endPage; i += 1) {
  //         range.push({
  //           name: i,
  //           isDisabled: i === this.currentPage,
  //         });
  //       }

  //       return range;
  //     },
  //     isInFirstPage() {
  //       return this.currentPage === 1;
  //     },
  //     isInLastPage() {
  //       return this.currentPage === this.totalPages;
  //     },
  //   },
  //   methods: {
  //     onClickFirstPage() {
  //       this.$emit("pagechanged", 1);
  //     },
  //     onClickPreviousPage() {
  //       this.$emit("pagechanged", this.currentPage - 1);
  //     },
  //     onClickPage(page) {
  //       this.$emit("pagechanged", page);
  //     },
  //     onClickNextPage() {
  //       this.$emit("pagechanged", this.currentPage + 1);
  //     },
  //     onClickLastPage() {
  //       this.$emit("pagechanged", this.totalPages);
  //     },
  //     isPageActive(page) {
  //       return this.currentPage === page;
  //     },
  //   },
};
</script>

<style lang="sass" scoped></style> -->
