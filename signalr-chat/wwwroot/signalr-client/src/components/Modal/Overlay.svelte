<script lang="ts">
    export let isOpen: Boolean;
</script>

<div
    class="{isOpen
        ? 'opacity-100 translate-y-0 sm:scale-100'
        : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}  relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
>
    <slot />
</div>
