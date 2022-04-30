<template>
  <div class="m-[50px] h-[100vh]">
    <va-alert :color="type" :title="title" :outline="outline" center class="mb-4 top-[30vh]">
      {{message}}
    </va-alert>
  </div>
</template>

<script>
export default {
    props:['type', 'title', 'message', 'outline', 'origin'], // type válidos success, info, danger, warning
    components : {},
    setup() {
    },
}
</script>