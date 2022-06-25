<script lang="ts">
    import { colors } from "../stores/ColorsTakenStore";

    export let value = '';

    function setColor(newColor: string) {
        $colors.forEach(c => {
            if(!c.isTaken && newColor === c.label) {
                value = newColor;
            }
        });
    }

</script>

<div class="flex justify-center">
    {#each $colors as color}
        <div style={`background-color: ${color.backgroundColor}`} class="w-8 h-8 rounded-md mx-1" on:click={() => setColor(color.label)}>
            {#if value == color.label}
                <span class="flex items-center justify-center cursor-pointer">
                    <svg
                        style="fill: currentColor;"
                        class="mt-1 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                            d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                        /></svg
                    >
                </span>
            {:else if color.isTaken}
                <span class="cursor-not-allowed flex items-center justify-center cursor-pointer">
                    <svg
                    style="fill: currentColor;"
                    class="mt-1 h-5 w-5 text-stone-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                        d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                    /></svg
                >
                </span>
            {/if}
        </div>
    {/each}
</div>