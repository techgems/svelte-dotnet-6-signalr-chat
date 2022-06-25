<script lang="ts">
    import Overlay from "./Overlay.svelte";

    export let isOpen: Boolean;
</script>

<div
    class="fixed z-10 inset-0 overflow-y-auto {isOpen
        ? 'opacity-100'
        : 'opacity-0'}"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
        />
        <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">&#8203;</span
        >
        <Overlay {isOpen} >
            <slot />
        </Overlay>
    </div>
</div>
